const wordInputEl = document.getElementById("wordInput");
const nameInputEl = document.getElementById("nameInput")
const ul = document.getElementById("words");
const button = document.getElementById("addButton");

button.addEventListener("click", () => {
  const word = wordInputEl.value;  // Capture the input value before clearing it
const name = nameInputEl.value;
  if(word.length > 2) {
playSound("audios/ping01-104055.mp3");
    console.log(word);
  wordInputEl.value = "";  // Clear the input field

  addWords(word);  // Pass the captured word to the addWords function
  
  alert(`thank you. The word ${word} has been added.`);

  } else {
alert("you have to write at least 2 characters.");
  }
if(`${word}${name}`.length = 0) {
alert("oops! No empty fields")  
}


});

function addWords(word) {
  if (word.trim() !== "") {  // Ensure the word is not empty or just spaces
    const li = document.createElement("li");
    li.textContent = word;
const removeButton = document.createElement("button");
removeButton.textContent = "delete word";
removeButton.addEventListener("click", () => {
playSound("audios/fail-234710.mp3");
ul.removeChild(li);
alert(`the word ${word} has been deleted successfully`)
})
const editButton = document.createElement("button");
editButton.textContent = "edit word";
editButton.addEventListener("click", () => {
li.contentEditable = "true";
})
li.appendChild(editButton);
li.appendChild(removeButton);
    ul.appendChild(li);
  }
}
function playSound(file) {
let audio = new Audio();
audio.src = file;
audio.play();
}