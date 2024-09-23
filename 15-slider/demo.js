const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

// Slider

slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`
})
let counter = 0;

nextBtn.addEventListener("click", function(){
    counter++;
    carousel();
})
prevBtn.addEventListener("click", function(){
    counter--
    carousel();
})
function carousel(){
    // if(counter == slides.length){
    //     counter = 0;
    // }
    // if(counter < 0){
    //     counter = slides.length - 1;
    // }
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter*100}%)`
    })

    // hide next button
    if(counter < slides.length - 1){
        nextBtn.style.display = "block";
    }else{
        nextBtn.style.display = 'none';
    }
    if(counter > 0 ){
        prevBtn.style.display = 'block';
    }else{
        prevBtn.style.display = 'none';
    }

}

prevBtn.style.display = 'none';

