 // create function currentSum
 // method reduce
const sum = [27, 03, 28, 11].reduce((partialSum, a) => partialSum + a, 0);

 // create a function for returning from the first pieces of this string
function TheFirstChar(arr) {
     arr.split(' ').filter((char, index) => newString[index] = char[0]);
     return newString;
 }

 // create a function changeArray for changing a half of arrays
 //Создать функцию changeArray, которая будет менять местами половины массивов, 
 //т.е. если количество элементов четное, то вторая половина становится сначала массива,
 // а первая на место второй; если количество элементов нечетное, тогда элемент массива, 
 // который является серединой остается на месте,
 //а половины меняются местами.
 const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'bird'];

 function changeArray(animals) {
     let key = animals.Math.ceil(animals / 2) - 1;
     if (key % 2 === 0) {
         animals.slice(key + 1).concat(animals[key].arrayOf.slice(0, key));
     } else {
         animals.slice(key + 1).concat(animals[key].arrayOf.slice(0, key + 1));
     }
     return animals;
 }
