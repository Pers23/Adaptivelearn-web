
document.addEventListener("DOMContentLoaded", () => {
  const quizForm = document.getElementById("quiz-form");
  const resultsDiv = document.getElementById("results");
  const shuffledQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 15);

  shuffledQuestions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = \`<p><strong>Q\${index + 1}:</strong> \${q.question}</p>\` +
      q.options.map((opt, i) =>
        \`<label><input type="radio" name="q\${index}" value="\${i}"> \${opt}</label><br>\`).join("");
    quizForm.appendChild(div);
  });

  document.getElementById("submit-btn").addEventListener("click", () => {
    let score = 0;
    let output = "";
    shuffledQuestions.forEach((q, index) => {
      const userAnswer = quizForm["q" + index].value;
      if (userAnswer == q.correctIndex) {
        score++;
      } else {
        output += \`<p>Question \${index + 1}: Incorrect. \${q.explanation}</p>\`;
      }
    });
    output = "<h2>Score: " + score + "/15</h2>" + output;
    resultsDiv.innerHTML = output;
  });
});
