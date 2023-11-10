const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redSpan = document.getElementById("redValue");
const greenSpan = document.getElementById("greenValue");
const blueSpan = document.getElementById("blueValue");

const colorBox = document.getElementById("color-box");
const copy = document.getElementById("copy");
const inputType = document.getElementById("inputType");

red.addEventListener('input',updateColor);
green.addEventListener('input',updateColor);
blue.addEventListener('input',updateColor);
copy.addEventListener('click',copyRGBValue);



function updateColor(){
    const redValue = red.value;
    const greenValue = green.value;
    const blueValue = blue.value;


    const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`;

    colorBox.style.backgroundColor = rgbColor;

    redSpan.textContent = redValue;
    greenSpan.textContent = greenValue;
    blueSpan.textContent = blueValue;

    inputType.textContent = rgbColor;

}

updateColor();

function copyRGBValue(){

    const redValue = red.value;
    const greenValue = green.value;
    const blueValue = blue.value;

    const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`;

    navigator.clipboard.writeText(rgbColor)
    .then(()=>{
        alert("RGB Color Value copied to Clipboard: "+rgbColor)
    })
    .catch((error)=>{

        console.error("Failed to copy RGB Values",error)
    });

}