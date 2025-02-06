const drinkOne = document.getElementById("cola");
const drinkTwo = document.getElementById("fanta");
const drinkThree = document.getElementById("sider");
const nameInputEl = document.getElementById("name");
const sendButton = document.getElementById("send");
drinkOne.addEventListener("click", () => {
    playSound("audios/ping01-104055.mp3");
    drinkTwo.checked = false;
    drinkThree.checked = false;
    nameInputEl.disabled = false;
    nameInputEl.required = true;
})
drinkTwo.addEventListener("click", () => {
    playSound("audios/ping01-104055.mp3");
    drinkOne.checked = false;
    drinkThree.checked = false;
    nameInputEl.disabled = false;
    nameInputEl.required = true
})
drinkThree.addEventListener("click", () => {
    playSound("audios/ping01-104055.mp3");
    drinkOne.checked = false;
    drinkTwo.checked = false;
    nameInputEl.disabled = false;
    nameInputEl.required = true;
})




sendButton.addEventListener("click", () => {
    playSound("audios/ping01-104055.mp3");
    const drinkA = drinkOne.value;
    const drinkB = drinkTwo.value;
    const drinkC = drinkThree.value;
    const name = nameInputEl.value;
    
    if (drinkOne.checked) {
        
        alert(`thank you ${name}. You have Chosen ${drinkA}.`);
        
    }
    if (drinkTwo.checked) {
        
        alert(`Thank you ${name}. You have chosen ${drinkB}`);
        
    }
    if (drinkThree.checked) {
        alert(`Thank you ${name}. You have chosen ${drinkC}.`);
        
    }
})
function playSound(file) {
let audio = new Audio();
audio.src = file;
audio.play();
}