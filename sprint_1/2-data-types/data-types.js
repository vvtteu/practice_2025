/**
 * Задание 1.
 Создай переменные всех основных типов данных: строка, число, булево, null, undefined, symbol, BigInt,
 объект и массив.
 Напиши typeof для каждой.
 пример: console.log(typeof test)
 **/


// Код задания 1
let string = "Dasha";
console.log(typeof string);

let number = 18;
console.log(typeof number);

let bool = false;
console.log(typeof bool);

let empty = null;
console.log(typeof empty);

let undef;
console.log(typeof undef);

let symbol = Symbol("id");
console.log(typeof symbol);

let BigNum = BigInt(19382782738278);
console.log(typeof BigNum);

let school = {
    number: 23,
    addres: "ул. Пушкина",
    isWorking: true
};
console.log(typeof school);

let arr = [10, 20, 30, "груша"];
console.log(typeof arr);

/**
 * Задание 2.
 Преобразуй строку "123" в число. Попробуй сложить "123" + 5 и Number("123") + 5.
 Объясни разницу.
 **/


// Код задания 2
let str1 = "123";
let num = Number(str1);

let str2 = "123";
console.log(str2 + 5); //выведет 1234, число 5 преобразуется в строку и произойдет сложение строк

let num1 = Number(str2);
console.log(num1 + 5); //выведет 128, число 5 складывается с числом 123

/**
 * Задание 3.
 Напиши функцию, которая принимает аргумент и возвращает строку: "Это строка", "Это число",
 и т.п. — в зависимости от типа.
 **/


// Код задания 3
function type(str) {
    switch(typeof str) {
        case 'string' :
            console.log("Это строка");
            break;
        case 'number' :
            console.log("Это число");
            break;
        case 'boolean' :
            console.log("Это булевый");
            break;
        default:
            console.log("Другой тип");
    }
}

let num2 = 34;
type(num2);

/**
 Задание 4.
Чем отличаются undefined и null? Проверьте результат выполнения следующего кода.

    let a;
    let b = null;

    console.log(a == b);  // ?
    console.log(a === b); // ?
    console.log(typeof a); // ?
    console.log(typeof b); // ?
 **/

// Код задания 4
let a;
let b = null;

console.log(a == b);  // true
console.log(a === b); // false
console.log(typeof a); // undenfined
console.log(typeof b); // object

// отличие в том, что null это отсутствующий обьект, а undenfined это значение, которого нет