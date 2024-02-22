export function AddMovie() {
  const handleOnClick: MouseEventHandler<HTMLButtonElement> = async () => {};
  return (
    <form className="form">
      <label htmlFor="title">
        Title
        <input className="title" type="text" id="title" placeholder="Title"></input>
      </label>

      <label htmlFor="range">
        Range
        <input type="range" list="markers" min="0" max="5" id="range"></input>
        <datalist id="markers">
          <option value="0"></option>
          <option value="5"></option>
        </datalist>
      </label>
      <label htmlFor="genre">
        Genre
        <select name="genre" id="genre">
          <option>Sci-fi</option>
          <option>Drama</option>
          <option>Action</option>
          <option>Comedy</option>
          <option>Thriller</option>
          <option>Romance</option>
          <option>Other</option>
        </select>
      </label>

      <label className="description" htmlFor="description">
        Description
        <textarea placeholder="Type something" id="description"></textarea>
      </label>
      <div className="form-buttons">
        <button>Cancel</button>
        <button onClick={handleOnClick}>Add</button>
      </div>
    </form>
  );
}
