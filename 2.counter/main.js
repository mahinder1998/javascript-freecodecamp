let countValue = document.querySelector("[data-counterValue]");
const btnDecrease = document.querySelector("[data-decrease]");
const btnReset = document.querySelector("[data-reset]");
const btnIncrease = document.querySelector("[data-increase]");


// function decrease
function decrease(){
    let value = Number(countValue.innerText);
    let updateValue = -- value;
    countValue.innerText = updateValue;
    if(countValue.innerText < 0){
        countValue.style.color = "red";
    }else if(countValue.innerText > 0){
        countValue.style.color = "green";
    }else{
        countValue.style.color = "black";
    }
}

// function increase
function increase(){
    let value = Number(countValue.innerText);
    let updateValue = ++ value;
    countValue.innerText = updateValue;
    if(countValue.innerText < 0){
        countValue.style.color = "red";
    }else if(countValue.innerText > 0){
        countValue.style.color = "green";
    }else{
        countValue.style.color = "black";
    }
    
}

//reset value
function resetValue(){
    let value = Number(countValue.innerText);
    let updateValue = 0;
    countValue.innerText = updateValue;
    if(countValue.innerText == 0){
        countValue.style.color = "black"; 
    }
}


btnDecrease.addEventListener("click", decrease);
btnIncrease.addEventListener("click", increase);
btnReset.addEventListener("click", resetValue);