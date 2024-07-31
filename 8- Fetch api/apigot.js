fetch ('https://api.gameofthronesquotes.xyz/v1/random')
.then(respuesta => respuesta.json())
.then(datos => {
    console.log(datos);
    document.getElementById("demo").innerHTML = datos.sentence+'<br>'+datos.character.name
});