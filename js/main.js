const checkbox = document.getElementById("nav-check");
const hideableParagraph = document.getElementById("hideable-paragraph");
const checkbox1 = document.getElementById('nav-check');
const hideableParagraph1 = document.getElementById('hideable-paragraph');
const hideableHeading = document.getElementById('hideable-heading');

checkbox.addEventListener("change", () => {
  hideableParagraph.style.transition = 'all 0.5s ease-in-out'; // Add the transition property here
  hideableParagraph.style.display = checkbox.checked ? "none" : "block";
});
checkbox1.addEventListener('change', () => {
  hideableParagraph1.style.transition = 'all 0.5s ease-in-out'; // Add the transition property here
  hideableParagraph1.style.display = checkbox1.checked ? 'none' : 'block';
  hideableHeading.style.transition = 'all 0.5s ease-in-out'; // Add the transition property here
  hideableHeading.style.display = checkbox.checked ? 'none' : 'block';
});
