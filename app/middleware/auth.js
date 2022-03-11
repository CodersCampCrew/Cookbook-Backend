export const ensureAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === 'Admin') {
    return next();
  }
  req.flash('error_msg', 'Access denied - no admin rights');
  res.status(403);
};

export const ensureUser = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === 'User') {
    return next();
  }
  req.flash('error_msg', 'Please log in to view this resource');
  res.redirect('/users/login');
};

export const role = {
  Admin: 'Admin',
  User: 'User'
};
