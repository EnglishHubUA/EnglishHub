
const words = [{
    image: './images/words/beer.jpg',
    word: 'Beer',
    translation: 'Пиво',
    example: [`When you're older, you might hear about beer, but for now, let's focus on enjoying tasty and healthy drinks like water and milk.`,
        ' '],
},
{
    
    image: './images/words/buckwheat.jpg',
    word: 'Buckwheat',
    translation: 'Гречка',
    example: ['My mom made a tasty breakfast with buckwheat, and it was really yummy!',
        'Buckwheat is not only tasty but also a great choice for a gluten-free diet.'],
},{
    
    image: './images/words/candy.jpg',
    word: 'Candy',
    translation: 'Цукерка',
    example: ['On Halloween, we dress up in costumes and go door-to-door to collect candy.',
        `Johnny's favorite candy is a lollipop because it lasts a long time.`],
},{
    image: './images/words/doughnut.jpg',
    word: 'Doughnut',
    translation: 'Пончик',
    example: [`Sarah enjoyed a delicious doughnut with sprinkles for breakfast.`,
        `The bakery on Main Street sells the best chocolate doughnuts in town.`],
},{

    image: './images/words/fork.jpg',
    word: 'Fork',
    translation: 'Виделка',
    example: [`Please remember to always use a fork when eating your spaghetti so it's not too messy.`,
        ' '],
},{

    image: './images/words/fry.jpg',
    word: 'Fry',
    translation: 'Смажити',
    example: ['Tommy likes to fry eggs for breakfast every morning.',
        'The chef will teach us how to fry chicken in cooking class.'],
},{
    
    image: './images/words/honey.jpg',
    word: 'Honey',
    translation: 'Мед',
    example: ['Bees work together to make sweet honey in their hive.',
        'We spread honey on toast for a yummy breakfast.'],
},{
    
    image: './images/words/kettle.jpg',
    word: 'Kettle',
    translation: 'Чайник',
    example: ['Grandma uses the kettle to make delicious tea for us.',
        'Dad likes to heat water in the kettle for his morning coffee.'],
},{
    
    image: './images/words/knife.jpg',
    word: 'Knife',
    translation: 'Ножик',
    example: ['Be very careful when using a knife to cut fruits and vegetables in the kitchen.',
        'The chef used a sharp knife to chop the onions for the delicious soup.'],
},{

    image: './images/words/mustard.jpg',
    word: 'Mustard',
    translation: 'Гірчиця',
    example: ['The picnic sandwiches were delicious with a spread of mustard inside.',
        ' '],
},{

    image: './images/words/pan.jpg',
    word: 'Pan',
    translation: 'Сковорідка',
    example: ['During the camping trip, we used a pan to heat water for hot chocolate.',
        'My mom asked me to wash the frying pan after we cooked dinner together.'],
},{

    image: './images/words/pie.jpg',
    word: 'Pie',
    translation: 'Пиріг',
    example: [`
    Every Thanksgiving, my family gathers to enjoy a delicious pumpkin pie.`,
        `Yesterday, I learned a new word – "pi." It's a math thing that helps us find out how big around a circle (like a pie!) is.`],
},{
    image: './images/words/slice.jpg',
    word: 'Slice',
    translation: 'Різати на скибочки',
    example: ['Be careful when you slice the delicious pizza into even pieces for everyone to enjoy.',
        'Use a sharp knife to slice the juicy watermelon into tasty wedges.'],
},{
    image: './images/words/spoon.jpg',
    word: 'Spoon',
    translation: 'Ложка',
    example: [`The shiny spoon sparkled in the sunlight.`,
        'I used a spoon to scoop up my delicious ice cream.'],
},{
    image: './images/words/wine.jpg',
    word: 'Wine',
    translation: 'Вино',
    example: ['The chef used grape juice to make a delicious sauce that tasted like wine.',
        ' '],
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