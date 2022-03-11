import express from 'express';
import tagController from './controllers/tag-controller.js';
import dishController from './controllers/dish-controller.js';
import userController from './controllers/user-controller.js';
import session from 'express-session';
import passport from 'passport';

const app = express();

import './db/mongoose.js';
import './middleware/passport';

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/tags', tagController);
app.use('/api/dishes', dishController);
app.use('/api/users', userController);

export default app;
