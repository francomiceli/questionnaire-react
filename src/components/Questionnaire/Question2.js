import React, { useState, useEffect } from "react";
import "./Question2.css";
import "./Button.css";

const Question2 = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const genreIsValid = props.data.genre !== "";

  useEffect(() => {
    if (genreIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [genreIsValid]);

  return (
    <form>
      <div className="question2__container">
        <p className="question2__subtitle">
          Given these music genres, which one do you prefer?
        </p>
        <div className="question2-genre__control">
          <label htmlFor="genre">Music genres:</label>
          <select
            name="genre"
            value={props.data.genre}
            onChange={props.handleChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="Hip Hop">Hip Hop</option>
            <option value="House">House</option>
            <option value="Rock">Rock</option>
            <option value="Pop">Pop</option>
            <option value="Trap">Trap</option>
          </select>
        </div>
        <div className="question2-action__container">
          <button
            className="button question2-action__back"
            onClick={props.back}
          >
            Back
          </button>
          <button
            className="button question2-action__next"
            disabled={!formIsValid}
            onClick={props.next}
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
};
export default Question2;
