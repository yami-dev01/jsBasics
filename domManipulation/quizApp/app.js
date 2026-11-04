const quizData = [
  {
    question: "what does DOM stand for?",
    options: [
      "Document Object Memorary",
      "Document Oriented Model",
      "Document Object Model",
      "Documentary Oritented Model",
    ],
    correct: 2,
  },

  {
    question: "Which method selects by ID?",
    options: [
      "getElementById()",
      "querySelectorAll()",
      "getElement()",
      "getElementByClassName()",
    ],
    correct: 0,
  },

  {
    question: "Which event fires on input change?",
    options: ["click", "submit", "change", "keydown"],
    correct: 2,
  },
];

let questions = [...quizData].sort(() => Math.random() - 0.5);
let currentQuestion = 0;
let currScore = 0;
let timer;
let timeLeft;

const questionEle = document.getElementById("questions");
const optionEle = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const timerEle = document.getElementById("timer");
const resultEle = document.getElementById("result");

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 15;
  updateTimer();
  timer = setInterval(countdown, 1000);

  const q = questions[currentQuestion];
  console.log(q);
  questionEle.textContent = `Q${currentQuestion + 1}.${q.question}`;
  optionEle.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = option;
    btn.addEventListener("click", () => selectAnswer(index, true));
    optionEle.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

function countdown() {
  timeLeft--;
  updateTimer();
  if (timeLeft === 0) {
    clearInterval(timer);
    selectAnswer(questions[currentQuestion]?.correct, false);
  }
}

function updateTimer() {
  timerEle.textContent = `Time Left: ${timeLeft}`;
}

function selectAnswer(index, shouldScore) {
  clearInterval(timer);
  const q = questions[currentQuestion];

  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach((btn) => (btn.disabled = true));

  if (index === q.correct) {
    buttons[index].classList.add("correct");
    if (shouldScore) currHighScore++;
  } else {
    buttons[index].classList.add("wrong");
    buttons[q.correct].classList.add("correct");
  }
  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  nextBtn.style.display = "one";
  const highScore = localStorage.getItem("quizHighScore") || 0;

  const isNewHighScore = currScore > highScore;

  if (isNewHighScore) {
    localStorage.setItem("quizHighScore", currScore);
  }

  resultEle.innerHTML = `
  <h2>Quiz Completed </h2>
  <p> You have Scored ${currScore} out of ${questions.length} questions<p>
  <p> Highest Score ${Math.max(currScore, highScore)}</p>
    ${isNewHighScore ? "<p>Hey! New HighScore</p>" : ""}
    <button onclick = "resetQuiz()">Restart Quiz</button>
  `;
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  questions = [...quizData].sort(() => Math.random() - 0.5);

  resultEle.innerHTML = "";
  nextBtn.style.display = "none";
  loadQuestion();
}

loadQuestion();