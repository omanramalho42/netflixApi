import { NextFunction, Request, Response } from "express";

const MovieBusiness = require('./movie.business');

export const getMovies = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { new: query } = req.query;

    const movies:any = await MovieBusiness.getMovies(query);

    return res.status(200).json(movies.reverse());
  } catch (error: any) {
    next(error);
  }
};

export const getMovie = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const data:any = await MovieBusiness.getMovie(id);

    if(data.length === 0) {
      return res.status(403).json('Filme não tem informaçoes');
    }

    return res.status(200).json(data);
  } catch (error: any) {
    next(error);
  }
};

export const getRandomMovie = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { type } = req.query;

    const data:any = await MovieBusiness.getRandomMovie(type);

    return res.status(200).json(data);
  } catch (error: any) {
    next(error);
  }
};

export const insertMovie = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data:any = await MovieBusiness.insertMovie(req.body);

    if(!data) {
      throw 'Ocorreu um erro ao inserir filme na lista de filmes'
    }

    return res.status(200).json(data);
  } catch (error: any) {
    next(error);
  }
};

export const updateMovie = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const data:any = await MovieBusiness.updateMovie(id, req.body);

    if(!data) {
      throw 'Ocorreu um erro ao atualizar o filme'
    }

    return res.status(200).json(data);
  } catch (error: any) {
    next(error);
  }
};

export const deleteMovie = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const data:any = await MovieBusiness.deleteMovie(id);

    if(!data) {
      throw 'Ocorreu um erro ao deletar o filme'
    }

    return res.status(200).json(data);
  } catch (error: any) {
    next(error);
  }
};