import { 
  Response, 
  Request, 
  NextFunction 
} from "express";

import { UserProps } from "../../Models/User";

const CryptoJS = require('crypto-js');
const User = require('../../Models/User');
const jwt = require('jsonwebtoken');

export const register = async (req: Request, res: Response, next: NextFunction) => {
  const { 
    username,
    email,
    profilePic,
    isAdmin
  } = req.body;
  
  const newUser = new User({
    username,
    email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_ALGORITHM
    ).toString(),
    profilePic,
    isAdmin
  });
  
  try {
    const user: UserProps = await newUser.save();

    return res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
    next(error);
  }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if(!user) {
      return res.status(401).json('Este usuário não existe');
    }

    const decodedPass = CryptoJS.AES.decrypt(user.password, process.env.SECRET_ALGORITHM);
    const originalPass = decodedPass.toString(CryptoJS.enc.Utf8);

    if(originalPass !== req.body.password) {
      return res.status(401).json("Credenciais incorretas");
    }

    const { password, ...users } = user._doc;

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin }, 
      process.env.JWT_SECRET_KEY,
      { expiresIn: "5d" }
    );

    res.status(201).json({ ...users, accessToken });
  } catch (error) {
    res.status(401).json(error);
    next(error);
  }
}