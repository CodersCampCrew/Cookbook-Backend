import express from 'express';
import TagsController from '../controllers/tag-controller.js';
import DishController from '../controllers/dish-controller.js';

const router = new express.Router();

router.get('/tags', TagsController.showTags);
router.post('/tags', TagsController.addTag);

router.get('/dishes/recommended', DishController.showRecomendedDishes);
router.get('/dishes/breakfast', DishController.findBreakfast);
router.get('/dishes/lunch', DishController.findLunch);
router.get('/dishes/dinner', DishController.findDinner);
router.get('/dishes/others', DishController.findOthers);
router.get('/dishes/generate', DishController.createDish);

export default router;
