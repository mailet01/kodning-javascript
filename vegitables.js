const vegitableOne = document.getElementById("morot");
const vegitableTwo = document.getElementById("gurka");
const vegitableThree = document.getElementById("paprika");
const nameInput = document.getElementById("name");
const button = document.getElementById("addButton");
vegitableOne.addEventListener("click", () => {
    nameInput.disabled = false;
nameInput.required = true;
    button.disabled = false;

})
vegitableTwo.addEventListener("click", () => {
nameInput.disabled = false;
nameInput.required = true;
    button.disabled = false;
    vegitableOne.checked = false;
    vegitableThree.checked = false

})
vegitableThree.addEventListener("click", () => {
    nameInput.disabled = false;
    nameInput.required = true;
    button.disabled = false;
    vegitableOne.checked = false;
    vegitableTwo.checked = false;
})
button.addEventListener("click", () => {
    const vegitableA = vegitableOne.value;
    const vegitableB = vegitableTwo.value;
    const vegitableC = vegitableThree.value;
const name = nameInput.value;
    if (vegitableOne.checked) {
        alert(`tack ${name}. Du har valt grönsaken ${vegitableA}`);
    }
    if (vegitableTwo.checked) {
        alert(`tack ${name}. Du har valt grönsaken ${vegitableB}`);
    }
    if (vegitableThree.checked) {
        alert(`tack ${name}. Du har valt grönsaken ${vegitableC}`);
    }
})