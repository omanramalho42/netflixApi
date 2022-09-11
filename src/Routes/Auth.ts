import { 
  Response, 
  Request, 
  NextFunction 
} from "express";

const express = require('express');

const User = require('../Models/User');

const router = express.Router();

router.post('/register', async (req: Request, res: Response, next: NextFunction) => {
  const { 
    username,
    email,
    password,
    profilePic,
    isAdmin
  } = req.body;
  
  const newUser = new User({
    username,
    email,
    password,
    profilePic,
    isAdmin
  });
  
  try {
    const user = await newUser.save();

    return res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
    next(error);
  }
});

router.get('/login', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;


    res.status(201).json({ message: 'login realizado com sucesso' });
  } catch (error) {
    res.status(401).json(error);
    next(error);
  }
});


module.exports = router;