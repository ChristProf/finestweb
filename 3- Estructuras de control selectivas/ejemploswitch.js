/* Estructura de control switch

La estructura switch es una estructura de selección múltiple que a partir del valor de 
una clave o expresion, define el caso correspondiente al valor de la misma. Para finalizar
el bloque correspondiente a un caso, utilizamos la palabra reservada break
switch (key) {
    case value:
        
        break;

    default:
        break;
}

Además de contener los casos, esta estructura tiene un caso llamado "default" que 
se ejecuta en caso de que la expresion no coincida con ninguno de los casos anteriores

El siguiente es un ejemplo de switch
*/
$expresion=prompt("Ingrese una opcion entre 1 y 3");
switch ($expresion) {
    case "1":
        alert("Ha seleccionado la opcion 1"); 
        break;
    case "2":
        alert("Ha seleccionado la opcion 2");
        break;
    case "3":
        alert("Ha seleccionado la opcion 3");
        break;
    default:
        alert("No ha seleccionado ninguna opcion");
        break;
}


// También podemos enmarcar los casos de coincidencia en uno solo

$expresion=prompt("Ingrese un dia de semana");
switch ($expresion) {
    case "Lunes":
    case "Martes":
    case "Miercoles":
    case "Jueves":
    case "Viernes":
        alert("Es dia de semana"); 
        break;
    case "Sabado":
    case "Domingo":
        alert("Es fin de semana");
        break;
    default:
        alert("Su día no es válido");
        break;
}