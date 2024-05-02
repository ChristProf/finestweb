let Numero, suma=0;

for (let i = 0; i < 10; i++) {
    Numero = parseInt(prompt("Ingrese un numero"));
    suma += Numero;
}

alert("La suma de los numeros es " + suma);