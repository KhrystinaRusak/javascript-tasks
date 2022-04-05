/* create functions compress and uncompress
Вызов:
compress("a");
Результат:
Результат: “a”
Вызов:
compress("aaa");
Результат:
Результат: “a3”
*/
function compress(str) {
    if (str.length <= 1) {
        return str;
    }
    let obj = {};
    let str1 = "";
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        if (!(letter in obj)) {
            obj[letter] = 1;
        } else {
            obj[letter]++;
        }
    }
    for (const elem in obj) {
        str1 += `${elem}${obj[elem]}`;
    }
    return str1;
};


function uncompress(str,n) {
    return str.repeat(n);
}

/* create function countVowelLetters for returning count of russian char from the string
countVowelLetters, которая будет возвращать количество русских гласных букв в строке,
которая будет являться аргументом функции. Не использовать switch, вложенные циклы,
регулярные выражения или 9-10 if для проверки… Можно использовать массивы или объекты 
для решения задачи,найти оптимальное и эффективное из доступных решение. */
function VowellLetters(str) {

    vowel = /[а|е|и|о|я|у|э|ы|ю]/gi;
    for (let i = 0; i < str.length; i++) {
        str.match(vowel);
    }

}

/* Напишите программу на JavaScript, чтобы получить первые n чисел Фибоначчи.
Примечание: Последовательность Фибоначчи - это последовательность чисел: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,...
 Каждое последующее число является суммой двух предыдущих. */
function fib(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
