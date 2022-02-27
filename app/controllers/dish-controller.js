import Dish from '../db/models/dish.js';

class DishController {
  async showRecomendedDishes(req, res) {
    const dishes = await Dish.find();
    res.status(200).json(dishes);
  }
}

export default new DishController();
