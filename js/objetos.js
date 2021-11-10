alert ("Ingresa los códigos de artículos a cotizar/agregar, cuando quieras finalizar escribe por favor ESC.");
let articulo="";
let cantidad="";

class Producto{
    constructor(articulo, cantidad) {
        this.articulo = articulo;
        this.cantidad   = cantidad;
    }
    pedirProducto() {
       articulo = prompt("Ingrese por favor el numero de articulo");
    }
    pedirCantidad (){
        cantidad= prompt ("Cuantas unidades quieres?");
    }
    informarYgrabar (){
        articulo;
        cantidad;
        let precioProducto=2200;
        let subtotal=(precioProducto*cantidad);
        console.log ("Producto " + articulo + " : " + cantidad + " unidades");
        alert ("El subtotal es $ "+ subtotal);
    }
}
const pedido1 = new Producto(articulo, cantidad);
pedido1.pedirProducto();
pedido1.pedirCantidad();
pedido1.informarYgrabar()
