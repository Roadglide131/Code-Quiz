var start_button= document .getElementById("start_button")
var interval
var timer=60
var questions= [
    {
        question:"question1",
        answers:["answer1", "answer2", "answer3", "answer4"],
        rightAnswer: "answer2"
    },

    {
        question:"question2",
        answers:["answer5", "answer6", "answer7", "answer8"],
        rightAnswer: "answer5"
    }
]
var questionindex=0
function starttimer () {
interval= setInterval(() => {
  if (timer > 0) {
    timer--
  } else {
    alert("game over") 
    clearInterval(interval)
  }
}, 1000);
}
function startgame () {
   document.getElementById("startscreen").classList.remove("d-block")
   document.getElementById("gamescreen").classList.remove("d-none")
   document.getElementById("startscreen").classList.add("d-none")
   document.getElementById("gamescreen").classList.add("d-block")
   starttimer()
    displayquestions(questions)
}
function displayquestions (questions) {
    console.log("questionsandansershere")
    if (questionindex<questions.length) {
        document.getElementById("question") .innerHTML=questions[questionindex].question
       var answerscontainer= document.getElementById("answers")
       for (let i = 0; i < questions[questionindex].answers.length; i++) {
        const element = questions[questionindex].answers[i];
        var answerbutton=document.createElement ("button")
        answerbutton.setAttribute("class","btn btn-primary m-4 answer") 
        answerbutton.textContent=element
        answerscontainer.append(answerbutton)

       }
    } else {
        alert ("game over")
    }
} 
start_button.addEventListener("click", startgame)