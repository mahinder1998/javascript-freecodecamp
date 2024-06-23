// select the item
const faqItem = document.querySelectorAll(".faq-item");
// addeventlistener
faqItem.forEach(function(item){
    item.addEventListener('click', (e)=>{
       const parentEl = e.target.parentElement;
       parentEl.classList.toggle("active");
        faqItem.forEach(function(item){
            if(item !== parentEl){
                item.classList.remove("active");
            }
        })
    })
})