import React from "react";

const NextButton = ({ onClick }) => {
  return (
    <div className="controls">
      <button className="next-btn" onClick={onClick}>
        Next Card
      </button>
    </div>
  );
};

export default NextButton;
