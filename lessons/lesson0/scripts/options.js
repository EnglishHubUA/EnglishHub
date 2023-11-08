const selections2 = [
    {
        id: 1,
        textStart: 'The opposite of good is ',
        options: ['baed', 'bad', 'bed'],
        correct: '2',
        textEnd: '.',
    },
    {
        id: 2,
        textStart: 'The opposite of hot is ',
        options: ['cald', 'colt', 'cold'],
        correct: '3',
        textEnd: '.',
    },
    {
        id: 3,
        textStart: 'The opposite of close is ',
        options: ['closed', 'open', 'opened'],
        correct: '2',
        textEnd: '.',
    },
    {
        id: 4,
        textStart: 'People can see because they have ',
        options: ['ears', 'nose', 'eyes'],
        correct: '3',
        textEnd: '.',
    },
    {
        id: 5,
        textStart: 'People can walk because they have ',
        options: ['legs', 'ears', 'nose'],
        correct: '1',
        textEnd: '.',
    },
    {
        id: 6,
        textStart: 'Potatoes, tomatoes, onions are ',
        options: ['fruit', 'vegetables', 'fish'],
        correct: '2',
        textEnd: '.',
    },
    {
        id: 7,
        textStart: 'Cows give ',
        options: ['meat', 'cheese', 'milk'],
        correct: '3',
        textEnd: '. It is white.',
    },
    {
        id: 8,
        textStart: 'My mother’s sister is my ',
        options: ['uncle', 'cousin', 'aunt'],
        correct: '3',
        textEnd: '.',
    },
    {
        id: 9,
        textStart: 'I am not married. I am ',
        options: ['single', 'solo', 'one'],
        correct: '1',
        textEnd: '.',
    },
    {
        id: 10,
        textStart: 'The opposite of interesting is ',
        options: ['exciting', 'beautiful', 'boring'],
        correct: '3',
        textEnd: '.',
    },
]

const practice2Form = document.querySelector('.options__form');
const practice2 = (mass) => {
    for (let item of mass) {
        practice2Form.innerHTML += `
        <p class="practice__text">${item.textStart}
        <select class='practice2__select' name="" id="">
        <option class='option__practice' value=""></option>
        <option class='option__practice' value="${item.options[0]}">${item.options[0]}</option>
        <option class='option__practice' value="${item.options[1]}">${item.options[1]}</option>
        <option class='option__practice' value="${item.options[2]}">${item.options[2]}</option>
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

