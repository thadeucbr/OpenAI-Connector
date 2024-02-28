export default function authMiddleware(req, res, next) {
  try {
    if (process.env.X_KEY) {
    const xKey = req.headers['x-key'];
    const expectedKey = process.env.X_KEY;
  
    if (xKey !== expectedKey) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  }
    next();
  } catch (err) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
