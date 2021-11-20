const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// selectors
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// change color as well as color text
const colorChange = () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    };
    // set background color and color text
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
};

// get random number
const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length)
}

// event listener
btn.addEventListener("click", colorChange);