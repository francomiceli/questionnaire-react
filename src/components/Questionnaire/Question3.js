import React, { useState, useEffect } from "react";

import "./Question3.css";
import "./Button.css";

const Question3 = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const descriptionIsValid =
    props.data.description !== "" && props.data.description.length <= 50;

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
            value={props.data.description}
            onChange={props.handleChange}
          ></textarea>
        </div>
        <div className="question3-description__word-tracker">
          <span>
            {"Total characters used: " + props.data.description.length + "/50"}
          </span>
        </div>
        <div className="question3-action__container">
          <button
            className="button question3-action__back"
            onClick={props.back}
          >
            Back
          </button>
          <button
            className="button question3-action__next"
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
export default Question3;
