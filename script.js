var questions = [
  {
    question: "What is the purpose of CSS?",
    choices: [
      "To style and layout web pages",
      "To add interactivity to web pages",
      "To store data on the client-side",
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "What is JavaScript?",
    choices: [
      "A server-side programming language",
      "A markup language for web pages",
      "A client-side scripting language",
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "What is a responsive design?",
    choices: [
      "A design that only works on mobile devices",
      "A design that works on any device or screen size",
      "A design that only works on desktop computers",
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "What is a web server?",
    choices: [
      "A computer program that renders web pages",
      "A program that manages data storage",
      "A computer that serves web pages to clients",
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "What is the difference between GET and POST requests?",
    choices: [
      "There is no difference",
      "GET is used for sending data and POST for receiving data",
      "GET is used for receiving data and POST for sending data",
    ],
    correctAnswerIndex: 2,
  },
];
var time = 60; //in seconds -10 seconds if the user answer incorrectly
var score = 0; // +10 if the user answered correctly
var quiz_container = document.getElementById("quiz_value");
var start_button = document.getElementById("start_button");
var time_display = document.getElementById("time_left");
var currentQuestionIndex = 0;
var choices_display = document.querySelectorAll("#choices button");
var question_display = document.getElementById("question");

function startQuiz() {
  start_button.style.display = "none";
  time_display.style.display = "block";
  time = 60;
  score = 0;
  currentQuestionIndex = 0;
  for (let i = 0; i < choices_display.length; i++) {
    choices_display[i].style.display = "block";
  }
  nextQuestion();
  setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (time >= 0) {
    time--;
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    time_display.innerHTML = `${minutes}:${seconds}`;
  } else {
    endQuiz();
    clearInterval(updateTimer);
    updateTimer = null;
  }
}

function nextQuestion() {
  if (currentQuestionIndex + 1 <= questions.length) {
    question_display.textContent = questions[currentQuestionIndex].question;
    for (let i = 0; i < choices_display.length; i++) {
      choices_display[i].textContent =
        questions[currentQuestionIndex].choices[i];
      choices_display[i].onclick = function ans() {
        checkAnswer(i);
      };
    }
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(updateTimer);
  updateTimer = null;
  question_display.textContent = `You scored ${score} out of ${questions.length}!`;
  time_display.style.display = "none";
  start_button.style.display = "block";
  for (let i = 0; i < choices_display.length; i++) {
    choices_display[i].style.display = "none";
  }
}
function checkAnswer(answer_index) {
  if (answer_index === questions[currentQuestionIndex].correctAnswerIndex) {
    score++;
  } else {
    time -= 10;
  }
  currentQuestionIndex++;
  nextQuestion();
}
