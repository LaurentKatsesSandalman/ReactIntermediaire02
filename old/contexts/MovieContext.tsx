
import { createContext } from "react";
import { MovieListOrNull, MovieListSetter } from "../App";

const MovieContext = createContext<{ movies: MovieListOrNull, setMovies: MovieListSetter } | null>(null);

export default MovieContext;