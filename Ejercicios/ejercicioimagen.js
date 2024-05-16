function cambiar() {
    let divi= document.getElementById("cambio");
    let imagen = document.getElementById("imagen");
    let pdeparrafo = document.createElement("p");
    pdeparrafo.innerText = "El carpincho es lindo y rico";
    divi.removeChild(imagen);
    divi.appendChild(pdeparrafo);
}