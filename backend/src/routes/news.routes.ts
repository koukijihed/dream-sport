import { Router } from 'express';

const router = Router();

// Public
router.get('/', (_req, res) => {
  res.json({ message: 'Get all news' });
});

router.get('/:id', (_req, res) => {
  res.json({ message: 'Get news by id' });
});

// Admin
router.post('/', (_req, res) => {
  res.json({ message: 'Create news article' });
});

router.put('/:id', (_req, res) => {
  res.json({ message: 'Update news article' });
});

router.delete('/:id', (_req, res) => {
  res.json({ message: 'Delete news article' });
});

export default router;
