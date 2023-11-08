const selections1 = [
    {
        id: 1,
        textStart: 'I ',
        options: ['have', 'has'],
        correct: '1',
        textEnd: '  a pet dog.',
    },
    {
        id: 2,
        textStart: 'She ',
        options: ['have', 'has'],
        correct: '2',
        textEnd: ' a red bicycle.',
    },
    {
        id: 3,
        textStart: 'We ',
        options: ['have', 'has'],
        correct: '1',
        textEnd: ' a new computer.',
    },
    {
        id: 4,
        textStart: 'Tom and Sarah ',
        options: ['have', 'has'],
        correct: '1',
        textEnd: ' a baby brother.',
    },
    {
        id: 5,
        textStart: 'Sarah,  ',
        options: ['do', 'does'],
        correct: '1',
        textEnd: 'you have any crayons?',
    },
    {
        id: 6,
        textStart: 'My sister ',
        options: ['have', 'has'],
        correct: '2',
        textEnd: ' a lovely cat named Whiskers.',
    },
    {
        id: 7,
        textStart: 'Jake and I',
        options: ['have', 'has'],
        correct: '1',
        textEnd: '  a big collection of superhero action figures.',
    },
    {
        id: 8,
        textStart: 'We  ',
        options: ['do not', 'does not'],
        correct: '1',
        textEnd: ' have school on Sundays.',
    },
    {
        id: 9,
        textStart: 'She ',
        options: ['do not', 'does not'],
        correct: '2',
        textEnd: ' have a pet dog.',
    },
    {
        id: 10,
        textStart: 'She ',
        options: ['have', 'has'],
        correct: '2',
        textEnd: 'a pet dog and a cat.',
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
}