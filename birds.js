const selectAllBirds = document.getElementById("allChecked");
const bird1 = document.getElementById("skata");
const bird2 = document.getElementById("talgoxe");
const bird3 = document.getElementById("koltrast");
const nameInputEl = document.getElementById("nameInput");
const button = document.getElementById("sendButton");
selectAllBirds.addEventListener("click", () => {
    playSound("audios/ping01-104055.mp3");
    bird1.checked = true;
    bird2.checked = true;
    bird3.checked = true;
    nameInputEl.requiered = true;
})
bird1.addEventListener("click", () => {
    playSound("audios/ping01-104055.mp3");
    bird2.checked = false;
    bird3.checked = false;
    nameInputEl.requiered = true;
})
bird2.addEventListener("click", () => {
    playSound("audios/ping01-104055.mp3");
    bird1.checked = false;
    bird3.checked = false;
    nameInputEl.requiered = true;
})
bird3.addEventListener("click", () => {
    playSound("audios/ping01-104055.mp3");
    bird1.checked = false;
    bird2.checked = false;
    nameInputEl.requiered = true;
})
button.addEventListener("click", () => {
    const birdA = bird1.value;
    const birdB = bird2.value;
    const birdC = bird3.value;
    const name = nameInputEl.value;
    if (selectAllBirds.checked) {
        alert(`Thank you ${name}. You have chosen ${birdA}, ${birdB} och ${birdC}.`);
    }
    if (bird1.checked) {
        alert(`thank you ${name}. You have chosen ${birdA}.`);
    }
    if (bird2.checked) {
        alert(`Thank you ${name}. You have chosen ${birdB}.`);
    }
    if (bird3.checked) {
        alert(`Thank you ${name}. You have chosen ${birdC}.`);
    }
})
function playSound(file) {
    let audio = new Audio();
    audio.src = file;
    audio.play();
}