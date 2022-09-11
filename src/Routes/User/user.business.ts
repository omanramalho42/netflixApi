const CryptoJS = require('crypto-js');
const userRepository = require('./user.repository');

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