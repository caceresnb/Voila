const listaProductos = document.querySelector('#lista-productos');
let articulosCarrito = [];


document.addEventListener('DOMContentLoaded', e => {
    fetch("https://raw.githubusercontent.com/caceresnb/Voila/main/js/stock.json")
    .then(o => o.json()) // promesa1 nos devuelve un response y lo covertimos a JSON
    .then(jsonObject => renderizarStock(jsonObject)) // utilizamos la data (el JSON)

});

function renderizarStock(stock) {

  const listaProductos = document.getElementById('lista-productos');
  const cantColumn = 2;


  //Filas
  for (let i = 0; i < stock.length / cantColumn; i++) {
    let fila = "";

    //Columnas
    let indiceInicial = i * cantColumn;
    let htmlStock = ""
// <button type="button" class="btn btn-outline-secondary">Secondary</button>
    for (let j = indiceInicial; j < stock.length && j < indiceInicial + cantColumn; j++) {


      htmlStock =  `
        <div class="productos-item card">
            <img src="img/primerStock/${stock[j].img}" class="card-img-top productos-img" alt="...">
            <div class="productos-text card-body">
                <h2>${stock[j].titulo}</h2>
                <span>$${stock[j].precioReal}</span> <h4>$${stock[j].precioRebajado}</h4>
            <p>${stock[j].dataId}</p>            
            <a href="#" class="btn btn-outline-secondary agregar-carrito" data-id=${stock[j].id}>Agregar al carrito</a>
            </div>
        </div>`

      fila += htmlStock;

    } //Fin FOR Columnas

    let htmlRow = `<div class="row"> ${fila} </div>`

    listaProductos.innerHTML += htmlRow;

  } // Fin FOR Filas

}

cargarEventListeners();
function cargarEventListeners() {
    // Agregamos un producto presionando "Agregar al Carrito"
    listaProductos.addEventListener('click', agregarProducto);
}

function agregarProducto(e) {
  e.preventDefault();
  articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
  // console.log(articulosCarrito);
  if(e.target.classList.contains('agregar-carrito')) {
    const productoSelecionado = e.target.parentElement.parentElement;
    leerDatosProducto(productoSelecionado);
  }
}

function leerDatosProducto(producto) {
  // console.log(producto);

  // Se crea un objeto con el contenido del producto actual
  const infoProducto = {
      imagen: producto.querySelector('img').src,
      titulo: producto.querySelector('h2').textContent,
      precio: Number(producto.querySelector('h4').textContent.slice(1)),
      id: producto.querySelector('a').getAttribute('data-id'),
      cantidad: 1,
      total: 0
  }

  // console.log(infoProducto);
  infoProducto.total = infoProducto.precio * infoProducto.cantidad;

  // Revisa si un elemento ya existe en el arreglo articulosCarrito
  const existe = articulosCarrito.some( producto => producto.id === infoProducto.id );
  if (existe) {
      // Actualizamos la cantidad
      const productos = articulosCarrito.map( producto => {
          if (producto.id === infoProducto.id) {
              producto.cantidad++;
              producto.total = producto.cantidad * producto.precio;
              return producto; // retorna el objeto actualizado (incrementamos cantidad)
          } else {
              return producto; // retorna los objetos que no son los duplicados (los que no se encuentran aun agregados al carrito)
          }
      });
      articulosCarrito = [...productos];
  } else {
      // Agrega el producto al arreglo del carrito
      articulosCarrito = [...articulosCarrito, infoProducto];
  }

  console.log(articulosCarrito);

  // Agregar el carrito de compras al storage
  sincronizarStorage();
}

function sincronizarStorage() {
  localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}