const router = require('express').Router(); // chamando o Router do Express
// const createUser = require('../controllers/userController');
import { createUser, loginUser } from '../controllers/userController';
// import passport  from 'passport';

router.post('/create', createUser);
router.post('/login', loginUser);

module.exports = router;