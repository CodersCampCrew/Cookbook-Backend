import express from 'express';
const router = new express.Router();
import DishController from '../controllers/dish-controller.js';

router.get('/dishes/recomended', DishController.showRecomendedDishes);

export default router;
