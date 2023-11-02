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