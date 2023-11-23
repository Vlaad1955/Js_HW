//Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let Arrs = [1, 2, 3, true, false, "Vladyslav", 11, "100", true, "13"];

for (let i = 0; i < Arrs.length; i++) {
    console.log(Arrs[i]);
} //  Я трохи автоматизував вивід елекментів масиву, можу пояснити його дію.
// задаємо зміну на "о" - це переший елемент масиву і його виводимо.
// Якщо значення змінної менше за довжину масиву, то до значення змінної додаємо одиницю.
// Таким чинном проходимось від 0 до 9, охоплюючи всі 10 елементів масиву.

console.log(Arrs[0]);
console.log(Arrs[1]);

//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Степовий вовк',
    pageCount: 224,
    genre: 'Classic'
};

let book2 = {
    title: '100 років самотності',
    pageCount: 281,
    genre: 'Classic'
};

let book3 = {
    title: 'Велики Гетсбі',
    pageCount: 180,
    genre: 'Romance'
};

//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book1 = {
    title: 'Степовий вовк',
    pageCount: 224,
    genre: 'Classic',
    authors: [
        { name: 'Герман Гессе', age: 86 }
    ]
};

let book2 = {
    title: '100 років самотності',
    pageCount: 281,
    genre: 'Classic',
    authors: [
        { name: 'Габрієль Гарсія Маркес', age: 91 }
    ]
};

let book3 = {
    title: 'Велики Гетсбі',
    pageCount: 180,
    genre: 'Romance',
    authors: [
        { name: 'Френсіс Скотт Фіцджеральд', age: 90 }
    ]
};

//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    { name: 'John Doe', username: 'john_doe1', password: 'password123' },
    { name: 'Bob ', username: 'bob_johnson2', password: 'securepass789' },
    { name: 'Alice', username: 'alice_smith3', password: 'userpass456' },
    { name: 'Bobi', username: 'bob_johnson4', password: 'securepass789' },
    { name: 'John', username: 'bob_johnson5', password: 'securepass789' },
    { name: 'Bob', username: 'bob_johnson6', password: 'securepass788' },
    { name: 'Bob', username: 'bob_johnson7', password: 'se89' },
    { name: 'Bab', username: 'bob_johnson8', password: '789' },
    { name: 'Bob ', username: 'bob_johnson9', password: 'securepass900' },
    { name: 'Bob', username: 'bob_johnson10', password: 'adwfefergdged' },
];
for (x = 0; x < users.length; x++) {
    console.log(users[x].password);
}

console.log(users[0].password);
console.log(users[1].password);

//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = prompt("Введіть Х");
if(x === 0){
    console.log("Не вірно")
}else {
    console.log("Вірно")
}

//Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +prompt("Введіть час");

if(time >= 0 && time <= 14){
    console.log("Перша четверть")
}else if (time > 14 && time <= 29 ){
    console.log("Друга четверть")
}else if(time> 29 && time <=44){
    console.log("Третя четверть")
}else if (time > 44 && time <= 59){
    console.log("Четверта чтверть")
}else {
    console.log("Введіть число від 0 - 59")
}

//У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt("Введіть день");

if (day >= 1 && day <= 10) {
    console.log("Число потрапляє в першу декаду місяця.");
} else if (day >= 11 && day <= 20) {
    console.log("Число потрапляє в другу декаду місяця.");
} else if (day >= 21 && day <= 31) {
    console.log("Число потрапляє в третю декаду місяця.");
} else {
    console.log("Введіть число від 1 - 31");
}

//Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayNumber = +prompt("Введінь номер дня")

if (dayNumber >= 1 && dayNumber <= 7) {
    switch (dayNumber) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
    }
} else {
    console.log("Введіть число від 1-7.");
}

//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let number1 = +prompt("Введіть перше число:");
let number2 = +prompt("Введіть друге число:");

    if (number1 > number2) {
        console.log(`Максимальне число: ${number1}`);
    } else if (number1 < number2) {
        console.log(`Максимальне число: ${number2}`);
    } else {
        console.log("Введені числа рівні.");
    }

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let y = prompt();

y = y || "default";

console.log(y);

//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let u = 0; u < coursesAndDurationArray.length; u++){
    if(coursesAndDurationArray[u].monthDuration > 5){
        console.log("Супер");
    }else {
        console.log("Не супер");
    }
}