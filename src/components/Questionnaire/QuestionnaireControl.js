import React from "react";
import "./QuestionnaireControl.css";

const QuestionnaireControl = ({ formIsValid, start, back, next, submit, restart }) => {
  return (
    <div question="question1-action__container">
      {start && (
        <button className="button question1-action__next" onClick={start}>
          Start
        </button>
      )}
      {back && (
        <button className="button question1-action__back" onClick={back}>
          Back
        </button>
      )}
      {next && (
        <button
          className="button question1-action__next"
          disabled={!formIsValid}
          onClick={next}
        >
          Next
        </button>
      )}
      {submit && (
        <button className="button question1-action__next" onClick={submit}>
          Submit
        </button>
      )}
      {restart && (
        <button className="button question1-action__next" onClick={restart}>
          Restart Questionnaire!
        </button>
      )}
    </div>
  );
};

export default QuestionnaireControl;
