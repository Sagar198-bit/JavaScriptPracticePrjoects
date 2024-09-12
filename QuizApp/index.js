const quizData = [
  {
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
  },
]; // Array Of Objects ....

let index = 0; // 0 1 2 3
const Questions = document.getElementById("Questions");
const options = document.querySelectorAll("input");
const showresult = document.getElementById("displaytext");
let Right = 0;
let Wrong = 0;
const total = quizData.length;

function loadquestions() {
  if (index === total) {
    return endQuiz();
  }
  ResetFunction();
  const data = quizData[index];
  Questions.innerHTML = data.question;
  options[0].nextElementSibling.innerHTML = data.a;
  options[1].nextElementSibling.innerHTML = data.b;
  options[2].nextElementSibling.innerHTML = data.c;
  options[3].nextElementSibling.innerHTML = data.d;
}

const buttons = document.getElementById("buttons");
buttons.addEventListener("click", function () {
  checkAnswer();
});

function checkAnswer() {
  const UserGivenAnswers = getAnswer();
  const ActualAnswers = quizData[index].correct;

  if (UserGivenAnswers === ActualAnswers) {
    Right++;
  } else {
    Wrong++;
  }
  index++;
  loadquestions();
}

function getAnswer() {
  const newArray = Array.from(options);

  for (const items of newArray) {
    if (items.checked) {
      return items.value;
    }
  }
}

function ResetFunction() {
  options.forEach((input) => {
    input.checked = false;
  });
}

function endQuiz() {
  document.getElementById("Questions").style.display = "none";
  document
    .querySelectorAll("form")
    .forEach((value) => (value.style.display = `none`));
  document.getElementById("buttons").style.display = "none";
  showresult.innerHTML = `
    <h3>Quiz Completed</h3>
    <p>Correct Answers: ${Right}</p>
    <p>Wrong Answers: ${Wrong}</p>
    <p>Total Score: ${(Right / total) * 100}%</p>
  `;
  GameStart();
}
// Start the quiz
loadquestions();
