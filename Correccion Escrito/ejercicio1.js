let mayor, numero;

for (let i = 0; i < 20; i++) {
    numero = parseInt(prompt("Ingrese un numero"));
    if (i==0 || numero > mayor) {
        mayor = numero;
    }
}

window.alert("El mayor es "+mayor);