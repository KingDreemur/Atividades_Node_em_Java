const express = require('express');
const app = express();

app.get('/', (req, response) => {
  response.send(`
    <html>
      <head><title>Página Inicial</title></head>
      <body><h2>Seja Bem Vindo</h2></body>
    </html>
  `);
});
app.get('/api/data', (req, response) => {
  response.json({
    nome: 'Leonardo',
    idade: 19,
    profissao: 'Gamer'
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000, segue: "http://localhost:3000"');
});