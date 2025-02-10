class MarsRover {
    constructor(x = 0, y = 0, direction = 'N', gridSize = 10) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.gridSize = gridSize;
        this.directions = ['N', 'E', 'S', 'W'];
    }

    execute(commands) {
        for (let command of commands) {
            if (command === 'F') this.move();
            else if (command === 'L' || command === 'R') this.turn(command);
        }
        return `${this.x}:${this.y}:${this.direction}`;
    }

    move() {
        switch (this.direction) {
            case 'N': this.y = (this.y + 1) % this.gridSize; break;
            case 'E': this.x = (this.x + 1) % this.gridSize; break;
            case 'S': this.y = (this.y - 1 + this.gridSize) % this.gridSize; break;
            case 'W': this.x = (this.x - 1 + this.gridSize) % this.gridSize; break;
        }
    }

    turn(turnDirection) {
        const currentIdx = this.directions.indexOf(this.direction);
        this.direction = turnDirection === 'L'
            ? this.directions[(currentIdx + 3) % 4]
            : this.directions[(currentIdx + 1) % 4];
    }
}
