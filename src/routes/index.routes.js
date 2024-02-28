import { Router } from 'express';
import assistantRouter from './assistant.routes.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = Router();

// Adicione o middleware aqui
router.use('/assistant', authMiddleware);



router.use('/assistant', assistantRouter)

export default router;