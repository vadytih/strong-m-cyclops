let selectParts = document.querySelector("#nameParts"),
    selectMarks = document.querySelector("#nameMarks"),
    selectModels = document.querySelector("#nameModels"),
    filtrBtn = document.querySelector("#filtrbtn"),
    arrStrZap =[[0],[0],[0]],
    arrFiltrResult = [],
    strZap = "",
    strZapSet = "",
    selectBox = "",
    trush ="",
    y = 0,
    artFiltr = "";

// Наполняю список наименованием деталей
for (i = 0; i < arrParts.length; i++) {
    selectBox += '<option value="' + arrParts[i].value + '">' + arrParts[i].text + '</option>';
};

selectParts.innerHTML = selectBox;
selectBox ="";

// Наполняю списко марками
for(i = 0; i < arrCarsObj.length; i++) {
    selectBox += '<option value="' + i + '">' + arrCarsObj[i].mark + '</option>';
}

selectMarks.innerHTML = selectBox;
selectBox ="";

// Наполняю списко моделями
selectModels.innerHTML = '<option value="' + 0 + '">' + arrCarsObj[0].models + '</option>';

// Отслеживание изменений в списке деталь
selectParts.addEventListener('change', function(){
    // console.log(this.value);
    selectParts.value = this.value;

    arrStrZap.length = 0;

    arrStrZap.push( selectParts.value, selectMarks.value, selectModels.value,);
    console.log(arrStrZap);

});

// Отслеживаю изменение в спике Марок и от параметра наполняю списко Моделей
selectMarks.addEventListener('change', function(){
// 	console.log(this.value);
    selectMarks.value = this.value;
    
    for(i = 0; i < arrCarsObj[this.value].models.length; i++) {
        selectBox += '<option value="' + i + '">' + arrCarsObj[this.value].models[i] + '</option>';
    }

    selectModels.innerHTML = selectBox;
    selectBox ="";

    arrStrZap.length = 0;

    arrStrZap.push( selectParts.value, selectMarks.value, selectModels.value,);
    // console.log(arrStrZap);
});

// Отслеживаю измение в списке Модерей
selectModels.addEventListener('change', function(){
	console.log(this.value);
    selectModels.value = this.value;

    selectBox ="";

    arrStrZap.length = 0;

    arrStrZap.push( selectParts.value, selectMarks.value, selectModels.value,);
    // console.log(arrStrZap);
});


// Формируем строку с запросом
filtrBtn.onclick = function() {
    strZapSet = "";
    strZap = "";
    arrFiltrResult.length = 0;
    trush="";
    artFiltr="";

    if(arrStrZap[0] == "0" && arrStrZap[1] == "0" && arrStrZap[2] == "0" ) {
        strZapSet += arrStrZap[0] + "." + arrStrZap[1] + "." + arrStrZap[2];
        strZap += " ";

        // console.log('IF1');
        // console.log(strZapSet);
        // console.log(strZap);
        
    }
    else if (arrStrZap[0] !== "0" && arrStrZap[1] == "0" && arrStrZap[2] == "0" ) {
        strZapSet += arrStrZap[0] + "." + arrStrZap[1] + "." + arrStrZap[2];
        strZap += arrParts[arrStrZap[0]].text; 

        // console.log('IF2');
        // console.log(strZapSet);
        // console.log(strZap);
    }
    else if (arrStrZap[0] !== "0" && arrStrZap[1] !== "0" && arrStrZap[2] == "0") {
        strZapSet += arrStrZap[0] + "." + arrStrZap[1] + "." + arrStrZap[2];
        strZap += arrParts[arrStrZap[0]].text + " " + arrCarsObj[arrStrZap[1]].mark; 
        
        // console.log('IF3');
        // console.log(strZapSet);
        // console.log(strZap);
    }

    else if (arrStrZap[0] == "0" && arrStrZap[1] !== "0" && arrStrZap[2] == "0") {
        strZapSet += arrStrZap[0] + "." + arrStrZap[1] + "." + arrStrZap[2];
        strZap += arrCarsObj[arrStrZap[1]].mark; 
        
        // console.log('IF4');
        // console.log(strZapSet);
        // console.log(strZap);
    }
    else if (arrStrZap[0] == "0" && arrStrZap[1] !== "0" && arrStrZap[2] !== "0") {
        strZapSet += arrStrZap[0] + "." + arrStrZap[1] + "." + arrStrZap[2];
        strZap += arrCarsObj[arrStrZap[1]].mark + " " + arrCarsObj[arrStrZap[1]].models[arrStrZap[2]];
        
        // console.log('IF5');
        // console.log(strZapSet);
        // console.log(strZap);
    }
    else {
        strZapSet += arrStrZap[0] + "." + arrStrZap[1] + "." + arrStrZap[2];
        strZap += arrParts[arrStrZap[0]].text + " " + arrCarsObj[arrStrZap[1]].mark + " " + arrCarsObj[arrStrZap[1]].models[arrStrZap[2]]; 
        
        // console.log('else');
        // console.log(strZapSet);
        // console.log(strZap);
    }
// Составляю массив из результата из 2 элементов Атикул и остальное
for(i = 0; i < x.length; i++) {
    arrFiltrResult.push([]);
    arrFiltrResult[arrFiltrResult.length - 1].push(x[i][0] + " ");
    
    for(q = 1; q < x[i].length; q++) {
        trush += x[i][q] + " ";
    }
    arrFiltrResult[arrFiltrResult.length - 1].push(trush);
    trush="";
}
// Фильтруем из массива
    for(i = 0; i < arrFiltrResult.length; i++) {
        if(String(arrFiltrResult[i][1].indexOf(strZap)) !== "-1"){
            // console.log(i);
                trush += arrFiltrResult[i][0] + " " + arrFiltrResult[i][1] + "</br></br>";
                artFiltr += arrFiltrResult[i][0] + " ";
        }
    }

    result.innerHTML ='<hr><h3>Новые артикулы:</h3><br><div>' + artFiltr + "</div></br>";
    resultLink.innerHTML = '<hr><h3>Новые артикулы с сылкой на сайт</h3><br>' + trush;

    
};