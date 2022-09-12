import { 
  Response, 
  Request, 
  NextFunction 
} from "express";
const jwt = require('jsonwebtoken');

export const generateToken = (id: string, isAdmin: Boolean) => {
  try {
    const accessToken = jwt.sign(
      { id: id, isAdmin: isAdmin }, 
      process.env.JWT_SECRET_KEY,
      { expiresIn: "5d" }
    );

    return accessToken;
  } catch (error) {
    throw error;
  }
}

export const verifyToken = (req: any, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.token;

    if(authHeader) {
      const token = authHeader.split(" ")[1];
      
      jwt.verify(token, process.env.JWT_SECRET_KEY, (err: any, user: any) => {
        if(err) {
          return res.status(400).send('Token não é válido!');
        }

        req.user = user;
        next();
      });
    } else {
      return res.status(400).json('Você não está autenticado');
    }
  } catch (error: any) {
    res.status(500).json('Ocorreu um erro ao verificar o token de acesso ' + error);
    next(error);
  }
}