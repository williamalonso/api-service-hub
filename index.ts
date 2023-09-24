const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Hello World' });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`);
});