import React, { useState, useContext } from "react";
import { ThemeContext } from "../../App";
import ThemeToggle from "../Layout/ThemeToggle";
import QuestionnaireStart from "./QuestionnaireStart";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import AnswersSummary from "./AnswersSummary";
import "./QuestionnaireForm.css";

const QuestionnaireForm = () => {
  const { theme } = useContext(ThemeContext);
  const style = {
    dark: {
      backgroundColor: "#161819",
      color: "#8EF2FF",
    },
    light: {
      backgroundColor: "#8EF2FF",
      color: "#161819",
    },
    common: {
      transition: "all 1s ease",
    },
  };
  const themeStyle = {
    ...(theme === "light" ? style.light : style.dark),
    ...style.common,
  };
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    genre: "",
    description: "",
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const restartQuestionnaire = () => {
    setFormData({
      name: "",
      email: "",
      genre: "",
      description: "",
    });
    setCurrentStep(1);
  };
  switch (currentStep) {
    case 1:
      return (
        <main className="questionnaire-form__container" style={themeStyle}>
          <span className="toggle-theme-action">
            <ThemeToggle />
          </span>
          <QuestionnaireStart style={themeStyle} start={nextStep} />
        </main>
      );
    case 2:
      return (
        <main className="questionnaire-form__container" style={themeStyle}>
          <span className="toggle-theme-action">
            <ThemeToggle />
          </span>
          <Question1
            style={themeStyle}
            data={formData}
            handleChange={handleChange}
            next={nextStep}
            back={previousStep}
          />
        </main>
      );
    case 3:
      return (
        <main className="questionnaire-form__container" style={themeStyle}>
          <span className="toggle-theme-action">
            <ThemeToggle />
          </span>
          <Question2
            style={themeStyle}
            data={formData}
            handleChange={handleChange}
            next={nextStep}
            back={previousStep}
          />
        </main>
      );
    case 4:
      return (
        <main className="questionnaire-form__container" style={themeStyle}>
          <span className="toggle-theme-action">
            <ThemeToggle />
          </span>
          <Question3
            style={themeStyle}
            data={formData}
            handleChange={handleChange}
            next={nextStep}
            back={previousStep}
          />
        </main>
      );
    default:
      return (
        <main className="questionnaire-form__container" style={themeStyle}>
          <span className="toggle-theme-action">
            <ThemeToggle />
          </span>
          <AnswersSummary
            style={themeStyle}
            data={formData}
            handleChange={handleChange}
            restart={restartQuestionnaire}
          />
        </main>
      );
  }
};

export default QuestionnaireForm;
