import { NextFunction, Request, Response } from "express";

const ListBusiness = require('./list.business');

export const getLists = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { new: query } = req.query;

    const lists:any = await ListBusiness.getLists(query);

    return res.status(200).json(lists.reverse());
  } catch (error: any) {
    next(error);
  }
};

export const getList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const data:any = await ListBusiness.getList(id);

    return res.status(200).json(data);
  } catch (error: any) {
    next(error);
  }
};

export const createList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data:any = await ListBusiness.createList(req.body);

    return res.status(200).json(data);
  } catch (error: any) {
    next(error);
  }
};

export const updateList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const data:any = await ListBusiness.updateList(id, req.body);

    return res.status(200).json(data);
  } catch (error: any) {
    next(error);
  }
};

export const deleteList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const data:any = await ListBusiness.deleteList(id);

    return res.status(200).json(data);
  } catch (error: any) {
    next(error);
  }
};