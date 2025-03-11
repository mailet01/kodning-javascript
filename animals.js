const animal1 = document.getElementById("hund");
const animal2 = document.getElementById("katt");
const animal3 = document.getElementById("tiger");
const button = document.getElementById("sendButton");
animal1.addEventListener("click", () => {
animal2.checked = false;
animal3.checked = false;    
})
animal2.addEventListener("click", () => {
animal1.checked = false;
animal3.checked = false;
})
animal3.addEventListener("click", () => {
animal1.checked = false;
animal2.checked = false;
})
button.addEventListener("click", () => {
const animalA = animal1.value;
const animalB = animal2.value;
const animalC = animal3.value;
if(animal1.checked) {
alert(`Thank you, you have chosen ${animalA}.`);
}
if(animal2.checked) {
alert(`Thank you, you have chosen ${animalB}.`);
}
if(animal3.checked) {
alert(`Thank you, you have chosen ${animalC}.`);
}
})