import express from 'express';
import cors from 'cors';
import tagController from './controllers/tag-controller.js';
import dishController from './controllers/dish-controller.js';

const app = express();

import './db/mongoose.js';

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/tags', tagController);
app.use('/api/dishes', dishController);

export default app;
