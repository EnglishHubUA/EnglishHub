const asks = [
    "What do you do in your free time?",
    "Where do you study or work?",
    "What is your favorite food?",
    "What is your goal in learning English?",
    "Where do you live?",
    "Do you have any hobbies?",
    "How was your day today?",
]

const htmlQuestions = document.querySelector('.questions__wrapper');

const addQuestions = (mass)=>{
    for(let q=0; q<mass.length; q++){
        htmlQuestions.innerHTML += `<li>${mass[q]}</li>`
    }
}

addQuestions(asks);