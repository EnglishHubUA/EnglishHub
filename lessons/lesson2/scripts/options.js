const selections1 = [
    {
        id: 1,
        textStart: 'They ',
        options: ['have', 'has'],
        correct: '1',
        textEnd: ' a lot of friends.',
    },
    {
        id: 2,
        textStart: 'Lily ',
        options: ['have', 'has'],
        correct: '2',
        textEnd: ' a cat. ',
    },
    {
        id: 3,
        textStart: 'Rachel and James ',
        options: ['have', 'has'],
        correct: '1',
        textEnd: ' curly hair.',
    },
    {
        id: 4,
        textStart: 'They ',
        options: ['have', 'has'],
        correct: '1',
        textEnd: ' a house. ',
    },
    {
        id: 5,
        textStart: 'My dog ',
        options: ['have', 'has'],
        correct: '2',
        textEnd: ' a long tail.',
    },
    {
        id: 6,
        textStart: 'We ',
        options: ['have', 'has'],
        correct: '1',
        textEnd: '  a big swimming pool.',
    },
    {
        id: 7,
        textStart: 'You ',
        options: ['have', 'has'],
        correct: '1',
        textEnd: ' a charming voice.',
    },
    {
        id: 8,
        textStart: 'Kevin ',
        options: ['have', 'has'],
        correct: '2',
        textEnd: 'a yellow umbrella.',
    },
    {
        id: 9,
        textStart: 'I ',
        options: ['have', 'has'],
        correct: '1',
        textEnd: ' a new computer. ',
    },
    {
        id: 10,
        textStart: 'My brother',
        options: ['have', 'has'],
        correct: '2',
        textEnd: ' a lot of friends.',
    },
]

const practice1Form = document.querySelector('.options__form');
const practice1 = (mass) => {
    for (let item of mass) {
        practice1Form.innerHTML += `
        <p class="practice__text">${item.textStart}
        <select class='practice1__select' name="" id="">
        <option class='option__practice' value=""></option>
        <option class='option__practice' value="${item.options[0]}">${item.options[0]}</option>
        <option class='option__practice' value="${item.options[1]}">${item.options[1]}</option>
        <option class='option__practice' value="${item.options[2]}">${item.options[2]}</option>
        </select> 
        ${item.textEnd}</div>
        `
    }
    practice1Form.innerHTML += `<input class='practice__button' type="button" value="submit" onclick="checkAnswers1()">`
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

