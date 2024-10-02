
const http = require('http');
const GeradorNumeroAleatorio = require('./utils');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bem-vindo!');
  } else if (req.url === '/numero') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Numero aleatorio: \n ${GeradorNumeroAleatorio()}`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Pagina não encontrada');
  }
});

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000, segue: "http://localhost:3000/numero"');
});
