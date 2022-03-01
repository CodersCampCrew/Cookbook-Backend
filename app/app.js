import express from 'express';
import routes from './routes/api.js';
import bodyPareser from 'body-pareser';

const app = express();

import './db/mongoose.js';

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', routes);

export default app;
