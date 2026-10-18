import { Router } from 'express';

const router = Router();

router.post('/login', (_req, res) => {
  res.json({ message: 'Login endpoint' });
});

router.post('/logout', (_req, res) => {
  res.json({ message: 'Logout endpoint' });
});

router.get('/me', (_req, res) => {
  res.json({ message: 'Get current user' });
});

export default router;
