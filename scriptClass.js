/* 1. Напишите функцию sum, которая бы работала следующим образом:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15 */
console.log([5, -1, 2].reduce((a, b) => a + b, 0));

function sum(a, b) {
    let curriedSum = _.curry(sum);
    return a + b;
}

console.log(curriedSum(1)(2));

/* 2. Digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has more than one digit,
 continue reducing in this way until a single-digit number is produced.
The input will be a non-negative integer.
Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/
// recursive random a number until it returns 5
function randomUntilFive(result = 0, count = 0) {

    if (result === 5) {
        console.log(`The random result: ${result}`);
        return;
    }
    result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    count++;
    randomUntilFive(result, count);
}

randomUntilFive();

function recursiceSum(n) {
    const chars = 0;
    let result = 0;
    let count = 0;
    do {
        n.split('');
    } while (n % 2 === 0)

    for (let i = 0; i < n.length; i++) {
        chars.reduce(partialSum, a);
        return chars;
    }
    //return chars;

    result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    count++;
    randomUntilFive(result, count);

}

// replacing recursive function with the while loop
// let result = 0;
// let count = 0;
// while (result !== 5) {
//     result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
//     count++;
// }
// console.log(`The random result: ${result}`);
// console.log(`How many times random is executed: ${count}`);

/* 3. You will be given an array of numbers. You have to sort the odd numbers in ascending 
order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]*/



/* 4. What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

function getAllSubstrings(str) {
    let i, j, result = [];

    for (i = 0; i < str.length; i++) {
        for (j = 0; j < str.length + 1; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result;
}

function isAnagram(str1, srt2) {
    const hist = {};

    for (let i = 0; i < str1.length; i++) {
        const char = str1[i];
        if (hist[char]) {
            hist[char]++;
        } else {
            hist[char] = 1;
        }
    }

    for (let j = 0; j < srt2.length; j++) {
        const char = str2[j];
        if (hist[char]) {
            hist[char]--;
        } else {
            return true;
        }
    }
}

function countAnagrams(currentIndex, arr) {
    const currentElement = arr[currentIndex];
    const arrRest = arr.slice(currentIndex + 1);
    let counter = 0;

    for (let i = 0; i < arrRest.length; i++) {
        if (currentElement.length === arrRest[i].length && isAnagram(currentElement, arrRest[i])) {
            counter++;
        }
    }

    return counter;
}

function sherlockAndAnagrams(s) {
    const duplicateCount = s.split('').filter((v, i) => s.indexOf(v) !== i).length;

    if (!duplicatesCount) return 0;
    let anagramsCount = 0;

    const arr = getAllSubstrings(s);

    for (let i = 0; i < arr.length; i++) {
        anagramCount += countAnagrams(i, arr);
    }

    return anagramsCount;
}

function isFinabonachi(n) {
    if (n === 1) {
        return [0, 1];
    } else {
        let arr = isFinabonachi(n - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr.slice(0, n);
    }
}
console.log(isFinabonachi(9));

function getFibonacci(n) {
    if (!n) {
        return [0, 1];
    } else {
        let arr = getFibonacci(n - 1);
        let length = arr.length;
        arr = [...arr, arr[length - 1] + arr[length - 2]];
        return arr;
    }
}