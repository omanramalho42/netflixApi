const CryptoJS = require('crypto-js');
const userRepository = require('./user.repository');

import { UserProps } from "../../Models/User";

export const getUser = async (id: string) => {
  try {
    const user = await userRepository.getUser(id);
    
    if(!user) {
      const err = 'Usuário não encontrado'
      throw err;
    }

    return user;
  } catch (error: any) {
    throw 'Ocorreu um erro inesperado ao processasr o usuário ' + error
  }
}

export const updateUser = async (id: string, username: string, password: string, body: any) => {
  try {
    const user: UserProps = await userRepository.getUser(id);
    
    if(!user) {
      const err = 'Usuário não encontrado'
      throw err;
    }

    const newUser = {
      username,
      password: CryptoJS.AES.encrypt(
        password,
        process.env.SECRET_ALGORITHM
      ).toString(),
      ...body
    }

    const updateUser = await userRepository.updateUser(id, newUser);

    return updateUser;
  } catch (error: any) {
    throw 'Ocorreu um erro inesperado ao processar o usuário ' + error
  }
}

export const deleteUser = async (id: string) => {
  try {
    const user = await userRepository.getUser(id);
    
    if(!user) {
      const err = 'Usuário não encontrado'
      throw err;
    }

    //VERIFICAR SE USUARIO TEM PERMISSOA PARA FAZER ISSO

    // if(!user.isAdmin) {
    //   const err = 'Usuario não tem permissão para fazer isso'
    //   return err;
    // };

    const deletedUser = userRepository.deleteUser(id);

    return deletedUser;
  } catch (error: any) {
    throw 'Ocorreu um erro inesperado ao deletar o usuário ' + error
  }
}

export const getAllUsers = async (query = false) => {
  try {
    const users = await userRepository.getAllUsers(query);
  
    if(!users) {
      throw 'Não existem usuários cadstrados'
    }
    
    return users;
  } catch (error) {
    throw error;
  }
}

export const getStats = async () => {
  try {
    const today: any = new Date();
    const lastYear = today.setFullYear(today.setFullYear() - 1);

    const monthsArray = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ];

    const userStats = await userRepository.getStats();
  
    if(!userStats) {
      throw 'Não existem dados desse usuário cadstrados'
    }
    
    return userStats;
  } catch (error) {
    throw error;
  }
}