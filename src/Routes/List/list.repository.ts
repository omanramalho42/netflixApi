import { MovieProps } from "../../Models/Movie";

const List = require('../../Models/List');

export const getLists = async (query: boolean) => {
  try {
    const lists = await query 
    ? List.find().sort({ _id: -1 }).limit(2) 
    : List.find();

    return lists;
  } catch (error) {
    throw error;
  }
}

export const getList = (id: string) => {
  try {
    const list = List.findById(id).exec();

    return list;
  } catch (error) {
    throw error;
  }
}

export const createList = async (newList: any) => {
  try {
    const list = await newList.save();

    return list;
  } catch (error) {
    throw error;
  }
}

export const updateList = async (id: string, updatedList: MovieProps) => {
  try {
    const list = await List.findByIdAndUpdate(id, updatedList);

    return list;
  } catch (error) {
    throw error;
  }
}

export const deleteList = async (id: string) => {
  try {
    const list = await List.findByIdAndDelete(id);

    return list;
  } catch (error) {
    throw error;
  }
}