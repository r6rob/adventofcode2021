import fs from 'fs';

enum Direction {
    Up = 'up',
    Down = 'down',
    Forward = 'forward',
}

interface Instruction {
    direction: keyof Direction;
    distance: number;
}

const instructions: Instruction[] = fs
    .readFileSync('./instructions', {
        encoding: 'utf8',
        flag: 'r',
    })
    .split('\n')
    .map((parts: string): Instruction => {
        const [direction, distance] = parts.split(' ');

        return {
            direction: direction as keyof Direction,
            distance: Number.parseInt(distance),
        };
    });

class Position {
    x: number;
    y: number;
    aim: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.aim = 0;
    }

    follow(instructions: Instruction[]) {
        for (const instruction of instructions) {
            const { distance, direction } = instruction;

            switch(direction) {
                case Direction.Up:
                    this.aim -= distance;
                    break;
                case Direction.Down:
                    this.aim += distance;
                    break;
                case Direction.Forward:
                    this.x += distance;
                    this.y += (this.aim * distance)
                    break;
                default:
                    throw new Error('Direction not valid');
            }
        }
    }
}

const position = new Position(0, 0);

position.follow(instructions);

const result = position.x * position.y;

console.log(result);
