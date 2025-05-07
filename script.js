
document.querySelectorAll('.subject-card').forEach(card => {
  card.addEventListener('click', () => {
    alert('You selected ' + card.textContent);
  });
});
