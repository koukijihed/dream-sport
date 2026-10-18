import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json({ message: 'Get all members' });
});

router.post('/', (_req, res) => {
  res.json({ message: 'Create member' });
});

router.put('/:id', (_req, res) => {
  res.json({ message: 'Update member' });
});

router.delete('/:id', (_req, res) => {
  res.json({ message: 'Delete member' });
});

export default router;
