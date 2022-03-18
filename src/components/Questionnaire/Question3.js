import React, { useState, useEffect } from "react";
import "./Question3.css";
import "./Button.css";
import QuestionnaireControl from "./QuestionnaireControl";

const Question3 = ({ data, handleChange, back, next }) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const descriptionIsValid =
    data.description !== "" && data.description.length <= 50;

  useEffect(() => {
    if (descriptionIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [descriptionIsValid]);

  return (
    <form>
      <div className="question3__container">
        <p className="question3__subtitle">
          How would describe yourself in fifty (50) words or less?
        </p>
        <div className="question3-description__control">
          <label htmlFor="description">Your answer:</label>
          <textarea
            name="description"
            cols={5}
            rows={5}
            wrap="hard"
            maxLength={50}
            placeholder="Enter your description here..."
            value={data.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="question3-description__word-tracker">
          <span>
            {"Total characters used: " + data.description.length + "/50"}
          </span>
        </div>
        <div className="question3-action__container">
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
export default Question3;
