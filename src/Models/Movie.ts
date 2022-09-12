import { Schema, model } from 'mongoose';

export interface MovieProps {
    title: string;
    desc: string;
    avaliation: number;
    img: string;
    imgTitle?: string;
    imgSm?: string;
    trailer?: string;
    video?: string;
    year?: string;
    limit?: string;
    genre?: string;
    isSeries?: boolean;
}

const MovieSchema = new Schema<MovieProps>({
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

module.exports = model("Movie", MovieSchema);