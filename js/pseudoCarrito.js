let bienvenida= prompt ("Ingresa los códigos de artículos a cotizar/agregar, cuando quieras finalizar escribe por favor ESC.");
const producto = prompt("Ingrese por favor el numero de articulo");
//Repetimos hasta que se ingresa "ESC"//
while(producto != "ESC" ){
   switch (producto) {
       case "001":
            alert("Está disponible, su valor es $2200.");
            const cantidad= prompt ("Cuantas unidades quieres?");
            if (cantidad <= 10){
                alert("El subtotal es de $" + (2200*cantidad));
            }
            else {
                alert ("Lo sentimos, actualmente no tenemos tanto stock de ese articulo disponible.");
            }
        producto = prompt("Ingrese por favor el numero de articulo");
        break;
        case "002":
            alert("Está disponible, su valor es $2500.");
            cantidad= prompt ("Cuantas unidades quieres?");
            if (cantidad <= 5){
                alert("El subtotal es de $" + (2200*cantidad));
            }
            else {
                alert ("Lo sentimos, actualmente no tenemos tanto stock de ese articulo disponible.");
            }
            console.log (producto + "-" + cantidad);
            producto = prompt("Ingrese por favor el numero de articulo");
        break;
        case "003":
            alert("Está disponible, su valor es $2200.");
            cantidad= prompt ("Cuantas unidades quieres?");
            if (cantidad <= 8){
                alert("El subtotal es de $" + (2200*cantidad));
            }
            else {
                alert ("Lo sentimos, actualmente no tenemos tanto stock de ese articulo disponible.");
            }
            console.log (producto + "-" + cantidad);
            producto = prompt("Ingrese por favor el numero de articulo");
        break;
       default:
           alert("Lo sentimos, ese artículo no se encuentra disponible.");
           producto = prompt("Ingrese por favor el numero de articulo");
           break;
   }
    alert ("Gracias por realizar tu pedido, un representante se comunicará a la brevedad.")   
}


