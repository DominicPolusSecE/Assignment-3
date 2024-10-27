let username = "";
function authenticate() {
    const userInput = document.getElementById("username").value;
    if (userInput) {
        username = userInput;
        document.getElementById("auth-section").style.display = "none";
        document.getElementById("quiz-section").style.display = "block";
    } else {
        alert("Please enter a username to start the quiz.");
    }
}

const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyperlinks and Text Markup Language",
            "Hypertext Markup Language",
            "Home Tool Markup Language"
        ],
        answer: 1
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Creative Style Sheets",
            "Computer Style Sheets"
        ],
        answer: 0
    },
    {
        question: "What does JS stand for?",
        options: [
            "Java Syntax",
            "Java Source",
            "JavaScript"
        ],
        answer: 2
    },
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionEl = document.querySelector(".question p");
  const optionsEl = document.querySelectorAll(".question input");
  questionEl.innerText = `Question ${currentQuestion + 1}: ${questions[currentQuestion].question}`;
  
  optionsEl.forEach((option, index) => {
    option.value = index;
    option.nextSibling.textContent = questions[currentQuestion].options[index];
    option.checked = false;
  });
  document.getElementById("feedback").innerText = "";
  document.getElementById("question-count").innerText = currentQuestion + 1;
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="q1"]:checked');
    
    if (selectedOption) {
      const answer = parseInt(selectedOption.value);
      
      if (answer === questions[currentQuestion].answer) {
        document.getElementById("feedback").innerText = "Correct!";
        document.getElementById("feedback").className = "correct";
        score++;
      } else {
        document.getElementById("feedback").innerText = "Incorrect!";
        document.getElementById("feedback").className = "incorrect";
      }
      
      document.getElementById("score").innerText = score;
      document.querySelector("button[onclick='nextQuestion()']").style.display = "inline";
    } else {
      alert("Please select an answer.");
    }
  }
  
  function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
      displayQuestion();
      document.querySelector("button[onclick='nextQuestion()']").style.display = "none";
    } else {
      document.getElementById("quiz-section").innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your final score is: ${score} out of ${questions.length}</p>
      `;
    }
  }

document.addEventListener("DOMContentLoaded", displayQuestion);