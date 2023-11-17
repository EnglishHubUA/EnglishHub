const selections1 = [
    {
        textStart: ' ',
        options: ['Is there', 'Are there', 'There is', 'There are not'],
        correct: '1',
        textEnd: '  a cat in the room?',
    },
    {
        textStart: ' ',
        options: ['Is there', 'Are there', 'There is', 'There are not'],
        correct: '4',
        textEnd: ' any apples on the tree.',
    },
    {
        textStart: ' ',
        options: ['Is there', 'Are there', 'There is', 'There are not'],
        correct: '4',
        textEnd: ' a lot of books on the shelf.',
    },
    {
        textStart: ' ',
        options: ['Is there', 'Are there', 'There is', 'There are not'],
        correct: '2',
        textEnd: ' two children in the playground?',
    },
    {
        textStart: ' ',
        options: ['Is there', 'Are there', 'There is', 'There are not'],
        correct: '1',
        textEnd: ' a computer in the classroom?',
    },
    {
        textStart: ' ',
        options: ['Is there', 'Are there', 'There is', 'There are not'],
        correct: '3',
        textEnd: ' a big house next to the park.',
    },
    {
        textStart: ' ',
        options: ['Is there', 'Are there', 'There is not', 'There are not'],
        correct: '3',
        textEnd: '  any ice cream in the fridge.',
    },
    {
        textStart: ' ',
        options: ['Is there', 'Are there', 'There is', 'There are not'],
        correct: '1',
        textEnd: ' a bicycle outside the house?',
    },
    {
        textStart: ' ',
        options: ['Is there', 'Are there', 'There is', 'There are not'],
        correct: '3',
        textEnd: ` a party at my friend's house tonight.`,
    },
    {
        textStart: ' ',
        options: ['Is there', 'Are there', 'There is', 'There are not'],
        correct: '3',
        textEnd: ' a movie theater in your town.',
    },
    {
        textStart: ' ',
        options: ['Is there', 'Are there', 'There is', 'There are not'],
        correct: '4',
        textEnd: ' many people at the beach today.',
    },
    {
        textStart: ' ',
        options: ['Is there', 'Are there', 'There is', 'There are not'],
        correct: '4',
        textEnd: ' any toys in the box.',
    },
    {
        textStart: ' ',
        options: ['Is there', 'Are there', 'There is', 'There are not'],
        correct: '3',
        textEnd: ' a rainbow in the sky after the rain.',
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
        <option class='option__practice' value="${item.options[3]}">${item.options[3]}</option>
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
