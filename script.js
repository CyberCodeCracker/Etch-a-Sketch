const container = document.getElementById('container');
const resetButton = document.getElementById('reset-btn');
const sizeButton = document.getElementById('size-btn');

function createCell() {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        return cell;
}

function generateRgb() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`
}

function changeColor(event) {
        event.target.style.backgroundColor = generateRgb();
}

function createGrid(gridSize) {
        while(container.firstChild) {
                container.removeChild(container.firstChild)
        }
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

        for (let i = 0; i < gridSize * gridSize; i++) {
                const cell = createCell();
                container.appendChild(cell);
                cell.addEventListener('mouseenter', changeColor);
        }
}

sizeButton.addEventListener('click', () => {
        const gridSize = prompt("Enter preferred grid size:");
        if (gridSize <= 100 && !isNaN(gridSize)) {
                createGrid(gridSize);
        } 
        else {
                alert("Invalid input. Please enter a number that is less than 100");
                return;
        }        
})

resetButton.addEventListener('click', () => {
        createGrid(16);
})

createGrid(16);




