// Получаем элементы
const racentBlock = document.querySelectorAll('.racion__child-block');
const foodBlock = document.querySelectorAll('.food-composition__child-block');
const racentHiddenBlock = document.querySelectorAll('.racion__hidden-block');
const foodHiddenBlock = document.querySelectorAll('.food-composition__hidden-block');




function useArrowList(event){
    if (event.target.closest(".popup-category").nextElementSibling.hidden == false){

        event.target.closest(".popup-category").nextElementSibling.hidden = true;
        blockIngredientAll[blockIngredientAll.length-1].classList.add("popup-category__category_border-radius");

        event.target.closest(".list-popup__arrow").classList.remove("list-popup__arrow_rotate");

    } else{
        event.target.closest(".popup-category").nextElementSibling.hidden = false;
        blockIngredientAll[blockIngredientAll.length-1].classList.remove("popup-category__category_border-radius");

        event.target.closest(".list-popup__arrow").classList.add("list-popup__arrow_rotate");
    }
}
for (var index = 0; index < racentBlock.length; index++) {
    racentBlock[index].addEventListener('mouseover', () => {
        for (var indexi = 0; indexi < racentHiddenBlock.length; index++) {
            racentHiddenBlock[indexi].style.display = 'block';
        }
    });
    racentBlock[index].addEventListener('mouseout', () => {
        for (var indexi = 0; indexi < racentHiddenBlock.length; index++) {
            racentHiddenBlock[indexi].style.display = 'none';
        }
    });
}



function deleteIfNotSelected(thing) {
    if (thing.checked == 0) {
        var element = thing.closest(".block-select__subblock");
        element.remove();
    }
}

function autoFillMessage(thing) {
    var content = document.querySelectorAll(".block-select .block-select__subblock");
    console.log(content);
    if (content.length == 0) {
        thing.innerHTML = '<div class = "thereIsNothing">' + 'Ничего не выбрано' + '</div>';
    }
}

const searchInput = document.querySelector('.food-restrictions__string');
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

const searchInput2 = document.querySelector('.food-restrictions__string2');
const religions2 = document.querySelectorAll('.Ch2');

searchInput2.addEventListener('input', function() {
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