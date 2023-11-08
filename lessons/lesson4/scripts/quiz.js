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
      question: 'I have ___ apples.',
      options: ['some', 'much', 'many'],
      rightAnswer: 0
  },
  {
      question: 'She eats ___ cookies for dessert.',
      options: ['many', 'a lot of', 'much'],
      rightAnswer: 1
  },
  {
      question: 'There are ___ students in the classroom.',
      options: ['any', 'some', 'many'],
      rightAnswer: 1
  },
  {
      question: 'He has ___ interesting book to read.',
      options: ['some', 'a lot of', 'a/an'],
      rightAnswer: 1
  },
  {
      question: 'I need ___ water to drink.',
      options: ['any', 'some', 'many'],
      rightAnswer: 1
  },
  {
      question: "There isn't ___ juice in the fridge.",
      options: ['some', 'many', 'much'],
      rightAnswer: 2
  },
  {
      question: "She doesn't have ___ money.",
      options: ['some', 'many', 'much'],
      rightAnswer: 2
  },
  {
      question: 'There is ___ elephant in the zoo.',
      options: ['a/an', 'a lot of', 'many'],
      rightAnswer: 0
  },
  {
      question: "I don't have ___ free time today.",
      options: ['a lot of', 'much', 'many'],
      rightAnswer: 1
  },
  {
      question: 'He has ___ friends at his birthday party.',
      options: ['some', 'many', 'a/an'],
      rightAnswer: 0
  },
  {
      question: 'She wants to buy ___ apples at the store.',
      options: ['some', 'many', 'much'],
      rightAnswer: 0
  },
  {
      question: "She doesn't have ___ bananas.",
      options: ['any', 'some,many'],
      rightAnswer: 0
  },
  {
      question: 'There are ___ birds in the sky.',
      options: ['many', 'a lot of', 'much'],
      rightAnswer: 1
  },
  {
      question: 'He has ___ pencil in his backpack.',
      options: ['some', 'many', 'a/an'],
      rightAnswer: 2
  },
  {
      question: 'There is ___ water in the glass.',
      options: ['some', 'many,a/an'],
      rightAnswer: 0
  }
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
