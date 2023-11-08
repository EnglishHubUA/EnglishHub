const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4');

const optionElements = document.querySelectorAll('.option');

const question = document.getElementById('question');

const numberOfQuestion = document.getElementById('number-of-question'),
      numberOfAllQuestions = document.getElementById('number-of-all-questions');

let indexOfQuestion = 0, // Start with the first question
    indexOfPage = 0;

const answersTracker = document.getElementById('answers-tracker');
const btnNext = document.getElementById('btn-next');

let score = 0;

const correctAnswer = document.getElementById('correct-answer'),
      numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2'),
      btnTryAgain = document.getElementById('btn-try-again');

const questions = [
    {
        question: 'James is a _____',
        options: [
            'pilot', 'flight attendant', 'airport cleaner'
        ],
        rightAnswer: 1
    },
    {
        question: 'James _____',
        options: [
            'is from a different country', 'cleans uniforms', 'travels a lot'
        ],
        rightAnswer: 2
    },
    {
      question: 'Anna is a _____',
      options: [
        'teacher','school bus driver',"children's coach"
      ],
        rightAnswer: 0
    },
    {
      question: 'Anna _____',
      options: [
        "doesn't like some children very much",'has to do some work in the evenings','only works in the mornings'
      ],
        rightAnswer: 1
    },
    {
      question: 'Phil is a _____',
      options: [
        "receptionist",'hotel manager','chef'
      ],
        rightAnswer: 2
    },
    {
      question: 'Phil _____',
      options: [
        "works in a small hotel","doesn't like his work",'would like to work at a different place in the future'
      ],
        rightAnswer: 2
    },
    {
      question: 'Lucy is a _____',
      options: [
        "waitress",'manager','store assistant'
      ],
        rightAnswer: 2
    },
    {
      question: 'Lucy _____',
      options: [
        "hates her uniform","likes her job","doesn't like her job"
      ],
        rightAnswer: 2
    },
    {
      question: 'Dan is a ___',
      options: [
        "nurse",'hospital cleaner','teacher'
      ],
        rightAnswer: 0
    },
    {
      question: 'Dan _____',
      options: [
        "always works in the day","needs to take medicine",'plays with the children'
      ],
        rightAnswer: 2
    },
    
];

numberOfAllQuestions.innerHTML = questions.length;

const load = () => {
    question.innerHTML = questions[indexOfQuestion].question;

    option1.innerHTML = questions[indexOfQuestion].options[0];
    option2.innerHTML = questions[indexOfQuestion].options[1];
    option3.innerHTML = questions[indexOfQuestion].options[2];

    numberOfQuestion.innerHTML = indexOfPage + 1;
    indexOfPage++;
};

const checkAnswer = el => {
    if (el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
        el.target.classList.add('correct');
        updateAnswerTracker('correct');
        score++;
    } else {
        el.target.classList.add('wrong');
        updateAnswerTracker('wrong');
    }
    disabledOptions();
}

for (option of optionElements) {
    option.addEventListener('click', e => checkAnswer(e));
}

const disabledOptions = () => {
    optionElements.forEach(item => {
        item.classList.add('disabled');
        if (item.dataset.id == questions[indexOfQuestion].rightAnswer) {
            item.classList.add('correct');
        }
    });
}

const enableOptions = () => {
    optionElements.forEach(item => {
        item.classList.remove('correct', 'wrong', 'disabled');
    });
}

const answerTracker = () => {
    questions.forEach(() => {
        const div = document.createElement('div');
        answersTracker.appendChild(div);
    });
}

const updateAnswerTracker = status => {
    answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
}

const validate = () => {
    if (!optionElements[0].classList.contains('disabled')) {
        alert("You need to choose one of the answer options")
    } else {
        indexOfQuestion++; // Move to the next question
        if (indexOfQuestion < questions.length) {
            load();
            enableOptions();
        } else {
            quizOver();
        }
    }
}

const quizOver = () => {
    document.querySelector('.quiz-over-modal').classList.add('active');
    correctAnswer.innerHTML = score;
    numberOfAllQuestions2.innerHTML = questions.length;
}

const tryAgain = () => {
    window.location.reload();
}

btnTryAgain.addEventListener('click', tryAgain);

btnNext.addEventListener('click', () => {
    validate();
});

window.addEventListener('load', () => {
    load();
    answerTracker();
});
