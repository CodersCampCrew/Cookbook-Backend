import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  authorId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  text: {
    type: String,
    required: true
  },
  dish: {
    type: mongoose.Types.ObjectId,
    ref: 'Dish'
  }
});

const TagSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

const DishSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String
  },
  kcal: {
    type: Number,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  shortDesc: {
    type: String,
    required: true
  },
  categorie: {
    type: String,
    required: true
  },
  accepted: {
    type: Boolean,
    default: false
  },
  tags: [TagSchema],
  comments: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Comment'
    }
  ]
});

export const Tag = mongoose.model('Tag', TagSchema);
export const Dish = mongoose.model('Dish', DishSchema);
export const Comment = mongoose.model('Comment', CommentSchema);
