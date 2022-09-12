import { 
  Response, 
  Request, 
  NextFunction 
} from "express";

const AuthBussines = require('./auth.bussines');

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { 
      username,
      email,
      profilePic,
      isAdmin
    } = req.body;

    const data = await AuthBussines.register(username, email, profilePic, isAdmin);

    return res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
    next(error);
  }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await AuthBussines.login(req.body.email ,req.body.password);

    res.status(201).json(data);
  } catch (error) {
    res.status(401).json(error);
    next(error);
  }
}