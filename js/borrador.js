
/* PRUEBA 2 con una funcion que continue
function continuar (){
    producto;
    cantidad;
    while (producto=!"esc"){
        pedirProducto();
        pedirCantidad();
        informarYgrabar(producto,cantidad);
    }
}
continuar();

*/

/*PRUEBA 1

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

while (producto="") {
    switch (producto) {
        case "001":
            pedirCantidad();
            if (cantidad<=10) {
                informarYgrabar(producto,cantidad);
                }
            else {
                alert("Lo sentimos no tenemos ese stock disponible.")
            }
            contador++;
            break;
        case "002":
            pedirCantidad();
            if (cantidad<=10) {
                informarYgrabar(producto,cantidad);
                }
            else {
                alert("Lo sentimos no tenemos ese stock disponible.")
            }
            break;
        default:
            break;
    }
}

*/


function multiplicar(precio,cantidad){
    subtotal=precio*cantidad;
    alert(subtotal)
}

total(precio);
multiplicar(precio,cantidad);
function subtotal(){
    alert("El subtotal es de $" + (2200*cantidad));
}

function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(10, 5, "*"));



/*Repetimos hasta que se ingresa "ESC"
while(producto != "ESC" ){
   switch (producto) {
       case "001":
           precio= 2200;
            if (cantidad <= 10){
                agregarCarrito (producto,cantidad);
                contador++;
                subtotal(precio*cantidad);
            }
            else {
                alert ("Lo sentimos, actualmente no tenemos tanto stock de ese articulo disponible.");
            }
            producto = prompt("Ingrese por favor el numero de articulo");
            cantidad= prompt ("Cuantas unidades quieres?");
        break;
        case "002":
            precio=2500;
            if (cantidad <= 5){
                agregarCarrito (producto,cantidad);
                contador++;
                subtotal(precio*cantidad);
            }
            else {
                alert ("Lo sentimos, actualmente no tenemos tanto stock de ese articulo disponible.");
            }
            producto = prompt("Ingrese por favor el numero de articulo");
            cantidad= prompt ("Cuantas unidades quieres?");
        break;
       default:
           alert("Lo sentimos, ese artículo no se encuentra disponible.");
           producto = prompt("Ingrese por favor el numero de articulo");
        cantidad= prompt ("Cuantas unidades quieres?");
           break;
   }
    alert ("Gracias por realizar tu pedido, un representante se comunicará a la brevedad.")   
}
total();

