let rover = new MarsRover();

function createGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    for (let y = 9; y >= 0; y--) {
        for (let x = 0; x < 10; x++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            if (x === rover.x && y === rover.y) {
                cell.classList.add('rover');
                cell.textContent = getDirectionSymbol(rover.direction);
            }

            grid.appendChild(cell);
        }
    }
}

function getDirectionSymbol(direction) {
    const symbols = { 'N': '▲', 'E': '▶', 'S': '▼', 'W': '◀' };
    return symbols[direction] || '?';
}


function runRover() {
    const commandsInput = document.getElementById('commands').value;
    const commands = commandsInput.toUpperCase();
    document.getElementById('position').textContent = rover.execute(commands);
    createGrid();
}


createGrid();

document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada correctamente");
    document.getElementById("executeButton").addEventListener("click", runRover);
    document.getElementById("resetButton").addEventListener("click", resetRover);
});

function resetRover() {
    rover = new MarsRover();
    document.getElementById('position').textContent = `${rover.x}:${rover.y}:${rover.direction}`;
    createGrid();
}
