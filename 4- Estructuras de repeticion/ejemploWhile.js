let numero;
numero=parseInt(prompt("Ingrese un numero positivo"));
while (numero <= 0) {
    alert("Error");
    numero=parseInt(prompt("Ingrese un numero positivo"));
}
alert("El numero ingresado es "+ numero);
