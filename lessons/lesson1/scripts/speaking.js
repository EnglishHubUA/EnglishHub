const asks = [
    "What time do you wake up in the morning?",
    "What is your favorite part of the day?",
    "Do you watch TV or read a book before bedtime?",
    "What time do you usually have dinner?",
    "What is the last thing you do before going to sleep?",
    "What time do you usually take a shower in the evening or morning?",
    "Do you charge your tablet or phone overnight?",
    "What is your least favorite cleaning task?",
    "Do you make your bed in the morning?",
    "Do you sing in the shower?"
]

const htmlSpeaking = document.querySelector('.speaking__wrapper');

const addQuestions = (mass)=>{
    for(let q=0; q<mass.length; q++){
        htmlSpeaking.innerHTML += `<li>${mass[q]}</li>`
    }
}

addQuestions(asks);