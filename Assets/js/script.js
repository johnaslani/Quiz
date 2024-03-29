var generateBtn = document.querySelector("#generate");
var quizBox = document.querySelector("#quizBox");
var welcome = document.querySelector("#welcome");
var result = document.querySelector("#result");
var resultDisplay = document.querySelector("#resultDisplay");
var clearHighScore = document.querySelector("#clearHighScore");
var goBack = document.querySelector("#goBack");
var timerElement = document.querySelector("#timerElement");
const questionResult = document.getElementById("questionResultDisplay");
var scoreDisplay = 0;
var timerCount = 0;
var timeLeft = 200000;
var history = "";
var answer = "Wrong!";

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
var attempt = 0;

function startQuiz() {
  score = 0;
  index = qBank.length - 1;
  timeLeft = 60;
  welcome.style.display = "none";
  quizBox.style.display = "block";
  result.style.display = "none";
  questionResult.style.display = "none";

  startTimer();
  displayQuestion();
  attempt++;
}

function startTimer() {
  timeInterval = setInterval(function () {
    timeLeft--;
    console.log(timeLeft);
    timerElement.textContent = timeLeft;
    // Tests if time has run out
    if (timeLeft <= 0) {
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
  questionResult.textContent = answer;
}

function checkAnswer(event) {
  console.log(event);
  if (event.target.matches("button")) {
    console.log("I clicked the button");
    if (event.target.textContent == qBank[index].a) {
      console.log("You clicked the correct answer");
      asnwer = "Correct";
      score++;
    } else {
      console.log("You clickec a wrong answer");
      asnwer = "Wrong";
    }
    questionResult.style.display = "block";
    index--;
    if (index < 0) {
      endGame();
    } else {
      displayQuestion();
    }
  }
}

function displayFinalResult() {
  for (i = 0; i < attempt; i++) {
    display = display + `\n ${attempt} attempt, ${initialName}, ${score}`;
  }
  return display;
}

function endGame() {
  welcome.style.display = "none";
  quizBox.style.display = "none";
  result.style.display = "block";
  initialName = prompt("What is your initial name?", "Enter your initial");
  // history = appendChild(consol.log(InitialName + " " + score))
  // ?? Display attempt histroy
  // historyDisplay.textContent = `${attempt} attempt, ${initialName}, ${score}`;
  // resultDisplay.textContent = display;
  var newEntry = { initials: initialName, score: score };
  var allscores = JSON.parse(localStorage.getItem("highScores")) || [];
  allscores.push(newEntry);
  localStorage.setItem("highScores", JSON.stringify(allscores));
  resultDisplay.innerHTML = "";
  for (i = 0; i < allscores.length; i++) {
    var newElement = document.createElement("li");
    newElement.textContent = `player: ${allscores[i].initials}, ${allscores[i].score}`;
    resultDisplay.appendChild(newElement);
  }
  // resultDisplay.textContent = `${attempt} attempt, ${initialName}, ${score}`;
  clearInterval(timeInterval);
}

// Updates score count on screen and sets score count to client storage
function setScore() {
  // scoreDisplay.${`attempt`}.textContent = score;
  scoreDisplay.textContent = score;
  // localStorage.setItem(${attempt}"_score", score);
  localStorage.setItem("_score", score);
}

// Updates score count on screen and sets score count to client storage
function setAttempts() {
  attemptHistory.textContent = attempt;
  localStorage.setItem("attempt", attempt);
}

function clearScore() {}

function goToStart() {
  welcome.style.display = "block";
  quizBox.style.display = "none";
  result.style.display = "none";
  questionResult.style.display = "none";
}

clearHighScore.addEventListener("click", clearScore);
goBack.addEventListener("click", goToStart);
generateBtn.addEventListener("click", startQuiz);
quizBox.addEventListener("click", checkAnswer);
// answerBtn.addEventListener("click", checkAnswer);
// The init function is called when the page loads

function init() {
  startQuiz();
}

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
