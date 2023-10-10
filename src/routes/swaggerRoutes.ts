import express from 'express';
import swaggerUI from 'swagger-ui-express';
import SwaggerDocument from '../swagger.json';

const router = express.Router();

router.use('/', swaggerUI.serve);
router.get('/', swaggerUI.setup(SwaggerDocument));

export default router;