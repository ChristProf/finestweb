/*
Ejercicio 1

Crear un script "ejercicioIf.js" que realice las siguientes acciones:
Deberá solicitar tres numeros y mostrar el mayor de ellos"

*/
let num1 = parseInt(prompt("Numero 1"));
let num2 = parseInt(prompt("Numero 1"));
let num3 = parseInt(prompt("Numero 1"));

if (num1 > num2 && num2 > num3) {
    primero    
} else {
    if (num3 > num2 && num3 > num1) {
        tercero
    } else {
        if (num2 > num3 && num2 > num1) {
            segundo
        }
    }
}
/*
7 8 5

IF
1) 7 > 5 T
2) 5 > 8 F
    ELSE
        IF
        3) 8 > 5 V
        4) 8 > 7 V
            TERCERO 


*/