let ordenAsc = document.getElementById("sortAsc");
let ordenDesc = document.getElementById("sortDesc");
let ReputacionDesc = document.getElementById("sortByCount");
let cambioCategoria = localStorage.getItem("catID")
let categorias = `https://japceibal.github.io/emercado-api/cats_products/${cambioCategoria}.json`
let listadeProductos = []

function setProID(id) {
  localStorage.setItem("productsID", id);
  window.location = "product-info.html"
}


fetch(categorias)
.then (res => res.json())
.then(datos=> {
  listadeProductos = datos.products;
    
  
   
    document.querySelector(".subtitulo").innerHTML = `Verás aquí todos los elementos de la categoría ${datos.catName}`

    function filtrado() {
    let productoFiltrado = datos.products.filter(products => (products.cost >= document.getElementById("rangeFilterCountMin").value )&& ( products.cost <= document.getElementById("rangeFilterCountMax").value));
    console.log(productoFiltrado);
    let contitem = document.getElementById('productos');
    contitem.innerHTML = '';
    for (let product of productoFiltrado) {
        contitem.innerHTML += ` <br>
     <div class="row" id="productos" onclick="setProID(${product.id})" class="list-group-item list-group-item-action cursor-active "> 
      <div class="list-group col-3">
             <img class="img-thumbnail" src= "`+ product.image +` ">
               </div>
          <div class="col">
              <div id ="nombre"><p>${product.name}</p></div>

            <div id="descripcion"><p>${product.description}</p></div>

              <div id="id"><p>Vendidos:${product.soldCount}</p></div>
                </div>
                   <div class="col mb-1">
                     <div id ="cost"><p>${product.currency}:<spam class="currency">${product.cost}</spam></p></div>
                
                </div>
            </div>`;
    };
};


function limpiarfiltro(){
    document.getElementById("rangeFilterCountMin").value = 0;
    document.getElementById("rangeFilterCountMax").value = 3500001;
    filtrado();
};
limpiarfiltro();
document.getElementById("clearRangeFilter").addEventListener('click', () => { limpiarfiltro();}); 
document.getElementById("rangeFilterCount").addEventListener('click', () => { filtrado()}); 


sortDesc.addEventListener("click", event => {
  listadeProductos.sort(function (a, b) {
      if (a.cost < b.cost) return -1;
      if (a.cost > b.cost) return 1;
      return 0;
  });
  inner();
});

sortAsc.addEventListener("click", event => {
  listadeProductos.sort(function (a, b) {
      if (a.cost > b.cost) return -1;
      if (a.cost < b.cost) return 1;
      return 0;
  });
  inner();
});

sortByCount.addEventListener("click", event => {
  listadeProductos.sort(function (a, b) {
      if (a.soldCount < b.soldCount) return -1;
      if (a.soldCount > b.soldCount) return 1;
      return 0;
  });
  inner();
});

});
  
 