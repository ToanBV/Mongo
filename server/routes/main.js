import express from 'express';

import { createCause, getAllCause, getSingleCause } from '../controllers/cause';

const router = express.Router();
router.post('/causes', createCause);
router.get('/causes', getAllCause);
router.get('/causes/:causeId', getSingleCause);

export default router;
