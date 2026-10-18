import { Router } from 'express';

const router = Router();

// Public
router.get('/active', (_req, res) => {
  res.json({ message: 'Get active promotions' });
});

router.get('/', (_req, res) => {
  res.json({ message: 'Get all promotions' });
});

// Admin
router.post('/', (_req, res) => {
  res.json({ message: 'Create promotion' });
});

router.put('/:id', (_req, res) => {
  res.json({ message: 'Update promotion' });
});

router.delete('/:id', (_req, res) => {
  res.json({ message: 'Delete promotion' });
});

export default router;
