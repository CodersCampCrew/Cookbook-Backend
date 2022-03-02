const { default: mongoose } = require('mongoose');

const Tags = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

export default Tags;
