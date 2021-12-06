document.addEventListener('DOMContentLoaded', e => {
      fetch("https://raw.githubusercontent.com/caceresnb/Voila/main/js/stock.json")
        .then(o => o.json()) // promesa1 nos devuelve un response y lo covertimos a JSON
        .then(jsonObject => renderizarStock(jsonObject)) // utilizamos la data (el JSON)

});


function renderizarStock(stock) {
    
 const listaProductos = document.getElementById('lista-productos');   
 const cantColumn = 4;


 //Filas
  for (let i = 0; i < stock.length/cantColumn; i++) {
    let fila = "";

    //Columnas
    let indiceInicial = i * cantColumn;
    let htmlStock = ""

    for (let j = indiceInicial; j < stock.length && j < indiceInicial + cantColumn; j++) {
        

        htmlStock = `<div class="three columns">
            <div class="card">
                <img src="../img/${stock[j].img}" class="imagen-curso u-full-width">
                <div class="info-card">
                    <h4>${stock[j].titulo}</h4>
                    <img src="../img/estrellas.png">
                    <p class="precio">$${stock[j].precioReal} <span class="u-pull-right precio-rebajado">${bebidas[j].precioRebajado}</span><span class="u-pull-right ">$</span></p>
                    <a href="#" class="u-full-width button input agregar-carrito" data-id="${stoc[j].dataId}">Agregar Al Carrito</a>
                </div>
                </div> <!--.card-->
            </div>`

        fila += htmlStock;
        
    } //Fin FOR Columnas

    let htmlRow = `<div class="row"> ${fila} </div>`

    listaProductos.innerHTML += htmlRow; 

  } // Fin FOR Filas

}
