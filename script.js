// script.js

// Get all the sections
var sections = document.querySelectorAll(".section");

// This hides all sections
function hideSections() {
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
}

// This shows one section
function showSection(id) {
  hideSections();
  var section = document.getElementById(id);
  if (section) {
    section.style.display = "block";
  }
}

// Hide everything when the page loads
hideSections();


// FUN FACTS
var facts = [
  "I broke my toe before.",
  "My motto is work hard, play hard.",
  "I visited Nigeria and Morocco."
];

var factNumber = 0;

// Show the next fun fact
function nextFact() {
  factNumber = factNumber + 1;

  if (factNumber >= facts.length) {
    factNumber = 0;
  }

  document.getElementById("fact").innerText = facts[factNumber];
}


// QUESTIONS

// Question 1 answer
function answerQ1(answer) {
  document.getElementById("q1Feedback").innerText =
    "Thanks for your answer: " + answer;
}

// Question 2 answer
function answerQ2(answer) {
  document.getElementById("q2Feedback").innerText =
    "Thanks for participating: " + answer;
}
