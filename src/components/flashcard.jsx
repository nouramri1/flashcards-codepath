import React, { useEffect, useState } from "react";

export default function Flashcard({ card, revealed }) {
  const [showBack, setShowBack] = useState(false);

  
  useEffect(() => {
    setShowBack(revealed); 
  }, [revealed]);

  const handleClick = () => {
    if (!revealed) return;          
    setShowBack((s) => !s);         
  };

  return (
    <div className={`flashcard ${showBack ? "flipped" : ""}`} onClick={handleClick}>
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <p>{card.question}</p>
        </div>
        <div className="flashcard-back">
          <p>{card.answer}</p>
        </div>
      </div>
    </div>
  );
}
