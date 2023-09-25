require('dotenv').config();
import mongoose from 'mongoose';

const userDB = process.env.userDB;
const passwordDB = process.env.passwordDB;

const connectionString = `mongodb+srv://${userDB}:${passwordDB}@apicluster.9roedc7.mongodb.net/?retryWrites=true&w=majority`;

const connectAtlas = async () => {
  try {
    await mongoose.connect(connectionString);
  } catch(e) {
    console.error('Erro ao conectar com o MongoDB Atlas:', e);
  }
}

export default connectAtlas;