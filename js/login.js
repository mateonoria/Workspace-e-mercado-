let miLogin = document.getElementById("loginJAP")

miLogin.addEventListener ("submit", function(evento) {
    let miMail = document.getElementById("barraMail")
    let miCont = document.getElementById("barraCont")
  
    let mailCheck = miMail.value
    let contCheck = miCont.value
    console.log(contCheck)

    if (mailCheck.length>0 && contCheck.length>0) {
        evento.preventDefault();
        window.location.href = "index.html"
    } else if (!mailCheck.length>0 && !contCheck.length>0) {
        evento.preventDefault();
        alert ("Debe completar ambos campos")
    } else if (!mailCheck.length>0) {
        evento.preventDefault();
        alert("Debe introducir un mail")
       

    } else if (!contCheck>0){
        evento.preventDefault();
        alert("Debe introducir su contraseña")

    }


})