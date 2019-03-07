import mongoose, { Schema } from 'mongoose';

const tilesSchema = new Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  img: {
    type: String,
  },
  link: {
    type: String,
  }
});

export default mongoose.model('Tiles', tilesSchema, 'tiles');