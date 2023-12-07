//Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = "hello world";
let str2 = "lorem ipsum";
let str3 = "javascript is cool";

console.log(str1.length);
console.log(str2.length);
console.log(str3.length);

//Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

let string1 = 'hello world';
let string2 = 'lorem ipsum';
let string3 = 'javascript is cool';

let uppercaseString1 = string1.toUpperCase();
let uppercaseString2 = string2.toUpperCase();
let uppercaseString3 = string3.toUpperCase();

console.log(uppercaseString1);
console.log(uppercaseString2);
console.log(uppercaseString3);

//Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

const lowercaseString1 = uppercaseString1.toLowerCase();
const lowercaseString2 = uppercaseString2.toLowerCase();
const lowercaseString3 = uppercaseString3.toLowerCase();

console.log(lowercaseString1);
console.log(lowercaseString2);
console.log(lowercaseString3);

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str4 = "Ревуть воли як ясла повні";
let arr12 = stringToarray(str4);

function stringToarray(str) {
    let wordsArray = str.split(' ');
    return wordsArray;
}
 console.log(arr12);

//є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let xxx = [10,8,-7,55,987,-1011,0,1050,0];
let str13 = xxx.map(String);
console.log(str13);

//Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string ';
let newstr = str.substring(1,str.length - 1);
console.log(newstr);
console.log(str);

//створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.


function sortNums(number, direction){
    if(direction === 'ascending'){
        return number.sort((a,b) => a - b);
    }
    return number.sort((a,b) => b - a);
}let nums = [11,21,3];
console.log(sortNums(nums,'descending'));
console.log(sortNums(nums,'ascending'));

//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//-- відсортувати його за спаданням за monthDuration

let sort = coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration);
console.log(sort);

//відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let manthfiltr = coursesAndDurationArray.filter((item) => item.monthDuration > 5);
console.log(manthfiltr);

//за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let NewCoursesAndDurationArray = coursesAndDurationArray.map((item, index,array) => {
 return{
     id: index,
     title: item.title,
     monthDuration: item.monthDuration
 };
});
console.log(NewCoursesAndDurationArray);

// описати колоду карт (від 6 до туза без джокерів)
let card = [
    { cardSuit: 'Hearts', value: '6', color: 'Red' },
    { cardSuit: 'Hearts', value: '7', color: 'Red' },
    { cardSuit: 'Hearts', value: '8', color: 'Red' },
    { cardSuit: 'Hearts', value: '9', color: 'Red' },
    { cardSuit: 'Hearts', value: '10', color: 'Red' },
    { cardSuit: 'Hearts', value: 'Jack', color: 'Red' },
    { cardSuit: 'Hearts', value: 'Queen', color: 'Red' },
    { cardSuit: 'Hearts', value: 'King', color: 'Red' },
    { cardSuit: 'Hearts', value: 'Ace', color: 'Red' },

    { cardSuit: 'Diamonds', value: '6', color: 'Red' },
    { cardSuit: 'Diamonds', value: '7', color: 'Red' },
    { cardSuit: 'Diamonds', value: '8', color: 'Red' },
    { cardSuit: 'Diamonds', value: '9', color: 'Red' },
    { cardSuit: 'Diamonds', value: '10', color: 'Red' },
    { cardSuit: 'Diamonds', value: 'Jack', color: 'Red' },
    { cardSuit: 'Diamonds', value: 'Queen', color: 'Red' },
    { cardSuit: 'Diamonds', value: 'King', color: 'Red' },
    { cardSuit: 'Diamonds', value: 'Ace', color: 'Red' },

    { cardSuit: 'Clubs', value: '6', color: 'Black' },
    { cardSuit: 'Clubs', value: '7', color: 'Black' },
    { cardSuit: 'Clubs', value: '8', color: 'Black' },
    { cardSuit: 'Clubs', value: '9', color: 'Black' },
    { cardSuit: 'Clubs', value: '10', color: 'Black' },
    { cardSuit: 'Clubs', value: 'Jack', color: 'Black' },
    { cardSuit: 'Clubs', value: 'Queen', color: 'Black' },
    { cardSuit: 'Clubs', value: 'King', color: 'Black' },
    { cardSuit: 'Clubs', value: 'Ace', color: 'Black' },

    { cardSuit: 'Spades', value: '6', color: 'Black' },
    { cardSuit: 'Spades', value: '7', color: 'Black' },
    { cardSuit: 'Spades', value: '8', color: 'Black' },
    { cardSuit: 'Spades', value: '9', color: 'Black' },
    { cardSuit: 'Spades', value: '10', color: 'Black' },
    { cardSuit: 'Spades', value: 'Jack', color: 'Black' },
    { cardSuit: 'Spades', value: 'Queen', color: 'Black' },
    { cardSuit: 'Spades', value: 'King', color: 'Black' },
    { cardSuit: 'Spades', value: 'Ace', color: 'Black' }
];

//знайти піковий туз(Не зрозумів що саме маєте наувазі під "знайти". Тому подібні завдання буду робити різними функціями. Виберете, що вам більше підходить.)

let Ace = card.reduce((acumulator, item) => {
    if (item.value === "Ace" && item.cardSuit === "Spades" ){
        acumulator["Ace"].push(item);
    }
    acumulator["Other"].push(item);
    return acumulator;
}, {Ace:[], Other:[]})
console.log(Ace);

//всі шістки

let six = card.filter((item) => item.value === "6");
console.log(six);

//всі червоні карти

let red = card.filter((item) => item.color === "Red");
console.log(red);

//всі буби

let diamonds = card.filter((item) => item.cardSuit === "Diamonds");
console.log(diamonds);

//всі трефи від 9 та більше

function clubsNine(cards) {
    let nineCards = [];
    let clubs = cards.filter((item) => item.cardSuit === "Clubs");
    for (let i = 0; i < clubs.length; i++) {
        if (clubs[i].value > 8 || clubs[i].value === "Jack" || clubs[i].value === "Queen" || clubs[i].value === "King" || clubs[i].value === "Ace") {
            nineCards.push(clubs[i]);
        }
    }

    return nineCards;
}
console.log(clubsNine(card));

//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

let suit = card.reduce((acum, card) => {
    if (card.cardSuit === "Spades") {
        acum["Spades"].push(card);
    } else if (card.cardSuit === "Diamonds") {
        acum["Diamonds"].push(card);
    } else if (card.cardSuit === "Hearts") {
        acum["Hearts"].push(card);
    } else {
        acum["Clubs"].push(card);
    }
    return acum
},{ Spades: [], Diamonds: [], Hearts: [], Clubs: [] });

console.log(suit);

//взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

//написати пошук всіх об'єктів, в який в modules є sass

let Sass = coursesArray.filter((item) => item.modules.includes("sass"));

console.log(Sass);

//написати пошук всіх об'єктів, в який в modules є docker

let Docker = coursesArray.filter((item) => item.modules.indexOf("docker") !== -1);

console.log(Docker);