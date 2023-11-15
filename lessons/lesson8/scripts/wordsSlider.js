
const words = [{
    image: './images/words/husband.jpg',
    word: 'Husband',
    translation: 'Чоловік',
    example: ['My husband is my best friend.',
        'I am happy to have a loving husband.'],
},
{
    image: './images/words/nephew.jpg',
    word: 'Nephew',
    translation: 'Племінник',
    example: [`My nephew is a little boy who is my sister's son.`,
    `During the holidays, my nephew and I decorate cookies together.`],
},
{
    image: './images/words/niece.jpg',
    word: 'Niece',
    translation: 'Племінниця',
    example: ['My niece and I enjoy playing games together.',
    'Every summer, my niece and I go on a fun vacation together.'],
},
{
    image: './images/words/relative.jpg',
    word: 'Relative',
    translation: 'Родич',
    example: ['I have a lot of relatives, including grandparents, aunts, and uncles.',
    "We often celebrate holidays with our relatives, sharing food and gifts."],
},
{
    image: './images/words/son.jpg',
    word: 'Son',
    translation: 'Син',
    example: ["My son is five years old.",
    `Sarah's son has a pet turtle named Tommy.`],
},
{
    image: './images/words/teenager.jpg',
    word: 'Teenager',
    translation: 'Підліток',
    example: [`It's important for teenagers to eat healthy food and get enough sleep.`,
    'Teenagers go to school to learn different subjects like math and science.'],
},
{
    image: './images/words/tired.jpg',
    word: 'Tired',
    translation: 'Втомлений',
    example: ['I am tired after playing at the park all day.',
    'We get tired when we walk a long distance.'],
},
{
    image: './images/words/uncle.jpg',
    word: 'Uncle',
    translation: 'Дядько',
    example: ['My uncle is very funny; he always tells jokes that make me laugh.',
    'My uncle is a firefighter, and he helps keep our community safe from fires.'],
},
{
    image: './images/words/wife.jpg',
    word: 'Wife',
    translation: 'Дружина',
    example: ['We celebrate special occasions with my wife.',
    'I am lucky to have a wonderful wife.'],
},
{
    image: './images/words/angry.jpg',
    word: 'Angry',
    translation: 'Злий',
    example: [`The teacher looked angry when we were too noisy in class.`,
    "My friend was angry because I accidentally took his pencil."],
},
{
    image: './images/words/aunt.jpg',
    word: 'Aunt',
    translation: 'Тітка',
    example: ['My aunt is very nice and always gives me candy.',
    'My aunt took me to the zoo, and we saw lions and elephants.'],
},
{
    image: './images/words/busy.jpg',
    word: 'Busy',
    translation: 'Зайнятий',
    example: ["I am busy doing my homework after school.",
    'The street is busy with cars and people going to work.'],
},
{
    image: './images/words/cousin.jpg',
    word: 'Cousin',
    translation: 'Кузен',
    example: [`We often celebrate birthdays with our cousins.`,
    'I have more than one cousin, and they are all special to me.'],
},
{
    image: './images/words/daughter.jpg',
    word: 'Daughter',
    translation: 'Дочка',
    example: ['My daughter loves to play with her favorite teddy bear.',
    `Emma's mom taught her daughter how to bake cookies in the kitchen.`],

},
{
    image: './images/words/family.jpg',
    word: 'Family',
    translation: `Сім'я`,
    example: ['I spread butter on my toast every morning for breakfast.',
    'At the restaurant, I asked for extra butter for my baked potato.'],
}];
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