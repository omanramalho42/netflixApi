import { MovieProps } from "../../Models/Movie";

const Movie = require('../../Models/Movie');

export const getMovies = async (query: boolean) => {
  try {
    const movies = await query 
    ? Movie.find().sort({ _id: -1 }).limit(2) 
    : Movie.find();
  

    return movies;
  } catch (error) {
    throw error;
  }
}

export const getMovie = (id: string) => {
  try {
    const movie = Movie.findById(id).exec();

    return movie;
  } catch (error) {
    throw error;
  }
}

export const insertMovie = async (newMovie: any) => {
  try {
    const movies = await newMovie.save();

    return movies;
  } catch (error) {
    throw error;
  }
}

export const updateMovie = async (id: string, updatedMovie: MovieProps) => {
  try {
    const movie = await Movie.findByIdAndUpdate(id, updatedMovie);

    return movie;
  } catch (error) {
    throw error;
  }
}

export const deleteMovie = async (id: string) => {
  try {
    const movie = await Movie.findByIdAndDelete(id);

    return movie;
  } catch (error) {
    throw error;
  }
}