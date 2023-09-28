import express from 'express';
const authRoutes = require('./routes/authRoutes');
import demandRoutes from './routes/demandRoutes';
const databaseAtlas = require('./config/database');

const port = 3000;
const app = express();

app.use(
  express.urlencoded({ extended: true}),
  express.json()
);
app.use('/auth', authRoutes);
app.use('/admin', demandRoutes);

databaseAtlas().then( () => {
  app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
  });
});