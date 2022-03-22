import express from 'express';
import tagController from './controllers/tag-controller.js';
import dishController from './controllers/dish-controller.js';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger-output.json' assert { type: 'json' };

const app = express();

import './db/mongoose.js';

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/tags', tagController);
app.use('/api/dishes', dishController);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

export default app;
