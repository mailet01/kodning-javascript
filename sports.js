const radioOne = document.getElementById("goalball")
const radioTwo = document.getElementById("five-aside");
const radioThree = document.getElementById("showdown");
const nameInput = document.getElementById("name");
const button = document.getElementById("sendButton");
radioOne.addEventListener("click", () => {
nameInput.disabled = false;
nameInput.required = true;
    button.disabled = false;

})
radioTwo.addEventListener("click", () => {
nameInput.disabled = false;
nameInput.required = true;
    button.disabled = false;
    radioOne.checked = false;
    radioThree.checked = false;
})
button.disabled = false;
radioThree.addEventListener("click", () => {
    nameInput.disabled = false;
nameInput.required = true;
    radioOne.checked = false;
    radioTwo.checked = false;
})
button.addEventListener("click", () => {
    const sportOne = radioOne.value;
    const sportTwo = radioTwo.value;
    const sportThree = radioThree.value;
const name = nameInput.value;
    if (radioOne.checked) {
        alert(` Thank you ${name}. You have chosen ${sportOne}`);
    }
    if (radioTwo.checked) {
        alert(` Thank you ${name}. You have chosen ${sportTwo}`);
    }
    if (radioThree.checked) {
        alert(` Thank you ${name}. You have chosen ${sportThree}`);
    }
})
