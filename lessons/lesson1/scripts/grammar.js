const getToKnow = ["./images/getToKnow/toBePresent.jpg", "./images/getToKnow/questionToBe.jpg"];
const grammar = document.querySelector('.grammar__images');

let putGrammar = (mass) => {
    for (let img of mass) {
        grammar.innerHTML += `
    <img height="400px" width="650px" src="${img}" alt="">
    `
    }
}

putGrammar(getToKnow);