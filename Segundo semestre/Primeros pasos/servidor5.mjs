//import procesos from 'process'
import path from 'path';


//console.log(procesos.env.PATH.split(';'));

//console.log(path.dirname('/home/pepito/archivo.txt'));
//console.log(path.basename('/home/pepito/archivo.txt'));
//console.log(path.extname('/home/pepito/archivo.txt'));

let ruta = path.format({
    dir: 'C:\\path\\dir',
    base: 'file.txt'
});

//let ruta2 = path.parse('C:\\Users\\Usuario\\pepe.txt');
let ruta3 = path.resolve('C:\\pepito', '..\\..\\..\\jose');


console.log(ruta3);

//console.table(ruta2);


/*
Crear un servidor http que implemente las páginas para una empresa de construcción.
Se deberá poseer acceso a los sitios de productos, insumos y contacto.
En caso de querer ingresar a otro sitio distinto, se le deberá enviar un código 404
con el mensaje "Archivo no encontrado"

*/