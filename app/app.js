import express from 'express';

import './db/mongoose.js';

const app = express();

app.use(express.json())
app.use('/api', routes);

export default app;
