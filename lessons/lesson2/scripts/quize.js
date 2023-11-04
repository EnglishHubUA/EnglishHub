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
        question: 'The sun ____ bright in the sky.',
        options: [
            'am', 'is', 'are'
        ],
        rightAnswer: 1
    },
    {
        question: 'My favorite color ____ blue.',
        options: [
            'am', 'is', 'are'
        ],
        rightAnswer: 1
    },
    {
      question: 'Apples _____ green.',
      options: [
        'am not', 'is not', 'are not'
      ],
        rightAnswer: 2
    },
      {
        question: '____ your favorite color blue or green?',
        options: [
          'Am', 'Is', 'Are'
        ],
          rightAnswer: 1
      },
      {
        question: 'Penguins _____ birds that cannot fly.',
        options: [
          'am', 'is', 'are'
        ],
          rightAnswer: 2
      },
      {
        question: 'I _____ a student.',
        options: [
          'am not', 'is not', 'are not'
        ],
          rightAnswer: 0
      },
      {
        question: 'This book ____ interesting.',
        options: [
          'am', 'is', 'are'
        ],
          rightAnswer: 1
      },
      {
        question: 'I ____ happy to see my friends.',
        options: [
          'am', 'is', 'are'
        ],
          rightAnswer: 0
      },
      {
        question: 'I ____ happy to see my friends.',
        options: [
          'am', 'is', 'are'
        ],
          rightAnswer: 0
      },
      {
        question: 'Cats are furry animals.',
        options: [
          'am', 'is', 'are'
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
