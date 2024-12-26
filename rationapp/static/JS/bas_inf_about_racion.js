const button = document.querySelector(".subblock-button__button");
const link = document.querySelector(".subblock-button__link")
const form = document.querySelector(".main-form")
const input = document.querySelectorAll(".first-block__text")

input.forEach((block,number) => {
  block.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) {
       event.preventDefault();
       event.stopPropagation()
    }
  });
});

const select = document.querySelector(".block-parametr__list racion-days")

function useSelect(event){
  // if event.target
}

select.addEventListener("click",useSelect)