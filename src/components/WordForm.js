// src/components/WordForm.js
import React, { useState } from "react";

const WordForm = ({ onAddWord }) => {
  const [englishWord, setEnglishWord] = useState("");
  const [macedonianWord, setMacedonianWord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (englishWord && macedonianWord) {
      onAddWord({ english: englishWord, macedonian: macedonianWord });
      setEnglishWord("");
      setMacedonianWord("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={englishWord}
        onChange={(e) => setEnglishWord(e.target.value)}
        placeholder="Enter English Word"
        required
      />
      <input
        type="text"
        value={macedonianWord}
        onChange={(e) => setMacedonianWord(e.target.value)}
        placeholder="Enter Macedonian Word"
        required
      />
      <button type="submit">Add Word</button>
    </form>
  );
};

export default WordForm;