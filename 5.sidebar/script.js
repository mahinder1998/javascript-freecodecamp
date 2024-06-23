// select the elemeent

menuBtn = document.querySelector(".menu-toggle");
menuClose = document.querySelector(".menu-clsoe");
sidebar = document.querySelector(".sidebar");


// addEventlistener toggle menu
menuBtn.addEventListener("click", function(){
   // method -1
    // if(sidebar.classList.contains("active")){
    //     sidebar.classList.remove("active");
    // }
    // else{
    //     sidebar.classList.add("active");
    // }


    // add toggle class on sidebar
    // method-2
    sidebar.classList.toggle("active");
})

// addEventListener close menu
menuClose.addEventListener("click", function(){
    // remove the active class
    sidebar.classList.remove("active");
})