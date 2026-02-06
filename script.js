var facts = [
  'I built a small robot with my team.',
  'I like solving number puzzles.',
  'I can draw cars and shoes.',
  'I enjoy learning new code words.'
];

var factIndex = 0;

function hideSections() {
  var sections = document.getElementsByClassName('section');
  var i = 0;
  while (i < sections.length) {
    sections[i].style.display = 'none';
    i = i + 1;
  }
}

function showSection(id) {
  hideSections();
  var el = document.getElementById(id);
  if (el) {
    el.style.display = 'block';
  }
}

function nextFact() {
  factIndex = factIndex + 1;
  if (factIndex >= facts.length) {
    factIndex = 0;
  }
  var factEl = document.getElementById('fact');
  factEl.innerHTML = facts[factIndex];
}

function answerQ1(answer) {
  var text = 'Thanks for answering.';
  if (answer === 'science') {
    text = 'Science is a great pick.';
  }
  if (answer === 'math') {
    text = 'Math is a strong choice.';
  }
  if (answer === 'both') {
    text = 'Both is a smart answer.';
  }
  document.getElementById('q1-feedback').innerHTML = text;
}

function answerQ2(answer) {
  var text = 'Thanks for sharing.';
  if (answer === 'yes') {
    text = 'Travel can teach a lot.';
  }
  if (answer === 'no') {
    text = 'Maybe someday you will.';
  }
  document.getElementById('q2-feedback').innerHTML = text;
}

window.onload = function () {
  hideSections();
  document.getElementById('fact').innerHTML = facts[0];
};
