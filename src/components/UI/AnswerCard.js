import React from "react";

import "./AnswerCard.css";

const AnswerCard = (props) => {
  const classes = "answer-card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default AnswerCard;
