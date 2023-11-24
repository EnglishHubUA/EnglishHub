const selections1 = [
    {
        id: 1,
        textStart: 'Can I have',
        options: ["Some", "Any", "A lot of"],
        correct: '1',
        textEnd: ' ice cream, please?',
    },
    {
        id: 2,
        textStart: 'There are not ',
        options: ['Some', 'Any', "A lot of"],
        correct: '2',
        textEnd: ' books on the shelf.',
    },
    {
        "id": 3,
        "textStart": "How ",
        "options": ["Some", "Many", "Much"],
        "correct": "3",
        "textEnd": " sugar do you need for the recipe?"
    },
    {
        "id": 4,
        "textStart": "I don't have ",
        "options": ["Some", "A", "Much"],
        "correct": "3",
        "textEnd": " milk left for my coffee."
    },
    {
        "id": 5,
        "textStart": "I need to buy ",
        "options": ["Some", "Any", "An"],
        "correct": "1",
        "textEnd": " eggs for breakfast."
    },
    {

        "id": 6,
        "textStart": "Is there ",
        "options": ["Some", "Any", "A"],
        "correct": "2",
        "textEnd": " oranges juice in the fridge?"
    },
    {
        "id": 7,
        "textStart": "She has ",
        "options": ["Some", "A", "An"],
        "correct": "1",
        "textEnd": " friends coming over for dinner."
    },
    {
        "id": 9,
        "textStart": "Are there ",
        "options": ["some", "any", "a lot of"],
        "correct": "2",
        "textEnd": " movies playing at the cinema tonight?"
    },
    {
        "id": 10,
        "textStart": "We don't have ",
        "options": ["some", "any", "a lot of"],
        "correct": "2",
        "textEnd": " oranges left."
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
        <option class='option__practice' value="${item.options[2]}">${item.options[2]}</option>
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


