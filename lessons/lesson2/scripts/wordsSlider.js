const words = [{
    id: 1,
    image: './images/words/get_up.jpg',
    word: 'GET UP',
    translation: 'Вставати',
    example: ['I get up early in the morning for school.',
        'They get up late on Saturdays.'],
},
{
    id: 2,
    image: './images/words/wake_up.jpg',
    word: 'WAKE UP',
    translation: 'Прокидатись',
    example: ['She wakes up with a smile on her face.',
        'It is hard to wake up on rainy, gloomy days.'],
},
{
    id: 3,
    image: './images/words/charge.jpg',
    word: 'CHARGE',
    translation: 'Заряджати',
    example: ['I forgot to charge my laptop last night.',
        'She likes to charge her phone overnight.'],
},
{
    id: 4,
    image: './images/words/brush.jpg',
    word: 'BRUSH',
    translation: 'Розчісувати, чистити',
    example: ['She brushes her teeth before going to bed.',
        'The cat loves when I brush its fur.'],
},

{
    id: 6,
    image: './images/words/wash.jpg',
    word: 'WASH',
    translation: 'Мити, вмиватись',
    example: ['Do not forget to wash your face in the morning.',
        'He always washes his hair in the shower.'],
},
{
    id: 7,
    image: './images/words/take_a_shower.jpg',
    word: 'TAKE A SHOWER',
    translation: 'Приймати душ',
    example: ['I take a shower every morning before school.',
        'On hot days, I like to take a cold shower.'],
},
{
    id: 8,
    image: './images/words/get_dressed.jpg',
    word: 'GET DRESSED',
    translation: 'Одягатись',
    example: ['It is time to get dressed for school.',
        'Mom helps me get dressed in the morning.'],
},
{
    id: 9,
    image: './images/words/tidy_up.jpg',
    word: 'TIDY UP',
    translation: 'Наводити порядок, застеляти(ліжко) ',
    example: ['It is time to tidy up your room.',
        "Let's tidy up the kitchen after we finish cooking dinner."],
},
{
    id: 11,
    image: './images/words/hang_out.jpg',
    word: 'HANG OUT',
    translation: 'Тусуватись',
    example: ['I like to hang out with my friends at the park.',
        'My family and I often hang out together at home.'],
},

]


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