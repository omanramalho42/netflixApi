import { MovieProps } from "../../Models/Movie";

const List = require('../../Models/List');

export const getLists = async (type: string, genre: string) => {
  try {
    let list = [];

    if(type) {
      if(genre) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: type, genre: genre } }, 
        ]);
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: type } },
        ])
      }
    } else {
      list = await List.aggregate([ { $sample: { size: 10 } }]);
    }

    return list;
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