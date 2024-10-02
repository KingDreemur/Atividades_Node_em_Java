const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bem-vindo!');
  } else if (req.url === '/sobre') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Sobre mim: Eu jogo o dia inteiro, e gosto de fazer RPG');
  } else if (req.url === '/contato') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Contato: leonardo@exemplo.com');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Pagina não encontrada');
  }
});

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000, segue: "http://localhost:3000" , "http://localhost:3000/sobre" , "http://localhost:3000/contato"');
});
//node server.js