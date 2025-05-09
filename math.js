
const questions = [
  { q: "What is 12 × 8?", a: "96", options: ["92", "96", "86", "88"] },
  { q: "What is the square root of 144?", a: "12", options: ["10", "11", "12", "13"] },
  { q: "Solve: 3(x + 2) = 15", a: "3", options: ["2", "3", "4", "5"] }
  // Add up to 15 real curriculum-aligned questions...
];

shuffleAndDisplay(questions);

function shuffleAndDisplay(questions) {
  const shuffled = questions.sort(() => 0.5 - Math.random()).slice(0, 15);
  const container = document.getElementById("quiz-container");
  shuffled.forEach((item, i) => {
    const div = document.createElement("div");
    div.innerHTML = `<p>${i + 1}. ${item.q}</p>` +
      item.options.map(opt => `<label><input type="radio" name="q${i}" value="${opt}"> ${opt}</label><br>`).join("");
    container.appendChild(div);
  });
}

function submitQuiz() {
  alert("Quiz submitted! Check answers later in full version.");
}
