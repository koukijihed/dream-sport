import { Router } from 'express';

const router = Router();

// Public routes
router.get('/', (_req, res) => {
  res.json({ message: 'Activities routes - public' });
});

// Admin routes (to be protected later)
router.post('/', (_req, res) => {
  res.json({ message: 'Create activity' });
});

router.put('/:id', (_req, res) => {
  res.json({ message: 'Update activity' });
});

router.delete('/:id', (_req, res) => {
  res.json({ message: 'Delete activity' });
});

export default router;
