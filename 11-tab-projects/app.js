const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function(e){
    const id = e.target.dataset.id;
    if(id){
        // remove active from other buttons
        btns.forEach(function(btn){
            btn.classList.remove("active");
        })
        // add active class on current target element
        e.target.classList.add("active");
        // add active class on tab content (this code is aaded by mahi)
        // articles.forEach(function(article){
        //     // get the conetnt id
        //     const contentId = article.getAttribute('id');
        //     if(id === contentId){
        //       article.classList.add("active");
        //     }else{
        //       article.classList.remove("active");
        //     }
        // })
        // (this code is aaded by mahi)

        //hide other aticle
        articles.forEach(function(article){
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
})