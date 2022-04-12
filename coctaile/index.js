// create class HashStorage
/*Разработать класс HashStorage (в файле HashStorage.js) для хранения произвольных пар ключ-значение. 
Ключом может быть любая строка; значение может иметь любой тип, в том числе сложный (объект, массив 
    или функция).
Класс должен иметь следующий интерфейс (т.е. иметь следующие публичные методы):
addValue(key,value) — сохраняет указанное значение под указанным ключом;
getValue(key)
 — возвращает значение по указанному ключу либо undefined;
deleteValue(key)
 — удаляет значение с указанным ключом, возвращает true если значение было удалено и false если
  такого значения не было в хранилище;
getKeys() — возвращает массив, состоящий из одних ключей.
Класс не должен использовать никаких глобальных переменных, не должен «пачкать экран». 
Класс должен быть универсальным, т.е. не зависеть ни от структуры хранимых данных, ни от способа 
их последующего использования (в т.ч. не должен содержать никаких ссылок на DOM, т.к. может использоваться
     и вообще без веб-страницы).
Создать объект-потомок coctailsStorage класса HashStorage для хранения рецептов коктейлей. 
Ключом является название напитка, а его значением — информация о напитке (алкогольный напиток или нет,
     строка с ингредиентами, с рецептом приготовления и т.д. (по желанию)).
На странице сверстать кнопки:
«ввод рецепта» — последовательно спрашивает название напитка, алкогольный он или нет, 
какие ингредиенты необходимы и в каких пропорциях, рецепт его приготовления (и т.д.); 
сохраняет всю эту информацию о коктейле в хранилище (coctailsStorage).
«рецепт напитка» — спрашивает название напитка и выдаёт на страницу (желательно) или в 
консоль информацию о нём по примеру, приведённому ниже, либо сообщение об отсутствии такого 
напитка в хранилище.
«удаление рецепта» — спрашивает название напитка и удаляет его из хранилища (если он там есть) 
с выдачей соответствующего сообщения пользователю.
«перечень всех коктейлей» — выводит список названий коктейлей из хранилища.
! Желательно, чтобы в хранилище coctailsStorage уже было 3-5 коктейлей,
добавление которых реализовано через метод addValue.*/
// /* 

/* Примеры вывода/оформления рецепта:
    Коктейль "Пеликан" (алкогольный: нет)
    Необходимые ингредиенты:
    Гренадин Monin 10мл
    Клубничный сироп Monin 10мл
    Персиковый сок 150мл
    Лимонный сок 15мл
    Банан 110г
    Клубника 50г
    Дробленый лед 60г
    Рецепт приготовления:
    Положи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. 
    Налей лимонный сок 15 мл, гренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл.
    Добавь в блендер совок дробленого льда и взбей. Перелей в хайбол. 
    Укрась кружком банана и половинкой клубники на коктейльной шпажке.*/
//     const coctailPelican = {
//             grenadineMonin: 10,
//             strawberrySyrupMonin: 10,
//             peachJuice: 150,
//             lemonJuice: 15,
//             banana: 110,
//             strawberry: 50,
//             iceCubes: 60
//         },
// coctailMargarita = [

// ];
// coctailPelican = [
//     'grenadineMonin', 10,
//     'strawberrySyrupMonin', 10,
//     'peachJuice', 150,
//     'lemonJuice', 15,
//     'banana', 110,
//     'strawberry', 50,
//     'iceCubes', 60
// ];

// };
// } 
//strict mode;
class HashStorage {

    constructor() {
        this.item = {};
    }

    addValue(key, value) {
        this.item[key] = value;
    }

    //возвращает значение по указанному ключу либо undefined;
    getValue(key) {
        if (key in this.item) {
            return this.item[key];
        } else {
            return undefined;
        }
    }
    deleteValue(keys) {
        if (key in this.item) {
            return delete this.item[key];
        } else {
            return false;
        }
    }

    // возвращает массив, состоящий из одних ключей
    getKeys() {
        return Object.keys(this.item);
    }
}

function clearText() {
    document.querySelector('#title').innerHTML = ``;
    document.querySelector('#ingredients').innerHTML = ``;
    document.querySelector('#recipe').innerHTML = ``;
}

const coctailsStorage = new HashStorage();
coctailsStorage.addValue('Маргарита', {
    name: "Маргарита",
    isAlcohol: true,
    ingredients: "Водка Finlandia 50мл Кофейный ликер 25мл Лед в кубиках 120 г ",
    recipt: "Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой."
});
coctailsStorage.addValue('Пеликан', {
    name: "Пеликан",
    isAlcohol: true,
    ingredients: "Гренадин Monin 10мл Клубничный сироп Monin 10мл Персиковый сок 150мл Лимонный сок 15мл Банан 110г Клубника 50г Дробленый лед 60г",
    recipt: "Положи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. Налей лимонный сок 15 мл, гренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл. Добавь в блендер совок дробленого льда и взбей. Перелей в хайбол. Укрась кружком банана и половинкой клубники на коктейльной шпажке."
});

let add = document.getElementById('addCoctail');
add.addEventListener('click', () => {
    let name = prompt("Необходимо ввести название напитка");
    let isAlcohol = confirm("Напиток алкогольный?");
    let ingredients = prompt("Введите ингредиенты для приготовления рецепта");
    let recipe = prompt("Введите рецепт для данного напитка");
    coctailsStorage.addValue(name, { name, isAlcohol, ingredients, recipe });
    alert("Коктель успешно добавлен");
    clearText();
});

let get = document.getElementById('getCoctail');
get.addEventListener('click', () => {
    let name = prompt('');
    let result = coctailsStorage.getValue(name);
    if (result != undefined) {
        if (coctailsStorage.getValue(name).isAlcohol)
            document.querySelector('#title').innerHTML = Коктейль $ { coctailsStorage.getValue(name).name }(алкогольный: yes) => {
                document.querySelector('#title').innerHTML = Коктейль $ { coctailsStorage.getValue(name).name }(алкогольный: no) =>
                    document.querySelector('#ingredients').innerHTML = 'Необходимые ингредиенты: '
                $ { coctailsStorage.getValue(name).ingredients };
                document.querySelector('#recipe').innerHTML = 'Рецепт: '
                $ { coctailsStorage.getValue(name).recipt };
            }

    } else {
        clearText();
        document.querySelector('#title').innerHTML = 'Данный коктейль отсутсвует в данном списке';
    }
});
// рецепты храняться в объекте-потомке coctailsStorage
//let coctailStorage = {
/* Коктейль "Маргарита" (алкогольный: да)
Необходимые ингредиенты:
Водка Finlandia 50мл
Кофейный ликер 25мл
Лед в кубиках 120 г
рецепт приготовления:
Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, 
водку 50 мл и размешай коктейльной ложкой. */
/*  const coctailMargarita = {
     vodkaFinlandia: 50,
     coffeeLiquor: 25,
     iceCubes: 120
 } */

let x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            let y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    let x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

/* // get the modal 
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = fucntion() {
    modal.style.display = "none";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onClick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} */