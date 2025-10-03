import React, { useState } from "react";
import { inventionSet } from "./data/cards";
import Flashcard from "./components/flashcard";
import NextButton from "./components/NextButton";
import "./App.css";

export default function App() {
  const { title, description, cards } = inventionSet;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextRandomCard = () => {
    if (cards.length <= 1) return; 
    let idx = currentIndex;
    while (idx === currentIndex) {
      idx = Math.floor(Math.random() * cards.length);
    }
    setCurrentIndex(idx);
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
        <Flashcard card={cards[currentIndex]} />
      </section>

      <NextButton onClick={nextRandomCard} />
    </div>
  );
}
