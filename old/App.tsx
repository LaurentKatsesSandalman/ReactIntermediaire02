import { Dispatch, SetStateAction, useState } from "react";

import MovieList from './components/MovieList';
import MovieContext from './contexts/MovieContext';

interface Movie {
  movie_id: number,
  title: string,
  release_year: number,
}

export type MovieOrNull = Movie

export type MovieListOrNull = MovieOrNull[]
export type MovieListSetter = Dispatch<SetStateAction<MovieListOrNull>>

const harryPotterMovies = [
  {
    movie_id: 1,
    title: 'Harry Potter and the Sorcerers Stone',
    release_year: 2001,
  },
  {
    movie_id: 2,
    title: 'Harry Potter and the Chamber of Secrets',
    release_year: 2002,
  },
  {
    movie_id: 3,
    title: 'Harry Potter and the Prison of Azkaban',
    release_year: 2004,
  },
]


function App() {
  const [movies, setMovies] = useState<MovieListOrNull>(harryPotterMovies);

  return (
    <MovieContext.Provider value={{ movies: movies, setMovies: setMovies }}>
      <MovieList />
    </MovieContext.Provider>
  );
}

export default App
