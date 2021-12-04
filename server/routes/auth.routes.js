import express from 'express';
import { login } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/auth/login/', async (req, res) => {
  const result = await login(req, res);

  res.send(result);
});

export default router;
