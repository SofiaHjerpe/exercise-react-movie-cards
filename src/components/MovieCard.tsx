
import { MouseEventHandler } from "react";
import { IMovie } from "../interfaces";
interface IMovieCard {
  movie: IMovie;
  deleteMovie: (id: number) => void;
}

export function MovieCard({ movie, deleteMovie }: IMovieCard): JSX.Element {
    const handleDeleteCardOnClick: MouseEventHandler<HTMLDivElement> = (event) =>{
        deleteMovie(movie.id);
    }
  return (
      <div className="card" onClick={handleDeleteCardOnClick}>
            <h2>{movie.title}</h2>
            <div className="info">
              <p>{movie.range} /5</p>
              <p>{movie.genre}</p>
            </div>
            <p>{movie.description}</p>
       
      </div>
  
  );
}
