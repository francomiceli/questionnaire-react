import React from "react";
import QuestionnaireForm from "./components/Questionnaire/QuestionnaireForm";
import { ThemeProvider } from "./store/theme-context";
import ThemeToggler from "./components/Layout/ThemeToggler";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <ThemeToggler />      
      <QuestionnaireForm />
    </ThemeProvider>
  );
};

export default App;