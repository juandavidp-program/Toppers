let carga = document.getElementById("carga");
let contenido = document.getElementById("contenido");

setTimeout(() => {
  carga.style.display = "none";
  contenido.style.display = "block";
  contenido.style.opacity = 1;
}, 5000);