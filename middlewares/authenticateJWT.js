const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your-secret-key';

const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Missing authorization token' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid authorization token' });
    }

    req.user = user;
    next();
  });
};

module.exports = authenticateJWT;