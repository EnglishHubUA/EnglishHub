const selections = [
    {
        id: 1,
        textStart: '',
        options: ['Do', 'Does'],
        correct: '1',
        textEnd: ' they go to school?',
    },
    {
        id: 2,
        textStart: '',
        options: ['Do', 'Does'],
        correct: '1',
        textEnd: 'you travel by bus?',
    },
    {
        id: 3,
        textStart: '',
        options: ['Do', 'Does'],
        correct: '1',
        textEnd: 'dogs like cats?',
    },
    {
        id: 4,
        textStart: '',
        options: ['Do', 'Does'],
        correct: '1',
        textEnd: 'the girls play football?',
    },
    {
        id: 5,
        textStart: '',
        options: ['Do', 'Does'],
        correct: '1',
        textEnd: 'you like pizza?',
    },
    {
        id: 6,
        textStart: '',
        options: ['Do', 'Does'],
        correct: '1',
        textEnd: 'penguins eat fish?',
    },
    {
        id: 7,
        textStart: '',
        options: ['Do', 'Does'],
        correct: '2',
        textEnd: 'a frog live in the sea?',
    },
    {
        id: 8,
        textStart: '',
        options: ['Do', 'Does'],
        correct: '2',
        textEnd: 'Lily study Spanish?',
    },
    {
        id: 9,
        textStart: '',
        options: ['Do', 'Does'],
        correct: '2',
        textEnd: 'Tom love me?',
    },
    {
        id: 10,
        textStart: '',
        options: ['Do', 'Does'],
        correct: '1',
        textEnd: 'you do karate?',
    }
]


const practiceForm = document.querySelector('.practice1__form');
const practice1 = (mass) => {
    for (let item of mass) {
        practiceForm.innerHTML += `
        <p class="practice1__text">${item.textStart}
        <select class='practice1__select' name="" id="">
        <option class='option__practice1' value=""></option>
        <option class='option__practice1' value="${item.options[0]}">${item.options[0]}</option>
        <option class='option__practice1' value="${item.options[1]}">${item.options[1]}</option>
        </select> 
        ${item.textEnd}</div>
        `
    }
    practiceForm.innerHTML += `<input class='practice1__button' type="button" value="submit" onclick="checkAnswers1()">`
}
practice1(selections);

const checkAnswers1 = () => {
    const mass = [...selections];
    let countCorrect = 0;
    let countINcorrect = 0;
    const selects = document.querySelectorAll('.practice1__select');
    for (let select = 0; select < selections.length; select++) {
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


