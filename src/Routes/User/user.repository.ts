const User = require('../../Models/User');

export const getUser = async (id: string) => {
  try {
    const user = await User.findById(id).exec();
    
    return user;
  } catch (error: any) {
    throw('Ocorreu um erro inesperado ao pegar o usuário: ' + error);
  }
}