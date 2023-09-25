const router = require('express').Router(); // chamando o Router do Express
import { createUser } from '../controllers/userController';

router.post('/create', createUser);

module.exports = router;