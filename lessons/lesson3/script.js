

const words = [{
    id: 1,
    image: './apple.jpg',
    word: 'Driver',
    translation: 'Водій',
    example: ['The bus driver takes us to school every morning.',
        'My mom is a good driver when she drives our car.'],
},
{
    id: 2,
    image: './apple.jpg',
    word: 'Tutor',
    translation: 'Репетитор',
    example: ['My tutor helps me learn new words and practice reading every week.',
        'I feel more confident in math after getting extra help from my tutor.'],
},
{
    id: 3,
    image: './apple.jpg',
    word: 'Accountant',
    translation: 'Бухгалтер',
    example: ['The accountant helps people with their money and numbers.',
        'My aunt is an accountant, and she loves working with math and finances.'],
},
{
    id: 4,
    image: './apple.jpg',
    word: 'Artist',
    translation: 'Художник',
    example: ['The artist painted a beautiful rainbow in the sky with bright colors.',
        'I want to be an artist when I grow up so I can draw and make cool pictures.'],
},
{
    id: 5,
    image: './apple.jpg',
    word: 'Lawyer',
    translation: 'Юрист',
    example: ["The lawyer helped the person who was in trouble with the law.",
        "A lawyer is someone who knows a lot about rules and helps people with legal problems."],
},
{
    id: 6,
    image: './apple.jpg',
    word: 'Politician',
    translation: 'Політик',
    example: ['The politician talked to the people and listened to their ideas.',
        'The brave firemen and the smart politician are both heroes in our town.'],
},
{
    id: 7,
    image: './apple.jpg',
    word: 'Seller',
    translation: 'Продавець',
    example: ['The seller at the candy store smiled and gave me a lollipop.',
        "My mom is a seller who works at the farmer's market, selling fresh fruits and vegetables."],
},
{
    id: 8,
    image: './apple.jpg',
    word: 'Fireman',
    translation: 'Пожежник',
    example: ['Firemen saved my cat from fired house', 'I want to be a fireman in the future'],
},
{
    id: 9,
    image: './apple.jpg',
    word: 'Waiter',
    translation: 'Офіціант',
    example: ['The friendly waiter brought us tasty burgers and fries.',
        'I raised my hand to call the waiter when I needed more water.'],
},
{
    id: 10,
    image: './apple.jpg',
    word: 'Waitress',
    translation: 'Офіціантка',
    example: ['The waitress brought us yummy pancakes for breakfast.',
        'The friendly waitress smiled and took our order at the restaurant.'],
},
{
    id: 11,
    image: './apple.jpg',
    word: 'Chef',
    translation: 'Шеф',
    example: ['The chef in the restaurant made delicious pizza for all the hungry kids.',
        'I want to be a chef when I grow up because I love to cook yummy food.'],
},
{
    id: 12,
    image: './apple.jpg',
    word: 'Scientist',
    translation: 'Науковець',
    example: [
        "The scientist used a special machine to discover new facts about the stars.",
        "The scientist loves to explore and learn about the amazing world around us."],
},
{
    id: 13,
    image: './apple.jpg',
    word: 'Plumber',
    translation: 'Сантехнік',
    example: ['My dad is a plumber, and he helps people with their water problems.'],
},
{
    id: 14,
    image: './apple.jpg',
    word: 'Hairdresser',
    translation: 'Перукар',
    example: ["My mom is a hairdresser, and she can make people's hair look so pretty.",
        "I'm going to the hairdresser today to get a cool new haircut."],
},
]




const wrap = document.querySelector('.wrap');
const putWords = (mass) => {
    for (let word of mass) {
        wrap.innerHTML += `<div class="card">
        <div class="front">
          <img class="front__img" width="390px" height="420px" src="./images/works/${word.word}.jpg" alt="">
          <p class="font__word">${word.word}</p>
        </div>
        <div class="back">
        <img width="390px" height="420px" src="./images/works/${word.word}.jpg" alt="">
          <h3 class="back__trans">${word.translation}</h3>
            <span>${word?.example[0]}</span>
            <span>${word?.example[1]}</span>
        </div>
      </div>`
    }
}

putWords(words);





$('.wrap').slick();


//////////


const getToKnow = ["./images/getToKnow/ToHavePresent.jpg.png"];
const grammar = document.querySelector('.grammar__images');

let putGrammar = (mass) => {
    for (let img of mass) {
        grammar.innerHTML += `
    <img height="700px" width="800px" src="${img}" alt="">
    `
    }
}

putGrammar(getToKnow);


////////////


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












////////////////////////////video

const videoQuestions = [
    {
        id:1,
        task: 'James is a _____',
        options:['pilot','flight attendant','airport cleaner']
    }
]