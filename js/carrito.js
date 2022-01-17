const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {

  // Muestra los productos de Local Storage
  document.addEventListener('DOMContentLoaded', () => {
    articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carritoHTML();
  })

  // Elimina productos del carrito
  carrito.addEventListener('click', eliminarProducto);

  // Vaciar el carrito
  vaciarCarritoBtn.addEventListener('click', () => {

    articulosCarrito = []; // reseteamos el arreglo

    limpiarHTML(); // Eliminamos todo el  HTML

    sincronizarStorage();
  });
}

// Muestra el Carrito de compras en el HTML
function carritoHTML() {

  // Limpiar el HTML
  limpiarHTML();

  // Recorre el carrito y genera el HTML dentro de la tabla
  articulosCarrito.forEach( producto => {
      const { imagen, titulo, precio, cantidad, total, id } = producto;
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>
              <img src="${imagen}" width="100">
          </td>
          <td>${titulo}</td>
          <td>$${precio}</td>
          <td>${cantidad}</td>
          <td>$${total}</td>
          <td>
              <a href="#" class="borrar-producto" data-id="${id}"> X </a>
          </td>
      `;

      // Agregamos el HTML del carrito en el tbody
      contenedorCarrito.appendChild(row);
  });

  // Agregar el carrito de compras al storage
  sincronizarStorage();

}

function sincronizarStorage() {
  localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

// Elimina un producto del carrito
function eliminarProducto(e) {
  if (e.target.classList.contains('borrar-producto')) {
      const productoId = e.target.getAttribute('data-id');

      // Elimina del arreglo de articulosCarrito por el data-id
      articulosCarrito = articulosCarrito.filter( producto => producto.id !== productoId);
      console.log(articulosCarrito); // Muestra el arreglo actualizado. Sin el producto que fue eliminado
      carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
  }
}

// Elimina los productos del tbody
function limpiarHTML() {
  while(contenedorCarrito.firstChild) {
      contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}