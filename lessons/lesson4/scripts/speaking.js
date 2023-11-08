const asks = [
    "What is your favorite food?",
    "How many times do you eat per day?",
    "What is your favorite drink?",
    "Do you like sweets?",
    "What is your favorite cafe? Why?",
    "What do you order the most often in cafes?",
    "Are you allergic to anything?",
    "Do you like pizza? What are your favorite toppings on a pizza?",
    "If you could have any food right now, what would it be, and why?",
    " Describe a meal you like to have for breakfast. What do you usually eat in the morning?"
]

const htmlSpeaking = document.querySelector('.speaking__wrapper');

const addQuestions = (mass)=>{
    for(let q=0; q<mass.length; q++){
        htmlSpeaking.innerHTML += `<li>${mass[q]}</li>`
    }
}

addQuestions(asks);