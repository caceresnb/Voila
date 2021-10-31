//pedido nombre//
let nombreIngresado = prompt ("Hola! Cuál es tu nombre?")
let saludo = "Bienvenid@ a Voilá " + nombreIngresado + "" + "!"
if(nombreIngresado == ""){
    alert("Por favor ingresa tu nombre."); 
}else{
    alert(saludo); 
}
console.log (nombreIngresado)
//pedido de edad//
let edadIngresada = prompt ("Por favor dinos tu año de nacimiento");
let calculoEdad= parseInt(2021 - edadIngresada);
let respuesta = nombreIngresado +  " tienes " + calculoEdad;
console.log (calculoEdad)
if (calculoEdad < 18){
    alert(nombreIngresado + " debes ser mayor de edad para registrarte,lo sentimos.")
}
else {
    //pregunta por si es cliente o no//
    let clientePregunta= prompt (nombreIngresado + " ya eres cliente?")
    if ((clientePregunta=="si") || (clientePregunta=="SI")) {
        console.log (clientePregunta)
        alert (nombreIngresado + " ya puedes realizar tu pedido online!")
    }
    else if ((clientePregunta=="no") || (clientePregunta=="NO")){
        console.log (clientePregunta)
        alert (nombreIngresado + " por favor, primero debes registrarte para poder realizar un pedido online.")
    }
    else {
        alert ("Precisamos respondas por favor, para poder continuar.")
    }
}
