/**
 * Задание 1.
 Напиши метод `sum(arr)`, которая возвращает сумму всех чисел в массиве.
 **/

// Код задания 1
function sum(arr) {
  let sum = 0;
  for(let i of arr){
    sum+=i;
  }
  return sum;
}

const arr = [1, 2, 3, 4];
console.log(sum(arr));

/** Задание 2.
Напиши метод `unique(arr)`, которая возвращает новый массив без повторяющихся значений.
 **/
// Код задания 2
function unique(arr) {
  const set = new Set(arr);
  return set;
}
const arr1 = [1, 1, 3, 4, 2, 3];
console.log(unique(arr1));

//циклом

function unique1(arr) {
  let result = []
  for(let i of arr) {
    if(!(result.includes(i))){
      result.push(i);
    }
  }
  return result;
}

const arr2 = [1, 1, 3, 4, 2, 3];
console.log(unique1(arr2));


/**
  Задание 3.
` Напиши метод filterRange(arr, a, b)` — возвращает элементы из `arr` в диапазоне `[a, b]`.
 **/
// Код задания 3
function filterRange(arr, a, b) {
  return arr.filter(i => i >= a && i <= b);
}

const arr3 = [1, 5, 3, 4, 2, 6];
console.log(filterRange(arr3, 2, 5))

/** Задание 4.
Напиши метод`sortDesc(arr)`, сортирующую числовой массив по убыванию без изменения оригинала.
 **/
// Код задания 4
function sortDesc(arr) {
  let result = arr.sort();
  result = result.reverse();
  return result;
}

console.log(sortDesc(arr3))

/** Задание 5.
` Напиши метод flatMapDemo(arr), которая для каждого элемента x из массива arr создаёт новый массив
    из двух элементов: [x, x * 2], а затем объединяет все эти массивы в один плоский массив.
 Используй flatMap
 **/

// Код задания 5
function flatMapDemo(arr) {
  return arr.flatMap(x => [x, x*2]);
}

const arr4 = [1, 2, 3];
console.log(flatMapDemo(arr4));

/** Задание 6.
`Напиши метод groupBy(arr, keyFunc)` — группирует элементы массива по ключу,
 возвращая объект, где ключи — результат `keyFunc`.
 **/

// Код задания 6
function groupBy(arr, keyFunc) {
  let result = {};
  for(let i of arr) {
    let key = keyFunc(i);
    if(!result[key]) {
      result[key] = [];
  }
  result[key].push(i);
}
return result;
}

const arr5 = ['кот', 'кошка', 'ток', 'домик'];
console.log(groupBy(arr5, x => x.length));

/** Задание 7.
`Напиши метод rotate(arr, n)` — возвращает новый массив, в котором элементы сдвинуты вправо на `n` позиций (цикл).
 Пример: `rotate([1,2,3,4,5], 2)` → `[4,5,1,2,3]`.
 **/
 // Код задания 7
function rotate(arr, n) {
  let len = arr.length;

  let shift = n % len;
  let result = new Array(len);

  for(let i = 0; i < len; i++) {
    let position = (i + shift) % len;
    result[position] = arr[i];
  }
  return result;
}

console.log(rotate([1, 2, 3, 4, 5], 2));