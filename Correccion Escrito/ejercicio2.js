/*
Cree un sitio que implemente un input y un botón con un 
evento de click que llamará a la función “convertir”. 
A continuación, deberá realizar la función llamada “convertir” 
que deberá tomar el dato que contiene el input y deberá 
convertirlo en un arreglo de datos sabiendo que el ingreso 
se realizará con múltiples palabras separadas por espacio (
ej: si el ingreso es “Manzana Banana Frutilla”, deberá crear 
un arreglo con esos tres elementos [‘Manzana’, ‘Banana’, 
‘Frutilla’]). Finalmente deberá mostrar el arreglo por consola.
*/

function convertir() {
    entrada=document.getElementById("frutas").value;
    arreglo = entrada.split(" ");
    console.log(arreglo);
}


