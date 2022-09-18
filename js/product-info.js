let prueba = document.getElementById("products")
let id = localStorage.getItem("productsID")
let comentBox = document.getElementById("comments2")

let productUrl = `https://japceibal.github.io/emercado-api/products/${id}.json`
let commentsUrl = `https://japceibal.github.io/emercado-api/products_comments/${id}.json`





fetch(productUrl)
.then(res => res.json())
.then (datos => {
    infoPro = datos
    console.log(infoPro)
    
    prueba.innerHTML = `<div class="infoProd">
                         <h1 class="col"> ${infoPro.name} </h1> 
                         <br>
                         <hr>
                         <p> <b>Precio</b> 
                        ${infoPro.currency} ${infoPro.cost}</p>
                        <p> <b>Descripcion</b>
                        ${infoPro.description}</p> 
                           <p> <b> Categoria</b>
                        ${infoPro.category} </p>
                         <p> <b> Cantidad de vendidos </b>
                        ${infoPro.soldCount}</p>
                        <br>
                         <p><b> Imagenes ilustrativas<b></p>                          
                        <div class="fotoContainer">
                                  <div class="foto-small-img">
                                  <img src="${infoPro.images[0]}" oneclick="cambioFoto(smallImg)"></img>
                                  <img src="${infoPro.images[3]}" oneclick="cambioFoto(smallImg)"></img>
                                  <img src="${infoPro.images[1]}" oneclick="cambioFoto(smallImg)"></img>
                                  <img src="${infoPro.images[2]}" oneclick="cambioFoto(smallImg)"></img>
                                  </div>
                            <div class="imgContainer">
                                <img id="imageBox" src="${infoPro.images[0]}" ></img>
                            </div> 
                            <script>
                            function myFunction(smallImg){
                              let fullImg = document.getElementById("imageBox")
                              fullImg.src = smallImg.src
                            } 
                            </script>
                        
                            </div>
                           `                                                                               
}) 

fetch(commentsUrl)
.then(res => res.json())
.then (datos =>{
     commentInfo = datos
     console.log (commentInfo)

     for ( comentario of commentInfo){
        console.log(comentario.user)
        comentBox.innerHTML += `
        <div class="comment">
        <div > <p> <b> ${comentario.user} </b> - ${comentario.dateTime} -  ${comentario.score} </p> </div>
        <div > <p> ${comentario.description} </p> </div>
        </div>
        
        `
     }
     
})

