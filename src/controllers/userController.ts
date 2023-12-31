require('dotenv').config();
import User from '../models/User';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import CustomRequest from '../interface/customRequest';

const jwtSECRET = process.env.jwtSECRET;

export const createUser = async(req: Request, res: Response) => {
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

export const loginUser = async(req: Request, res: Response) => {
  
  const { email, password } = req.body;

  try {
    
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'User does not exist' });
    }
    if(user.password !== password) {
      return res.status(401).json({ message: 'Wrong password' });
    }

    // If user exists, generate JWT token
    const token = jwt.sign({ userId: user._id, email: user.email}, `${jwtSECRET}`, {
      expiresIn: '24h',
    });

    user.jwtToken = token;
    await user.save();

    res.status(200).json({ message: 'Login successfull', token });
  } catch(e) {
    console.error(e);
    res.status(500).json({ message: 'Server internal error' });
  }
}

export const refreshToken = async(req: CustomRequest, res: Response) => {
  
  const userId = req.body['_id'];
  const email = req.body['email'];

  try {

    const user = await User.findOne({ email });

    if(!user) {
      return res.status(401).json({ message: 'User does not exist' });
    }
    if(user.jwtToken) {
      const token = jwt.sign({ userId, email }, `${jwtSECRET}`, {
        expiresIn: '24h',
      });
      user.jwtToken = token;
      await user.save();
      res.status(200).json({ message: 'Token has been renewed', token});
    } else {
      res.status(401).json({ message: 'User does not have any token to be renewed' });
    }


  } catch(e) {
    console.error(e);
    res.status(500).json({ message: 'Error renewing token' });
  }


}