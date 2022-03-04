import { Dish, Comment } from '../db/models/dish.js';
import express from 'express';

const router = new express.Router();

router.get('/recommended', async (req, res) => {
  const dishes = await Dish.find();
  res.status(200).json(dishes);
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
    res.status(422).json({ errors: error.errors });
  }
});

router.post('/dish/:id/comment', async (req, res) => {
  const { id } = req.params;
  const comment = new Comment({
    authorId: '61224f32898d4c766674fc3f',
    text: req.body.text,
    dish: id
  });
  await comment.save();
  const dishRelated = await Dish.findById(id);
  dishRelated.comments.push(comment);
  await dishRelated.save();
  res.status(201).json(dishRelated);
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
