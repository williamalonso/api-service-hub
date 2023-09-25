import jwt from 'jsonwebtoken';
import JWT_SECRET from '../config/tokenJWT';
import { Request, Response, NextFunction } from 'express';

interface CustomRequest extends Request {
  userId?: string;
  userEmail?: string;
}

const authenticateToken = (req: CustomRequest, res: Response, next: NextFunction) => {

  const tokenHeader  = req.headers['token'];

  if(!tokenHeader) {
    return res.status(401).json({ message: 'Invalid token'});
  }

  const token = Array.isArray(tokenHeader) ? tokenHeader[0] : tokenHeader;

  jwt.verify(token, JWT_SECRET, (err, user) => {

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