import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json({ message: 'Get all subscriptions/plans' });
});

router.post('/', (_req, res) => {
  res.json({ message: 'Create subscription plan' });
});

router.put('/:id', (_req, res) => {
  res.json({ message: 'Update subscription plan' });
});

router.delete('/:id', (_req, res) => {
  res.json({ message: 'Delete subscription plan' });
});

export default router;
