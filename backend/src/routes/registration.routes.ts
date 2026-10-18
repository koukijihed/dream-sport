import { Router } from 'express';

const router = Router();

// Public - Submit registration request
router.post('/', (_req, res) => {
  res.json({ message: 'Submit registration request' });
});

// Admin
router.get('/', (_req, res) => {
  res.json({ message: 'Get all registration requests' });
});

router.put('/:id/status', (_req, res) => {
  res.json({ message: 'Update registration status' });
});

router.delete('/:id', (_req, res) => {
  res.json({ message: 'Delete registration request' });
});

export default router;
