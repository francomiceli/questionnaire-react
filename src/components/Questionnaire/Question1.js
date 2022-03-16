import React, { useState, useEffect } from "react";
import "./Question1.css";
import "./Button.css";

const Question1 = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const nameIsValid = props.data.name !== "";
  const emailIsValid =
    props.data.email !== "" && props.data.email.includes("@");

  useEffect(() => {
    if (nameIsValid && emailIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [nameIsValid, emailIsValid]);

  return (
    <form>
      <div className="question1__container">
        <p className="question1__subtitle">
          First, tell us your name and email:
        </p>
        <div className="question1-name__control">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name here..."
            value={props.data.name}
            onChange={props.handleChange}
          />
        </div>
        <div className="question1-email__control">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email here..."
            value={props.data.email}
            onChange={props.handleChange}
          />
        </div>
        <div question="question1-action__container">
          <button
            className="button question1-action__back"
            onClick={props.back}
          >
            Back
          </button>
          <button
            className="button question1-action__next"
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
export default Question1;
