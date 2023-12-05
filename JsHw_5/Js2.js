//створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let screctage = (a,b) => a*b;

console.log(screctage(5,6));

//створити функцію яка обчислює та повертає площу кола з радіусом r

let scircle = (r) => r*r*Math.PI;

console.log(scircle(5));

//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let funct = (h,r) => {
    const S1 = 2 * Math.PI * r * h;
    const S2 = Math.PI * Math.pow(r, 2);
    const S = S1 + 2 * S2;
    return S;
}

console.log(funct(10,3));

//створити функцію яка приймає масив та виводить кожен його елемент

let inlog = (arras) =>{
    for(let i =0; i< arras.length; i++){
        console.log(arras[i]);
    }
}

inlog([1,4,6,8]);

//створити функцію яка створює параграф з текстом. Текст задати через аргумент

let paragraph = (text) => document.write(`<p>${text}</p>`);


paragraph("adwdawdawdawdawdawdawdawdawdawdawd");


//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let text1 = (text) => document.write(`<ul> <li>${text}</li> <li>${text}</li> <li>${text}</li> </ul>`);

text1 ("wdwdawdawd");

//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let text2 = (text,numb) => {
    document.write('<ul>');
    for (let i = 0; i < numb; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

text2("ПТНПНХ", 10);

//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let spusok = (arr) => {
    document.write('<ol>');
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write('</ol>');
}

spusok([1, 3, 4, "232141", true]);

//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let arkan = (arr) => {
    document.write('<div>');
    for(let i = 0; i < arr.length; i++){
        document.write(`<div>${arr[i].id} - ${arr[i].name} - ${arr[i].age}</div>`);
    }
    document.write('</div>');
}

const peopls = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 22 }
];
arkan(peopls);

//створити функцію яка повертає найменьше число з масиву

let mini = (...masiv) => Math.min(...masiv);

console.log(mini( 12, 58, 9));

//створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.

let sumArr = (arr) => {
    let sumfin = 0;
    for(let i = 0; i < arr.length; i++){
        sumfin += arr[i];
    }
    return sumfin;
}
const numbers = [7, 4, 5];
console.log(sumArr(numbers));

//створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах

let swap = (arr,index1, index2) => {
    let item1 = arr[index1];
    let item2 = arr[index2];
    arr[index1] = item2;
    arr[index2] = item1;
    return arr;
}

console.log(swap([10,11,12,13,14,15], 0, 2));

//Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for(let i = 0; i < currencyValues.length; i++){
        if(currencyValues[i].currency === exchangeCurrency){
            let sumCurrency = sumUAH / currencyValues[i].value;
            return sumCurrency;
        }
}}
console.log(
exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
)