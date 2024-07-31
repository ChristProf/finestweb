/*
Cree un sitio que implemente dos input que sólo admiten 
números y un botón con un evento de click que llamará a 
la función “intermedios”. A continuación, deberá realizar 
la función llamada “intermedios” que deberá tomar los datos 
de los dos input y mostrar con una ventana emergente, 
la lista de números intermedios entre los ingresados
 (tome en cuenta el hecho de que deberá identificar 
 cuál es el límite inferior y cual es el límite superior).
*/

function intermedios() {
    let inter="Numeros ", mayor, menor, num1, num2;
    num1=parseInt(document.getElementById("numero1").value);
    num2=parseInt(document.getElementById("numero2").value);
    if(num1==num2 || num1+1==num2 || num1-1==num2){
        window.alert("No hay intermedios");        
    }else{
        if(num1 > num2){
            mayor=num1;
            menor=num2;
        }else{
            mayor=num2;
            menor=num1;
        }
        for (let i = menor+1; i < mayor; i++) {
            inter=inter +" "+i;
        }
        window.alert("Inter = "+inter);

    }
}