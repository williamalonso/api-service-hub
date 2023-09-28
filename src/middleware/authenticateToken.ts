import jwt from 'jsonwebtoken';
require('dotenv').config();
import { Response, NextFunction } from 'express';
import CustomRequest from '../interface/customRequest';

const jwtSECRET = process.env.jwtSECRET;

const authenticateToken = (req: CustomRequest, res: Response, next: NextFunction) => {

  const tokenHeader  = req.headers['token'];

  if(!tokenHeader) {
    return res.status(401).json({ message: "Invalid jwt value or invalid jwt header name, it must be 'token' "});
  }

  const token = Array.isArray(tokenHeader) ? tokenHeader[0] : tokenHeader;

  jwt.verify(token, `${jwtSECRET}`, (err, user) => {

    if(err) {
      return res.status(403).json({ message: 'Token authentication failed' });
    }

    if( user && typeof user === 'object' ) {

      req.userId = (user as { _id: string })._id;
      req.userEmail = (user as { email: string }).email;

      next();

    } else {
      return res.status(403).json({ message: 'Invalid user data in token' });
    }

  });

}

export default authenticateToken;