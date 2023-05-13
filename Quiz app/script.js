const quizData = [ {
    question: 'Which is the best programming Language',
    a: 'Java',
    b: 'C++',
    c: 'Python',
    d: 'Javascript',
    correct: 'c'
},{
    question: 'What is the pH value of the human body?',
    a: '9.2 to 9.8',
    b: '7.0 to 7.8',
    c: '6.1 to 6.3',
    d: '5.4 to 5.6',
    correct: 'b'
}, {
    question: 'The driving force of an ecosystem is',
    a: 'Carbon Mono oxide',
    b: 'Biogas',
    c: 'Solar Energy',
    d: 'Carbon dioxide',
    correct: 'c'
},{
    question: 'Which of the given vitamin is a water-soluble vitamin?',
    a: 'Vita A',
    b: 'Vita B',
    c: 'Vita K',
    d: 'Vita D',
    correct: 'b'
}, {
    question: ' Digestion of food in human beings begins in which part of the alimentary canal?',
    a: 'Liver',
    b: 'Kidney',
    c: 'Mouth',
    d: 'Large Intestine',
    correct: 'c'
}
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});