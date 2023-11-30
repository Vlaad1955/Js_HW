//створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function Srectangle(a,b){
    let S = a * b;
    return S;
}

console.log(Srectangle(4,5));

//створити функцію яка обчислює та повертає площу кола з радіусом r

function Scircle(r){
    let S = r *r * Math.PI;
    return S;
}

console.log(Scircle(10));

//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function Shr (h,r){
    const S1 = 2 * Math.PI * r * h;
    const S2 = Math.PI * Math.pow(r, 2);
    const S = S1 + 2 * S2;
    return S;
}

console.log(Shr(5,3));

//створити функцію яка приймає масив та виводить кожен його елемент

function inlog (arras){
    for(let i =0; i< arras.length; i++){
        console.log(arras[i]);
    }
}

inlog([1,2,3,4,5]);

//створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraph(text) {
    document.write(`<p>${text}</p>`);
}

createParagraph("adwdawd");


//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function NewText (text){

    document.write(`<ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                    </ul>`);
}

NewText("Це текст для елементів списку.");

//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function NewText2 (text, numb){
    document.write('<ul>');
    for (let i = 0; i < numb; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

NewText2("ojcm", 5);

//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function spusok (arr) {
    document.write('<ol>');
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write('</ol>');
}

spusok([1, 3, 4, "232141", true]);

//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function Arkan (arr){
    document.write('<ul>');
    for(let i = 0; i < arr.length; i++){
        document.write(`<li>${arr[i].id}</li>`);
    }
    document.write('</ul>');
    document.write('<ul>');
    for(let i = 0; i < arr.length; i++){
        document.write(`<li>${arr[i].name}</li>`);
    }
    document.write('</ul>');
    document.write('<ul>');
    for(let i = 0; i < arr.length; i++){
        document.write(`<li>${arr[i].age}</li>`);
    }
    document.write('</ul>');
}

const peopls = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 22 }
];

Arkan(peopls);

//створити функцію яка повертає найменьше число з масиву

function mini(...masiv){
    let minis = Math.min(...masiv);
    return minis;
}

console.log(mini( 10, 6, 9));

//створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.

function SumArr(arr){
    let sumfin = 0;
    for(let i = 0; i < arr.length; i++){
        sumfin += arr[i];
    }
    return sumfin;
}
const numbers = [7, 4, 5];
console.log(SumArr(numbers));

//створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах

function swap (arr, index1, index2){
    let item1 = arr[index1];
    let item2 = arr[index2];
    arr[index1] = item2;
    arr[index2] = item1;
    return arr;
}

console.log(swap([10,11,12,13,14,15], 0, 2));

//Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

function exchange(sumUAH,currencyValues,exchangeCurrency){
    for(let i = 0; i < currencyValues.length; i++){
        if(currencyValues[i].currency === exchangeCurrency){
            let sumCurrency = sumUAH / currencyValues[i].value;
            return sumCurrency;
        }
}}

let a = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
console.log(a);