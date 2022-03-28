import React, { useState, useEffect } from "react";
import "./AnswersSummary.css";
import AnswerCard from "../UI/AnswerCard";
import QuestionnaireControl from "./QuestionnaireControl";

const AnswersSummary = ({ restart }) => {
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAnswersHandler();
  }, []);

  async function fetchAnswersHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://questionnaire-react-fabd9-default-rtdb.firebaseio.com/answers.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong with your request");
      }
      const data = await response.json();      
      const parsedData = Object.entries(data);
      const answersList = Object.entries(parsedData[0][1]).map(
        ([key, value]) => (
          <AnswerCard key={key}>
            <strong data-testid="answers">
              Your {key === "genre" ? "favourite" : ""} {key}:
            </strong>
            {" " + value}
          </AnswerCard>
        )
      );
      setAnswers(answersList);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  return (
    <div className="answers__container">
      <p className="answers__subtitle">
        Thank you for your time! Here are your answers:
      </p>
      <div className="answers-items">
        <div className="answer-cards__container">
          {isLoading && <p>Loading...</p>}
          {!isLoading && answers.length > 0 && answers}
          {!isLoading && error && <p>{error}</p>}
        </div>
      </div>
      <div className="answers__actions">
        <QuestionnaireControl restart={restart} />
      </div>
    </div>
  );
};

export default AnswersSummary;
