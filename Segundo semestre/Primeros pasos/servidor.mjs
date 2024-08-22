import { createServer } from 'http';

createServer(function (req, res) {
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.end('Hola mundo');
}).listen(8080); 