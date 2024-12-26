
function deleteIfNotSelected(thing) {
    if (thing.checked == 0) {
        var element = thing.closest(".block-select__subblock");
        element.remove();
    }
    if (document.querySelectorAll(".block-select__subblock").length == 0 && !document.querySelector(".thereIsNothing")){
        document.querySelector(".block-select").insertAdjacentHTML("afterbegin",`<div class = "thereIsNothing">Ничего не выбрано</div>`)
        }
}
    

// function autoFillMessage(thing) {
//     var content = document.querySelectorAll(".block-select");
//     console.log(content);
//     if (content.length == 0) {
//         thing.innerHTML = '<div class = "thereIsNothing">' + 'Ничего не выбрано' + '</div>';
//     }
// }


const mainCheckbox = document.querySelectorAll(".title-ingredient__checkbox")
const subCheckbox = document.querySelectorAll(".composition-title-field__checkbox")
const titleIngredient = document.querySelectorAll(".title-ingredient")

countStrPK=[]
for (let index = 0; index < titleIngredient.length; index++) {
    countStrPK.push([]);
}

// !Логика без ID
for (let index = 0; index < titleIngredient.length; index++) {
    let nextEl = titleIngredient[index];
    if (index!=titleIngredient.length-1){
        while (nextEl!=titleIngredient[index+1]) {
            countStrPK[index].push(nextEl);
            nextEl = nextEl.nextElementSibling;
        } 
    }
    else{
        while (!!nextEl) {
            countStrPK[index].push(nextEl);
            nextEl = nextEl.nextElementSibling;
        } 
    }
}




function useCheckbox(event){
    if (event.target.closest(".title-ingredient__checkbox").checked == true){
        nextEl = event.target.closest(".title-ingredient")
        while (nextEl.nextElementSibling!= null && nextEl.nextElementSibling.classList.contains("food-composition")) {
            nextEl.nextElementSibling.querySelector(".composition-title-field__checkbox").checked=true;
            nextEl = nextEl.nextElementSibling;
        }
        megaCountFunc(event)
    }
    else{
        nextEl = event.target.closest(".title-ingredient")
        while (nextEl.nextElementSibling!= null && nextEl.nextElementSibling.classList.contains("food-composition")) {
            nextEl.nextElementSibling.querySelector(".composition-title-field__checkbox").checked=false;
            nextEl = nextEl.nextElementSibling;
        }
        megaCountFunc(event)
    }
};


function useSubCheckbox(event){
    let par = event.target.closest(".food-composition")
    let count = 0
    let children = 0
    while (par.classList.contains("food-composition")) {
        par = par.previousElementSibling
    }
    if (par.querySelector('.title-ingredient__checkbox').checked==true){
        nextEl = par
        while (nextEl.nextElementSibling!= null && nextEl.nextElementSibling.classList.contains("food-composition")) {
            if (nextEl.nextElementSibling.querySelector(".composition-title-field__checkbox").checked==true){;
                count++
            }
            nextEl = nextEl.nextElementSibling;
            children++
        }
        if (count!=children) {
            par.querySelector('.title-ingredient__checkbox').checked=false
        }
        megaCountFunc(event)
    }
    else{
        nextEl = par
        while (nextEl.nextElementSibling!= null && nextEl.nextElementSibling.classList.contains("food-composition")) {
            if (nextEl.nextElementSibling.querySelector(".composition-title-field__checkbox").checked==true){;
                count++
            }
            nextEl = nextEl.nextElementSibling;
            children++
        }
        if (count==children) {
            par.querySelector('.title-ingredient__checkbox').checked=true;
        } 
        megaCountFunc(event)
    }

}

mainCheckbox.forEach( function ourFunction(item,index,array){
    item.addEventListener("click",useCheckbox)
});
subCheckbox.forEach( function ourFunction(item,index,array){
    item.addEventListener("click",useSubCheckbox)
});










const popupButton = document.querySelector(".submit-block__button")
const foodComposition = document.querySelectorAll(".food-composition")
const plus = document.querySelector(".block-update__sign")
const totalBlock = document.querySelector(".composition-total")
function megaCountFunc(event){
    if (event.target.classList.contains("title-ingredient__checkbox")){
        if (event.target.closest(".title-ingredient__checkbox").checked == true) {
            let nextEl = event.target.closest(".title-ingredient").nextElementSibling
            let categories = Array.from(nextEl.children).slice(1)
            let newTotalBlock = Array.from(totalBlock.children).slice(1)
            
            for (let index = 0; index < categories.length; index++) {
                newTotalBlock[index].querySelector("input").value =newTotalBlock[index].querySelector("input").value * 1 + +categories[index].querySelector("input").value
            }
           
            while (nextEl.nextElementSibling!= null && nextEl.nextElementSibling.classList.contains("food-composition")) {
                let categories = Array.from(nextEl.children).slice(1)
                let newTotalBlock = Array.from(totalBlock.children).slice(1)
                for (let index = 0; index < categories.length; index++) {
                    newTotalBlock[index].querySelector("input").value =newTotalBlock[index].querySelector("input").value * 1 + +categories[index].querySelector("input").value
                }
                nextEl = nextEl.nextElementSibling
            }
            console.log(123)
        } 
        else {
            let nextEl = event.target.closest(".title-ingredient").nextElementSibling
            let categories = Array.from(nextEl.children).slice(1)
            let newTotalBlock = Array.from(totalBlock.children).slice(1)
            for (let index = 0; index < categories.length; index++) {
                newTotalBlock[index].querySelector("input").value = newTotalBlock[index].querySelector("input").value * 1 - +categories[index].querySelector("input").value
            }
            while (nextEl.nextElementSibling!= null && nextEl.nextElementSibling.classList.contains("food-composition")) {
                let categories = Array.from(nextEl.children).slice(1)
                let newTotalBlock = Array.from(totalBlock.children).slice(1)
                for (let index = 0; index < categories.length; index++) {
                    newTotalBlock[index].querySelector("input").value = newTotalBlock[index].querySelector("input").value * 1 - +categories[index].querySelector("input").value
                }
                nextEl = nextEl.nextElementSibling
            } 
        }
    }
    else if (event.target.classList.contains("composition-title-field__checkbox")){
        if (event.target.closest(".composition-title-field__checkbox").checked ==true){
            let categories = Array.from(event.target.closest(".food-composition").children).slice(1)
            let newTotalBlock = Array.from(totalBlock.children).slice(1)
            for (let index = 0; index < categories.length; index++) {
                newTotalBlock[index].querySelector("input").value = newTotalBlock[index].querySelector("input").value * 1 + +categories[index].querySelector("input").value
            }
        }
        else{
            let categories = Array.from(event.target.closest(".food-composition").children).slice(1)
            let newTotalBlock = Array.from(totalBlock.children).slice(1)
            for (let index = 0; index < categories.length; index++) {
                newTotalBlock[index].querySelector("input").value = newTotalBlock[index].querySelector("input").value - +categories[index].querySelector("input").value
            }
        }
    }
}
function CountFunc(event){
    // console.log(typeof totalBlock.children)
    let categories = Array.from(totalBlock.children).slice(1)
    for (let index = 0; index < categories.length; index++) {
        let classParam = document.querySelectorAll(`.${categories[index].querySelector("input").className}`)
        // console.log(classParam)
        let paramValue = 0
        for (let indexDouble = 1; indexDouble < classParam.length; indexDouble++) {
            console.log(classParam[indexDouble])
            paramValue += +classParam[indexDouble].value
        }
        categories[index].querySelector("input").value = paramValue 
    }
}
const hoho = document.querySelector(".hoho")
hoho.addEventListener("click", CountFunc)

function popupButtonFunc(event){
    masIngredients=[]
    for (let index = 0; index < foodComposition.length; index++) {
        if (foodComposition[index].querySelector(".composition-title-field__checkbox").checked==true) {
            masIngredients.push(
                {
                name: foodComposition[index].querySelector(".composition-title-field__text").textContent.replace(/\n/g, '').trim(),
                weight: foodComposition[index].querySelector(".weight-cell").value
                }
            )
        }
    }
    masSelectedIngredients = []
    const selectedIngredientsBlock = document.querySelectorAll(".block-select__subblock")
    for (let index = 0; index < selectedIngredientsBlock.length; index++) {
        masSelectedIngredients.push(selectedIngredientsBlock[index].querySelector(".block-select__label").textContent.replace(/\n/g, '').trim());
    }
    masIngredients.reverse()
    console.log(masIngredients[1])
    for (let index = 0; index < masIngredients.length; index++) {
        if (masSelectedIngredients.indexOf(masIngredients[index]) === -1){
            document.querySelector(".block-select").insertAdjacentHTML("afterbegin",`<div class="block-select__subblock"><input type="checkbox" class="block-select__checkbox" checked onchange="deleteIfNotSelected(this)"><label class="block-select__label">${masIngredients[index]["name"]}</label><div class="block-select__value">${masIngredients[index]["weight"]} гр.</div><input type="hidden" name="selectedIngredients" id="selectedIngredients" value="${masIngredients[index]["id"]}"></div>`)
        }
    }
    console.log('abobus') //хахаахахахаахах
    if (document.querySelectorAll(".block-select__subblock").length > 0 && document.querySelector(".thereIsNothing")){
        document.querySelector(".thereIsNothing").remove()
    }
}

function collectData() {
    const ings = [];
    const selected_list = document.querySelectorAll('.block-select__checkbox');

    selected_list.forEach(checkbox => {
        if (checkbox.checked) {
            const label = checkbox.nextElementSibling.textContent.trim();
            const value = checkbox.parentElement.querySelector('.block-select__value').textContent.trim();
            ings.push(`${label};${value}`);
        }
    });

    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.name = 'ingredient_list';
    hiddenInput.value = ings.join('|');
    document.getElementById('ingredientForm').appendChild(hiddenInput);
}


function plusFunc(event){
    const masSelectedIngredients = []
    const selectedIngredientsBlock = document.querySelectorAll(".block-select__subblock")
    for (let index = 0; index < selectedIngredientsBlock.length; index++) {
        masSelectedIngredients.push(selectedIngredientsBlock[index].querySelector(".block-select__label").textContent.replace(/\n/g, '').trim());
    }
    // masIngredients=[]
    for (let index = 0; index < foodComposition.length; index++) {
        const elemText = foodComposition[index].querySelector(".composition-title-field__text").textContent.replace(/\n/g, '').trim()
        if (foodComposition[index].querySelector(".composition-title-field__checkbox").checked==true &&  masSelectedIngredients.indexOf(elemText) === -1 ) {
            foodComposition[index].querySelector(".composition-title-field__checkbox").checked=false;
            previous = foodComposition[index].previousElementSibling
            if (previous.classList.contains("title-ingredient")){
                previous.querySelector(".title-ingredient__checkbox").checked = false;
            }
            while(!previous.classList.contains("title-ingredient")){
                if (foodComposition[index].previousElementSibling.classList.contains("title-ingredient")) {
                    foodComposition[index].previousElementSibling.querySelector(".title-ingredient__checkbox").checked = false;
                }
                previous = previous.previousElementSibling
            }
        }
    }
    

}

popupButton.addEventListener("click", popupButtonFunc)
plus.addEventListener("click", plusFunc)


// !AJAX
// megabutton.addEventListener("click", function(event){
//     const formData = new FormData(document.getElementById('newPKpopupForm'));
//     event.preventDefault();
//     var xhr = new XMLHttpRequest();

//     // Настраиваем запрос
//     xhr.open('POST', '/pk',true); // Укажите путь к вашему серверному скрипту
//     // var csrftoken = getCookie('csrftoken')
//     // xhr.setRequestHeader('X-CSRFToken'); // Установка заголовка для отправки формы
//     // console.log(formData.getlist("selected_ingredients"))
//     // formData.forEach((value, key) => {
//     //     console.log(key + ': ' + value);
//     // });
//     xhr.send(formData);

//     // Обработка ответа
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             // Обработка успешного ответа от сервера
//             console.log('Данные успешно отправлены');
//             // console.log('Ответ сервера:', xhr.responseText);
//         } else {
//             // Обработка ошибки
//             // console.error('Произошла ошибка. Статус:', xhr.status);
//         }
//     };
//     let haha = event.target.parentNode.parentNode.href;
//     window.location.href=haha;
// })
// $('#newPKpopupForm').on('submit', function(e) {
//     // отменяем действие по умолчанию (т.е. отправку формы)
//     e.preventDefault()
//   })  // потом можно выполнять любые действия
//     $.ajax({
//       type: 'POST',
//       url: '/pk',
//       data: formData
// });;