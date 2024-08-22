import { createServer } from 'http';
import url from 'url';
import archivos from 'fs';
import { log } from 'console';

archivos.appendFile('pepe2.txt', 'Hola node', function(err){
    if(err){
        throw err;
    }
    console.log('Guardado');
});

createServer(function (req, res) {
    archivos.readFile('prueba.html', function (err, datos) {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(datos);
        return res.end();
    })
    
  }).listen(8080); 