
document.querySelectorAll('.subject-card').forEach(card => {
  card.addEventListener('click', () => {
    const subject = card.textContent.toLowerCase();
    if (subject.includes("math")) window.location.href = "math.html";
    else if (subject.includes("science")) window.location.href = "science.html";
    else if (subject.includes("english")) window.location.href = "english.html";
  });
});
