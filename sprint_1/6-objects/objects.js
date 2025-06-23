
/**
 * Задание 1.
 Создайте объект person с полями firstName, lastName и age. Выведите полное имя в консоль.
 **/

// Код задания 1
const person = {
    firstName: "Даша",
    lastName: "Кузнецова",
    age: 18
};

console.log(`${person.firstName} ${person.lastName}`);


/**
 * Задание 2.
 Добавьте в объект person новое свойство city со значением "Moscow".
 **/

// Код задания 2
person.city = "Moscow";
console.log(person)

/**
 * Задание 3.
 Удалите свойство age из объекта person.
 **/

// Код задания 3
delete person.age;
console.log(person)


/**
 * Задание 4.
 Используйте цикл for...in, чтобы вывести в консоль все ключи и значения объекта person.
 **/

// Код задания 4
for(let key in person) {
    console.log(key + ": " + person[key]);
}

/**
 * Задание 5.
 Напишите функцию, которая принимает объект и возвращает массив всех его ключей.
 **/

// Код задания 5
function getKeys(obj) {
    const keys = [];
    for (let key in obj) {
        keys.push(key);
    }
    return keys;
}
console.log(getKeys(person));

/**
 * Задание 6.
 Напишите функцию, которая принимает объект и возвращает массив всех значений.
 **/

// Код задания 6
function getValues(obj) {
    const values = [];
    for (let key in obj) {
        values.push(obj[key]);
    }
    return values;
}

console.log(getValues(person));

/**
 * Задание 7.
 Создайте объект с методом greet(), который выводит в консоль приветствие с использованием значения свойства name.
 **/

// Код задания 7
const person2 = {
    firstName: "Даша",
    age: 18,
    city: "Izhevsk",
    greet() {
        console.log(`Привет, ${this.firstName}`)
    }
};

person2.greet()
