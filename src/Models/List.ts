import { Schema, model } from 'mongoose';

const ListSchema = new Schema({
  title: { type: String, required: true, unique: true },
  type: { type: String },
  genre: { type: String },
  content: { type: Array }
}, { timestamps: true });

module.exports = model("List", ListSchema);