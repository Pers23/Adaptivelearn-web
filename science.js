
const questions = [
    // Real, curriculum-aligned questions will go here
];

function loadQuiz() {
    const container = document.getElementById('quiz-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<p>${index + 1}. ${q.question}</p>` +
                        q.options.map((opt, i) => 
                            `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label><br>`
                        ).join("");
        container.appendChild(div);
    });
}

function submitQuiz() {
    alert('Quiz submitted. Feedback will be shown after grading.');
}

window.onload = loadQuiz;
