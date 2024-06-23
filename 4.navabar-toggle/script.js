// classList - shows/gets all classess
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggle class


// select the menu
const menuBtn = document.querySelector(".show-menu");
const menuWrap = document.querySelector(".menu-wrap");

// addEventlistener
menuBtn.addEventListener("click", ()=>{
    menuWrap.classList.toggle("active");
})

// document addEventListener click
document.addEventListener("click", (e)=>{
    console.log(e.target)
    if(e.target.getAttribute("class") != "show-menu" && !e.target.closest(".show-menu") && e.target.getAttribute("class") != "menu-wrap" && !e.target.closest(".menu-wrap")){
        menuWrap.classList.remove("active");
        
    }
})