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

    res.status(200).json({ message: 'Sucesso ao pegar o usuário', data });
  } catch (error: any) {
    res.status(500).json('Ocorreu um erro inesperado ao retornar o usuário: ' + error)
    next(error);
  }
}

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { new: query } = req.query;

    const data = await userBusiness.getAllUsers(query);

    res.status(200).json({ message: 'Sucesso ao listar os usuários', data });
  } catch (error: any) {
    res.status(500).json('Ocorreu um erro inesperado ao listar os usuários: ' + error)
    next(error);
  }
}

export const getStats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await userBusiness.getStats();

    res.status(200).json({ message: 'Sucesso ao pegar dados dos usuários', data });
  } catch (error: any) {
    res.status(500).json('Ocorreu um erro inesperado ao pegar dados dos usuários: ' + error)
    next(error);
  }
}

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { username, password, ...body } = req.body;
      
    const data = await userBusiness.updateUser(id, username, password, body);

    res.status(200).json({ message: 'Sucesso ao atuliazar o usuário', data });
  } catch (error: any) {
    res.status(500).json('Ocorreu um erro inesperado ao atualizar o usuário: ' + error)
    next(error);
  }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const data = await userBusiness.deleteUser(id);

    res.status(200).json({ message: 'Sucesso ao deletear o usuário', data });
  } catch (error: any) {
    res.status(500).json('Ocorreu um erro inesperado ao deletar o usuário: ' + error)
    next(error);
  }
}