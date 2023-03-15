const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  titleProduct: {
    type: String,
    required: true,
  },
  imageProduct: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  dimensions: {
    type: String,
    required: true,
  },

  FournitureFinish: {
    type: String,
    required: true,
  },

  weight: {
    type: Number,
    required: true,
  },
  oldPrice: {
    type: String,
    required: true,
  },
  NewPrice: {
    type: String,
    required: true,
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);
