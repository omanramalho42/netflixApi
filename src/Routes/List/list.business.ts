const ListRepository = require('./list.repository');
const List = require('../../Models/List');

export const getLists = async (query: false) => {
  try {
    const lists = await ListRepository.getMovies(query);

    if(!lists) {
      throw 'Não existe filmes na lista';
    }

    if(lists.length === 0) {
      throw 'Lista de filmes vazia';
    }

    return lists;
  } catch (error) {
    throw error;
  }
}

export const createList = async (movie: any) => {
  try {
    const newList = new List({
      title: movie.title,
      desc: movie.title,
      avaliation: movie.title,
      img: movie.img,
      ...movie
    });

    const list = await ListRepository.createList(newList);

    if(!list) {
      throw 'Ocorreu um erro ao criar a lista';
    }

    return list;
  } catch (error) {
    throw error;
  }
}

export const updateList = async (id: string, movie: any) => {
  try {
    const existsList = await ListRepository.getList(id);
    
    if(!existsList) {
      const err = 'Lista não encontrada'
      throw err;
    }

    const updateList = {
      desc: movie.desc,
      avaliation: movie.avaliation,
      img: movie.img,
      ...movie
    }

    const listUpdated = await ListRepository.updateList(id, updateList);

    if(!listUpdated) {
      throw 'Erro ao atulizar a lista';
    }

    return listUpdated;
  } catch (error) {
    throw error;
  }
}

export const deleteList = async (id: string) => {
  try {
    const existsList = await ListRepository.getList(id);
    
    if(!existsList) {
      const err = 'Lista não encontrada'
      throw err;
    }
    const listDeleted = await ListRepository.deleteList(id);

    if(!listDeleted) {
      throw 'Erro ao atulizar o filme';
    }

    return listDeleted;
  } catch (error) {
    throw error;
  }
}

export const getList = async (id: string) => {
  try {
    const list = await ListRepository.getList(id);

    if(!list) {
      throw 'Este filme não existe';
    }

    return list;
  } catch (error) {
    throw error;
  }
}
