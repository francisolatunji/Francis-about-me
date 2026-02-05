// script.js

// Get sections and buttons
const sections = document.querySelectorAll(".card");
const buttons = document.querySelectorAll(".nav-btn");

// Hide all sections
function hideAllSections() {
  sections.forEach((sec) => sec.classList.remove("active"));
}

// Button click behavior
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");

    // Home button hides all sections
    if (target === "home") {
      hideAllSections();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Show the selected section
    hideAllSections();
    const section = document.getElementById(target);
    if (section) {
      section.classList.add("active");
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Hide all sections on page load
hideAllSections();

// Fun fact cycle
const funFacts = [
  "I broke my toe before",
  "Motto: Work hard, play hard",
  "I visited Nigeria and Morocco"
];
let factIndex = 0;

const factCard = document.getElementById("factCard");
const nextFact = document.getElementById("nextFact");

nextFact.addEventListener("click", () => {
  factIndex = (factIndex + 1) % funFacts.length;
  factCard.textContent = funFacts[factIndex];
});

// Question feedback
const q1Feedback = document.getElementById("q1Feedback");
const q2Feedback = document.getElementById("q2Feedback");

document.querySelectorAll(".q1").forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.getAttribute("data-answer");
    q1Feedback.textContent = "Thanks. You picked " + answer + ".";
  });
});

document.querySelectorAll(".q2").forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.getAttribute("data-answer");
    q2Feedback.textContent = "Thanks. You picked " + answer + ".";
  });
});
