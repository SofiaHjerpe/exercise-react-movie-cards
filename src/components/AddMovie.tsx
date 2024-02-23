import { FormEventHandler, useState } from "react";
import { IMovie } from "../interfaces";
import { MovieList } from "./MovieList";
import { Form } from "./Form";

export function AddMovie(): JSX.Element {
  const movies: IMovie[] = [];
  const [movie, setMovies] = useState(movies);
  const [movieTitle, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [range, setRange] = useState("");
  const [description, setDescription] = useState("");

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(movieTitle);
    console.log(genre);
    console.log(range);
    console.log(description);

    const newMovie = {
      id: movie.length,
      title: movieTitle,
      genre: genre,
      range: range,
      description: description,
    };

    setMovies([...movie, newMovie]);
    movies.push(newMovie);
  };

  function deleteMovie(id: number) {
    setMovies(movie.filter((movie) => movie.id !== id));
  }
  return (
    <div>
      <Form
        movieTitle={movieTitle}
        description={description}
        range={range}
        genre={genre}
        setDescription={setDescription}
        setGenre={setGenre}
        setTitle={setTitle}
        setRange={setRange}
        handleOnSubmit={handleOnSubmit}
      />

      <MovieList movies={movie} deleteMovie={deleteMovie} />
    </div>
  );
}
