// count initial
let count = 0;

// select values and button

let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

// foreach
btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++;
        }else{
            count = 0;
        }
        value.style.color = count < 0 ? "red" : (count > 0 ? "green" : "black");
        value.textContent = count;
    })
})