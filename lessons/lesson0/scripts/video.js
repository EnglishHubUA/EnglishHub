const selections3 = [
    {
        id: 1,
        textStart: '1. My name is John. ',
        options: ['True', 'False'],
        correct: '2',
        textEnd: '',
    },
    {
        id: 2,
        textStart: '2. My surname is O’Donnell. ',
        options: ['True', 'False'],
        correct: '1',
        textEnd: '',
    },
    {
        id: 3,
        textStart: '3. My mother and father are from Canada.',
        options: ['True', 'False'],
        correct: '1',
        textEnd: '',
    },
    {
        id: 4,
        textStart: '4. Canadians are not polite.',
        options: ['True', 'False'],
        correct: '2',
        textEnd: '',
    },
]

const practice3Form = document.querySelector('.practice3__form');
const practice3 = (mass) => {
    for (let item of mass) {
        practice3Form.innerHTML += `
        <p class="practice__text practice3__text">${item.textStart}
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

