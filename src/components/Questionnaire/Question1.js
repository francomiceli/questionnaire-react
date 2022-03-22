import React, { useState, useEffect } from "react";
import "./Question1.css";
import QuestionnaireControl from "./QuestionnaireControl";

const Question1 = ({ data, handleChange, back, next }) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const nameIsValid = data.name !== "";
  const emailIsValid = data.email !== "" && data.email.includes("@");

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
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div className="question1-email__control">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email here..."
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div question="question1-action__container">
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
export default Question1;
