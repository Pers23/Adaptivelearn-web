
import React, { useState } from "react";

const questions = [
  { subject: "Math", text: "What is 8 × 7?" },
  { subject: "Natural Science", text: "What gas do plants absorb?" },
  { subject: "Geography", text: "What is the capital of Kenya?" },
  { subject: "Life Sciences", text: "What organ pumps blood throughout the body?" },
  { subject: "Physical Sciences", text: "What is H2O commonly known as?" },
  { subject: "Technology", text: "What does 'CPU' stand for?" },
  { subject: "History", text: "Who was the first president of South Africa?" },
  { subject: "Languages", text: "Translate 'hello' to Spanish." },
  { subject: "Economics", text: "What is the term for an increase in general price levels?" },
  { subject: "Accounting", text: "What is the accounting equation?" },
  { subject: "Business Studies", text: "What is an entrepreneur?" },
  { subject: "Religious Studies", text: "Who founded Christianity?" },
  { subject: "Art", text: "Who painted the Mona Lisa?" },
  { subject: "Music", text: "What is the musical symbol for a sharp note?" },
  { subject: "Agricultural Science", text: "What is crop rotation?" }
];

export default function Assessment() {
  const [checked, setChecked] = useState(Array(questions.length).fill(false));

  const handleCheck = (index) => {
    const updated = [...checked];
    updated[index] = !updated[index];
    setChecked(updated);
  };

  const handleSubmit = () => {
    const results = questions.filter((_, idx) => checked[idx]);
    alert("You answered: " + results.length + " question(s).");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-extrabold mb-6">Assessment Questions</h2>
      {questions.map((q, index) => (
        <div key={index} className="mb-4">
          <label className="flex items-center space-x-4">
            <input
              type="checkbox"
              className="w-6 h-6"
              checked={checked[index]}
              onChange={() => handleCheck(index)}
            />
            <span className="text-lg"><strong>{q.subject}:</strong> {q.text}</span>
          </label>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="mt-8 px-8 py-5 text-2xl font-bold bg-green-600 text-white rounded-2xl shadow-lg hover:bg-green-700"
      >
        Submit
      </button>
    </div>
  );
}
