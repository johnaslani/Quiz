var generateBtn = document.querySelector("#generate");
var quizBox = document.querySelector("#quizBox");
var welcome = document.querySelector("#welcome");
var result = document.querySelector("#result");
var resultDisplay = document.querySelector("#resultDisplay");
var clearHighScore = document.querySelector("#clearHighScore");
var goBack = document.querySelector("#goBack");
var timerElement = document.querySelector("#timerElement");

var timeLeft = 2000;
var history = "";

var qBank = [
  {
    q: "q1",
    a: "Choice 1",
    c1: "Choice 1",
    c2: "Choice 2",
    c3: "Choice 3",
    c4: "Choice 4",
  },
  {
    q: "q2",
    a: "Choice 1",
    c1: "Choice 1",
    c2: "Choice 2",
    c3: "Choice 3",
    c4: "Choice 4",
  },
  {
    q: "q3",
    a: "Choice 1",
    c1: "Choice 1",
    c2: "Choice 2",
    c3: "Choice 3",
    c4: "Choice 4",
  },
  {
    q: "q4",
    a: "Choice 1",
    c1: "Choice 1",
    c2: "Choice 2",
    c3: "Choice 3",
    c4: "Choice 4",
  },
  {
    q: "q5",
    a: "Choice 1",
    c1: "Choice 1",
    c2: "Choice 2",
    c3: "Choice 3",
    c4: "Choice 4",
  },
  {
    q: "q6",
    a: "Choice 1",
    c1: "Choice 1",
    c2: "Choice 2",
    c3: "Choice 3",
    c4: "Choice 4",
  },
];

var index = qBank.length - 1;
var score = 0;

function startQuiz() {
  welcome.style.display = "none";
  quizBox.style.display = "block";
  result.style.display = "none";
  // startTimer();
  displayQuestion();
}

function startTimer() {
  timeInterval = setInterval(function () {
    timeLeft--, console.log(timeLeft);
    timerElement.textContent = timerCount;
    // Tests if time has run out
    if (timerCount <= 0) {
      endGame();
    }
  }, 1000);
}

function displayQuestion() {
  const question = document.getElementById("question");
  question.textContent = qBank[index].q;
  const choice1 = document.getElementById("choice1");
  choice1.textContent = qBank[index].c1;
  const choice2 = document.getElementById("choice2");
  choice2.textContent = qBank[index].c2;
  const choice3 = document.getElementById("choice3");
  choice3.textContent = qBank[index].c3;
  const choice4 = document.getElementById("choice4");
  choice4.textContent = qBank[index].c4;
}

function checkAnswer(event) {
  console.log(event);
  if (event.target.matches("button")) {
    console.log("I clicked the button");
    if (event.target.textContent == qBank[index].a) {
      console.log("You clickec the correct answer");
      score++;
    } else {
      console.log("You clickec a wrong answer");
    }
    index--;
    if (index < 0) {
      endGame();
    } else {
      displayQuestion();
    }
  }
}

function endGame() {
  welcome.style.display = "none";
  quizBox.style.display = "none";
  result.style.display = "block";
  initialName = prompt("What is your initial name?", "Enter your initial");
  // history = appendChild(consol.log(InitialName + " " + score))
  resultDisplay.textContent = `attempt, ${initialName}, ${score}`;
  clearinterval(timeInterval);
}

function clearScroe() {}

function goToStart() {
  score = 0;
  index = qBank.length - 1;
  timerCount = 5000;
  welcome.style.display = "block";
  quizBox.style.display = "none";
  result.style.display = "none";
}

// InitialName = prompt("What is your initial name", "Enter your initial" );
// history = appendChild(consol.log(InitialName + " " + score))
// clearHistory = c
clearHighScore.addEventListener("click", clearScroe);
goBack.addEventListener("click", goToStart);
generateBtn.addEventListener("click", startQuiz);
// goBackBtn.addEventListener("click", goBack);
// clearScoreBtn.addEventListener("click", clearScore);
quizBox.addEventListener("click", checkAnswer);
// answerBtn.addEventListener("click", checkAnswer);
// The init function is called when the page loads



// function init() {
//   question();
// }

// init();

// function question() {
//   console.log("Cheking the answer");
//   if (answer) {
//     displayQuestion();
//     score++;
//     index--;
//     question();
//   } else timeLeft = timeleft - timeInterval;
//   if (timerCount > 0 && index > 0) {
//     displayQuestion();
//     index--;
//     question();
//   } else return score, endGame();
// }
