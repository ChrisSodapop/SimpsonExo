// src/components/DisplayEmployee.jsx
import React from "react";

const QuoteCard = ({ simpson }) => {
  return (
    <div className="quote-card">
      <img src={simpson.image} alt={simpson.character} />
      <h1>{simpson.character}</h1>
      <p>{simpson.quote}</p>
    </div>
  );
};

export default QuoteCard;
