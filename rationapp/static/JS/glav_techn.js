
// Получаем элементы
const racentBlock = document.querySelectorAll('.racion__child-block');
const foodBlock = document.querySelectorAll('.food-composition__child-block');
const racentHiddenBlock = document.querySelectorAll('.racion__hidden-block');
const foodHiddenBlock = document.querySelectorAll('.food-composition__hidden-block');
const blockChildIndex = document.querySelectorAll('.block-child');
const todayDate = document.querySelectorAll('.block-hidden__date');
const racionCount = document.querySelectorAll(".racion__child-block");
const foodCompositionCount = document.querySelectorAll(".food-composition__child-block");


// установление текущей даты для рациона и пищевой композиции
// const currentDate = new Date();
// const todayDay = currentDate.getDate();
// const todayMonth = currentDate.getMonth() + 1;
// const todayYear = currentDate.getFullYear();
// const formattedDate = `${todayDay}-${todayMonth}-${todayYear}`;

// todayDate.forEach((block, index) => {
//     block.textContent = formattedDate;
// })

// Индексация для грамотного наложение скрытого описания для рациона и пищевой композиции
// for (var index = 0; index < blockChildIndex.length; index++){
//     blockChildIndex[index].style['z-index'] = blockChildIndex.length - index;
// }

// // Название рациона и пищевой композиции
// for (var index = 0; index < racionCount.length; index++){
//     racionCount[index].firstElementChild.textContent = `Рацион ${index+1}`
// }
// for (var index = 0; index < racionCount.length; index++){
//     foodCompositionCount[index].firstElementChild.textContent = `ПК ${index+1}`
// }



// Появление скрытого описания рациона
racentBlock.forEach((block, index) => {
    block.addEventListener('mouseover', () => {
      racentHiddenBlock[index].style.display = 'block';
    });
    
    block.addEventListener('mouseout', () => {
      racentHiddenBlock[index].style.display = 'none';
    });
  });

//   Появление скрытого описания пищевой композиции
foodBlock.forEach((block, index) => {
    block.addEventListener('mouseover', () => {
        foodHiddenBlock[index].style.display = 'block';
    });
    
    block.addEventListener('mouseout', () => {
        foodHiddenBlock[index].style.display = 'none';
    });
  });

