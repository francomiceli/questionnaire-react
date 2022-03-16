import React, { useState } from "react";
import QuestionnaireForm from "./components/Questionnaire/QuestionnaireForm";
import "./App.css";

export const ThemeContext = React.createContext();

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <QuestionnaireForm />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
