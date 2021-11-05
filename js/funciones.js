
let bienvenida= prompt ("Ingresa los códigos de artículos a cotizar/agregar, cuando quieras finalizar escribe por favor ESC.");
const producto = prompt("Ingrese por favor el numero de articulo");
const cantidad= prompt ("Cuantas unidades quieres?");
const precio=0;
const contador =0;
let totalGasto=
function agregarCarrito(producto,cantidad) {
    console.log (producto + "-" + cantidad);
}
function subtotal (cantidad,precio){
    alert("El subtotal es de $" + (precio*cantidad));
}
function total (precio){
    return subtotal+precio;
}


//Repetimos hasta que se ingresa "ESC"//
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

