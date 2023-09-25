const express = require('express');
const authRoutes = require('./routes/authRoutes');
const connectAtlas = require('./config/database');
const port = 3000;
const app = express();

app.use(
  express.urlencoded({ extended: true}),
  express.json()
);

app.use('/auth', authRoutes);

connectAtlas().then( () => {
  app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
  });
});