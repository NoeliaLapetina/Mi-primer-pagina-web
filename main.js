/*variables*/
const form = document.querySelector("#form");
let nombre = document.querySelector("#nombre");
let email = document.querySelector("#email");
let number = document.querySelector("#number");
let mensaje = document.querySelector("#mensaje");

/*funcion validar*/
function validar(e) {
  if (nombre.value == "") {
    alert("Completa tu nombre y apellido")
    e.preventDefault();
  }
  if (email.value == "") {
    alert("Completa tu email")
    e.preventDefault();
  }
  if (number.value == "") {
    alert("Completa tu número de teléfono")
    e.preventDefault();
  }
  if (mensaje.value == "") {
    alert("Escribe un mensaje")
    e.preventDefault();
  }
}

/*evento*/
form.addEventListener("submit", validar);