const selections1 = [
    {
        textStart: 'My sister ',
        options: ['go', 'goes'],
        correct: '2',
        textEnd: '  to school every day.',
    },
    {
        textStart: 'We usually ',
        options: ['eat', 'eats'],
        correct: '1',
        textEnd: ' pizza on Fridays.',
    },
    {
        textStart: 'She ',
        options: ['watch', 'watches'],
        correct: '2',
        textEnd: ' a lot of cartoons on TV.',
    },
    {
        textStart: 'I ',
        options: ['do', 'does'],
        correct: '1',
        textEnd: ' my homework in the evening.',
    },
    {
        textStart: 'They  ',
        options: ['play', 'plays'],
        correct: '1',
        textEnd: 'football every weekend.',
    },
    {
        textStart: 'The sun ',
        options: ['rise', 'rises'],
        correct: '2',
        textEnd: ' in the east.',
    },
    {
        textStart: 'Tom and Jerry ',
        options: ['is', 'are'],
        correct: '1',
        textEnd: '  a funny cartoon.',
    },
    {
        textStart: 'She  ',
        options: ['ride', 'rides'],
        correct: '2',
        textEnd: ' her bicycle to school.',
    },
    {
        textStart: 'We ',
        options: ['have', 'has'],
        correct: '1',
        textEnd: ' English lessons on Mondays.',
    },
    {
        textStart: 'The cat ',
        options: ['sit', 'sits'],
        correct: '2',
        textEnd: 'on the windowsill.',
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