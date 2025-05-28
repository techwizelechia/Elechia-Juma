const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const toggleMode = document.getElementById("theme-toggle");
const modeIcon = document.getElementById("mode-icon");

// Hamburger toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("show");
});

// Dark/Light Mode Toggle (icon-based)
toggleMode.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  document.body.classList.toggle("light", !isDark);
  modeIcon.textContent = isDark ? "🌙" : "🌞";
});

// Initial mode
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("light");
  modeIcon.textContent = "🌞";
});
