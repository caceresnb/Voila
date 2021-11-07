alert ("Ingresa los códigos de artículos a cotizar/agregar, cuando quieras finalizar escribe por favor ESC.");
let producto="";
let cantidad="";

//funcion de ingreso de producto y cantidad y registro en consola para el carrito//
function pedirProducto() {
    producto = prompt("Ingrese por favor el numero de articulo");
}

function pedirCantidad (){
    cantidad= prompt ("Cuantas unidades quieres?");
}
function informarYgrabar (producto,cantidad){
    cantidad;
    producto;
    let precioProducto=2200;
    let subtotal=(precioProducto*cantidad);
    console.log ("Producto " + producto + " : " + cantidad + " unidades.");
    alert ("El subtotal es $ "+ subtotal);
}
pedirProducto();
pedirCantidad();
informarYgrabar(producto,cantidad);


