let articleURL = "https://japceibal.github.io/emercado-api/user_cart/25801.json";
let infoArt = document.getElementById("tbody-art");

fetch(articleURL)
.then(res=>res.json())
.then(data=>{
    artInfo = data.articles
    console.log(artInfo)

    infoArt.innerHTML = `
   <td> <img class="pict" src="${artInfo[0].image}"></td>
   <td>${artInfo[0].name}</td>
   <td>${artInfo[0].currency} ${artInfo[0].unitCost}</td>
   <td> <input type = "number" min="1" id="table-cant"></td>
   <td id="${artInfo[0].id}"></td>

    ` 
    document.getElementById("table-cant").addEventListener("input", function(){
        let final = document.getElementById(artInfo[0].id)
        let artCant = document.getElementById("table-cant").value
        let subT = artCant*artInfo[0].unitCost
        console.log(subT)
        final.innerHTML = `${artInfo[0].currency} ${subT}`
    })
})

