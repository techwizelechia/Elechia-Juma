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

const phrases = [
            "Frontend Developer",
            "UI/UX Enthusiast",
            "JavaScript Lover",
            "React Specialist"
        ];
        let currentPhrase = 0;
        let isDeleting = false;
        let text = "";
        const dynamicText = document.getElementById("dynamic-text");
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const pauseTime = 1500;

        function type() {
            const current = phrases[currentPhrase];
            if (!isDeleting) {
                text = current.substring(0, text.length + 1);
                dynamicText.textContent = text;
                if (text === current) {
                    isDeleting = true;
                    setTimeout(type, pauseTime);
                } else {
                    setTimeout(type, typingSpeed);
                }
            } else {
                text = current.substring(0, text.length - 1);
                dynamicText.textContent = text;
                if (text === "") {
                    isDeleting = false;
                    currentPhrase = (currentPhrase + 1) % phrases.length;
                    setTimeout(type, typingSpeed);
                } else {
                    setTimeout(type, deletingSpeed);
                }
            }
        }

        type();