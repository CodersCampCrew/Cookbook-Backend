import Dish from '../db/models/dish.js';

class DishController {
  async showRecomendedDishes(req, res) {
    const dishes = await Dish.find();
    res.status(200).json(dishes);
  }

  async createDish(req, res) {
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
  }

  async findBreakfast(req, res) {
    try {
      const breakfast = await Dish.find({ categorie: 'breakfast' });

      if (!breakfast) {
        throw new Error('Categorie not found');
      }

      res.status(200).json(breakfast);
    } catch (error) {
      res.status(402);
    }
  }

  async findLunch(req, res) {
    try {
      const lunch = await Dish.find({ categorie: 'lunch' });

      if (!lunch) {
        throw new Error('Categorie not found');
      }

      res.status(200).json(lunch);
    } catch (error) {
      res.status(402);
    }
  }

  async findDinner(req, res) {
    try {
      const dinner = await Dish.find({ categorie: 'dinner' });

      if (!dinner) {
        throw new Error('Categorie not found');
      }

      res.status(200).json(dinner);
    } catch (error) {
      res.status(402);
    }
  }

  async findOthers(req, res) {
    try {
      const others = await Dish.find({ categorie: 'others' });

      if (!others) {
        throw new Error('Categorie not found');
      }

      res.status(200).json(others);
    } catch (error) {
      res.status(402);
    }
  }
}

export default new DishController();
