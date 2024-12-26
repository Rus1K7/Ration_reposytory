
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

console.log(countStrPK)



function useCheckbox(event){
    if (event.target.closest(".title-ingredient__checkbox").checked == true){
        nextEl = event.target.closest(".title-ingredient")
        while (nextEl.nextElementSibling.classList.contains("food-composition")) {
            nextEl.nextElementSibling.querySelector(".composition-title-field__checkbox").checked=true;
            nextEl = nextEl.nextElementSibling;
        }
    }
    else{
        nextEl = event.target.closest(".title-ingredient")
        while (nextEl.nextElementSibling.classList.contains("food-composition")) {
            nextEl.nextElementSibling.querySelector(".composition-title-field__checkbox").checked=false;
            nextEl = nextEl.nextElementSibling;
        }
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
        while (nextEl.nextElementSibling.classList.contains("food-composition")) {
            if (nextEl.nextElementSibling.querySelector(".composition-title-field__checkbox").checked==true){;
                count++
            }
            nextEl = nextEl.nextElementSibling;
            children++
        }
        if (count!=children) {
            par.querySelector('.title-ingredient__checkbox').checked=false
        }
    }
    else{
        console.log(123)
        nextEl = par
        while (nextEl.nextElementSibling.classList.contains("food-composition")) {
            if (nextEl.nextElementSibling.querySelector(".composition-title-field__checkbox").checked==true){;
                count++
            }
            nextEl = nextEl.nextElementSibling;
            children++
        }
        console.log(children)
        console.log(count)
        if (count==children) {
            par.querySelector('.title-ingredient__checkbox').checked=true;
        } 
    }
}

mainCheckbox.forEach( function ourFunction(item,index,array){
    item.addEventListener("click",useCheckbox)
});
subCheckbox.forEach( function ourFunction(item,index,array){
    item.addEventListener("click",useSubCheckbox)
});


