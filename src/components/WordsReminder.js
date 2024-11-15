// src/components/WordsReminder.js
import React, { useState, useEffect } from "react";
import WordForm from "./WordForm";
import WordList from "./WordList";

const WordsReminder = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const storedWords = JSON.parse(localStorage.getItem("words")) || [];
    setWords(storedWords);
  }, []);

  const addWord = (word) => {
    const updatedWords = [...words, word];
    setWords(updatedWords);
    localStorage.setItem("words", JSON.stringify(updatedWords));
  };

  const deleteWord = (index) => {
    const updatedWords = words.filter((_, i) => i !== index);
    setWords(updatedWords);
    localStorage.setItem("words", JSON.stringify(updatedWords));
  };

  const reorderWords = (fromIndex, toIndex) => {
    const updatedWords = [...words];
    const movedWord = updatedWords.splice(fromIndex, 1)[0];
    updatedWords.splice(toIndex, 0, movedWord);
    setWords(updatedWords);
    localStorage.setItem("words", JSON.stringify(updatedWords));
  };

  return (
    <section id="english">
      <h2>English - Macedonian Words Reminder</h2>
      <WordForm onAddWord={addWord} />
      <WordList words={words} onDeleteWord={deleteWord} onReorderWords={reorderWords} />
    </section>
  );
};

export default WordsReminder;