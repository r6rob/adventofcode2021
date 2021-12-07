import fs from 'fs';

const depths = fs
    .readFileSync('./input', {
        encoding: 'utf8',
        flag: 'r',
    })
    .split('\n')
    .map((d: string) => Number.parseInt(d));

const increments = depths
    .reduce((acc: number, curr: number, ind: number, self: number[]) => {
        if (ind === 0 || curr < self[ind - 1]) {
            return acc;
        }

        return acc + 1;
    }, 0);

console.log(increments);
