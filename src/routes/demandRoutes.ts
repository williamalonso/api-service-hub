import express from 'express';
import authenticateToken from '../middleware/authenticateToken';
import { createDemand } from '../controllers/demandController';

const router = express.Router();

router.use(authenticateToken);

router.post('/create', createDemand);

export default router;