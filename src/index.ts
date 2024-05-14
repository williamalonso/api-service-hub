import express from 'express';
const authRoutes = require('./routes/authRoutes');
import demandRoutes from './routes/demandRoutes';
const databaseAtlas = require('./config/database');
import swaggerRoutes from './routes/swaggerRoutes';

const port = process.env.PORT || 3000;
const app = express();

app.use(
  express.urlencoded({ extended: true}),
  express.json()
);
app.use('/auth', authRoutes);
app.use('/admin', demandRoutes);
app.use('/', swaggerRoutes);

databaseAtlas().then( () => {
  app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
  });
});