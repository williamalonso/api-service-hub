const router = require('express').Router();
import { createUser, loginUser } from '../controllers/userController';

router.post('/create', createUser);
router.post('/login', loginUser);

module.exports = router;