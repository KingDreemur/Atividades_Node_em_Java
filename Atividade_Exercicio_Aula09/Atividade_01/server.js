const http = require('http');
//const express = require('express')
//const app = express() // initialize app
//const port = 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Ola, eu estou usando o Node');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Pagina não encontrada');
  }
});

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
