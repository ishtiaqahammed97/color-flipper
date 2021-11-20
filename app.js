const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// selectors
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// get random number
const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
};

const colorChange = () => {
    // get random number between 0 and 3
    // const randomNumber = getRandomNumber();
    const randomNumber = getRandomNumber();
    console.log(randomNumber);


    // set background color
    document.body.style.backgroundColor = colors[randomNumber];
    // change the color code also when the color is changed
    color.textContent = colors[randomNumber];
};

// even listener 
btn.addEventListener("click", colorChange);