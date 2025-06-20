// Код задания 1

/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = function (n) {

    return function () {
        
    };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// Код задания 2
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function(nums, fn, init) {
    let result = init;
    for(let i of nums){
        result = fn(result, i);
    }
    return result;
};

const nums1 = [1, 2, 3, 4];
const sumFn = (acc, curr) => acc + curr;
console.log(reduce(nums1, sumFn, 0));

// Код задания 3
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {

    return function(...args) {

    }
}


/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

// Код задания 4
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const [num1, num2] = await Promise.all([promise1, promise2]);
    return num1 + num2;
};

const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));
addTwoPromises(promise1, promise2)
    .then(console.log);

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

// Код задания 5

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */


const chunk = function(arr, size) {
    const result = [];
    for(let i = 0; i < arr.length; i+=size) {
        let arr1 = arr.slice(i, i+size);
        result.push(arr1);
    }
    return result;
};

console.log(chunk([1,9,6,3,2], 3));
// Код задания 6

// Код задания 7

// Код задания 8

// Код задания 9

// Код задания 10
