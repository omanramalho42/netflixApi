const CryptoJS = require('crypto-js');

const AuthRepository = require('./auth.repository');

import { UserProps } from "../../Models/User";
import { generateToken } from "../../utils/jwt.service";

const User = require('../../Models/User');

export const register = async (username: string, email: string, password: string, profilePic: string, isAdmin: Boolean) => {
  try {
    const newUser = new User({
      username,
      email,
      password: CryptoJS.AES.encrypt(
        password,
        process.env.SECRET_ALGORITHM
      ).toString(),
      profilePic,
      isAdmin
    });
    
    const user: UserProps = await AuthRepository.register(newUser);
    if(!user) {
      throw 'Ocorreu um erro ao registrar o usuário'
    }
   
    return user;
  } catch (error) {
    throw error;
  }
}

export const login = async (email: string, pass: string) => {
  try {
    const user = await AuthRepository.login(email);
    if(!user) {
      throw('Usuário não existe')
    }
  
    const decodedPass = CryptoJS.AES.decrypt(user.password, process.env.SECRET_ALGORITHM);
    const originalPass = decodedPass.toString(CryptoJS.enc.Utf8);
  
    if(originalPass !== pass) {
      throw "Credenciais incorretas";
    }
    
    const accessToken = generateToken(user.id, user.isAdmin);
  
    const { password, ...users } = user._doc;

    const body = {
      ...users,
      accessToken
    }

    return body;
  } catch (error) {
    throw error;
  }
}