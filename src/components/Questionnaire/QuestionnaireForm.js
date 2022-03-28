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
  const previousStep = () => {
    setCurrentStep((currStep) => currStep - 1);
  };
  const nextStep = () => {
    setCurrentStep((currStep) => currStep + 1);
  };
  const submitStep = async (event) => {
    event.preventDefault();    
    await fetch('https://questionnaire-react-fabd9-default-rtdb.firebaseio.com/answers.json', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })    
    setCurrentStep((currStep) => currStep + 1);
  }  
  const restartQuestionnaire = async () => {
    await fetch('https://questionnaire-react-fabd9-default-rtdb.firebaseio.com/answers.json', {
      method: 'DELETE',      
      body: null
    })    
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
          back={previousStep}
          next={nextStep}          
        />
      )}
      {currentStep === 3 && (
        <Question2
          data={formData}
          handleChange={handleChange}
          back={previousStep}
          next={nextStep}          
        />
      )}
      {currentStep === 4 && (
        <Question3
          data={formData}
          handleChange={handleChange}
          back={previousStep}
          submit={submitStep}          
        />
      )}
      {currentStep === 5 && (
        <AnswersSummary          
          handleChange={handleChange}
          restart={restartQuestionnaire}
        />
      )}
    </main>
  );
};

export default QuestionnaireForm;
