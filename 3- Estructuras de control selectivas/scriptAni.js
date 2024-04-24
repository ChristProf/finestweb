let num1 = parseInt(prompt("Ingrese un numero"));
let texto = prompt("Ingrese otro numero");
let num2 = parseInt(prompt("Ingrese otro numero"));

//Identificar si el numero es positivo, negativo o neutro
/*
Operadores relacionales

< menor que
> mayor que
<= menor o igual que
>= mayor o igual que
== igual que
=== identico que
!= distinto que
!== no identico que

Operadores lógicos

&&  and -> operador binario and
||  or -> operador binario or
!   not -> operador unario not
*/
if (num1 > 0) {
    alert("Es positivo");
} else {
    if (num1 < 0) {
        alert("Es negativo");
    } else {
        alert("Es neutro");
    }
}


if (num1 == texto){
    alert("Son iguales");
}else{
    alert("No son iguales");
}

if (num1 === texto){
    alert("Son iguales");
}else{
    alert("No son iguales");
}


if (num1 > 0 && num2 > 0){
    alert("Los dos son mayores a cero");
}

if (num1 > 0 || num2 > 0){
    alert("Al menos uno de los numeros es mayor que cero");
}

if (! num1 > 0){
    alert("El numero no es mayor que cero");
}
