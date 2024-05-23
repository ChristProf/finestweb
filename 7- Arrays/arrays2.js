let arreglo=[], largo;

arreglo.push("Enero");
arreglo.push("Febrero");
arreglo.push("Marzo");
arreglo.unshift("Diciembre");
largo=arreglo.length

for (let index = 0; index < largo; index++) {
    //document.write(arreglo.pop());
    //document.write(arreglo[index]);
    document.write(arreglo.shift());
    document.write("<br>");
}


