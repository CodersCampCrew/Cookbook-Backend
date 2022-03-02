import express from 'express';
const router = new express.Router();
import DishController from '../controllers/dish-controller.js';

router.get('/dishes/recommended', DishController.showRecomendedDishes);
router.get('/dishes/breakfast', DishController.findBreakfast);
router.get('/dishes/lunch', DishController.findLunch);
router.get('/dishes/dinner', DishController.findDinner);
router.get('/dishes/others', DishController.findOthers);
router.get('/dishes/generate', DishController.createDish);

export default router;
