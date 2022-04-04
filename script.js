 // create function currentSum
 // method reduce
const sum = [27, 03, 28, 11].reduce((partialSum, a) => partialSum + a, 0);

 // create a function for returning from the first pieces of this string
let str = "Каждый охотник желает знать, где сидит фазан.";  

function firstChar(value, index, arr) {  
    if (index == 0)  
        return true;  
    else  
        return arr[index - 1] === " ";  
}  

const array = [].filter.call(str, firstChar);  

console.write(array); 

 // create a function changeArray for changing a half of arrays
 //Создать функцию changeArray, которая будет менять местами половины массивов, 
 //т.е. если количество элементов четное, то вторая половина становится сначала массива,
 // а первая на место второй; если количество элементов нечетное, тогда элемент массива, 
 // который является серединой остается на месте,
 //а половины меняются местами.

 //const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'bird'];

  const animals = ['bison', 'camel', 'duck', 'elephant', 'bird'];

 function changeArray(animals) {
     const key = Math.floor(animals.length / 2);

     if (animals.length % 2 === 0) {
         //animals.slice(key + 1).concat(animals[key].arrayOf.slice(0, key));

         const arr = [...animals.slice(key), ...animals.slice(0, key)];
         return arr;
     } else {
         //animals.slice(key + 1).concat(animals[key].arrayOf.slice(0, key + 1));
         const centre = animals[key];
         const arr = [...animals.slice(key + 1), centre, ...animals.slice(0, key)];
         return arr
     }

 }
 console.log(changeArray(animals));
