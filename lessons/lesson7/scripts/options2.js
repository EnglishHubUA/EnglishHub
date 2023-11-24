const selections2 = [
    {
        "id": 11,
        "textStart": " ",
        "options": ["Is there", "There is", "Have", "There are"],
        "correct": 1,
        "textEnd": "a cat on the roof?"
        },
        
        {
        "id": 12,
        "textStart": "",
        "options": ["Is there", "There is", "Have", "There are"],
        "correct": 1,
        "textEnd": " any milk in the fridge?"
        },
        
        {
        "id": 13,
        "textStart": "John and Mary",
        "options": ["have", "there is", "do you have", "does he have"],
        "correct": 1,
        "textEnd": " a car."
        },
        
        {
        "id": 14,
        "textStart": "",
        "options": [ "There is not", "Is there","Have", "There are not"],
        "correct": 2,
        "textEnd": " any cheese in the refrigerator?"
        },
        
        {
        "id": 15,
        "textStart": "She ",
        "options": ["does he have", "do not have", "has", "do you have"],
        "correct": 3,
        "textEnd": " a new bicycle."
        },
        
        {
        "id": 16,
        "textStart": "",
        "options": [ "There is", "Have", "There are","Is there"],
        "correct": 4,
        "textEnd": " a park near your house?"
        },
        
        {
        "id": 17,
        "textStart": "I ",
        "options": ["Have", "There is", "Does he have", "Do not have"],
        "correct": 1,
        "textEnd": " a lot of work to do."
        },
        
        {
        "id": 18,
        "textStart": "Mary and Peter ",
        "options": ["Does he have", "There are not", "Have", "There is"],
        "correct": 2,
        "textEnd": " two children."
        },
        
        {
        "id": 19,
        "textStart": "",
        "options": ["Is there", "Have", "There are not", "Do he have"],
        "correct": 1,
        "textEnd": " any water in the glass?"
        },
        
        {
        "id": 20,
        "textStart": "",
        "options": ["Is there", "There is", "Have", "There are not"],
        "correct": 1,
        "textEnd": " a pen on the desk?"
        },
        
        {
        "id": 21,
        "textStart": "Mark ",
        "options": ["does he have", "does not have", "have", "do you have"],
        "correct": 2,
        "textEnd": " a new computer."
        },
        
        {
        "id": 23,
        "textStart": "We",
        "options": ["does he have", "do not have", "there is not", "haves"],
        "correct": 2,
        "textEnd": " any ice cream left."
        },
        
        {
        "id": 25,
        "textStart": "I ",
        "options": ["have", "does he have", "there is", "do you have"],
        "correct": 2,
        "textEnd": " a good idea for a gift."
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
        <option class='option__practice' value="${item.options[2]}">${item.options[2]}</option>
        <option class='option__practice' value="${item.options[3]}">${item.options[3]}</option>
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
