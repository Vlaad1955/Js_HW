//Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

//не мій код, взяв його для рандомізації тексту
function generateRandomName(length) {
   let result = '';
  let characters = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

let userArr = [];
for(let i = 0; i<10; i++){
    let newUser = new User(
        i+1,
        generateRandomName(8),
        generateRandomName(10),
        generateRandomName(8) + i + "@gmail.com",
        "093-454-774" + i
    );
    userArr.push(newUser);
}

console.log(userArr);

//Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let userFilter = userArr.filter(item => item.id % 2 === 0);
console.log(userFilter);

//Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let userSort = userArr.sort((a, b) => b.id - a.id);
console.log(userSort);

//створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client extends User{
    constructor(id, name, surname, email, phone, order ) {
        super  (id, name, surname, email, phone);
        this.order = order;
   }
}

let order = function order(index){
    let or = [];
    for (let i = 0; i < index; i++){
        let prodyct = "Product" + i;
        or.push(prodyct);
    }
    return or;
}

let clientsArray = [];
for(let i =0; i<10; i++){
    let newClient = new Client(
        i+1,
        generateRandomName(8),
        generateRandomName(10),
        generateRandomName(8) + i + "@gmail.com",
        "093-454-774" + i,
        order(i)
    );
    clientsArray.push(newClient);
}

console.log(clientsArray);

//Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let clientsort = clientsArray.sort((a,b) => b.order.length - a.order.length)
console.log(clientsort);

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.driver = 0;

    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    this.info = function () {
        for (let prop in this) {
            if (typeof this[prop] !== 'function') {
                console.log(`${prop} - ${this[prop]}`);
            }
        }
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function (newValue) {
        this.year = newValue;
    };

    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

//те саме, але через клас
class Car2 {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.driver = 0;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        for (let prop in this) {
            if (typeof this[prop] !== 'function') {
                console.log(`${prop} - ${this[prop]}`);
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}
//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Papelishka {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let papelishkaArr = [];
for (let i = 1; i <= 10; i++) {
    let newPapelishka = new Papelishka(
        generateRandomName(6),
        30 - i,
        28 + i
    );
    papelishkaArr.push(newPapelishka);
}

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}
let prince = new Prince("Karl",19, 35);

let dople = papelishkaArr.find(item => item.footSize === prince.foundShoe);
console.log(dople);

let dople2 = 0;
for(let i = 0; i < papelishkaArr.length; i++){
    if(papelishkaArr[i].footSize === prince.foundShoe){
        dople2 = papelishkaArr[i];
    }
}
console.log(dople2);