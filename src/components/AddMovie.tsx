import { MouseEventHandler, useState } from "react";
import { IMovie } from "../interfaces";

export function AddMovie(): JSX.Element {
  const movies: IMovie[] = [];
  const [movieTitle, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [range, setRange] = useState("");
  const [description, setDescription] = useState("");

  const handleOnClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    console.log(movieTitle);
    console.log(genre);
    console.log(range);
    console.log(description);
    const movieObject = {
      id: movies.length,
      title: movieTitle,
      genre: genre,
      range: range,
      description: description,
    };
    movies.push(movieObject);
    console.log(movies);
  };
  return (
    <form className="form">
      <label htmlFor="title">
        Title
        <input
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          value={movieTitle}
          id="title"
          placeholder="Title"
        ></input>
      </label>

      <label htmlFor="range">
        Range
        <input
          value={range}
          type="range"
          onChange={(event) => setRange(event.target.value)}
          list="markers"
          min="0"
          max="5"
          id="range"
        ></input>
        <datalist id="markers">
          <option value="0"></option>
          <option value="5"></option>
        </datalist>
      </label>
      <label htmlFor="genre">
        Genre
        <select value={genre} id="genre" onChange={(event) => setGenre(event.target.value)}>
          <option value="Sci-fi">Sci-fi</option>
          <option value="Drama">Drama</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Thriller">Thriller</option>
          <option value="Romance">Romance</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <label className="description" htmlFor="description">
        Description
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Type something"
          id="description"
        ></textarea>
      </label>
      <div className="form-buttons">
        <button>Cancel</button>
        <button onClick={handleOnClick}>Add</button>
      </div>
    </form>
  );
}
