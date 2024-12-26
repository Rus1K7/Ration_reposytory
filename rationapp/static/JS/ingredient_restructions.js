const g = document.querySelectorAll(".ingredients-block__main-subblock");
const arrowList = document.querySelectorAll(".ingredients-block__img")
const checkboxNew = document.querySelectorAll(".ingredients-block__checkbox")
const checkboxSubMainBlock = document.querySelectorAll(".subblock-category")
const checkboxSubMainBlock2 = document.querySelectorAll(".subblock-category2")
const checkboxChoosen = document.querySelectorAll(".options-block__checkbox__checkbox")
const chechboxSubCheckbox = document.querySelectorAll(".subblock-category__checkbox") 
const chechboxSubCheckbox2 = document.querySelectorAll(".subblock-category__checkbox2") 
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

/*
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
*/

/* --------------------------------------------------------------------------------------------------------- */

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

/* --------------------------------------------------------------------------------------------------------- */




function useSelectArrow(event){
    if (event.target.closest(".ingredients-block__main-subblock").nextElementSibling.hidden == false){

        event.target.closest(".ingredients-block__main-subblock").nextElementSibling.hidden = true;

        event.target.closest(".ingredients-block__img").classList.remove("ingredients-block__img_rotate");

    } else{
        event.target.closest(".ingredients-block__main-subblock").nextElementSibling.hidden = false;
        

        event.target.closest(".ingredients-block__img").classList.add("ingredients-block__img_rotate");
    }
};

// arrowList.forEach( function ourFunction(item,index,array){
//     item.addEventListener("click",useArrowList)
// });


// function useSelectSubCheckbox(event){
    
// }
function useSubCheckbox(event){

        let par = event.target.closest(".subblock-category").previousElementSibling.querySelector('.ingredients-block__checkbox').previousElementSibling.querySelector('.ingredients-block__checkbox2')
        let count = 0
        if (par.checked==true){
            for (let index = 0; index < event.target.closest(".subblock-category").children.length; index++) {
                if (event.target.closest(".subblock-category").children[index].querySelector('.subblock-category__checkbox').checked==true && event.target.closest(".subblock-category").children[index].querySelector('.subblock-category__checkbox2').checked==true) {
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
                    if (eventSiblings[index].querySelector(".subblock-category__checkbox").checked == true && eventSiblings[index].querySelector(".subblock-category__checkbox2").checked == true){
                        let newElem = eventSiblings[index].closest(".subblock-category__subcategory-block").cloneNode(true);
                        newElem.querySelector(".subblock-category__checkbox").checked=true;
                        newElem.querySelector(".subblock-category__checkbox").disabled=true;
                        newElem.querySelector(".subblock-category__checkbox2").checked=true;
                        newElem.querySelector(".subblock-category__checkbox2").disabled=true;
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
            // else{
            //     console.log(123)
            //     newElemDelText = vibranieCheckboxMainBlock.querySelectorAll(".subblock-category__subcategory-block")
            //     masSubElements = event.target.closest(".subblock-category").children
            //     for (let index = 0; index < newElemDelText.length; index++) {
            //         if (masSubElements.includes(newElemDelText[index])) {
            //             newElemDelText[index].closest(".subblock-category__subcategory-block").remove();
            //         }    
            //     }
            // }
        } 
        else{
            for (let index = 0; index < event.target.closest(".subblock-category").children.length; index++) {
                if (event.target.closest(".subblock-category").children[index].querySelector('.subblock-category__checkbox').checked==true && event.target.closest(".subblock-category").children[index].querySelector('.subblock-category__checkbox2').checked==true) {
                    count++;
                }
            if (count==event.target.closest(".subblock-category").children.length) {
                par.checked=true
            }}
            if (event.target.checked == true) {
                let newElem = event.target.closest(".subblock-category__subcategory-block").cloneNode(true);
                vibranieCheckboxMainBlock.insertBefore(newElem, document.querySelectorAll(".selected-ingredients__line")[document.querySelectorAll(".selected-ingredients__line").length-1]);
                newElem.querySelector('.subblock-category__checkbox').disabled=true;   
                newElem.querySelector('.subblock-category__checkbox2').disabled=true;
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


        let par2 = event.target.closest(".subblock-category2").previousElementSibling.querySelector('.ingredients-block__checkbox2')
        let count2 = 0
        if (par2.checked==true){
            for (let index = 0; index < event.target.closest(".subblock-category").children.length; index++) {
                if (event.target.closest(".subblock-category2").children[index].querySelector('.subblock-category__checkbox2').checked==true) {
                    count++;
                }
            if (count!=event.target.closest(".subblock-category2").children.length) {
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
                    if (eventSiblings[index].querySelector(".subblock-category__checkbox2").checked == true){
                        let newElem = eventSiblings[index].closest(".subblock-category__subcategory-block").cloneNode(true);
                        newElem.querySelector(".subblock-category__checkbox2").checked=true;
                        newElem.querySelector(".subblock-category__checkbox2").disabled=true;
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
            // else{
            //     console.log(123)
            //     newElemDelText = vibranieCheckboxMainBlock.querySelectorAll(".subblock-category__subcategory-block")
            //     masSubElements = event.target.closest(".subblock-category").children
            //     for (let index = 0; index < newElemDelText.length; index++) {
            //         if (masSubElements.includes(newElemDelText[index])) {
            //             newElemDelText[index].closest(".subblock-category__subcategory-block").remove();
            //         }    
            //     }
            // }
        } 
        else{
            for (let index = 0; index < event.target.closest(".subblock-category").children.length; index++) {
                if (event.target.closest(".subblock-category").children[index].querySelector('.subblock-category__checkbox2').checked==true) {
                    count++;
                }
            if (count==event.target.closest(".subblock-category").children.length) {
                par.checked=true
            }}
            if (event.target.checked == true) {
                let newElem = event.target.closest(".subblock-category__subcategory-block").cloneNode(true);
                vibranieCheckboxMainBlock.insertBefore(newElem, document.querySelectorAll(".selected-ingredients__line")[document.querySelectorAll(".selected-ingredients__line").length-1]);
                newElem.querySelector('.subblock-category__checkbox2').disabled=true;   
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


arrowList.forEach( function ourFunction(item,index,array){
    item.addEventListener("click",useArrowList)
});
chechboxSubCheckbox.forEach( function ourFunction(item,index,array){
    item.addEventListener("click",useSubCheckbox)
});
chechboxSubCheckbox2.forEach( function ourFunction(item,index,array){
    item.addEventListener("click",useSubCheckbox)
});

checkboxNew.forEach( function ourFunction(item, index, array){
    item.addEventListener("click",useCheckbox)
});

// const fullHeight = document.body.scrollHeight;
// console.log("Высота всей страницы:", fullHeight, "пикселей");






// function chooseArrowMain(event){
//     if (arrowListMainImg.classList.contains('list__img_arrow-rotate')){
//         arrowListMainImg.classList.remove('list__img_arrow-rotate');
//         for (let index = 0; index < bigListBlock.children.length; index++){
//             if (index > 4 && index < (bigListBlock.children.length - 2)){
//             bigListBlock.children[index].hidden = true;
//             }
//         }
//     }
//     else{
//         arrowListMainImg.classList.add('list__img_arrow-rotate');
//         for (let index = 0; index < bigListBlock.children.length; index++){
//             if (index > 4 && index < (bigListBlock.children.length - 2)){
//             bigListBlock.children[index].hidden = false;
//             }
//         }
//     }
// }


// arrowListMain.addEventListener("click",chooseArrowMain)

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

/*
const mainCheckbox = document.querySelector(".checkboxAS");
const subCheckboxes = document.querySelectorAll(".checkboxAS");

const inputs = document.querySelectorAll('input[type="checkbox" ]'); 
const toggle = () => inputs.forEach(item => item.checked = !item.checked);

                <table class="example1" id="example" style="width:40%;" align='center'>
                    <tr>
                      <td>
                        <input class="checkboxAS " type="checkbox" id="chk1" name="chk" value="1">
                        <label for="chk1">&nbsp; 1</label>
                      </td>
                      <td>
                        <input class="checkboxBS " type="checkbox" id="chk2" name="chk" value="2">
                        <label for="chk2">&nbsp; 2</label>
                      </td>
                      <td>
                        <input class="checkboxCS " type="checkbox" id="chk3" name="chk" value="3">
                        <label for="chk3">&nbsp; 3</label>
                      </td>
                    </tr>
                  </table>
                  <button onclick="toggle()">Changes radio button onclick</button>
*/


// const checkboxes = document.querySelectorAll('.ingredient-checkbox');
// checkboxes.forEach(checkbox => {
//     checkbox.addEventListener('change', function() {
//         if (this.checked) {
//             console.log(`${this.value} добавлен в рацион`);
//         } else {
//             console.log(`${this.value} удалён из рациона`);
//         }
//     });
// });