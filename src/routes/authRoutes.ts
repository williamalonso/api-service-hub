const router = require('express').Router();
import { createUser, loginUser, refreshToken } from '../controllers/userController';
import authenticateToken from '../middleware/authenticateToken';
import { Request, Response } from 'express';

router.post('/create', createUser);
router.post('/login', loginUser);
router.post('/refresh-token', authenticateToken, refreshToken);
router.get('/teste', authenticateToken, (req: Request, res: Response) => {
  return res.status(200).json({ message: 'rota protegida reiniciada' });
})

module.exports = router;