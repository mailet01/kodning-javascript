const appInfo = document.getElementById("appInfo");

const radioButton = document.getElementById("show");
const button = document.getElementById("getButton");
radioButton.addEventListener("click", () => {
    button.disabled = false;
})
button.addEventListener("click", () => {
    getInfoFromArray();
    playSound("audios/ping01-104055.mp3");
    appInfo.textContent = "nu visas de olika ämnena."
    button.disabled = true;

})
function getInfoFromArray() {
    const hideButton = document.createElement("button");
    hideButton.textContent = "hide";
    hideButton.addEventListener("click", () => {
        appInfo.textContent = "tryck på knappen get info igen för att visa alla ämnena"
        playSound("audios/fail-234710.mp3");
        contentEl.innerHTML = "";
        button.disabled = true;
        radioButton.checked = false;
    })
    const people = [{ name: "Hugo", age: "23", },
    { name: "Sara", age: "34", },
    { name: "Johanna", age: "40", }];
    for (let i = 0; i < people.length; i++) {
        const element = people[i];
        console.log(element)
    }

    function mapToDom(people) {
        return `

            <p>${people.name}</p>
        <p>${people.age}</p>

        `
    }
    const container = people.map(mapToDom)
    console.log(container)
    const contentEl = document.getElementById("content");
    contentEl.innerHTML = container.join();
    contentEl.appendChild(hideButton);
    const hideNumbers = document.createElement("button");
    hideNumbers.textContent = "hide";
    hideNumbers.addEventListener("click", () => {
        playSound("audios/fail-234710.mp3");
        appInfo.textContent = "tryck på knappen get info igen för att visa allt innehåll.";
        HTML.innerHTML = "";
        button.disabled = false;
        radioButton.checked = false;
    })
    const numbers = [1, 2, 3, 4, 5, 6];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        console.log(element);
    }
    function doubleIt(val) {
        return val * 2;

    }
    const maped = numbers.map(doubleIt)
    console.log(maped);
    const HTML = document.getElementById("numberContent");
    HTML.innerHTML = maped.join();
    HTML.appendChild(hideNumbers);
    const hideCars = document.createElement("button");
    hideCars.textContent = "hide";
    hideCars.addEventListener("click", () => {
        playSound("audios/fail-234710.mp3");
        appInfo.textContent = "tryck på knappen get info igen för att visa allt innehåll.";
        HTMLA.innerHTML = "";
        button.disabled = false;
        radioButton.checked = false;
    })
    const cars = [{ brand: "Ford", color: "blue", },
    { brand: "Fiat", color: "black", }];
    for (let i = 0; i < cars.length; i++) {
        const element = cars[i];
        console.log(element);
    }
    function getMap(cars) {
        return `
    <p>${cars.brand}</p>
    <p>${cars.color}</p>
    `
    }
    const mapedA = cars.map(getMap);
    console.log(mapedA);
    const HTMLA = document.getElementById("carContent");
    HTMLA.innerHTML = mapedA.join();
    HTMLA.appendChild(hideCars);

}
function playSound(file) {
    let audio = new Audio();
    audio.src = file;
    audio.play();
}