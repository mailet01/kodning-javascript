const button = document.querySelector("#button");
const container = document.querySelector("#container");
button.addEventListener("click", () => {
    fetch("concert.json")
        .then((response) => response.json())
        .then((data) => {
            console.log("data", data);
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    const element = data[key];
render(key, element);
                }
            }

        })
})
function render(property, value) {
    let h4 = document.createElement("h4");
    h4.textContent = property;
    let p = document.createElement("p");
    if (Array.isArray(value)) {
        let ul = document.createElement("ul");
        ul.innerHTML = value.map(val => `<li>${val}</li>`).join("");
        p.appendChild(ul);
    } else {
        p.textContent = value;
    }
    container.appendChild(h4);
    container.appendChild(p);
}