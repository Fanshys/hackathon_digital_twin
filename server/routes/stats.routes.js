import express from 'express';
import { getStats } from '../controllers/stats.controller.js';

const router = express.Router();

router.post('/stats/', async (req, res) => {
  const result = await getStats(req);

  res.send(result);
});

export default router;
