import mongoose, { Schema } from 'mongoose';

const recordSchema = new Schema({
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  ID: {
    type: Number,
    default: 123456,
  },
  Image: {
    type: String,
    required: 'Please enter the recipe title.',
  },
  City: {
    type: String,
    required: 'Please enter the recipe title.',
  },
  Country: {
    type: String,
    required: 'Please enter the recipe title.',
  },
  BloodType:{
      type: String,
      required: 'Please enter the recipe title.',
  },
  Hospitals: {
    type: Array,
    required: 'Please enter the recipe title.',
  },
});

export default mongoose.model('Records', recordSchema, 'records');