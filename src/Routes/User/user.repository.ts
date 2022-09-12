import { UserProps } from "../../Models/User";

const User = require('../../Models/User');

export const getUser = async (id: string) => {
  try {
    const user = await User.findById(id).exec();
    
    return user;
  } catch (error: any) {
    throw('Ocorreu um erro inesperado ao pegar o usuário: ' + error);
  }
}

export const updateUser = async (id: string, newUser: UserProps) => {
  try {
    const user = await User.findByIdAndUpdate(id, newUser);
    
    return user;
  } catch (error: any) {
    throw('Ocorreu um erro inesperado ao atualizar o usuário: ' + error);
  }
}

export const deleteUser = async (id: string) => {
  try {
    const user = await User.findByIdAndDelete(id);
    
    return user;
  } catch (error: any) {
    throw('Ocorreu um erro inesperado ao deletar o usuário: ' + error);
  }
}

export const getAllUsers = async (query: Boolean) => {
  try {
    const users = await query 
      ? User.find().sort({ _id: -1 }).limit(2) 
      : User.find();
    
    return users;
  } catch (error: any) {
    throw('Ocorreu um erro inesperado ao pegar todos os usuários: ' + error);
  }
}

export const getStats = async () => {
  try {
    const userStats = await User.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" }
        }
      }, {
        $group: {
          _id: "$month",
          total: { $sum: 1 }
        },
      },
    ]);
    
    return userStats;
  } catch (error: any) {
    throw('Ocorreu um erro inesperado ao pegar dados do usuário: ' + error);
  }
}