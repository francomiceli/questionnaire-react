import React, { useState, useEffect } from "react";
import "./Question2.css";
import QuestionnaireControl from "./QuestionnaireControl";

const Question2 = ({ data, handleChange, back, next }) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const genreIsValid = data.genre !== "";

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
          <select name="genre" value={data.genre} onChange={handleChange}>
            <option value="">--Please choose an option--</option>
            <option value="Hip Hop">Hip Hop</option>
            <option value="House">House</option>
            <option value="Rock">Rock</option>
            <option value="Pop">Pop</option>
            <option value="Trap">Trap</option>
          </select>
        </div>
        <div className="question2-action__container">
          <QuestionnaireControl
            formIsValid={formIsValid}
            back={back}
            next={next}
          />
        </div>
      </div>
    </form>
  );
};
export default Question2;
