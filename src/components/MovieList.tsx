import { IMovie } from "../interfaces";
import { MovieCard } from "./MovieCard";
interface IMovieListProps {
  movies: IMovie[];
  deleteMovie: (id: number) => void;
}
export function MovieList({ movies, deleteMovie }: IMovieListProps) {
  return movies.map((movieCard) => (
    <MovieCard movie={movieCard} deleteMovie={deleteMovie} key={movieCard.id} />
  ));
}
