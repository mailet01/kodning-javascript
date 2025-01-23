// Get references to the elements
const fruitInputEl = document.getElementById("fruitInput");
// const nameInputEl = document.getElementById("nameInput");
const ul = document.getElementById("fruits");
const button = document.getElementById("addButton");

// Add event listener to the button
button.addEventListener("click", () => {

    const fruit = fruitInputEl.value;
// const name = nameInputEl.value;

    if (fruit.length > 0) { // Check if the input is not empty
        addFruit(fruit); // Call the function to add the fruit
        
        alert(`thank you ${name}. The fruit ${fruit} has been added`);
        fruitInputEl.value = ""; // Clear the input field
    } else {
        fruitInputEl.setAttribute("placeholder", "you have to write atleast two characters")
    }
});

// Function to add a fruit to the list
function addFruit(fruit) {
    const li = document.createElement("li"); // Create a new list item
    li.textContent = fruit; // Set the text content of the list item

    // Create a delete button for the list item
    const removeButton = document.createElement("button");
    removeButton.textContent = "Delete fruit";
    removeButton.addEventListener("click", () => {
        alert(`the fruit ${fruit} has been deleted}`);
        ul.removeChild(li); // Remove the list item when the delete button is clicked
    });
    const editButton = document.createElement("button");
    editButton.textContent = "edit fruit";
    editButton.addEventListener("click", () => {
        li.contentEditable = "true";

    })
    li.appendChild(editButton);
    li.appendChild(removeButton); // Add the delete button to the list item
    ul.appendChild(li); // Append the list item to the unordered list
playSound("/audios/ping01-104055.mp3");
}
function playSound(file) {
let audio = new Audio();
audio.src = file;
audio.play();
}