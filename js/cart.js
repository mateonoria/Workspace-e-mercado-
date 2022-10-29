let articleURL = "https://japceibal.github.io/emercado-api/user_cart/25801.json";
let infoArt = document.getElementById("tbody-art");
let infoArt2= document.getElementById("subt-2");
let del = document.getElementById("del")
let totalCost = document.getElementById("total-cost");
let count = 0 
let opc1 = document.getElementById("opt-1")
let opc2 = document.getElementById("opt-2")
let opc3 = document.getElementById("opt-3")

fetch(articleURL)
.then(res=>res.json())
.then(data=>{
    artInfo = data.articles
    console.log(artInfo)

    infoArt.innerHTML = `
   <td> <img class="pict" src="${artInfo[0].image}"></td>
   <td>${artInfo[0].name}</td>
   <td>${artInfo[0].currency} ${artInfo[0].unitCost}</td>
   <td> <input type = "number" min="0" id="table-cant"></td>
   <td id="${artInfo[0].id}"></td>

    ` 
    document.getElementById("table-cant").addEventListener("input", function(){
        let final = document.getElementById(artInfo[0].id)
        let artCant = document.getElementById("table-cant").value
        let subT = artCant*artInfo[0].unitCost
        console.log(subT)
        final.innerHTML = `${artInfo[0].currency} ${subT}`
        infoArt2.innerHTML = `${artInfo[0].currency} ${subT}`
        del.innerHTML = `${artInfo[0].currency} ${count*subT/100}`
        totalCost.innerHTML = `${artInfo[0].currency} ${subT+count*subT/100}`

        
        opc1.addEventListener("click", function(){
        del.innerHTML = `${artInfo[0].currency} ${15*subT/100}`
        totalCost.innerHTML = `${artInfo[0].currency} ${subT+count*subT/100}`


           
       })
       opc2.addEventListener("click", function(){
        del.innerHTML = `${artInfo[0].currency} ${7*subT/100}`
        totalCost.innerHTML = `${artInfo[0].currency} ${subT+count*subT/100}`


           
       })
       opc3.addEventListener("click", function(){
        del.innerHTML = `${artInfo[0].currency} ${5*subT/100}`
        totalCost.innerHTML = `${artInfo[0].currency} ${subT+count*subT/100}`
           
       })


    })
 
});  


opc1.addEventListener("click", function(){
  count=15       
  
   });  

opc2.addEventListener("click", function(){
  count=7       
    });  

opc3.addEventListener("click", function(){
  count=5       
     });    

     // Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    let closeButton = document.getElementById("close-button")
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        closeButton.addEventListener("click", function(){changeP()})
        quantityV()
        changeP()
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
            document.getElementById("finish-purchase").style.display="block"
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })();

  let credit = document.getElementById("credit");
  let transfer = document.getElementById("transfer");
  let fieldset2 = document.getElementById("fieldset2");
  let fieldset1 = document.getElementById("fieldset1")



  credit.addEventListener("click", function(){
  fieldset1.removeAttribute("disabled")  
  fieldset2.setAttribute("disabled", true)
  
  });

  transfer.addEventListener("click", function(){
    fieldset2.removeAttribute("disabled")
    fieldset1.setAttribute("disabled", true)
  });
  
  let finish = document.getElementById("finish");
  
function quantityV() {
    let quantity = document.getElementById("table-cant");
    let requieredp = document.getElementById("requiered-p");

    console.log(quantity.value)
    if(!quantity.value>0){
    requieredp.style.display="block"
    quantity.style.border="solid 2px red"
    }  }

   function changeP(){
    let transfer = document.getElementById("transfer");
    let credit = document.getElementById("credit");
    let modal_class = document.getElementById("p-class")
        if(credit.checked) {
            modal_class.innerText = `Se ha seleccionado tarjeta de credito`
            modal_class.style.color="green"
        } else if (transfer.checked){
            modal_class.innerText = `Se ha seleccionado transferencia bancaria`
            modal_class.style.color="green"
            
        } else {modal_class.style.color="red"}
    }
