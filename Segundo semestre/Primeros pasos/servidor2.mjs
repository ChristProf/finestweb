import { createServer } from 'http';
import url from 'url';

createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hola mundo</h1>');
    res.write(req.url);
    res.write('<br>');
    let que = url.parse(req.url, true).query;
    let texto = que.anio + " " + que.mes;
    res.write(texto);
    res.end();
  }).listen(8080); 