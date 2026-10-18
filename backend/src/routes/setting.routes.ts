import { Router } from 'express';

const router = Router();

// Public
router.get('/', (_req, res) => {
  res.json({ message: 'Get public settings' });
});

// Admin
router.get('/all', (_req, res) => {
  res.json({ message: 'Get all settings' });
});

router.put('/', (_req, res) => {
  res.json({ message: 'Update settings' });
});

export default router;
