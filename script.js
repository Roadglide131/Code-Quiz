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
var quizz_container = document.getElementById("quiz_value");
var start_button = document.getElementById("start_button");
var time_display = document.getElementById("time_left");
var currentQuestionIndex = 0;
var choices_display = document.querySelectorAll("#choices button");
var question_display = document.getElementById("question");
