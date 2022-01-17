class Persona {
    constructor(nombre, apellido, mail, mensaje){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.mensaje= mensaje;
    }
}

let personas = []

let idForm = document.getElementById("idForm")

idForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let mail = document.getElementById("mail").value;
    let mensaje= document.getElementById("mensaje").value;

    const persona = new Persona(nombre, apellido, mail,mensaje);
    
    personas.push(persona);
    
    idForm.reset();
    console.log(personas);
    alert ("Gracias por contactarnos, nos comunicaremos a la brevedad! Voilá");

})