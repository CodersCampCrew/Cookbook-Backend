import { Tag } from '../db/models/dish.js';
import express from 'express';

const router = new express.Router();

router.get('/', async (req, res) => {
  const tags = await Tag.find();
  res.status(200).json(tags);
});

router.post('/', async (req, res) => {
  const tag = new Tag({
    name: req.body.name
  });
  try {
    const newTag = await tag.save();
    res.status(201).json(newTag);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
