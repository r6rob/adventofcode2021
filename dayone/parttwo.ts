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
        if (ind < 3) {
            return acc;
        }

        const previous = self.slice(ind - 3, ind).reduce((a, c) => a + c, 0);
        const current = self.slice(ind - 2, ind + 1).reduce((a, c) => a + c, 0);

        if (previous >= current) {
            return acc;
        }

        return acc + 1;
    }, 0);

console.log(increments);
