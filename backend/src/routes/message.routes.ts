import { Router } from 'express';

const router = Router();

// Public - Send contact message
router.post('/', (_req, res) => {
  res.json({ message: 'Send contact message' });
});

// Admin
router.get('/', (_req, res) => {
  res.json({ message: 'Get all messages' });
});

router.put('/:id/status', (_req, res) => {
  res.json({ message: 'Update message status' });
});

router.delete('/:id', (_req, res) => {
  res.json({ message: 'Delete message' });
});

export default router;
