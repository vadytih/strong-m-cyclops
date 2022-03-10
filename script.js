let box1 = "",
    box2 = "",
    result = document.querySelector('.result'),
    resultLink = document.querySelector('.result-link'),
    arr1 = [], // старый
    arr2 =[], // свежиый
    arrOnArr1 = [],
    arrOnArr2 = [],
    x = [], // новые артикулы
    m = [],
    resultText = '',
    resultTextLink = '',
    prod = document.querySelector("#prod"),
    i = 0,
    q = 0;

//Событие кнопака (Старт)
document.getElementById('button').onclick = function() {
    resultText = ''; 
    resultTextLink = '';

//-- Чистим пердыдущий результат
result.innerHTML = '';
x.length = 0;
m.length = 0;
result.classList.remove("result_style");
resultLink.classList.remove("result_style");
arrOnArr1.length = 0;
arrOnArr2.length = 0;

//-- Находим элементы TextArea --
    box1 = document.getElementById('box1').value;
    box2 = document.getElementById('box2').value;
if (document.getElementById('box1').value !== "" && document.getElementById('box2').value !== "") {
    document.getElementById('box1').value = "";
    document.getElementById('box2').value = "";
    document.getElementById('box1').placeholder  = "✔";
    document.getElementById('box2').placeholder  = "✔";
    document.getElementById('box1').style = 'background-color: palegreen';
    document.getElementById('box2').style = 'background-color: palegreen';
} else {
    document.getElementById('box1').style = 'background-color: #BC8F8F';
    document.getElementById('box2').style = 'background-color: #BC8F8F';
}

//-- Из строк сделали массивы --
    arr1 = box1.split('\n');
    arr2 = box2.split('\n');
// console.log('//-- Из строк сделали массивы --');

    // console.log(arr1);
    // console.log(arr2);

// Переборы
// Переменные для переборов
    let box = '',
        arrX = [],
        t = 0;

// Делаем массивы из эдементов arr1, arr2
// console.log('/ Делаем массивы из эдементов arr1, arr2');
// console.log('arrOnArr1');
// alert('1');
for (i = 0; i < arr1.length; i++) {
    box = arr1[i].replace(/\s+/g, ' ').trim().split(' ');
    arrOnArr1.push(box);
}
// console.log(arrOnArr1);
// alert('2');
// console.log('arrOnArr2');

for (i = 0; i < arr2.length; i++) {
    box = arr2[i].replace(/\s+/g, ' ').trim().split(' ');
    arrOnArr2.push(box);
}
// alert('3');
// console.log(arrOnArr2);
// alert('4');
// В старом массиве оставляю только первое значение строки (артикул) arrOnArr1
// console.log("// В старом массиве оставляю только первое значение строки (артикул)")
// for (i = 0; i < arrOnArr1.length; i++ ) {
//     arrOnArr1[i].length = 1;
// }

// Артикулы которых нет у клиента
// console.log("/ Артикулы которых нет у клиента")
   let dollar = "$",
    xDollar1 = 0,
    xDollar2 = 0;

    for (i = 0; i < arrOnArr2.length; i++) {
        for (q = 0; q < arrOnArr1.length; q++) {

            //проверка на занак $
            if (arrOnArr1[q][0] = dollar) {
                xDollar1 = 1;
            }
            else {
                xDollar1 = 0
            }

            if (arrOnArr2[q][0] = dollar) {
                xDollar2 = 1;
            }
            else {
                xDollar2 = 0;
            }
            // ---

            if (arrOnArr1[q][xDollar1] == arrOnArr2[i][xDollar2]) {
               break;
            }

            else if (q + 1 == arrOnArr1.length) {
                x.push(arrOnArr2[i]);
            }
        }
    }
// Артикулы котрых нет в новом массиве
// console.log("// Артикулы котрых нет в новом массиве")
if (prod.checked) {
    for (i = 0; i < arrOnArr1.length; i++) {
        for(q = 0; q < arrOnArr2.length; q++) {
            if (arrOnArr1[i][0] == arrOnArr2[q][0]) {
                break;
            }
            else if (q + 1 == arrOnArr2.length) {
                m.push(arrOnArr1[i]);
            }
        }
    }

//-- Готовим строку разделенную ' '; 
// console.log("//-- Готовим строку разделенную ' '; ");

    resultText += '<h3>Проданные:</h3><br><span>';
    
    for (i = 0; i < m.length; i++) {
        resultText +=' ' + m[i][0];
    }
}


    resultText +='</span><hr><h3>Новые артикулы: ' + x.length + '</h3><br><span>';

    for (i = 0; i < x.length; i++) {
        resultText +=' ' + x[i][0];
    }

    resultText +='</span>';

//-- Добавляем ссылку к x[x][0];
for (i = 0; i < x.length; i++) {
    x[i].push('<br>https://autostrong-m.ru/querysearch?query=' + x[i][0]);
    x[i][0] = '<a href="https://autostrong-m.ru/querysearch?query=' + x[i][0] + '" target="__blank">' + x[i][0] + '</a>';
}

//-- Готовим строку с описаниями и ссылками
    resultTextLink +='<hr><h3>Новые артикулы с сылкой на сайт</h3><br>';

    for (i = 0; i < x.length; i++){
        for (q = 0; q < x[i].length; q++) {
            resultTextLink += x[i][q] + ' ';
        }
        resultTextLink += '<br><br>';
    }

    
    //--   
    if (prod.checked) {
        alert("Проданых - " + m.length + " / Новых - " + x.length);
        
    }
    else {
    // голос Циклопа ----
    var audioAlert = new Audio("../audio.mp3");
    audioAlert.onplaying = function () {
        alert("Новых - " + x.length);
    }   
    audioAlert.play();
    // alert("Новых - " + x.length);
    //------
}

//-- Выводим строку в на страницу в элемент result
    result.classList.add("result_style"); // добавлю класс стилей для результата
    resultLink.classList.add("result_style");

    result.innerHTML = "<p>" + resultText + " </p></br>";
    resultLink.innerHTML = resultTextLink + "</br>";
//--
   
}



//--  Чистим поля для ввода на странице 
document.getElementById('buttonClirn').onclick = function() {

document.getElementById('box1').value = "";
document.getElementById('box2').value = "";
document.getElementById('box1').placeholder  = "Вставьте столбец артикулов из старой выгрузки";
document.getElementById('box2').placeholder  = "Вставьте столбец артикулов из новой выгрузки";
document.getElementById('box1').style = 'background-color: none';
document.getElementById('box2').style = 'background-color: none';
}
//--