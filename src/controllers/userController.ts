import User from '../models/User';
import { Request, Response } from 'express';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Verifying if email exists
    const existingUser = await User.findOne({ email });

    if(existingUser) {
      return res.status(400).json({ message: 'This email is already in use!' });
    }

    const newUser = new User({ email, password });
    await newUser.save();

    return res.status(201).json({ message: 'User created successfully' });

  } catch(e) {
    console.error('Erro ao criar usuário:', e);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

export const loginUser = (req: Request, res: Response) => {
  
  const { email } = req.body;

  try {
    
    const user = User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'User does not exist' });
    }

    // Se as credenciais estiverem corretas, você pode gerar um token JWT ou criar uma sessão de usuário aqui

    res.status(200).json({ message: 'Login successfull' });
  } catch(e) {
    console.error(e);
    res.status(500).json({ message: 'Server internal error' });
  }
}

export const logoutUser = (req: Request, res: Response) => {
  return res.status(200).json({ message: 'Logout bem-sucedido' });
}