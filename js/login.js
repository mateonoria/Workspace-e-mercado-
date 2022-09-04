let miLogin = document.getElementById("loginJAP")



const correo = document.getElementById("barraMail")



miLogin.addEventListener ("submit", function(evento) {
evento.preventDefault();

let miMail = document.getElementById("barraMail")
let miCont = document.getElementById("barraCont")

let mailCheck = miMail.value
let contCheck = miCont.value
console.log(contCheck)

    if (mailCheck.length>0 && contCheck.length>0) {
        localStorage.setItem("email", correo.value)
        window.location.href = "home.html"
    } else if (!mailCheck.length>0 && !contCheck.length>0) {
        alert ("Debe completar ambos campos")
    } else if (!mailCheck.length>0) {
        alert("Debe introducir un mail")
       

    } else if (!contCheck>0){
        alert("Debe introducir su contraseña")

    }


})
