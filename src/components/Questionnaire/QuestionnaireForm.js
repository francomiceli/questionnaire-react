import React, { useState } from "react";
import { useTheme } from "../../store/theme-context";
import QuestionnaireStart from "./QuestionnaireStart";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import AnswersSummary from "./AnswersSummary";
import "./QuestionnaireForm.css";

const QuestionnaireForm = () => {
  const { theme } = useTheme();
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
    setFormData((formData) => {
      return { ...formData, [event.target.name]: event.target.value };
    });
  };
  const nextStep = () => {
    setCurrentStep((currStep) => currStep + 1);
  };
  const previousStep = () => {
    setCurrentStep((currStep) => currStep - 1);
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
  return (
    <main className="questionnaire-form__container" style={themeStyle}>
      {currentStep === 1 && <QuestionnaireStart start={nextStep} />}
      {currentStep === 2 && (
        <Question1
          data={formData}
          handleChange={handleChange}
          next={nextStep}
          back={previousStep}
        />
      )}
      {currentStep === 3 && (
        <Question2
          data={formData}
          handleChange={handleChange}
          next={nextStep}
          back={previousStep}
        />
      )}
      {currentStep === 4 && (
        <Question3
          data={formData}
          handleChange={handleChange}
          submit={nextStep}
          back={previousStep}
        />
      )}
      {currentStep === 5 && (
        <AnswersSummary
          data={formData}
          handleChange={handleChange}
          restart={restartQuestionnaire}
        />
      )}
    </main>
  );
};

export default QuestionnaireForm;
