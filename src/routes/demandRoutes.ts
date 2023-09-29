import express from 'express';
import authenticateToken from '../middleware/authenticateToken';
import { createDemand, listUserDemands, getDemandById, updateDemand } from '../controllers/demandController';

const router = express.Router();

router.use(authenticateToken);

router.post('/create', createDemand);
router.get('/demands/:userId', listUserDemands);
router.get('/demand/:id', getDemandById);
router.put('/demand/update/:id', updateDemand);

export default router;