import express from 'express';
const authRoutes = require('./routes/authRoutes');
const databaseAtlas = require('./config/database');

const port = 3000;
const app = express();

app.use(
  express.urlencoded({ extended: true}),
  express.json()
);

app.use('/auth', authRoutes);


import authenticateToken from './middleware/authenticateToken';
app.post('/rota-protegida', authenticateToken, (req, res) => {
  // Esta rota é protegida e só pode ser acessada se o token JWT for válido
  // Você pode adicionar lógica adicional aqui
  res.json({ message: 'Rota protegida acessada com sucesso!' });
});


databaseAtlas().then( () => {
  app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
  });
});