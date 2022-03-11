import { User } from '../db/models/user.js';
import express from 'express';
import bcrypt from 'bcrypt';
import passport from 'passport';

const router = new express.Router();

// Register Page
router.get('/register', (req, res) => res.status(200));

// Registare Handle
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body;
  const errors = [];

  // Check required fields
  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please fill in all fields' });
  }

  // Check passwords match
  if (password !== password2) {
    errors.push({ msg: 'Password do not match' });
  }

  // Check pass length
  if (password.length < 6) {
    errors.push({ msg: 'Password should be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.status(400).send({
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    // Validation passed
    User.findOne({ email: email }).then((user) => {
      if (user) {
        // User exists
        errors.push({ msg: 'Email is already registered' });
        res.status(400).send({
          errors,
          name,
          email,
          password,
          password2
        });
      } else {
        const newUser = new User({
          name,
          email,
          password
        });
        // Hash Password
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            // Set password to hashed
            newUser.password = hash;
            // Save user
            newUser
              .save()
              .then((user) => {
                res.status(200).json({ msg: 'You are now registered' });
              })
              .catch((err) => console.log(err));
          })
        );
      }
    });
  }
});

// Login Page
router.get('/login', (req, res) => res.status(200));

// Login Handle
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: res.status(200),
    failureRedirect: res.status(400).json({ msg: 'Loggin failed' })
  })(req, res, next);
});

// Logout Handle
router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ msg: 'You are logged out' });
});

export default router;
