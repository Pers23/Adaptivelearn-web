
import React from "react";

const questions = [
  { subject: "Math", text: "What is 8 × 7?" },
  { subject: "Natural Science", text: "What gas do plants absorb?" },
  { subject: "Geography", text: "What is the capital of Kenya?" },
  { subject: "Life Sciences", text: "What organ pumps blood throughout the body?" },
  { subject: "Physical Sciences", text: "What is H2O commonly known as?" },
  { subject: "Technology", text: "What does 'CPU' stand for?" },
  { subject: "History", text: "Who was the first president of South Africa?" },
  { subject: "Languages", text: "Translate 'hello' to Spanish." }
];

export default function Assessment() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Assessment Questions</h2>
      {questions.map((q, index) => (
        <div key={index} className="mb-3">
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="w-6 h-6" />
            <span><strong>{q.subject}:</strong> {q.text}</span>
          </label>
        </div>
      ))}
    </div>
  );
}
