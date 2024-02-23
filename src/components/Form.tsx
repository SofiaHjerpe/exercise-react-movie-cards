import { FormEventHandler } from "react";

interface IFormProps {
  handleOnSubmit: FormEventHandler<HTMLFormElement>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setGenre: React.Dispatch<React.SetStateAction<string>>;
  setRange: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  movieTitle: string;
  genre: string;
  range: string;
  description: string;
}

export function Form(props: IFormProps) {
  return (
    <form className="form" onSubmit={props.handleOnSubmit}>
      <label htmlFor="title">
        Title
        <input
          onChange={(event) => props.setTitle(event.target.value)}
          type="text"
          value={props.movieTitle}
          id="title"
          placeholder="Title"
        ></input>
      </label>

      <label htmlFor="range">
        Range(1-5)
        <input
          value={props.range}
          type="range"
          onChange={(event) => props.setRange(event.target.value)}
          list="markers"
          min="1"
          max="5"
          id="range"
        ></input>
        <datalist id="markers">
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
          <option value="4"></option>
          <option value="5"></option>
        </datalist>
      </label>
      <label htmlFor="genre">
        Genre
        <select value={props.genre} id="genre" onChange={(event) => props.setGenre(event.target.value)}>
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
          value={props.description}
          onChange={(event) => props.setDescription(event.target.value)}
          placeholder="Type something"
          id="description"
        ></textarea>
      </label>
      <div className="form-buttons">
        <button>Cancel</button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
