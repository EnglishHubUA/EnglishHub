const option1Reading = document.querySelector('.option1-reading'),
      option2Reading = document.querySelector('.option2-reading'),
      option3Reading = document.querySelector('.option3-reading');

const optionElementsReading = document.querySelectorAll('.option-reading');

const questionReading = document.getElementById('question-reading');

const numberOfQuestionReading = document.getElementById('number-of-question-reading'),
      numberOfAllQuestionsReading = document.getElementById('number-of-all-questions-reading');

let indexOfQuestionReading = 0, // Start with the first question
    indexOfPageReading = 0;

const answersTrackerReadingReading = document.getElementById('answers-tracker-reading');
const btnNextReadingReading = document.getElementById('btn-next-reading');

let scoreReadingReading = 0;

const correctAnswerReadingReading = document.getElementById('correct-answer-reading'),
      numberOfAllQuestions2Reading = document.getElementById('number-of-all-questions-2-reading'),
      btnTryAgainReading = document.getElementById('btn-try-again-reading');

const questionsReading = [
    {
        question: 'Who is the main character of the story?',
        options: ['Sammy', 'Oliver', 'Sarah'],
        rightAnswer: 1
    },
    {
        question: 'Where did Oliver, the wise owl, live?',
        options: ['In a cozy treehouse', 'In a busy city', 'In a deep cave'],
        rightAnswer: 0
    },
    {
        question: 'What did Oliver like to do in his free time?',
        options: ['Watch TV', 'Read books and explore the forest', 'Play video games'],
        rightAnswer: 1
    },
    {
        question: 'Who is the new neighbor that moved in next to Oliver?',
        options: ['A grumpy bear', 'A chatty squirrel named Sammy', 'A singing bird'],
        rightAnswer: 1
    },
    {
        question: 'How did Sammy behave when he talked to others?',
        options: ['Rude and impolite', 'Shy and quiet', 'Funny and silly'],
        rightAnswer: 0
    },
    {
        question: 'What did Oliver decide to do after Sammy moved in?',
        options: ['Move to a different treehouse', 'Have a kind talk with Sammy', 'Ignore Sammy completely'],
        rightAnswer: 1
    },
    {
        question: 'How did Oliver approach the conversation with Sammy about using polite words?',
        options: ['He gave Sammy a gift', 'He talked patiently and kindly', 'He yelled at Sammy'],
        rightAnswer: 1
    },
    {
        question: 'What did Oliver and Sammy work together to create in the forest?',
        options: ['A new house', 'A beautiful garden', 'A big bonfire'],
        rightAnswer: 1
    }
];
numberOfAllQuestionsReading.innerHTML = questionsReading.length;

const loadReading = () => {
    questionReading.innerHTML = questionsReading[indexOfQuestionReading].question;

    option1Reading.innerHTML = questionsReading[indexOfQuestionReading].options[0];
    option2Reading.innerHTML = questionsReading[indexOfQuestionReading].options[1];
    option3Reading.innerHTML = questionsReading[indexOfQuestionReading].options[2];

    numberOfQuestionReading.innerHTML = indexOfPageReading + 1;
    indexOfPageReading++;
};

const checkAnswerReading = el => {
    if (el.target.dataset.id == questionsReading[indexOfQuestionReading].rightAnswer) {
        el.target.classList.add('correct');
        updateAnswerTrackerReading('correct');
        scoreReadingReading++;
    } else {
        el.target.classList.add('wrong');
        updateAnswerTrackerReading('wrong');
    }
    disabledOptionsReading();
}

for (option of optionElementsReading) {
    option.addEventListener('click', e => checkAnswerReading(e));
}

const disabledOptionsReading = () => {
    optionElementsReading.forEach(item => {
        item.classList.add('disabled');
        if (item.dataset.id == questionsReading[indexOfQuestionReading].rightAnswer) {
            item.classList.add('correct');
        }
    });
}

const enableOptionsReading = () => {
    optionElementsReading.forEach(item => {
        item.classList.remove('correct', 'wrong', 'disabled');
    });
}

const answerTrackerReading = () => {
    questionsReading.forEach(() => {
        const div = document.createElement('div');
        answersTrackerReadingReading.appendChild(div);
    });
}

const updateAnswerTrackerReading = status => {
    answersTrackerReadingReading.children[indexOfPageReading - 1].classList.add(`${status}`);
}

const validateReading = () => {
    if (!optionElementsReading[0].classList.contains('disabled')) {
        alert("You need to choose one of the answer options")
    } else {
        indexOfQuestionReading++; // Move to the next question
        if (indexOfQuestionReading < questionsReading.length) {
            loadReading();
            enableOptionsReading();
        } else {
            quizOverReading();
        }
    }
}

const quizOverReading = () => {
    document.querySelector('.quiz-over-modal').classList.add('active');
    correctAnswerReadingReading.innerHTML = scoreReadingReading;
    numberOfAllQuestions2Reading.innerHTML = questionsReading.length;
}

const tryAgainReading = () => {
    window.location.reload();
}

btnTryAgainReading.addEventListener('click', tryAgainReading);

btnNextReadingReading.addEventListener('click', () => {
    validateReading();
});

window.addEventListener('load', () => {
    loadReading();
    answerTrackerReading();
});
