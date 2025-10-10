import React, { useState } from "react";
import { inventionSet } from "./data/cards";
import Flashcard from "./components/flashcard";
import "./App.css";

function normalize(s) {
  return s.trim().toLowerCase();
}

function isCorrectGuess(guess, answer) {
  const g = normalize(guess);
  const a = normalize(answer);
  if (!g) return false;
  if (g === a) return true;                 
  const last = a.split(" ").at(-1);         
  if (last && g === last) return true;
  return false;
}

export default function App() {
  const { title, description, cards } = inventionSet;

  const [currentIndex, setCurrentIndex] = useState(0);

 
  const [userAnswer, setUserAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [correct, setCorrect] = useState(null); 

  const atStart = currentIndex === 0;
  const atEnd = currentIndex === cards.length - 1;

  function resetForNextCard() {
    setUserAnswer("");
    setRevealed(false);
    setCorrect(null);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const ok = isCorrectGuess(userAnswer, cards[currentIndex].answer);
    setCorrect(ok);
    setRevealed(true); 
  };

  const goPrev = () => {
    if (atStart) return;
    setCurrentIndex((i) => i - 1);
    resetForNextCard();
  };

  const goNext = () => {
    if (atEnd) return;
    setCurrentIndex((i) => i + 1);
    resetForNextCard();
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </header>

      <section className="meta">
        <p>Total Cards: <strong>{cards.length}</strong></p>
      </section>

      <section className="card-area">
        <Flashcard card={cards[currentIndex]} revealed={revealed} />
      </section>

      {/* Guess input and submit */}
      <section className="answer-area">
        <form onSubmit={handleSubmit} className="answer-form">
          <label htmlFor="guess" className="answer-label">Your guess</label>
          <div className="answer-row">
            <input
              id="guess"
              className="answer-input"
              type="text"
              placeholder="Type your answer…"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={revealed}
            />
            <button
              type="submit"
              className="submit-btn"
              disabled={!userAnswer || revealed}
            >
              Submit
            </button>
          </div>
        </form>

        {revealed && correct === true && (
          <div className="feedback correct">✅ Correct!</div>
        )}
        {revealed && correct === false && (
          <div className="feedback incorrect">
            ❌ Not quite. Answer: <strong>{cards[currentIndex].answer}</strong>
          </div>
        )}
      </section>

      {/* Ordered navigation with disabled edges (no wrap) */}
      <section className="controls-row">
        <button
          className={`nav-btn ${atStart ? "disabled" : ""}`}
          onClick={goPrev}
          disabled={atStart}
        >
          ◀︎ Previous
        </button>
        <div className="index-indicator">
          {currentIndex + 1} / {cards.length}
        </div>
        <button
          className={`nav-btn ${atEnd ? "disabled" : ""}`}
          onClick={goNext}
          disabled={atEnd}
        >
          Next ▶︎
        </button>
      </section>
    </div>
  );
}
