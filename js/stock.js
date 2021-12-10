
document.addEventListener('DOMContentLoaded', e => {
  // fetch("https://raw.githubusercontent.com/caceresnb/Voila/main/js/stock.json")
  fetch("https://raw.githubusercontent.com/yoelysfigueredopadron/Ejemplo/main/stock.json")
    .then(o => o.json()) // promesa1 nos devuelve un response y lo covertimos a JSON
    .then(jsonObject => renderizarStock(jsonObject)) // utilizamos la data (el JSON)

});

function renderizarStock(stock) {

  const listaProductos = document.getElementById('lista-productos');
  const cantColumn = 2;


  //Filas
  for (let i = 0; i < stock.length / cantColumn; i++) {
    let fila = "";

    //Columnas
    let indiceInicial = i * cantColumn;
    let htmlStock = ""

    for (let j = indiceInicial; j < stock.length && j < indiceInicial + cantColumn; j++) {


      htmlStock = `<div class="two columns">
        <div class="productos-item card">
            <img src="img/primerStock/${stock[j].img}" class="card-img-top productos-img" alt="...">
            <div class="productos-text card-body">
                <h2>${stock[j].titulo}</h2>
                <span>$${stock[j].precioReal}</span> <h4>${stock[j].precioRebajado}</h4>
            <p>${stock[j].dataId}</p>
            </div>
        </div>
        </div>`

      fila += htmlStock;

    } //Fin FOR Columnas

    let htmlRow = `<div class="row"> ${fila} </div>`

    listaProductos.innerHTML += htmlRow;

  } // Fin FOR Filas

}
