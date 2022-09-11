import { Schema, model  } from 'mongoose';

interface UserProps {
  username: string;
  email: string;
  password: string;
  profilePic: string;
  isAdmin: boolean;
}

const userSchema = new Schema<UserProps>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePic: { type: String, default: '' },
  isAdmin: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = model("User", userSchema);