const selections1 = [
    {
        id: 1,
        textStart: '',
        options: ['Do', 'Does'],
        correct: '1',
        textEnd: '  you have a pet?',
    },
    {
        id: 2,
        textStart: '',
        options: ['Do', 'Does'],
        correct: '2',
        textEnd: 'she have a favorite book?',
    },
    {
        id: 3,
        textStart: '',
        options: ['Do', 'Does'],
        correct: '1',
        textEnd: ' your parents have a big garden?',
    },
    {
        id: 4,
        textStart: '',
        options: ['Do', 'Does'],
        correct: '2',
        textEnd: 'he have a red bicycle?',
    },
    {
        id: 5,
        textStart: '',
        options: ['Do', 'Does'],
        correct: '2',
        textEnd: 'your friend have a toy train?',
    },
    {
        id: 6,
        textStart: '',
        options: ['Do', 'Does'],
        correct: '2',
        textEnd: 'your brother have a computer game?',
    },
    {
        id: 7,
        textStart: '',
        options: ['Do', 'Does'],
        correct: '2',
        textEnd: 'she have any siblings?',
    },
    {
        id: 8,
        textStart: '',
        options: ['Do', 'Does'],
        correct: '2',
        textEnd: 'she have a purple dress?',
    },
    {
        id: 9,
        textStart: '',
        options: ['Do', 'Does'],
        correct: '1',
        textEnd: 'your grandparents have a pet cat?',
    },
    {
        id: 10,
        textStart: '',
        options: ['Do', 'Does'],
        correct: '2',
        textEnd: 'he have a blue bicycle?',
    }
]


const practiceForm = document.querySelector('.practice1__form');
const practice1 = (mass) => {
    for (let item of mass) {
        practiceForm.innerHTML += `
        <p class="practice__text">${item.textStart}
        <select class='practice1__select' name="" id="">
        <option class='option__practice' value=""></option>
        <option class='option__practice' value="${item.options[0]}">${item.options[0]}</option>
        <option class='option__practice' value="${item.options[1]}">${item.options[1]}</option>
        </select> 
        ${item.textEnd}</div>
        `
    }
    practiceForm.innerHTML += `<input class='practice__button' type="button" value="submit" onclick="checkAnswers1()">`
}
practice1(selections1);

const checkAnswers1 = () => {
    const mass = [...selections1];
    let countCorrect = 0;
    let countINcorrect = 0;
    const selects = document.querySelectorAll('.practice1__select');
    for (let select = 0; select < selections1.length; select++) {
        if (selects[select].options.selectedIndex == mass[select].correct) {
            countCorrect++;
            selects[select].style.border = 'solid 3px green';
        }
        else {
            countINcorrect++;
            selects[select].style.border = 'solid 3px red';

        }


    }
    console.log('correct ' + countCorrect + '/' + mass.length)
}


///////////////////


const selections2 = [
    {
        id: 1,
        textStart: 'I',
        options: ['have', 'has'],
        correct: '1',
        textEnd: ' a book.',
    },
    {
        id: 2,
        textStart: 'She',
        options: ['have', 'has'],
        correct: '2',
        textEnd: ' many friends.',
    },
    {
        id: 3,
        textStart: 'Do you have',
        options: ['any', 'some'],
        correct: '1',
        textEnd: ' siblings?',
    },
    {
        id: 4,
        textStart: 'There is',
        options: ['some', 'much', 'any'],
        correct: '1',
        textEnd: ' milk in the refrigerator.',
    },
    {
        id: 5,
        textStart: 'We have',
        options: ['much', 'many'],
        correct: '1',
        textEnd: ' homework to do.',
    },
    {
        id: 6,
        textStart: '',
        options: ['Do', 'Does'],
        correct: '2',
        textEnd: 'your brother have a computer game?',
    },
    {
        id: 7,
        textStart: 'He ',
        options: ['have', 'has'],
        correct: '2',
        textEnd: ' many toys in his room.',
    },
    {
        id: 8,
        textStart: '',
        options: ['many', 'a'],
        correct: '2',
        textEnd: 'cat has some kittens in the backyard.',
    },
    {
        id: 9,
        textStart: '',
        options: ['Do', 'Does'],
        correct: '2',
        textEnd: ' she have any apples in the kitchen?',
    },
    {
        id: 10,
        textStart: 'I have',
        options: ['an', 'a', 'many'],
        correct: '1',
        textEnd: ' idea for our project.',
    }
]

const practice2Form = document.querySelector('.practice2__form');
const practice2 = (mass) => {
    for (let item of mass) {
        practice2Form.innerHTML += `
        <p class="practice__text">${item.textStart}
        <select class='practice2__select' name="" id="">
        <option class='option__practice' value=""></option>
        <option class='option__practice' value="${item.options[0]}">${item.options[0]}</option>
        <option class='option__practice' value="${item.options[1]}">${item.options[1]}</option>
        </select> 
        ${item.textEnd}</div>
        `
    }
    practice2Form.innerHTML += `<input class='practice__button' type="button" value="submit" onclick="checkAnswers2()">`
}
practice2(selections2);


const checkAnswers2 = () => {
    const mass = [...selections2];
    let countCorrect = 0;
    let countINcorrect = 0;
    const selects = document.querySelectorAll('.practice2__select');
    for (let select = 0; select < selections2.length; select++) {
        if (selects[select].options.selectedIndex == mass[select].correct) {
            countCorrect++;
            selects[select].style.border = 'solid 3px green';
        }
        else {
            countINcorrect++;
            selects[select].style.border = 'solid 3px red';

        }


    }
    console.log('correct ' + countCorrect + '/' + mass.length)
}
