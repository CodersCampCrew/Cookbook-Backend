import { Dish, Comment } from '../db/models/dish.js';
import express from 'express';

const router = new express.Router();

router.get('/recommended', async (req, res) => {
  const recommendedDish = await Dish.find().sort({ recommended: -1 }).limit(1);
  res.status(200).json(recommendedDish);
});

router.get('/', async (req, res) => {
  const dishes = await Dish.find();
  res.status(200).json(dishes);
});

router.get('/:dishId', async (req, res) => {
  const dish = await Dish.findById(req.params.dishId);
  res.status(200).json(dish);
});

router.post('/create', async (req, res) => {
  const dish = new Dish({
    name: req.body.name,
    img: req.body.img,
    kcal: req.body.kcal,
    time: req.body.time,
    desc: req.body.desc,
    shortDesc: req.body.shortDesc,
    categorie: req.body.categorie
  });

  try {
    await dish.save();
    res.status(201).json(dish);
  } catch (error) {
    res.status(422).json({ message: error.message });
    console.log(error);
  }
});

router.delete('/remove/:name', async (req, res) => {
  const { name } = req.params;
   const dish = await Dish.deleteOne({ name: name });
  res.status(204).json(dish);
});

router.post('/dish/:id/comment', async (req, res) => {
  const { id } = req.params;
  const comment = new Comment({
    authorId: req.body.authorId,
    text: req.body.text,
    dish: req.body.dish
  });
  await comment.save();
  const dishRelated = await Dish.findById(id);
  dishRelated.comments.push(comment);
  await dishRelated.save();
  res.status(201).json(dishRelated);
});

router.get('/dish/:name', async (req, res) => {
  const { name } = req.params;
  const dish = await Dish.findOne({ name: name });
  res.status(200).json(dish);
});

router.get('/dish/:id/comments', async (req, res) => {
  const id = req.params.id;
  const dish = await Dish.findById(id);
  res.status(200).json(dish.comments);
});

router.get('/breakfast', async (req, res) => {
  try {
    const breakfast = await Dish.find({ categorie: 'breakfast' });
    res.status(200).json(breakfast);
  } catch (error) {
    res.status(404);
  }
});

router.get('/lunch', async (req, res) => {
  try {
    const lunch = await Dish.find({ categorie: 'lunch' });
    res.status(200).json(lunch);
  } catch (error) {
    res.status(404);
  }
});

router.get('/dinner', async (req, res) => {
  try {
    const dinner = await Dish.find({ categorie: 'dinner' });
    res.status(200).json(dinner);
  } catch (error) {
    res.status(404);
  }
});

router.get('/others', async (req, res) => {
  try {
    const others = await Dish.find({ categorie: 'others' });
    res.status(200).json(others);
  } catch (error) {
    res.status(404);
  }
});

export default router;
