
const selectAllAnimals = document.getElementById("allChecked");
const animal1 = document.getElementById("hund");
const animal2 = document.getElementById("katt");
const animal3 = document.getElementById("tiger");
const nameInputEl = document.getElementById("nameInput");
const button = document.getElementById("sendButton");
selectAllAnimals.addEventListener("click", () => {
playSound("audios/ping01-104055.mp3");
animal1.checked = true;
animal2.checked = true;
animal3.checked = true;
nameInputEl.required = true;
})
animal1.addEventListener("click", () => {
    playSound("audios/ping01-104055.mp3");
animal2.checked = false;
animal3.checked = false;
nameInputEl.required = true;
})
animal2.addEventListener("click", () => {
    playSound("audios/ping01-104055.mp3");
animal1.checked = false;
animal3.checked = false;
nameInputEl.required = true;
})
animal3.addEventListener("click", () => {
    playSound("audios/ping01-104055.mp3");
animal1.checked = false;
animal2.checked = false;
nameInputEl.required = true;
})
button.addEventListener("click", () => {
const animalA = animal1.value;
const animalB = animal2.value;
const animalC = animal3.value;
const name = nameInputEl.value;
if(selectAllAnimals.checked) {

alert(`Thank you ${name}. You have chosen ${animalA}, ${animalB} och ${animalC}.`);

}
if(animal1.checked) {
alert(`Thank you ${name}. You have chosen ${animalA}.`);
}
if(animal2.checked) {
alert(`Thank you ${name}. You have chosen ${animalB}.`);
}
if(animal3.checked) {
alert(`Thank you ${name}. You have chosen ${animalC}.`);
}
})
function playSound(file) {
let audio = new Audio();
audio.src = file;
audio.play();
}