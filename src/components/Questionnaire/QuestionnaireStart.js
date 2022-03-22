import React from "react";
import QuestionnaireControl from "./QuestionnaireControl";
import "./QuestionnaireStart.css";

const QuestionnaireStart = ({ start }) => {
  return (
    <div className="start__container">
      <h1 className="start__title">
        Your <br></br>Questionnaire.
      </h1>
      <p className="start__subtitle">
        A series of fast an easy questions.<br></br>The answers will be
        summarized at the end.<br></br>Click on the button below to start when
        you are ready.
      </p>
      <QuestionnaireControl start={start} />
    </div>
  );
};

export default QuestionnaireStart;
