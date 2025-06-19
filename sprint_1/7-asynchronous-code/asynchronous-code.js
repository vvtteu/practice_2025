
/**
 * Задание 1.
 * Напиши функцию `delayLog(msg, ms)`, которая выводит сообщение `msg` в консоль через `ms` миллисекунд.
 * Пример:
 * delayLog("Привет", 1000); // выведет "Привет" через 1 секунду
 **/

// Код задания 1
function dekayLog(msg, ms) {
    setTimeout(() => console.log(msg), ms);
}
dekayLog("Привет", 1000);

/**
 * Задание 2.
 * Напиши функцию `sequentialLogs()`, которая выводит 1, 2 и 3 с интервалами в 1, 2 и 3 секунды соответственно.
 **/

// Код задания 2
function sequentialLogs() {
    setTimeout(() => console.log(1), 1000);
    setTimeout(() => console.log(2), 2000);
    setTimeout(() => console.log(3), 3000);
}
sequentialLogs();

/**
 * Задание 3.
 * Напиши функцию `checkNumber(num)`, возвращающую Promise.
 * Если число больше 10 — промис должен выполниться с "OK", иначе — отклониться с "Too small".
 **/

// Код задания 3
function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if(num > 10) {
            resolve("ОК");
        } else {
            reject("Too small");
        }
    });
}

checkNumber(15)
  .then(result => console.log(result)) 
  .catch(error => console.error(error));

/**
 * Задание 4.
 * Напиши функцию `fakeFetch(url)`, которая возвращает промис.
 * Он "загружает" данные через 2 секунды, возвращая сообщение `${url} loaded`.
 **/

// Код задания 4
function fakeFetch(url) {
    return new Promise((resolve, reject) => {
        if (!url) reject("Url не указан");
        setTimeout(() => resolve(`${url} loaded`), 2000);
    });
}

async function fakeFetch1() {
    try {
        const result = await fakeFetch();
        console.log(result);
    } catch(error) {
        console.error(error);
    }
    
}

fakeFetch1();

/**
 * Задание 5.
 * Создай цепочку промисов, которая:
 * 1. Удваивает число 5.
 * 2. Прибавляет 10.
 * 3. Делит результат на 3.
 * 4. Выводит финальный результат.
 **/

// Код задания 5
new Promise((resolve) => resolve(5)) 
    .then(num => num * 2)
    .then(num => num + 10)
    .then(num => num / 3)
    .then(num => console.log(num))
    .catch(error => console.error(error));


/**
 * Задание 6.
 * Напиши async-функцию `loadData`, которая вызывает `fakeFetch(url)` с использованием async/await.
 * Обработай ошибку с помощью try...catch.
 **/

// Код задания 6
async function loadData() {
    try {
        const result = await fakeFetch("vvv");
        console.log(result);
    } catch(error) {
        console.error(error);
    }
    
}

loadData();

/**
 * Задание 7.
 * Напиши функцию `loadAll(urls)`, которая использует Promise.all для параллельной загрузки массива URL.
 * После загрузки выведи все результаты.
 **/

// Код задания 7
function loadAll(urls) {
    const promises = urls.map(url => fakeFetch(url));
    return Promise.allSettled(promises)
    .then(results => console.log(results))
    .catch(error => console.error(error))
}

loadAll(["url1", "url2", "url3"]);

/**
 * Задание 8.
 * Напиши функцию `loadFirst(urls)`, которая использует Promise.race.
 * Она должна вернуть результат самого первого завершившегося запроса.
 **/

// Код задания 7
function loadFirst(urls) {
    const promises = urls.map(url => fakeFetch(url));
    return Promise.race(promises)
    .then(results => console.log(results))
    .catch(error => console.error(error))
}

loadFirst(["url4", "url5", "url6"]);
/**
 * Задание 9.
 * Напиши функцию `processSequentially(arr, asyncFn)`, которая вызывает `asyncFn` для каждого элемента массива последовательно.
 **/

// Код задания 9
async function processSequentially(arr, asyncFn) {
    const result = [];
    for(let i of arr) {
        try {
            const res = await asyncFn(i);
            result.push(res);
        } catch (error) {
            console.error(error);
        }
        }
        return result;
    }

const urls = ['vvv', 'vvv1', null, 'vvv3'];

processSequentially(urls, fakeFetch)
    .then(results => console.log(results))

/**
 * Задание 10.
 * Напиши функцию `sleep(ms)`, которая возвращает промис, завершающийся через указанное количество миллисекунд.
 **/

// Код задания 10
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}