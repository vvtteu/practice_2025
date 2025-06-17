/**
 * Задание 1.
 Создай переменные:
 appName (название приложения) — не должно изменяться
 currentUser — может меняться (логин, логаут)
 isDarkTheme — переключение темы
 **/



// Код задания 1
const appName = "practice";
let curentUser = "Dasha";
let isDarkTheme = false;


/**
 * Задание 2.
 Объяви переменные для хранения имени пользователя, возраста и его статуса (онлайн/оффлайн).
 Используй let и const там, где это уместно.
 Попробуй изменить значение const-переменной. Объясни, почему это вызывает ошибку.
 Создай переменную с текстом "Привет, [имя]!" и вставь имя из другой переменной (используй шаблонные строки).
 **/


// Код задания 2
let userName = "Dasha";
let userAge = 18;
let userStatus = "online";

const welcome = `Привет ${userName}`;
welcome = `Пока ${userName}`; // выйдет ошибка TypeError: Assignment to constant variable тк нельзя менять значение константы


/**
 * Задание 3.
 Создай переменную const userCount = 10, а потом попробуй увеличить её.
 Напиши, как это исправить и почему нельзя менять const.
 **/


// Код задания 3
const userCount = 10;
userCount += 1; // выйдет ошибка TypeError: Assignment to constant variable тк нельзя менять значение константы

//правильная версия
let userCount1 = 10;
userCount1 += 1;

/** Задание 4.
 *  Что выведет следующий код?
 *  function scopeTest() {
 *     if (true) {
 *         var a = 10;
 *         let b = 20;
 *         const c = 30;
 *     }
 *     console.log(a); // ?
 *     console.log(b); // ?
 *     console.log(c); // ?
 * }
 *  **/

// Ответ на задание 4
function scopeTest() {
     if (true) {
          var a = 10;
          let b = 20;
          const c = 30;
      }
      console.log(a); // 10, var имеет функциональную область видимости
      console.log(b); // ReferenceError: b is not defined, let имеет блочную область видимости
      console.log(c); // не выполнится из-за выброшенной ошибки, но проблема будет аналогичная: ReferenceError: c is not defined, const имеет блочную область видимости
}

scopeTest();
