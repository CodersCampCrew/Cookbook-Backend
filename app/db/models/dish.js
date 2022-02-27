import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Comments = new Schema({
  authorId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'User',
  },

  text: {
    type: String,
  },
});

const Dish = new Schema({
  name: {
    type: String,
    required: [true, `This field is required`],
  },

  img: {
    type: String,
  },

  kcal: {
    type: Number,
    required: [true, `This field is required`],
  },

  time: {
    type: Number,
    required: [true, `This field is required`],
  },

  desc: {
    type: String,
    required: [true, `This field is required`],
  },

  shortDesc: {
    type: String,
    required: [true, `This field is required`],
  },

  categorie: {
    type: String,
    required: [true, `This field is required`],
  },

  accepted: {
    type: Boolean,
    default: false,
  },

  tags: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Tags',
  },

  comments: [Comments],

});

export default Dish;
