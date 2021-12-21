class Producto {
    constructor(articulo, cantidad,talle,color) {
      this.articulo = articulo;
      this.cantidad  = cantidad;
      this.talle = talle;
      this.color = color;
  }
reducirStock(nuevoStock) {
  this.stock += nuevoStock;
}
}

let productos = [];



$(document).ready(function(){
    $("#boton1").click (()=>{
        $('#formProducto').submit((e) => {
            e.preventDefault()
    
            let voilaForm = new Producto($('#articulo').val(), $('#cantidad').val(), $('#talle').val(), $('#color').val())
            productos.push(voilaForm)
            localStorage.setItem('productos', JSON.stringify(productos))
            $('#formProducto').trigger('reset')
            
        })

    })
    $("#botonProductos").click(()=>{
        let arrayProductos = JSON.parse(localStorage.getItem('productos'))

        arrayProductos.forEach((productosEnArray, indice) => {
            
            $('#divProductos').append( `
                <div class="card border-success mb-3" id="auto${indice}" style="max-width: 20rem;">
                    <div class="card-header"> ${productosEnArray.articulo} ${productosEnArray.talle}</div>
                        <div class="card-body">
                            <p class="card-text">${productosEnArray.cantidad}</p>
                            <p class="card-text">${productosEnArray.color}</p>
                            <button class = "btn btn-warning" id="boton${indice}">Eliminar</button>
                    </div>
                </div>
            `)
        })
    })
    $('#tituloChango').animate({
        "font-size": "60px"
    }).taggle(5000).delay(3000).finish(8000);
})
