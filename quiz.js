(function() {
  function buildQuiz() {

    const output = [];


    myQuestions.forEach((currentQuestion, questionNumber) => {
   
      const answers = [];

     
      for (letter in currentQuestion.answers) {
         answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

   
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });


    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
 
 
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

     
      if (userAnswer === currentQuestion.correctAnswer) 
        numCorrect++;
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        answerContainers[questionNumber].style.color = "red";
      }
    });
    
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "What is the capitol of Oregon?",
      answers: {
        a: "Portland",
        b: "Salem",
        c: "Eugene"
      },
      correctAnswer: "a"
    },
     {
      question: "Who created the light bulb?",
      answers: {
        a: "Thomas Edison",
        b: "Nikkola Tesla",
        c: "Warren de La Rue"
      },
      correctAnswer: "c"
    },
     {
      question: "Where is the BC bookstore located?",
      answers: {
        a: "Building A",
        b: "Building B",
        c: "Building D"
      },
      correctAnswer: "b"
    },
    {
      question: "What is your quest?",
      answers: {
        a: "To find the Holy Grail",
        b: "Defeat Lord Voldemort",
        c: "To deliver Maui to Te Fiti to restore the Heart of the Ocean"
      },
      correctAnswer: "a"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Area 51",
        c: "Zurich?",
      },
      correctAnswer: "c"
    }
  ];

  buildQuiz();

  submitButton.addEventListener("click", showResults);
})();
