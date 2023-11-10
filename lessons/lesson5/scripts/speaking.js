const asks = [
    "Do you have breakfast every day?",
    "What do you usually have for breakfast?",
    "Do you drink tea or coffee in the morning?",
    "Do you drink coffee/tea with or without sugar",
    "How much water do you drink per day?",
    "What fruit/vegetables are there in your fridge today?",
    "What do people usually have for lunch in your country?",
    "What do you like to have for dinner?",
    "Do you usually eat at home or at a restaurant?",
    "Do you have any special foods on holidays (Christmas, Birthday, New Year, etc)?"
]

const htmlSpeaking = document.querySelector('.speaking__wrapper');

const addQuestions = (mass)=>{
    for(let q=0; q<mass.length; q++){
        htmlSpeaking.innerHTML += `<li>${mass[q]}</li>`
    }
}

addQuestions(asks);