const boton = document.getElementById("button");
const cajaFlexible = document.getElementById("cajaFlexible");

boton.addEventListener("click", function() {
    cajaFlexible.classList.toggle("cambiada");
});