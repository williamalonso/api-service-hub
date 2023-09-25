import User from '../models/User';
import { Request, Response } from 'express';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Verifying if email exists
    const existingUser = await User.findOne(email);

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

export const logoutUser = (req: Request, res: Response) => {
  return res.status(200).json({ message: 'Logout bem-sucedido' });
}