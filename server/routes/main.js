import express from 'express';

import { createCause } from '../controllers/cause';

const router = express.Router();
router.post('/causes', createCause);

export default router;