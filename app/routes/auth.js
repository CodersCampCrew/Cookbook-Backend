import passport from 'passport';

const initializePassport = require('./user-controller.js');
initializePassport(passport);

const users = [];

app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });
    res.redirect('/login');
  } catch {
    res.redirect('/register');
  }
  console.log(users);
});
