const jwt = require('jsonwebtoken');

import { 
  Request, 
  Response, 
  NextFunction 
} from "express";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader: any = req.headers.token;
    if(authHeader) {
      const token = authHeader.split(" ")[1];
      
      jwt.verify(token, process.env.JWT_SECERT_KEY, (err: any, user: any) => {
        if(err) {
          return res.status(400).send('Token não é válido!');
          // req.user = user;
        }
      });

    } else {
      return res.status(400).json('Você não está autenticado');
    }
  } catch (error: any) {
    res.status(500).json('Ocorreu um erro ao verificar o token de acesso ' + error);
    next(error);
  }
}

module.exports = verifyToken;