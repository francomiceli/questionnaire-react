import React from "react";
import "./AnswersSummary.css";
import "./Button.css";
import AnswerCard from "../UI/AnswerCard";
import QuestionnaireControl from "./QuestionnaireControl";

const AnswersSummary = ({ data, restart }) => {
  const listItems = Object.entries(data).map(([key, value]) => (
    <AnswerCard key={key}>
      <strong>
        Your {key === "genre" ? "favourite" : ""} {key}:
      </strong>{" "}
      {value}
    </AnswerCard>
  ));
  return (
    <div className="answers__container">
      <p className="answers__subtitle">
        Thank you for your time! Here are your answers:
      </p>
      <div className="answers-items">
        <div className="answer-cards__container">{listItems}</div>
      </div>
      <div className="answers__actions">
        <QuestionnaireControl restart={restart} />
      </div>
    </div>
  );
};
export default AnswersSummary;
