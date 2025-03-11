const bird1 = document.getElementById("skata");
const bird2 = document.getElementById("talgoxe");
const bird3 = document.getElementById("koltrast");
const nameInputEl = document.getElementById("nameInput");
const button = document.getElementById("sendButton");
bird1.addEventListener("click", () => {
bird2.checked = false;
bird3.checked = false;
nameInputEl.requiered = true;
})
bird2.addEventListener("click", () => {
bird1.checked = false;
bird3.checked = false;
nameInputEl.requiered = true;
})
bird3.addEventListener("click", () => {
bird1.checked = false;
bird2.checked = false;
nameInputEl.requiered = true;
})
button.addEventListener("click", () => {
const birdA = bird1.value;
const birdB = bird2.value;
const birdC = bird3.value;
const name = nameInputEl.value;
if(bird1.checked) {
alert(`thank you ${name}. You have chosen ${birdA}.`);
}
if(bird2.checked) {
alert(`Thank you ${name}. You have chosen ${birdB}.`);
}
if(bird3.checked) {
alert(`Thank you ${name}. You have chosen ${birdC}.`);
}
})