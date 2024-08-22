import {createServer} from 'http';
import arc from 'fs';
import url from 'url';

createServer(function (req, res) {
    let que = url.parse(req.url, true);
    let archivo = "./vistas" + que.pathname;
    arc.readFile(archivo, function(err, datos){
        if(err){
            let pagerror404 = "./vistas/404.html"
            arc.readFile(pagerror404, function(err404, datos404){
                if(err404){
                    res.writeHead(404, {'Content-Type':'text/html'});
                    res.end("404 Not Found"); 
                } else {
                    res.writeHead(404, {'Content-Type':'text/html'});
                    res.end(datos404); 
                }
            });
        } else {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(datos);
        }
    })
}).listen(8080);