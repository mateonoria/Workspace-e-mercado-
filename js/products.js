const autos = "https://japceibal.github.io/emercado-api/cats_products/101.json"
fetch(autos)
.then (res => res.json())
.then(datos=> {
    console.log(datos)
    console.log(datos.products[0])
    console.log(datos.products[0].name)
    
   
    /*let listaAutos = document.getElementById("productos");
    let div = document.createElement("div");
    div.className = "autos";
    listaAutos.appendChild(div);*/

    for (let auto of datos.products){
        console.log(auto.name)
        let listaDeAutos = document.getElementById("productos");
  
        


        let nuevoAuto = `
        

        <div class= "autos col">
         <div class = "col fotoContainer"> 
        
         <img class="autoFoto" src="${auto.image}"/>
           <div/>

         <div class = "row">  
         <h3 class ="autoTitulo"> ${auto.name} - ${auto.currency} ${auto.cost}<h3/> 
         
         <p class = "autoDescripcion"> ${auto.description} <p/> 
         <div/>

         <div class="row">  <span class="venta"> ${auto.soldCount} Vendidos <span/> <div/>

         <div/>

        

        `
        listaDeAutos.innerHTML += nuevoAuto


        
        
      }

    
        

    
})