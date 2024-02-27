import { Router } from 'express';
import assistantRouter from './assistant.routes.js';

const router = Router()

router.use('/assistant', assistantRouter)

export default router;