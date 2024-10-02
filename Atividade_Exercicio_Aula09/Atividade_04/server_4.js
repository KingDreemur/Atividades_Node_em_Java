const http = require('http');
const server = http.createServer((req, res) => {
 const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bem-vindo!');
  } else if (url.startsWith('/saudacao/')) {
    const nome = url.split('/')[2];
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Ola, ${nome.charAt(0).toUpperCase() + nome.slice(1)}!`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Pagina não encontrada');
  }
});

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000, segue exemplo: "http://localhost:3000/leonardo" , "http://localhost:3000/giovane ');
});