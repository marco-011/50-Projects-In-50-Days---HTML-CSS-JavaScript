// Quiz data (questions + options + correct answer)
const quizData = [
    {
        question: "What is the capital of France?",
        a: "London",
        b: "Berlin",
        c: "Paris",
        d: "Madrid",
        correct: "c"
    },
    {
        question: "What is the largest planet in our solar system?",
        a: "Earth",
        b: "Jupiter",
        c: "Saturn",
        d: "Mars",
        correct: "b"
    },
    {
        question: "What is the chemical symbol for gold?",
        a: "Go",
        b: "Gd",
        c: "Au",
        d: "Ag",
        correct: "c"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        a: "Harper Lee",
        b: "Mark Twain",
        c: "Ernest Hemingway",
        d: "F. Scott Fitzgerald",
        correct: "a"
    },
    {
        question: "Which language is used for styling web pages?",
        a: "HTML",
        b: "CSS",
        c: "JavaScript",
        d: "Python",
        correct: "b"
    },
    {
        question: "What is the smallest prime number?",
        a: "0",
        b: "1", 
        c: "2",
        d: "3",
        correct: "c"
    }   
];

// Get DOM elements
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

// Track current question index and score
let currentQuiz = 0;
let score = 0;

// Load first question on page load
loadQuiz();

// Function to load question and answers
function loadQuiz() {
    // Deselect previous answers
    deselectAnswers();

    // Get current question data
    const currentQuizData = quizData[currentQuiz];

    // Insert question and options into DOM
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

// Function to clear selected radio buttons
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

// Function to get selected answer
function getSelected() {
    let answer = undefined;

    // Loop through all radio inputs
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id; // store selected option id (a, b, c, d)
        }
    });

    return answer;
}

// Handle submit button click
submitBtn.addEventListener("click", () => {

    // Get selected answer
    const answer = getSelected();

    // If user selected an answer
    if (answer) {

        // Check if answer is correct
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        // Move to next question
        currentQuiz++;

        // If more questions left → load next
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } 
        // If quiz finished → show result
        else {
            quiz.innerHTML = `
                <h2>You answered correctly ${score}/${quizData.length}</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});