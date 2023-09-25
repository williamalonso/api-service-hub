import User from '../models/User';
import { Request, Response } from 'express';
import passport from 'passport';

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
  passport.authenticate('local', (err: any, user: any, info: any) => {
    if(err) {
      return res.status(500).json({ message: 'Internal server error' });
    }
    if(!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    req.login(user, (err) => {
      if(err) {
        return res.status(500).json({ message: 'Internal server error' });
      }
      return res.status(200).json({ message: 'Login successful' });
    });

  })(req,res);
}

export const logoutUser = (req: Request, res: Response) => {
  return res.status(200).json({ message: 'Logout bem-sucedido' });
}