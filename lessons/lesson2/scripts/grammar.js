const getToKnow = ["./images/getToKnow/haveHas.jpg"];
const grammar = document.querySelector('.grammar__images');

let putGrammar = (mass) => {
    for (let img of mass) {
        grammar.innerHTML += `
    <img height="600px" width="1200px" src="${img}" alt="">
    `
    }
}

putGrammar(getToKnow);