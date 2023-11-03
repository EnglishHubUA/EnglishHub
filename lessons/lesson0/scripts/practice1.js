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
        question: 'Anna and Kate _________ to the cinema last Sunday.',
        options: [
            'didn’t went', 'don’t go', 'didn’t go'
        ],
        rightAnswer: 2
    },
    {
        question: 'Mike __________ very tall',
        options: [
            'is', 'am', 'has'
        ],
        rightAnswer: 0
    },
    {
      question: 'He __________ like tennis very much.',
      options: [
          "don't", "doesn't", " hasn't"
      ],
      rightAnswer: 1
    },
    {
      question: '__________ you understand me?',
      options: [
          'Does', 'Do', 'Have'
      ],
      rightAnswer: 1
    },
    {
      question: 'My boyfriend __________ to the pub every night.',
      options: [
          'go', 'goes', 'goed'
      ],
      rightAnswer: 1
    },
    {
      question: 'Vienna is __________ city in Austria.',
      options: [
          'the most beautiful', 'the beautiful lest', 'more beautiful than'
      ],
      rightAnswer: 0
    },
    {
      question: 'This restaurant is very, very good. It’s __________.',
      options: [
          'the better', 'the good', 'the best'
      ],
      rightAnswer: 2
    },
    {
      question: 'I’m going to Egypt ___________ the pyramids.',
      options: [
          'seeing', 'to see', 'going to see'
      ],
      rightAnswer: 1
    },
    {
      question: '_________ did you buy your jacket? At a shop in town.',
      options: [
          'When', 'Why', 'Where'
      ],
      rightAnswer: 2
    },
    {
      question: 'My grandmother started work ________1960.',
      options: [
          'in', 'by', 'on'
      ],
      rightAnswer: 0
    },
    {
      question: "She ___ British. She's Irish.",
      options: [
          "aren't", "isn't", 'not'
      ],
      rightAnswer: 1
      },
      {
        question: 'He ___the news every day.',
        options: [
            'read', 'reads', "doesn't reads"
        ],
        rightAnswer: 1
      },
      {
        question: 'Mexican people ___tequila with lemon.',
        options: [
            'drink', 'drinks', 'are drink'
        ],
        rightAnswer: 0
      },
      {
        question: 'The people ___ in the hall.',
        options: [
            'is', 'am', 'are'
        ],
        rightAnswer: 2
      },
      {
        question: "I'm French. ___family are from Paris.",
        options: [
          'Ours', 'My', 'Her'
        ],
          rightAnswer: 1
      },
      {
        question: "She ___ dance.",
        options: [
          "can't", "doesn't can", 'not can'
        ],
          rightAnswer: 0
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
