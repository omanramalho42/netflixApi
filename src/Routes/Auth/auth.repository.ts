import { UserProps } from "../../Models/User";

const User = require('../../Models/User');

export const register = async (newUser: any) => {
  try {
    const user: UserProps = await newUser.save();

    return user;
  } catch (error) {
    throw error
  }
}

export const login = async (email: string) => {
  try {
    const user = await User.findOne({ email: email });

    return user;
  } catch (error) {
    throw error
  }
}