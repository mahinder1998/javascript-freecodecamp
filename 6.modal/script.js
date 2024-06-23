// select element
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");

// addEventListener
modalBtn.addEventListener("click", function(){
    // add class in modal 
    modal.classList.add("modal-active");
})

// addEventlistener on clsoe btn
modalClose.addEventListener("click", function(){
    modal.classList.remove("modal-active"); 
})