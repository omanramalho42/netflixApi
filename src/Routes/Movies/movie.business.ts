import { MovieProps } from "../../Models/Movie";

const MovieRepository = require('./movie.repository');
const Movie = require('../../Models/Movie');

export const getMovies = async (query: false) => {
  try {
    const movies = await MovieRepository.getMovies(query);

    if(!movies) {
      throw 'Não existe filmes na lista';
    }

    if(movies.length === 0) {
      throw 'Lista de filmes vazia';
    }

    return movies;
  } catch (error) {
    throw error;
  }
}

export const getRandomMovie = async (type = 'null') => {
  try {
    const randomMovie = await MovieRepository.getRandomMovie(type);

    if(!randomMovie) {
      throw 'Filme não encontrado';
    }

    if(randomMovie.length === 0) {
      throw 'Filme não tem informaçoes';
    }

    return randomMovie;
  } catch (error) {
    throw error;
  }
}

export const insertMovie = async (movie: any) => {
  try {
    const newMovie = new Movie({
      title: movie.title,
      desc: movie.title,
      avaliation: movie.title,
      img: movie.img,
      ...movie
    });

    const movies: MovieProps = await MovieRepository.insertMovie(newMovie);

    if(!movies) {
      throw 'Ocorreu um erro ao inserir o filme';
    }

    return movies;
  } catch (error) {
    throw error;
  }
}

export const updateMovie = async (id: string, movie: any) => {
  try {
    const movieExists: MovieProps = await MovieRepository.getMovie(id);
    
    if(!movieExists) {
      const err = 'Filme não encontrado'
      throw err;
    }

    const updateMovie = {
      desc: movie.desc,
      avaliation: movie.avaliation,
      img: movie.img,
      ...movie
    }

    const movieUpdated = await MovieRepository.updateMovie(id, updateMovie);

    if(!movieUpdated) {
      throw 'Erro ao atulizar o filme';
    }

    return movieUpdated;
  } catch (error) {
    throw error;
  }
}

export const deleteMovie = async (id: string) => {
  try {
    const movieExists: MovieProps = await MovieRepository.getMovie(id);
    
    if(!movieExists) {
      const err = 'Filme não encontrado'
      throw err;
    }

    const movieDeleted = await MovieRepository.deleteMovie(id);

    if(!movieDeleted) {
      throw 'Erro ao atulizar o filme';
    }

    return movieDeleted;
  } catch (error) {
    throw error;
  }
}

export const getMovie = async (id: string) => {
  try {
    const movie = await MovieRepository.getMovie(id);

    if(!movie) {
      throw 'Este filme não existe';
    }

    return movie;
  } catch (error) {
    throw error;
  }
}
