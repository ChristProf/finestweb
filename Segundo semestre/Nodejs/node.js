const http = require('http');

const hostname = '127.0.0.1';
const port = 3020;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola mundo\n');
});

server.listen(port, hostname, () => {
  console.log(`Servidor local http://${hostname}:${port}/`);
});
