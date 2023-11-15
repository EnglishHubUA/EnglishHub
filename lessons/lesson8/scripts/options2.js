const selections3 = [
    {
        textStart: 'Jeffrey is John’s grandfather. He likes to visit his grandson and granddaughter.',
        options: ['True', 'False'],
        correct: '1',
        textEnd: '',
    },
    {
        textStart: 'Sheena is John’s cousin.',
        options: ['True', 'False'],
        correct: '2',
        textEnd: ' ',
    },
    {
        textStart: 'Lucy is John’s wife. She is a pilot.',
        options: ['True', 'False'],
        correct: '2',
        textEnd: '',
    },
    {
        textStart: 'John’s father Rafael works in his office at home.',
        options: ['True', 'False'],
        correct: '1',
        textEnd: '',
    }
]

const practice3Form = document.querySelector('.practice3__form');
const practice3 = (mass) => {
    for (let item of mass) {
        practice3Form.innerHTML += `
        <p class="practice__text">${item.textStart}
        <select class='practice3__select' name="" id="">
        <option class='option__practice' value=""></option>
        <option class='option__practice' value="${item.options[0]}">${item.options[0]}</option>
        <option class='option__practice' value="${item.options[1]}">${item.options[1]}</option>
        </select> 
        ${item.textEnd}</div>
        `
    }
    practice3Form.innerHTML += `<input class='practice__button' type="button" value="submit" onclick="checkAnswers3()">`
}
practice3(selections3);


const checkAnswers3 = () => {
    const mass = [...selections3];
    let countCorrect = 0;
    let countINcorrect = 0;
    const selects = document.querySelectorAll('.practice3__select');
    for (let select = 0; select < selections3.length; select++) {
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
