class Producto {
    constructor(articulo, cantidad,talle) {
      this.articulo = articulo;
      this.cantidad  = cantidad;
      this.talle = talle;
  }
reducirStock(nuevoStock) {
  this.stock += nuevoStock;
}
}

let productos = [];


let formProducto = document.getElementById('formProducto')
let botonProductos = document.getElementById('botonProductos')
let divProductos = document.getElementById('divProductos')
let mensaje = document.getElementById('mensaje')

formProducto.addEventListener('submit', (e) => {
  e.preventDefault()

  let datForm = new FormData(e.target)
  let nuevoProducto = new Producto(datForm.get("articulo"), datForm.get("cantidad"),datForm.get("talle"))
  productos.push(nuevoProducto)
  localStorage.setItem('keyProductos', JSON.stringify(productos))
  formProducto.reset()
})

botonProductos.addEventListener('click', () => {
  let productosEnStorage = JSON.parse(localStorage.getItem('keyProductos'))
  if(divProductos.children.length == 0) {
      productosEnStorage.forEach((productoEnArray, indice) => {
          divProductos.innerHTML += `
              <div class="card" id="producto${indice}" style="width: 10rem;">
                  <div class="card-body">
                      <h5 class="card-title">${productoEnArray.articulo}</h5>
                      <p class="card-text">${productoEnArray.cantidad}</p>
                      <p class="card-text">$${productoEnArray.talle}</p>
                      <button type="button" class="btn btn-danger" id="boton${indice}">Eliminar</button>
                  </div>
              </div>
          `
      })
  } else {
      mensaje.innerText = "Ya se encuentran cargados los artículos"
  }
})