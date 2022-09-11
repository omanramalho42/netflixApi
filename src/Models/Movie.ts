import { Schema, model } from 'mongoose';

const movieSchema = new Schema({
  title: { type: String, required: true, unique: true },
  desc: { type: String, required: true },
  avaliation: { type: Number, required: true },
  img: { type: String, required: true, default: '' },
  imgTitle: { type: String },
  imgSm: { type: String },
  trailer: { type: String },
  video: { type: String },
  year: { type: String },
  limit: { type: String },
  genre: { type: String },
  isSeries: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = model("Movie", movieSchema);