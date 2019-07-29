var btnElem = document.querySelector(".greetButton")
var nameInput = document.querySelector(".inputName")
var msgElem = document.querySelector(".msg")
var counterElem = document.querySelector(".counter")
var languageElem = document.querySelector(".language")
var resetBtnElem = document.querySelector(".resetBtn")

if(localStorage['name']){
    var nameStore = JSON.parse(localStorage['name'])
}
else{
    nameStore = {}
}
var instance = greeting(nameStore);

counterElem.innerHTML = instance.counter();
function greet() {
    var checkedBtnElem = document.querySelector("input[name='myLanguage']:checked")
    if (checkedBtnElem) {
        var checkedBtn = checkedBtnElem.value;
    }

    var greetMessage = instance.language(nameInput.value, checkedBtn)
    msgElem.innerHTML = greetMessage;
    counterElem.innerHTML = instance.counter();
    localStorage['name'] = JSON.stringify(instance.getName())
}

function reset() {
    location.reload()
localStorage.clear(); 
counterElem.innerHTML = 0;
}

btnElem.addEventListener("click", greet)
resetBtnElem.addEventListener("click", reset)

