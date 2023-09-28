const router = require('express').Router();
import { createUser, loginUser, refreshToken } from '../controllers/userController';
import authenticateToken from '../middleware/authenticateToken';

router.post('/create', createUser);
router.post('/login', loginUser);
router.post('/refresh-token', authenticateToken, refreshToken);

module.exports = router;