const getToKnow = ["./images/getToKnow/haveHas.jpg","./images/getToKnow/ToHavePresent.jpg.png"];
const grammar = document.querySelector('.grammar__images');

        grammar.innerHTML += `
        <img height="450px" width="900px" src="${getToKnow[0]}" alt="">
        <img height="780px" width="900px" src="${getToKnow[1]}" alt="">
    `
