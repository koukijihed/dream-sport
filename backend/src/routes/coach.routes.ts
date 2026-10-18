import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json({ message: 'Get all coaches' });
});

router.post('/', (_req, res) => {
  res.json({ message: 'Create coach' });
});

router.put('/:id', (_req, res) => {
  res.json({ message: 'Update coach' });
});

router.delete('/:id', (_req, res) => {
  res.json({ message: 'Delete coach' });
});

export default router;
