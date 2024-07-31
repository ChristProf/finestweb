fetch ('https://pokeapi.co/api/v2/pokemon/gyarados')
.then(respuesta => respuesta.json())
.then(datos => {
    console.log(datos);
    document.getElementById("demo").innerHTML = datos.abilities[0].ability.name
});