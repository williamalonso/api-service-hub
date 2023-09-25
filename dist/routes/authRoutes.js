"use strict";
const router = require('express').Router(); // chamando o Router do Express
const createUser = require('../controllers/userController');
// import { createUser } from '../controllers/userController';
router.post('/create', createUser.createUser);
module.exports = router;
