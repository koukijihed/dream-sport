import { Router } from 'express';

const router = Router();

// Public routes - Get classes by activity
router.get('/activity/:activityId', (_req, res) => {
  res.json({ message: 'Get classes by activity' });
});

router.get('/', (_req, res) => {
  res.json({ message: 'Get all classes' });
});

// Admin routes
router.post('/', (_req, res) => {
  res.json({ message: 'Create class/schedule' });
});

router.put('/:id', (_req, res) => {
  res.json({ message: 'Update class/schedule' });
});

router.delete('/:id', (_req, res) => {
  res.json({ message: 'Delete class/schedule' });
});

export default router;
