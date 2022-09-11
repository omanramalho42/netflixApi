import { 
  Response, 
  Request, 
  NextFunction 
} from "express";

const CryptoJS = require('crypto-js');

import { UserProps } from "../Models/User";

const express = require('express');

const User = require('../Models/User');

const router = express.Router();

router.post('/register', async (req: Request, res: Response, next: NextFunction) => {
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
});

router.get('/login', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user: UserProps = await User.findOne({ email: req.body.email })
    !user && res.status(401).json('Este usuário não existe');

    const decodedPass = CryptoJS.AES.decrypt(user.password, process.env.SECRET_ALGORITHM);
    const originalPass = decodedPass.toString(CryptoJS.enc.Utf8);

    originalPass !== req.body.password &&
      res.status(401).json("Credenciais incorretas");

    res.status(201).json({ message: 'login realizado com sucesso' });
  } catch (error) {
    res.status(401).json(error);
    next(error);
  }
});


module.exports = router;