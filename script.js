// Button Setup 

const btnPrompt = () => prompt("Enter number of squares per side (max. 100): ");
const sizeBtn = document.querySelector("#size-btn");
const resetBtn = document.querySelector("#reset-btn");

// Decoration 
const frame = document.createElement("div");
frame.classList.add("frame");
document.body.appendChild(frame);


// Grid container Setup
const container = document.createElement("div");
container.classList.add("container");
frame.appendChild(container);


const grid = document.createElement("div");
grid.classList.add("grid");
container.appendChild(grid);



// Extra Features Setup
const knobContainer = document.createElement("div");
knobContainer.classList.add("knobs");
document.body.appendChild(knobContainer);

const leftKnob = document.createElement("button");
leftKnob.classList.add("left-knob");
leftKnob.textContent = "🎨 RGB Mode"; 
knobContainer.appendChild(leftKnob);

const rightKnob = document.createElement("button");
rightKnob.classList.add("right-knob");
rightKnob.textContent = "⬛ Darkening Mode"; 
knobContainer.appendChild(rightKnob);

// Mode flags
let mode = "default"; 

leftKnob.addEventListener("click", () => {
    mode = "rgb";
});

rightKnob.addEventListener("click", () => {
    mode = "darken";
});


resetBtn.addEventListener("click", () => {
    mode = "default";
});



function makeGrid(gridSize)
{
    // clear old grid
    grid.innerHTML = "";

    for (let i = 0; i < gridSize * gridSize; i++)
    {
        const square = document.createElement("div");
        square.classList.add("square"); 
        square.style.width = (100 / gridSize) + "%";
        grid.appendChild(square);

        // Drawing
        square.addEventListener("mouseenter", () => {
            if (mode === "default") {
                square.classList.add("hovered");
            } 
            else if (mode === "rgb") {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                square.style.backgroundColor = `rgb(${r},${g},${b})`;
            }
            else if (mode === "darken")
            {
                let currentOpacity = parseFloat(square.dataset.opacity) || 0;
                if (currentOpacity < 1) {
                    currentOpacity += 0.1; 
                    square.dataset.opacity = currentOpacity.toFixed(1);
                    square.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
                }
            }
        });
    }
}

// Button Click
sizeBtn.addEventListener("click", () => {
    let inputSquares = btnPrompt();
    if (inputSquares && inputSquares > 0 && inputSquares <= 100) {
        makeGrid(inputSquares);
    }
    else { alert("Size too large! Enter a size from 1-100!");

    }
});


// Default Grid 
makeGrid(16);


