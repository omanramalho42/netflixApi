import { 
  Response, 
  Request, 
  NextFunction 
} from "express";

const userBusiness = require('./user.business');

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const data = await userBusiness.getUser(id);

    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json('Ocorreu um erro inesperado ao retornar o usuário: ' + error)
    next(error);
  }
}