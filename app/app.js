import express from 'express';
const app = express();
import routes from './routes/api.js';

import './db/mongoose.js';

app.use('/api', routes);

export default app;
