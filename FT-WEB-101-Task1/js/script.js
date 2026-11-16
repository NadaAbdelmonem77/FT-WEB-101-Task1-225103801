// Find the dark-mode button in the HTML
const themeButton = document.getElementById("themeButton");

// When the button is clicked, add or remove the dark class on body
themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

 // Example inside your toggle click event:
if (document.body.classList.contains('dark')) {
    themeButton.textContent = '🌞'; // Show sun when dark mode is active
} else {
    themeButton.textContent = '🌙'; // Show moon when light mode is active
}
});

// Keep the example form on the page and show a simple confirmation
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you! Your details have been entered.");
});
