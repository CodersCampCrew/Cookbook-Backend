import express from 'express';
import routes from './routes/api.js'
import './db/mongoose.js';

const app = express();

app.use(express.json())
app.use('/api', routes);

export default app;
