import { Router } from 'express';

const router = Router();

// Public - Get approved reviews
router.get('/approved', (_req, res) => {
  res.json({ message: 'Get approved reviews' });
});

// Public - Submit review (pending)
router.post('/', (_req, res) => {
  res.json({ message: 'Submit review' });
});

// Admin
router.get('/', (_req, res) => {
  res.json({ message: 'Get all reviews' });
});

router.put('/:id/status', (_req, res) => {
  res.json({ message: 'Update review status' });
});

router.delete('/:id', (_req, res) => {
  res.json({ message: 'Delete review' });
});

export default router;
