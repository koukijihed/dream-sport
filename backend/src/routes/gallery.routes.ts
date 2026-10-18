import { Router } from 'express';

const router = Router();

// Public
router.get('/', (_req, res) => {
  res.json({ message: 'Get gallery images' });
});

// Admin
router.post('/', (_req, res) => {
  res.json({ message: 'Upload gallery image' });
});

router.put('/:id', (_req, res) => {
  res.json({ message: 'Update gallery image' });
});

router.delete('/:id', (_req, res) => {
  res.json({ message: 'Delete gallery image' });
});

export default router;
