const checkboxSubMainBlock2 = document.querySelectorAll(".subblock-category2")
const crossDel = document.querySelectorAll(".composition-title-field__del")
const yesBlock = document.querySelectorAll(".composition-delete-block__subfirst")
const noBlock = document.querySelectorAll(".composition-delete-block__subsecond")
const newBlock = document.querySelectorAll(".new-list")
const arrowNew = document.querySelectorAll(".add-field__arrow")

function delCross(event) {
    event.target.closest(".composition-title-field__del").parentNode.nextElementSibling.style.display = 'flex';
};
function nodelCross(event) {
    event.target.closest(".composition-delete-block__subsecond").parentNode.parentNode.style.display = 'none';
};
function delBlock(event) {
    event.target.closest(".food-composition").remove()
}
function newList(event) {
    if (event.target.closest(".add-field__arrow").nextElementSibling.nextElementSibling.style.display == 'none') {
        event.target.closest(".add-field__arrow").nextElementSibling.nextElementSibling.style.display = 'block';
    }
    else {
        event.target.closest(".add-field__arrow").nextElementSibling.nextElementSibling.style.display = 'none';
    }
}

arrowNew.forEach(function ourFunc(item, index, array) {
    item.addEventListener("click", newList)
});
crossDel.forEach(function ourFunc(item, index, array) {
    item.addEventListener("click", delCross)
});
yesBlock.forEach(function ourFunc(item, index, array) {
    item.addEventListener("click", delBlock)
});
noBlock.forEach(function ourFunc(item, index, array) {
    item.addEventListener("click", nodelCross)
});


// ! ВЗаимодействие со строками таблицы
const titleDate = document.querySelectorAll(".title-date")
const numberInputs = document.querySelectorAll('input[type="number"]');
const inputs = document.querySelectorAll("input")


inputs.forEach((block,number) => {
    block.addEventListener('keydown', function(event) {
      if(event.keyCode == 13) {
         event.preventDefault();
         event.stopPropagation()
      }
    });
  });


countStr=[]
for (let index = 0; index < titleDate.length; index++) {
    countStr.push([]);
}


// !Логика без ID
for (let index = 0; index < titleDate.length; index++) {
    let nextEl = titleDate[index];
    if (index!=titleDate.length-1){
        while (nextEl!=titleDate[index+1]) {
            countStr[index].push(nextEl);
            nextEl = nextEl.nextElementSibling;
        } 
    }
    else{
        while (!!nextEl) {
            countStr[index].push(nextEl);
            nextEl = nextEl.nextElementSibling;
        } 
    }
}
console.log(countStr)

/* Сложение столбцов */
function Schet(event){
    console.log(123)
    console.log(countStr)
    if(event.keyCode == 13) {
        mascount=[]
        for (let index = 0; index < 28; index++) {
            mascount.push(0);
        }
    
        for (let index = 0; index < titleDate.length; index++) {
            for (let indexDouble = 0; indexDouble < countStr[index].length-2; indexDouble++) {
                for (let indexTriple = 0; indexTriple < 28; indexTriple++) {
                    mascount[indexTriple]+= +countStr[index][indexDouble+1].children[indexTriple+1].querySelector("input").value
                }
            }
            console.log(mascount)
            for (let indexTriple = 0; indexTriple < 28; indexTriple++) {
                countStr[index][countStr[index].length-1].children[indexTriple+1].querySelector("input").value=`${mascount[indexTriple]}`
            }
            mascount=[]
            for (let index = 0; index < 28; index++) {
                mascount.push(0);
            }
        }
    }
    
}

numberInputs.forEach(function ourFunc(item, index, array) {
    item.addEventListener('keydown', function(event) {
        if(event.keyCode == 13) {
           Schet(event)
        }
      });
});

const ingredientsLink = document.querySelectorAll(".new-list__ingredients-link")
const allBlock = document.querySelectorAll(".new-list")

function useIngredientsLink(event){
    event.target.closest(".new-list").style.display="none";
}


allBlock.forEach((block, index) => {
    block.addEventListener('mouseover', () => {
        block.style.display="block";
    });
    
    block.addEventListener('mouseout', () => {
       block.style.display="none";
    });
  });

ingredientsLink.forEach( function ourFunction(item,index,array){
    item.addEventListener("click",useIngredientsLink)
});






// !Popup
const popupIngred = document.querySelectorAll(".new-list__ingredients")
const g = document.querySelectorAll(".ingredients-block__main-subblock");
const arrowList = document.querySelectorAll(".ingredients-block__img")
const checkboxNew = document.querySelectorAll(".ingredients-block__checkbox")
const checkboxSubMainBlock = document.querySelectorAll(".subblock-category")
const checkboxChoosen = document.querySelectorAll(".options-block__checkbox__checkbox")
const chechboxSubCheckbox = document.querySelectorAll(".subblock-category__checkbox") 
const vibranieCheckboxMainBlock = document.querySelector(".selected-ingredients") 
const zeroBlock = document.querySelector(".selected-ingredients__invisible")

function useArrowList(event){
    if (event.target.closest(".ingredients-block__main-subblock").nextElementSibling.hidden == false){

        event.target.closest(".ingredients-block__main-subblock").nextElementSibling.hidden = true;

        event.target.closest(".ingredients-block__img").classList.remove("ingredients-block__img_rotate");

    } else{
        event.target.closest(".ingredients-block__main-subblock").nextElementSibling.hidden = false;
        

        event.target.closest(".ingredients-block__img").classList.add("ingredients-block__img_rotate");
    }
}
function useSubCheckbox(event){
    let par = event.target.closest(".subblock-category").previousElementSibling.querySelector('.ingredients-block__checkbox')
    let count = 0
    if (par.checked==true){
        for (let index = 0; index < event.target.closest(".subblock-category").children.length; index++) {
            if (event.target.closest(".subblock-category").children[index].querySelector('.subblock-category__checkbox').checked==true) {
                count++;
            }
        if (count!=event.target.closest(".subblock-category").children.length) {
            par.checked=false
        }}
        if (event.target.checked == false) {
            let parentEvent = event.target.closest(".subblock-category").previousElementSibling.querySelector(".ingredients-block__text")
            let selectParentEvent = vibranieCheckboxMainBlock.querySelectorAll(".ingredients-block__text")
            for (let index = 0; index < selectParentEvent.length; index++) {
                if (selectParentEvent[index].textContent.replace(/\n/g, '').trim() == parentEvent.textContent.replace(/\n/g, '').trim()){
                    selectParentEvent[index].closest(".ingredients-block__category").remove()
                    break;
                }
            }   
            let eventSiblings = event.target.closest(".subblock-category").children
            for (let index = 0; index < eventSiblings.length; index++) {
                if (eventSiblings[index].querySelector(".subblock-category__checkbox").checked == true){
                    let newElem = eventSiblings[index].closest(".subblock-category__subcategory-block").cloneNode(true);
                    newElem.querySelector(".subblock-category__checkbox").checked=true;
                    newElem.querySelector(".subblock-category__checkbox").disabled=true;
                    vibranieCheckboxMainBlock.insertBefore(newElem, document.querySelectorAll(".selected-ingredients__line")[document.querySelectorAll(".selected-ingredients__line").length-1]);
                }
            }
            if (vibranieCheckboxMainBlock.querySelectorAll(".ingredients-block__category").length!=0 || vibranieCheckboxMainBlock.querySelectorAll(".subblock-category__subcategory-block").length!=0){
                zeroBlock.hidden = true;
            }
            else{
                zeroBlock.hidden = false;
            }
        }
    } 
    else{
        for (let index = 0; index < event.target.closest(".subblock-category").children.length; index++) {
            if (event.target.closest(".subblock-category").children[index].querySelector('.subblock-category__checkbox').checked==true) {
                count++;
            }
        if (count==event.target.closest(".subblock-category").children.length) {
            par.checked=true
        }}
        if (event.target.checked == true) {
            let newElem = event.target.closest(".subblock-category__subcategory-block").cloneNode(true);
            vibranieCheckboxMainBlock.insertBefore(newElem, document.querySelectorAll(".selected-ingredients__line")[document.querySelectorAll(".selected-ingredients__line").length-1]);
            newElem.querySelector('.subblock-category__checkbox').disabled=true;   
            if (par.checked==true){
                newElemDelText = vibranieCheckboxMainBlock.querySelectorAll(".subblock-category__subcategory-block")
                masOldSubElements = event.target.closest(".subblock-category").children
                masNewSubElements=[];
                for (let index = 0; index < masOldSubElements.length; index++) {
                    masNewSubElements.push(masOldSubElements[index].querySelector(".subblock-category__text").textContent.replace(/\n/g, '').trim())
                }
                for (let index = 0; index < newElemDelText.length; index++) {
                    if (masNewSubElements.includes(newElemDelText[index].querySelector(".subblock-category__text").textContent.replace(/\n/g, '').trim())) {
                        newElemDelText[index].remove();
                    }    
                }
                let newElem = event.target.closest(".ingredients-block__category").cloneNode(true);
                vibranieCheckboxMainBlock.insertBefore(newElem, document.querySelectorAll(".selected-ingredients__line")[document.querySelectorAll(".selected-ingredients__line").length-1]);
                for (let index = 0; index < newElem.querySelectorAll('input[type="checkbox"]').length; index++) {
                    newElem.querySelectorAll('input[type="checkbox"]')[index].disabled=true;   
                }
                newElem.querySelectorAll(".ingredients-block__img").forEach( function ourFunction(item, index, array){
                    item.addEventListener("click",useSelectArrow)
                });
            }
            if (vibranieCheckboxMainBlock.querySelectorAll(".ingredients-block__category").length!=0 || vibranieCheckboxMainBlock.querySelectorAll(".subblock-category__subcategory-block").length!=0){
                zeroBlock.hidden = true;
            }
            else{
                zeroBlock.hidden = false;
            }
        }
        else{
            newElemDel = vibranieCheckboxMainBlock.querySelectorAll(".subblock-category__subcategory-block")
            for (let index = 0; index < newElemDel.length; index++) {
                if (newElemDel[index].textContent.replace(/\n/g, '').trim() == event.target.nextElementSibling.textContent.replace(/\n/g, '').trim()) {
                    newElemDel[index].remove();
                    break
                }
            }
            if (vibranieCheckboxMainBlock.querySelectorAll(".ingredients-block__category").length!=0 || vibranieCheckboxMainBlock.querySelectorAll(".subblock-category__subcategory-block").length!=0){
                zeroBlock.hidden = true;
            }
            else{
                zeroBlock.hidden = false;
            }
        }
    }
}

function useSelectArrow(event){
    if (event.target.closest(".ingredients-block__main-subblock").nextElementSibling.hidden == false){

        event.target.closest(".ingredients-block__main-subblock").nextElementSibling.hidden = true;

        event.target.closest(".ingredients-block__img").classList.remove("ingredients-block__img_rotate");

    } else{
        event.target.closest(".ingredients-block__main-subblock").nextElementSibling.hidden = false;
        

        event.target.closest(".ingredients-block__img").classList.add("ingredients-block__img_rotate");
    }
};

function useCheckbox(event){
    if (event.target.closest(".ingredients-block__checkbox").checked == true){
        for (let index = 0; index < event.target.closest(".ingredients-block__checkbox").parentNode.parentNode.nextElementSibling.children.length; index++) {
            event.target.closest(".ingredients-block__main-subblock").nextElementSibling.children[index].firstElementChild.checked=true;
        }
        newElemDelText = vibranieCheckboxMainBlock.querySelectorAll(".subblock-category__subcategory-block")
        masOldSubElements = event.target.closest(".ingredients-block__main-subblock").nextElementSibling.children
        masNewSubElements=[];
        for (let index = 0; index < masOldSubElements.length; index++) {
            masNewSubElements.push(masOldSubElements[index].querySelector(".subblock-category__text").textContent.replace(/\n/g, '').trim())
        }
        for (let index = 0; index < newElemDelText.length; index++) {
            if (masNewSubElements.includes(newElemDelText[index].querySelector(".subblock-category__text").textContent.replace(/\n/g, '').trim())) {
                newElemDelText[index].remove();
            }    
        }
        let newElem = event.target.closest(".ingredients-block__category").cloneNode(true);
        vibranieCheckboxMainBlock.insertBefore(newElem, document.querySelectorAll(".selected-ingredients__line")[document.querySelectorAll(".selected-ingredients__line").length-1]);
        for (let index = 0; index < newElem.querySelectorAll('input[type="checkbox"]').length; index++) {
            newElem.querySelectorAll('input[type="checkbox"]')[index].disabled=true;
            
        }
        newElem.querySelectorAll(".ingredients-block__img").forEach( function ourFunction(item, index, array){
            item.addEventListener("click",useSelectArrow)
        });
        if (vibranieCheckboxMainBlock.querySelectorAll(".ingredients-block__category").length!=0 || vibranieCheckboxMainBlock.querySelectorAll(".subblock-category__subcategory-block").length!=0){
            zeroBlock.hidden = true;
        }
        else{
            zeroBlock.hidden = false;
        }
    }
    else{
        for (let index = 0; index < event.target.closest(".ingredients-block__checkbox").parentNode.parentNode.nextElementSibling.children.length; index++) {
            event.target.closest(".ingredients-block__main-subblock").nextElementSibling.children[index].firstElementChild.checked=false;
        }
        newElemDel = vibranieCheckboxMainBlock.querySelectorAll(".ingredients-block__text")
        for (let index = 0; index < newElemDel.length; index++) {
            if (newElemDel[index].textContent.replace(/\n/g, '').trim() == event.target.nextElementSibling.textContent.replace(/\n/g, '').trim()) {
                newElemDel[index].closest(".ingredients-block__category").remove();
            }     
        }
        if (vibranieCheckboxMainBlock.querySelectorAll(".ingredients-block__category").length!=0 || vibranieCheckboxMainBlock.querySelectorAll(".subblock-category__subcategory-block").length!=0){
            zeroBlock.hidden = true;
        }
        else{
            zeroBlock.hidden = false;
        }
    }
};


arrowList.forEach( function ourFunction(item,index,array){
    item.addEventListener("click",useArrowList)
});
chechboxSubCheckbox.forEach( function ourFunction(item,index,array){
    item.addEventListener("click",useSubCheckbox)
});

checkboxNew.forEach( function ourFunction(item, index, array){
    item.addEventListener("click",useCheckbox)
});

/* ---------------------------------------------------------------------------------- */

//Выпадающие списки для поиска
const searchInput = document.querySelector('.choise-block__search');
const religions = document.querySelectorAll('.Ch');

searchInput.addEventListener('input', function() {
  const searchText = this.value.toLowerCase();

  religions.forEach(function(religion) {
    const religionText = religion.textContent.toLowerCase();
    const religionBlock = religion.nextElementSibling;

    if (religionText.includes(searchText)) {
      religion.style.display = 'block';
      religionBlock.style.display = 'block';
    } else {
      religion.style.display = 'none';
      religionBlock.style.display = 'none';
    }
  });
});

const religions2 = document.querySelectorAll('.Ch2');

searchInput.addEventListener('input', function() {
  const searchText = this.value.toLowerCase();

  religions2.forEach(function(religion) {
    const religionText = religion.textContent.toLowerCase();
    const religionBlock = religion.nextElementSibling;

    if (religionText.includes(searchText)) {
      religion.style.display = 'block';
      religionBlock.style.display = 'block';
    } else {
      religion.style.display = 'none';
      religionBlock.style.display = 'none';
    }
  });
});

const religions3 = document.querySelectorAll('.Ch3');

searchInput.addEventListener('input', function() {
  const searchText = this.value.toLowerCase();

  religions3.forEach(function(religion) {
    const religionText = religion.textContent.toLowerCase();
    const religionBlock = religion.nextElementSibling;

    if (religionText.includes(searchText)) {
      religion.style.display = 'block';
      religionBlock.style.display = 'block';
    } else {
      religion.style.display = 'none';
      religionBlock.style.display = 'none';
    }
  });
});

const religions4 = document.querySelectorAll('.Ch4');

searchInput.addEventListener('input', function() {
  const searchText = this.value.toLowerCase();

  religions4.forEach(function(religion) {
    const religionText = religion.textContent.toLowerCase();
    const religionBlock = religion.nextElementSibling;

    if (religionText.includes(searchText)) {
      religion.style.display = 'block';
      religionBlock.style.display = 'block';
    } else {
      religion.style.display = 'none';
      religionBlock.style.display = 'none';
    }
  });
});

/* --------------------------------------------------------------------------------------------------- */

// Изменение значений в столбцах

function multiply() {
    // Получаем все строки с классом food-composition
    var rows = document.querySelectorAll('.food-composition');

    // Проходим по каждой строке
    rows.forEach(function(row) {
        // Получаем значение из input с классом weight-cell
        var val1 = row.querySelector('.weight-cell').value;
        var val2 = row.querySelector('.water-cell').value; // изначальное значение для water-cell
        var val3 = row.querySelector('.protein-cell').value;  // изначальное значение для protein-cell
        var val4 = row.querySelector('.fat-cell').value; // изначальное значение
        var val5 = row.querySelector('.nshk-cell').value; // изначальное значение
        var val6 = row.querySelector('.hol-cell').value; // изначальное значение
        var val7 = row.querySelector('.mds-cell').value; // изначальное значение
        var val8 = row.querySelector('.kp-cell').value; // изначальное значение
        var val9 = row.querySelector('.ugl-cell').value; // изначальное значение
        var val10 = row.querySelector('.pv-cell').value; // изначальное значение
        var val11 = row.querySelector('.ok-cell').value; // изначальное значение
        var val12 = row.querySelector('.ash-cell').value; // изначальное значение
        var val13 = row.querySelector('.na-cell').value; // изначальное значение
        var val14 = row.querySelector('.k-cell').value; // изначальное значение
        var val15 = row.querySelector('.ca-cell').value; // изначальное значение
        var val16 = row.querySelector('.mg-cell').value; // изначальное значение
        var val17 = row.querySelector('.p-cell').value; // изначальное значение
        var val18 = row.querySelector('.fe-cell').value; // изначальное значение
        var val19 = row.querySelector('.a-cell').value; // изначальное значение
        var val20 = row.querySelector('.kar-cell').value; // изначальное значение
        var val21 = row.querySelector('.pe-cell').value; // изначальное значение
        var val22 = row.querySelector('.te-cell').value; // изначальное значение
        var val23 = row.querySelector('.b1-cell').value; // изначальное значение
        var val24 = row.querySelector('.b2-cell').value; // изначальное значение
        var val25 = row.querySelector('.pp-cell').value; // изначальное значение
        var val26 = row.querySelector('.ne-cell').value; // изначальное значение
        var val27 = row.querySelector('.c-cell').value; // изначальное значение
        var val28 = row.querySelector('.ec-cell').value; // изначальное значение

        // Устанавливаем значения для water-cell и protein-cell
        if (val1 !== "") {
            row.querySelector('.water-cell').value = (val1 / 100) * val2;
            row.querySelector('.protein-cell').value = (val1 / 100) * val3;
            row.querySelector('.fat-cell').value = (val1 / 100) * val4;
            row.querySelector('.nshk-cell').value = (val1 / 100) * val5;
            row.querySelector('.hol-cell').value = (val1 / 100) * val6;
            row.querySelector('.mds-cell').value = (val1 / 100) * val7;
            row.querySelector('.kp-cell').value = (val1 / 100) * val8;
            row.querySelector('.ugl-cell').value = (val1 / 100) * val9;
            row.querySelector('.pv-cell').value = (val1 / 100) * val10;
            row.querySelector('.ok-cell').value = (val1 / 100) * val11;
            row.querySelector('.ash-cell').value = (val1 / 100) * val12;
            row.querySelector('.na-cell').value = (val1 / 100) * val13;
            row.querySelector('.k-cell').value = (val1 / 100) * val14;
            row.querySelector('.ca-cell').value = (val1 / 100) * val15;
            row.querySelector('.mg-cell').value = (val1 / 100) * val16;
            row.querySelector('.p-cell').value = (val1 / 100) * val17;
            row.querySelector('.fe-cell').value = (val1 / 100) * val18;
            row.querySelector('.a-cell').value = (val1 / 100) * val19;
            row.querySelector('.kar-cell').value = (val1 / 100) * val20;
            row.querySelector('.pe-cell').value = (val1 / 100) * val21;
            row.querySelector('.te-cell').value = (val1 / 100) * val22;
            row.querySelector('.b1-cell').value = (val1 / 100) * val23;
            row.querySelector('.b2-cell').value = (val1 / 100) * val24;
            row.querySelector('.pp-cell').value = (val1 / 100) * val25;
            row.querySelector('.ne-cell').value = (val1 / 100) * val26;
            row.querySelector('.c-cell').value = (val1 / 100) * val27;
            row.querySelector('.ec-cell').value = (val1 / 100) * val28;
        } else {
            row.querySelector('.water-cell').value = val2;
            row.querySelector('.protein-cell').value = val3;
            row.querySelector('.fat-cell').value = val4;
            row.querySelector('.nshk-cell').value = val5;
            row.querySelector('.hol-cell').value = val6;
            row.querySelector('.mds-cell').value = val7;
            row.querySelector('.kp-cell').value = val8;
            row.querySelector('.ugl-cell').value = val9;
            row.querySelector('.pv-cell').value = val10;
            row.querySelector('.ok-cell').value = val11;
            row.querySelector('.ash-cell').value = val12;
            row.querySelector('.na-cell').value = val13;
            row.querySelector('.k-cell').value = val14;
            row.querySelector('.ca-cell').value = val15;
            row.querySelector('.mg-cell').value = val16;
            row.querySelector('.p-cell').value = val17;
            row.querySelector('.fe-cell').value = val18;
            row.querySelector('.a-cell').value = val19;
            row.querySelector('.kar-cell').value = val20;
            row.querySelector('.pe-cell').value = val21;
            row.querySelector('.te-cell').value = val22;
            row.querySelector('.b1-cell').value = val23;
            row.querySelector('.b2-cell').value = val24;
            row.querySelector('.pp-cell').value = val25;
            row.querySelector('.ne-cell').value = val26;
            row.querySelector('.c-cell').value = val27;
            row.querySelector('.ec-cell').value = val28;
        }
    });
}


function addRowsBasedOnCheckboxes() {
    // Получаем все чекбоксы с классом 'subblock-category__checkbox'
    const checkboxes = document.querySelectorAll('.subblock-category__checkbox');
    const table = document.getElementById('foodTable').getElementsByTagName('tbody')[0];

    checkboxes.forEach((checkbox) => {
        // Проверяем, установлен ли чекбокс
        if (checkbox.checked) {
            // Создаем новую строку, если чекбокс установлен
            const newRow = document.createElement('tr');
            newRow.setAttribute('align', 'center');
            newRow.setAttribute('class', 'food-composition');
            newRow.setAttribute('id', `id${table.rows.length + 1}`);

            // Создание ячейки содержания 
            const titleCell = document.createElement('td');
            titleCell.setAttribute('class', 'food-composition__title composition-title-field');

            const titleDiv = document.createElement('div');
            titleDiv.setAttribute('class', 'composition-title-field__flex');

            const titleText = document.createElement('div');
            titleText.setAttribute('class', 'composition-title-field__text');
            titleText.textContent = 'Название'; // Указываем нужное название

            titleDiv.appendChild(createImage("{% static 'img/pencil.png' %}", 'composition-title-field__edit'));
            titleDiv.appendChild(titleText);
            titleDiv.appendChild(createImage("{% static 'img/black_cross.png' %}", 'composition-title-field__del'));

            titleCell.appendChild(titleDiv);
            titleCell.appendChild(createHiddenDeleteBlock());
            newRow.appendChild(titleCell);

            // Создание остальных ячеек с input 
            newRow.appendChild(createInputCell('weight-cell', 'myNumberInput', document.getElementById('inputWeight').value));
            newRow.appendChild(createInputCell('water-cell', 'cell', 75, true));
            newRow.appendChild(createInputCell('protein-cell', 'cell', 6, true));
            newRow.appendChild(createInputCell('fat-cell', 'cell', 4, true));
            newRow.appendChild(createInputCell('nshk-cell', 'cell', 1, true));
            newRow.appendChild(createInputCell('hol-cell', 'cell', 20, true));
            newRow.appendChild(createInputCell('mds-cell', 'cell', 0, true));
            newRow.appendChild(createInputCell('kp-cell', 'cell', 0, true));
            newRow.appendChild(createInputCell('ugl-cell', 'cell', 14, true));
            newRow.appendChild(createInputCell('pv-cell', 'cell', 3, true));
            newRow.appendChild(createInputCell('ok-cell', 'cell', 0, true));
            newRow.appendChild(createInputCell('ash-cell', 'cell', 1, true));
            newRow.appendChild(createInputCell('na-cell', 'cell', 40, true));
            newRow.appendChild(createInputCell('k-cell', 'cell', 100, true));
            newRow.appendChild(createInputCell('ca-cell', 'cell', 80, true));
            newRow.appendChild(createInputCell('mg-cell', 'cell', 40, true));
            newRow.appendChild(createInputCell('p-cell', 'cell', 130, true));
            newRow.appendChild(createInputCell('fe-cell', 'cell', 1.8, true));
            newRow.appendChild(createInputCell('a-cell', 'cell', 150, true));
            newRow.appendChild(createInputCell('kar-cell', 'cell', 500, true));
            newRow.appendChild(createInputCell('pe-cell', 'cell', 0, true));
            newRow.appendChild(createInputCell('te-cell', 'cell', 0, true));
            newRow.appendChild(createInputCell('b1-cell', 'cell', 0.3, true));
            newRow.appendChild(createInputCell('b2-cell', 'cell', 0.1, true));
            newRow.appendChild(createInputCell('pp-cell', 'cell', 0.8, true));
            newRow.appendChild(createInputCell('ne-cell', 'cell', 0, true));
            newRow.appendChild(createInputCell('c-cell', 'cell', 2, true));
            newRow.appendChild(createInputCell('ec-cell', 'cell', 160, true));

            // Добавляем новую строку в таблицу 
            table.appendChild(newRow);
        }
    });
}

function createImage(src, className) {
    const img = document.createElement('img');
    img.setAttribute('src', `{% static '${src}' %}`);
    img.setAttribute('class', className);
    return img;
}

function createHiddenDeleteBlock() {
    const hiddenBlock = document.createElement('div');
    hiddenBlock.setAttribute('class', 'composition-title-field__hidden composition-delete-block');
    hiddenBlock.style.display = 'none';

    const title = document.createElement('div');
    title.setAttribute('class', 'composition-delete-block__title');
    title.textContent = 'Точно хотите удалить?';

    const subBlockFirst = createDeleteSubBlock('Да');
    const subBlockSecond = createDeleteSubBlock('Нет');

    hiddenBlock.appendChild(title);
    hiddenBlock.appendChild(subBlockFirst);
    hiddenBlock.appendChild(subBlockSecond);

    return hiddenBlock;
}

function createDeleteSubBlock(text) {
    const subBlock = document.createElement('div');
    subBlock.setAttribute('class', `composition-delete-block__subblock`);

    const subInner = document.createElement('div');
    subInner.setAttribute('class', `composition-delete-block__sub${text.toLowerCase()}`);
     
    const innerText = document.createElement('div');
    innerText.setAttribute('class', `composition-delete-block__${text.toLowerCase()}`);
    innerText.textContent = text;

    subInner.appendChild(innerText);
    subBlock.appendChild(subInner);
    return subBlock;
}

function createInputCell(className, idPrefix, value, isDisabled = false) {
    const cell = document.createElement('td');
    const input = document.createElement('input');
    input.setAttribute('oninput', 'multiply()');
    input.setAttribute('type', 'number');
    if (isDisabled) {
        input.setAttribute('disabled', true);
    } else {
        input.setAttribute('min', 0);
        input.setAttribute('onkeydown', 'return event.key !== "-"');
    }
    input.setAttribute('class', className);
    input.setAttribute('id', `${idPrefix}${document.getElementById('foodTable').rows.length}.${className}`);
    input.value = value;

    cell.appendChild(input);
    return cell;
}