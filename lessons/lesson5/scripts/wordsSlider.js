
const words = [{
    image: './images/words/mushroom.jpg',
    word: 'Mushroom',
    translation: 'Гриб',
    example: ['Yesterday, I found a small mushroom in the backyard.',
        'Mom added sliced mushrooms to the pizza.'],
},
{
    image: './images/words/to_cut.jpg',
    word: 'To cut',
    translation: 'Різати',
    example: ['I like to cut my sandwiches into small pieces.',
    `Let's cut the cake into equal portions so everyone gets a piece.`],
},
{
    image: './images/words/cabbage.jpg',
    word: 'Cabbage',
    translation: 'Капуста',
    example: ['Cabbage is a green vegetable.',
    'My grandma makes the best stuffed cabbage rolls.'],
},
{
    image: './images/words/garlic.webp',
    word: 'Garlic',
    translation: 'Часник',
    example: ['I love to eat spaghetti with garlic bread for dinner.',
    "Sally doesn't like the strong smell of garlic in her food."],
},
{
    image: './images/words/onion.jpg',
    word: 'Onion',
    translation: 'Цибуля',
    example: ["My mom adds onions to the salad to make it taste better.",
    'The onion has a strong smell that makes my eyes water when I cut it.'],
},
{
    image: './images/words/bitter.jpg',
    word: 'Bitter',
    translation: 'Гіркий',
    example: ['The medicine tasted very bitter, but it would make me feel better.',
    'The little boy made a bitter face when he bit into the sour candy.'],
},
{
    image: './images/words/letuce.webp',
    word: 'Letuce',
    translation: 'Листя салату',
    example: ['Mom puts fresh lettuce in our salads for dinner.',
    'My favorite part of a taco is the crispy lettuce inside.'],
},
{
    image: './images/words/parsley.jpg',
    word: 'Parsley',
    translation: 'Петрушка',
    example: ['The chef at the restaurant garnished the dish with a green parsley.',
    'In the grocery store, Sarah carefully selected a bunch of parsley to bring home.'],
},
{
    image: './images/words/sour_cream.jfif',
    word: 'Sour cream',
    translation: 'Сметана',
    example: ['My mom makes delicious baked potatoes with sour cream.',
    'The salad tastes better with a dollop of sour cream.'],
},
{
    image: './images/words/spicy.jpg',
    word: 'Spicy',
    translation: 'Гострий',
    example: [`Be careful with the spicy salsa; it's really hot!`,
    "The hot wings were too spicy for my sister."],
},
{
    image: './images/words/pumpkin.jpg',
    word: 'Pumpkin',
    translation: 'Гарбуз',
    example: ['Dad used a sharp knife to cut a spooky face into the pumpkin.',
    'Mom roasted pumpkin seeds with salt for a tasty and healthy snack.'],
},
{
    image: './images/words/beet.webp',
    word: 'Beet',
    translation: 'Буряк',
    example: ["My mom boiled beets for dinner.",
    'Beets are often used to make delicious and healthy salads.'],
},
{
    image: './images/words/salty.jpg',
    word: 'Salty',
    translation: 'Солоний',
    example: [`I don't like my soup too salty.`,
    'The air near the ocean always feels a little salty and fresh.'],
},
{
    image: './images/words/to_boil.jfif',
    word: 'To boil',
    translation: 'Варити',
    example: ['Mom helps me boil eggs for breakfast.',
    'The recipe says to boil chicken for the soup.'],

},
{
    image: './images/words/butter.jfif',
    word: 'Butter',
    translation: 'Масло',
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