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

/* Вызов:
uncompress("a2b3");
Результат:
Результат: “aabbb”
Вызов:
uncompress("a2b1c3");
Результат:
Результат: “aabccc”
создаем функцию countVowelLetters, которая будет возвращать количество русских гласных букв в строке,
 которая будет являться аргументом функции. Не использовать switch, вложенные циклы или 9-10 if для 
 проверки… Можно использовать массивы или объекты для решения задачи, найти оптимальное и эффективное из доступных решение.

Пример:
Вызов:
countVowelLetters (“Пришла зима, запахло…”);
Результат:
Количество гласных = 7

Вызов:
countVowelLetters (“Ghbdtn, z r dfv bp Hjccbb”);
Результат:
Количество гласных = 0

Вызов:
countVowelLetters (“длинношеее”);
Результат:
Количество гласных = 5

Рекурсия:
Напишите программу на JavaScript, чтобы получить первые n чисел Фибоначчи.

Примечание: Последовательность Фибоначчи - это последовательность чисел: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,... 
Каждое последующее число является суммой двух предыдущих. */

function uncompress(str, n) {
    let k = 0;
    let strRes = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            k++;
        } else {
            strRes += str[i] + k;
            k = 0;
        }
        return strRes;
    }
    return strRes;
}


String.prototype.unrepeat = function() {
    let t = String(this)
        // check for 3+ duplicated letters
    while (matches = /(.)\1{2,}/.exec(t)) {
        t = t.replace(matches[0], matches[1])
    } /*from   w  ww  .  j  a v  a  2s  .  co m*/
    return t;
}

// let ipta = raw_input("Word:");
// let uniquewords = [];
// uniquewords.append(ipta);

// let a = 0;
// while (apta):
//     ipta = raw_input("Word: ");
// let new_words = ' ';
words = ['a', 'b', 'c', 'a']
unique_words = set(words)
unique_word_count = len(unique_words)
words = []
let ipta = raw_input("Word: ")

while ipta:
    words.append(ipta)
ipta = raw_input("Word: ")

unique_word_count = len(set(words))

print "There are %d unique words!" % unique_word_count
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
    return vowel;
}

/* Напишите программу на JavaScript, чтобы получить первые n чисел Фибоначчи.
Примечание: Последовательность Фибоначчи - это последовательность чисел: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,...
 Каждое последующее число является суммой двух предыдущих. */
function fib(n) {
    if (n == 0) {
        return 1;
    } else if (n == 1) {
        return 1;
    } else if (n > 1) {
        return fib(n - 1) * fib(n - 2);
    }

}