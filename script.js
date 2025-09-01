const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);


const grid = document.createElement("div");
grid.classList.add("grid");
container.appendChild(grid);

let gridSize = 16;

for (let i = 0; i < gridSize * gridSize; i++)
{
    const square = document.createElement("div");
    square.classList.add("square"); 
    square.style.width = (100 / gridSize) + "%";
    grid.appendChild(square);
}