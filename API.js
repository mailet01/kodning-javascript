const contentEl = document.getElementById("container");
async function getInfoFromWikipedia() {
const data = await fetch("");
const response = await response.json();
}
const searchInput = document.getElementById("userInput")
const button = document.getElementById("fetchData");
let baseUrl = "https://sv.wikipedia.org/w/index.php?title=Special:S%C3%B6k&go=Go&search="
button.addEventListener("click", () => {
let search = searchInput.value;
searchInput.value = "";
getInfoFromWikipedia();
    fetch(`${baseUrl}${search};`)
    .then(response => response.json())
    .then((data => {
console.log("data", data);
}))
})