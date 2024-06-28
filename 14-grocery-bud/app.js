// ****** SELECT ITEMS ******
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");


// edit option
let editElement;
let editFlag = false;
let editID ="";

// ***** EVENT LISTENERS *****
form.addEventListener("submit", addItem);

// clear items
clearBtn.addEventListener("click", clearItems);

// show items
//window.addEventListener("DOMContentLoaded", setupItems);


// ***** FUNCTIONS *******
function addItem(e){
    e.preventDefault();
    const value = grocery.value;

    // add unique id 
    // not this is cheat, becuase this is test project
    const id = new Date().getTime().toString();
    
    // Note:: this is long
    // if(value !== '' && editFlag === false){
    //     console.log("add item to the list")
    // }
    // else if(value !== '' && editFlag === true){
    //     console.log("editing..")
    // }
    // else{
    //     console.log("empty value")
    // }

    // important concept::
    /** Javscript empty stringreturn falsy value
     */

    // Note:: This is short code work same as above code..

    if(value && !editFlag){
        // add item in the list

        createListItem(id, value);
        // display alert
        displayAlert("item added to the list", "success");
        
        // show hidden list
        container.classList.add("show-container");

        // add to local storage
        addToLocalStorage(id, value);

        // set back to default
        setBackToDefault();

    
    }
    else if(value && editFlag){
        editElement.innerHTML = value;
        // display alert message
        displayAlert("value changes", "success");

        // Edit local storage
        editLocalSorage(editID, value);

        // setBacktoDefault
        setBackToDefault();
    }
    else{

        /**
         * Note:: this alert shown many times 
         * item add
         * item remove
         * item clear , etc..
         * so i will create a function for it and i will reuse the same function
         */
        // alert.textContent = "item added";
        // alert.classList.add("alert-danger")
        
        displayAlert("Item added in list", "danger");
    }

}


// display alert
function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // remove alert
    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`)
    },1000)
}


// clear items
function clearItems(){
    const items = document.querySelectorAll(".grocery-item");

    if(items.length>0){
        items.forEach(function(item){
            list.removeChild(item);
        })
    }
    // remove  the class from container
    container.classList.remove("show-container");

    // display alert message
    displayAlert("empty list", "danger");

    // set back to default
    setBackToDefault();

    //
    localStorage.removeItem("list")


}  


// deleteItem
function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;

    // get the id
    const id = element.dataset.id;

    // remove element form list
    list.removeChild(element);
    
    const items = document.querySelectorAll(".grocery-item");
    if(items.length <= 0){
        // remove the container
        container.classList.remove("show-container");
    }

    // show alert message
    displayAlert("item removed", "danger");

    // set back to default
    setBackToDefault();

    //remove from local storage
    removeFromLocalStorage(id);

}
// editItem
function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;

    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;

    // set form value
    grocery.value = editElement.innerHTML;

    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "Edit";

}


// set back to default
/***
 * Note:: es function ka use islye kiya gaya hai becuase:: jab bhe user input me item add karta hai
 * to jo value hai vo input me show hoti hai
 * and isko function me isliye banaya gya hai taaki isa reause kar sake.
 */

function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = "submit"
}

// ***** LOCAL STORAGE ********

function addToLocalStorage(id, value){

    /**
     * Note: if key and value are the same(id:id), only use (id);
     * this short hand property in ES6(Feature)
     */

    // const grocery = {id:id, value:value};
    const grocery = {id,value};

    let items = getLocalStorage();
        /**
         * Note:: yahn pr check kargea ki local storage me list name hai ke nahi
         * yadi nahi hua to empty array [] aa jayega
         *   -- uske baad array item me grocery object ko push kar dega
         *   -- then uske baad local storage me set kar dega
         * yadi hua to vo existing list le aayega
         * 
         * --
         * 
         */

    items.push(grocery);
    // setitem in localstorage
    localStorage.setItem("list", JSON.stringify(items));


}



function removeFromLocalStorage(id){
    
    /**
     * get item from localStorage
     * 
     */
    let items = getLocalStorage();

    /**
     * yahn filter karange ki item ki id similer nahi hai to item ko return kar denge
     */
    items = items.filter(function (item){
        if(item.id !== id){
            return item;
        }
    })
    // setitem in localstorage
    localStorage.setItem("list", JSON.stringify(items));

}

function editLocalSorage(id, value){
    let items = getLocalStorage();
    items.forEach(function(item){
        if(item.id === id){
            item.value = value
        }

        return item;
    })
    localStorage.setItem("list", JSON.stringify(items));
};


// localstorage
function getLocalStorage(){
    return localStorage.getItem("list")
    ?JSON.parse(localStorage.getItem("list"))
    :[];
}


/**
 * This is for reference
 */

// localStorage API
// setItem
// getItem
// removeItem
// save as strings

// // set item in local storage
// localStorage.setItem("orange", JSON.stringify(["item", "item2", "item 3"]));
// // get item in local storage
// const orangs = JSON.parse(localStorage.getItem("orange"));
// console.log(orangs, "orangs");
// // remove item from local storage
// let aaa = localStorage.removeItem("orange");






// ***** SETUP ITEMS ********

function setupItem(){
    let items = getLocalStorage();
    if(items.length > 0){

    }
}


// 
function createListItem(id, value){
    /** firt create the html elemnt */
    const element = document.createElement("article");
    // add class
    element.classList.add("grocery-item");
    // add id
    const attr = document.createAttribute("data-id");
    attr.value = id;

    // add attribute over element
    element.setAttributeNode(attr);

    // add innerHTML inside created element
    element.innerHTML = `
        <p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;

    // Important thing::
        /**
         * delete buttn and edit button ka yahn pr he access milega 
         * es function se outer me vo null show hoga 
         * lekin yahn pr document.querySelector nahi element.querySelector ka use karnage...
         */

        const deleteBtn = element.querySelector(".delete-btn");
        const editBtn = element.querySelector(".edit-btn");

        deleteBtn.addEventListener("click", deleteItem);
        editBtn.addEventListener("click", editItem);


        // append child
        list.appendChild(element);
}
