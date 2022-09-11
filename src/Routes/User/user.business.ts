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

export const updateUser = async (id: string, username: string, password: string) => {
  try {
    const user = await userRepository.getUser(id);
    
    if(!user) {
      const err = 'Usuário não encontrado'
      throw err;
    }

    const newUser = {
      username,
      password
    }

    const updateUser = userRepository.updateUser(id, newUser);

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