import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Comments = new Schema({
  authorId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },

  text: {
    type: String,
  },
});



const dishSchema = new Schema({
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
    ref: 'Tags',
  },

  comments: Comments,

});

const Dish = mongoose.model('Dish', dishSchema)

export default Dish;