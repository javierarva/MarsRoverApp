let rover = new MarsRover();
let obstacles = [];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("executeButton").addEventListener("click", runRover);
    document.getElementById("resetButton").addEventListener("click", resetRover);
    document.getElementById("generateObstacles").addEventListener("click", generateObstacles);
    createGrid();
});

function runRover() {
    const commandsInput = document.getElementById('commands').value;
    const commands = commandsInput.toUpperCase();

    let messageElement = document.getElementById('message');
    messageElement.innerHTML = "";

    for (let command of commands) {
        let nextX = rover.x;
        let nextY = rover.y;

        if (command === 'F') {
            switch (rover.direction) {
                case 'N': nextY += 1; break;
                case 'S': nextY -= 1; break;
                case 'E': nextX += 1; break;
                case 'W': nextX -= 1; break;
            }

            if (obstacles.some(obs => obs.x === nextX && obs.y === nextY)) {
                messageElement.innerHTML = "Se aborta la secuencia: hay un obstáculo en el recorrido";

                break;
            }
        }
        rover.execute(command);
    }

    document.getElementById('position').innerHTML = `${rover.x}:${rover.y}:${rover.direction}`;
    createGrid();
}

function resetRover() {
    rover = new MarsRover();
    obstacles = [];
    document.getElementById('position').innerHTML = `${rover.x}:${rover.y}:${rover.direction}`;
    createGrid();
}

function generateObstacles() {
    const numObstacles = parseInt(document.getElementById("obstacles").value);
    const maxObstacles = 99;
    obstacles = [];

    if (numObstacles > maxObstacles) {
        document.getElementById("message").innerHTML = `No puedes generar más de ${maxObstacles} obstáculos.`;
        return;
    }

    while (obstacles.length < numObstacles) {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);

        if ((x !== rover.x || y !== rover.y) && !obstacles.some(obs => obs.x === x && obs.y === y)) {
            obstacles.push(new Obstacle(x, y));
        }
    }

    createGrid();
}

function getDirectionSymbol(direction) {
    const symbols = { 'N': '▲', 'E': '▶', 'S': '▼', 'W': '◀' };
    return symbols[direction] || '?';
}

function createGrid() {
    const grid = document.getElementById("grid");
    grid.innerHTML = '';
    for (let y = 9; y >= 0; y--) {
        for (let x = 0; x < 10; x++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            if (x === rover.x && y === rover.y) {
                cell.classList.add("rover");
                cell.innerHTML = `${getDirectionSymbol(rover.direction)}`;
            } else if (obstacles.some(obs => obs.x === x && obs.y === y)) {
                cell.classList.add("obstacle");
            }

            grid.appendChild(cell);
        }
    }
}
