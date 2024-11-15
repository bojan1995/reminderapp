import React, { useState, useEffect } from 'react';

// Function to fetch stored codes from localStorage
const getStoredCodes = () => {
  return JSON.parse(localStorage.getItem('codes')) || [];
};

// Function to save codes to localStorage
const saveToLocalStorage = (codes) => {
  localStorage.setItem('codes', JSON.stringify(codes));
};

const CodingPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [codes, setCodes] = useState(getStoredCodes());

  useEffect(() => {
    // Display codes from localStorage when component mounts
    setCodes(getStoredCodes());
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new code object
    const newCode = { title, description };

    // Update the state and localStorage
    const updatedCodes = [...codes, newCode];
    setCodes(updatedCodes);
    saveToLocalStorage(updatedCodes);

    // Reset form inputs
    setTitle('');
    setDescription('');
  };

  return (
    <div className="container">
      <h2>Code Reminder</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Code Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Enter Code Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          required
        ></textarea>
        <button type="submit">Save Code</button>
      </form>

      <ul className="todo-list">
        {codes.map((code, index) => (
          <li key={index}>
            <div className="code-content">
              <strong><code>Code: </code> {code.title}</strong>
              <p><b>Explanation: </b> {code.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CodingPage;