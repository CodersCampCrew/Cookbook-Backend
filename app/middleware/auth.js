export const ensureAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === 'Admin') {
    return next();
  }
  res.status(403).json({ message: 'Access denied - no admin rights' });
};

export const ensureUser = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === 'User') {
    return next();
  }
  res.status(403).json({ message: 'Access denied - please log in' });
};

export const role = {
  Admin: 'Admin',
  User: 'User'
};
