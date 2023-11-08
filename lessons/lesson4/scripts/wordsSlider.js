
const words = [{
    id: 1,
    image: './images/words/Pear.jpg',
    word: 'Pear',
    translation: 'Груша',
    example: ['I like to eat a juicy pear for a snack.',
        'A pear is a delicious fruit to eat after dinner.'],
},
{
    id: 2,
    image: './images/words/Peach.jpg',
    word: 'Peach',
    translation: 'Персик',
    example: ['The peach tree in our garden has lots of ripe peaches.',
    'Can I have a slice of peach pie for dessert, please?'],
},
{
    id: 3,
    image: './images/words/Tangerine.jpg',
    word: 'Tangerine',
    translation: 'Мандарин',
    example: ['I like the smell of tangerines',
    'Can you give me another tangerine, please?'],
},
{
    id: 4,
    image: './images/words/Plum.jpg',
    word: 'Plum',
    translation: 'Слива',
    example: ['Mom makes delicious plum jam from our garden plums.',
    "Sarah's favorite fruit is a plum, and she eats one every day."],
},
{
    id: 5,
    image: './images/words/Strawberry.jpg',

    word: 'Strawberry',
    translation: 'Полуниця',
    example: ["Let's make a strawberry smoothie with yogurt and ice.",
    'I like to put strawberries on my cereal for breakfast.'],
},
{
    id: 6,
    image: './images/words/Raspberry.jpg',
    word: 'Raspberry',
    translation: 'Малина',
    example: ['At the picnic, we had raspberry lemonade to drink.',
    'In the garden, I picked some ripe raspberries to make a pie with Grandma.'],
},
{
    id: 7,
    image: './images/words/Grapes.jpg',
    word: 'Grapes',
    translation: 'Виноград',
    example: ['Mom put some grapes in my lunchbox for school today.',
    'Grapes are a healthy snack that gives us energy to play and have fun.'],
},
{
    id: 8,
    image: './images/words/Melon.jpg',
    word: 'Melon',
    translation: 'Диня',
    example: ['In the summertime, we like to make melon smoothies with lots of ice.',
    'We grew our own watermelon in the garden, and it was the sweetest melon I ever tasted.'],
},
{
    id: 9,
    image: './images/words/Almond.jpg',
    word: 'Almond',
    translation: 'Мигдаль',
    example: ['I like to eat almond cookies because they taste so yummy.',
    'Almonds are little brown nuts that are good for your health.'],
},
{
    id: 10,
    image: './images/words/Walnut.jpg',
    word: 'Walnut',
    translation: 'Волоський горіх',
    example: ['My grandma bakes delicious brownies with walnuts in them.',
    "Do you like walnut ice cream? It's my favorite flavor."],
},
{
    id: 11,
    image: './images/words/Peanut.jpg',
    word: 'Peanut',
    translation: 'Арахіс',
    example: ['My friend has a pet squirrel that loves to eat peanuts.',
    'At the zoo, we saw a monkey eating a peanut from its tiny hand.'],
},
{
    id: 12,
    image: './images/words/be_allergic_to.jpg',
    word: 'be allergic to',
    translation: 'Мати алергію на',
    example: ["Sarah is allergic to peanuts, so she can't eat peanut butter sandwiches.",
    'Alex is allergic to milk, so he drinks almond milk instead.'],
},
{
    id: 13,
    image: './images/words/Tasty.jpg',
    word: 'Tasty',
    translation: 'Смачний',
    example: ['The pizza was tasty and cheesy.',
    'I love to eat tasty ice cream on a hot day.'],
},
{
    id: 14,
    image: './images/words/Yummy.jpg',
    word: 'Yummy',
    translation: 'Смачний',
    example: ['The pizza at the party was so yummy; I had three slices!',
    'I made yummy pancakes for breakfast with syrup and butter.'],

},
{
    id: 15,
    image: './images/words/Disgusting.jpg',
    word: 'Disgusting',
    translation: 'Огидний',
    example: ['The spoiled milk in the fridge smelled disgusting.',
    'Some people find spinach disgusting, but I like it.'],
}
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