
const mainButton = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector(".currentColor");

function randomColorGenerator(){
    const red = Math.floor(Math.random() * 256 );
    const green = Math.floor(Math.random() * 256 );
    const blue = Math.floor(Math.random() * 256 );
    const alpha = Math.random().toPrecision(1); // for opacity
    // const randomColor = `rgba(${red},${green},${blue})`;
    const randomColor = `rgba(${red},${green},${blue},${alpha})`;
    return randomColor;

}

// simple color
// mainButton.addEventListener("click", ()=>{
//     const randomColor = randomColorGenerator();
//     body.style.backgroundColor = randomColor;

//     currentColor.textContent = randomColor;
// })


// using linear-gradient for background Coloring
mainButton.addEventListener("click", ()=>{
    const randomColor1 = randomColorGenerator();
    const randomColor2 = randomColorGenerator();
    const color = `linear-gradient(97deg, ${randomColor1},${randomColor2})`;

    body.style.backgroundImage = color;

    currentColor.textContent = color;
})


