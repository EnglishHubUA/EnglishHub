const words = [{
    image: './images/words/funny.jpg',
    word: 'FUNNY',
    translation: 'Смішний',
    example: ['The clown at the circus made us all laugh with his funny tricks.',
        'My little brother told a funny joke that made everyone in the family smile.'],
},
{
    image: './images/words/hard_working.jpg',
    word: 'HARDWORKING',
    translation: 'Працьовитий',
    example: ['Maria is a hardworking student who always does her homework on time.',
        'My grandpa is a hardworking man who has been working in the same factory for many years.'],
},
{
    image: './images/words/honest.jpg',
    word: 'HONEST',
    translation: 'Чесний',
    example: ["It's important to be honest with your friends and family.",
        'I always try to be honest in everything I do.'],
},
{
    image: './images/words/kind.jpg',
    word: 'KIND',
    translation: 'Добрий',
    example: ['Sam felt happy when his sister said something kind to him.',
        'We should always try to say kind words to make people feel better.'],
},

{
    image: './images/words/modest.jpg',
    word: 'MODEST',
    translation: 'Скромний',
    example: ['John is a modest student who always does his homework quietly in class.',
        'Our family enjoys modest picnics in the park on weekends.'],
},
{
    image: './images/words/patient.jpg',
    word: 'PATIENT',
    translation: 'Терпеливий',
    example: ["It's important to be patient when learning something new.",
        'The patient fisherman sat by the river, hoping to catch a big fish.'],
},
{
    image: './images/words/polite.jpg',
    word: 'POLITE',
    translation: 'Ввічливий',
    example: ['Polite people always say "thank you" when someone helps them.',
        `If you make a mistake, it's polite to apologize and say "I'm sorry."`],
},
{
    image: './images/words/quiet.jpg',
    word: 'QUIET',
    translation: 'Тихий',
    example: ['The library is a quiet place to read and study.',
        "My cat is very quiet; it rarely makes any noise."],
},
{
    image: './images/words/rude.jpg',
    word: 'RUDE',
    translation: 'Грубий',
    example: ['Being rude to your classmates can make them feel sad.',
        "It's rude to interrupt someone when they are speaking."],
}]


const wrap = document.querySelector('.wrap');
const putWords = (mass) => {
    for (let word of mass) {
        wrap.innerHTML += `<div class="card">
        <div class="front">
          <img class="front__img" width="390px" height="420px" src="${word.image}" alt="">
          <p class="font__word">${word.word}</p>
        </div>
        <div class="back">
        <img width="390px" height="420px" src="${word.image}" alt="">
          <h3 class="back__trans">${word.translation}</h3>
            <span>${word?.example[0]}</span>
            <span>${word?.example[1]}</span>
        </div>
      </div>`
    }
}

putWords(words);
$('.wrap').slick();