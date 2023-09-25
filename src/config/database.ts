require('dotenv').config();
const mongoose = require('mongoose');

const userDB = process.env.userDB;
const passwordDB = process.env.passwordDB;

const connectionString = `mongodb+srv://${userDB}:${passwordDB}@apicluster.9roedc7.mongodb.net/?retryWrites=true&w=majority`;

async function connectAtlas() {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao MongoDB Atlas');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB Atlas:', error);
  }
}

module.exports = connectAtlas;