import * as readline from 'readline';
import fs from 'fs';

export async function task02_1() {
    try {
        const strm = fs.createReadStream('./data/02.txt');
        const rl = readline.createInterface({ input: strm, crlfDelay: Infinity });
        let pos = [0, 0];
        for await (const line of rl) {
            const
                command = line.split(' '),
                value = parseInt(command[1], 10)
            ;
            switch(command[0]) {
                case 'down':
                    pos[1] += value;
                    break;
                case 'forward':
                    pos[0] += value;
                    break;
                case 'up':
                    pos[1] -= value;
                    break;
                default:
                    console.error(`I don't know command "${command[0]}"`);
                    break;
            }
        }
        console.log(`Product of final position: ${pos[0] * pos[1]}`);
    } catch (err) {
        console.error(err);
    }
}

export async function task02_2() {
    try {
        const strm = fs.createReadStream('./data/02.txt');
        const rl = readline.createInterface({ input: strm, crlfDelay: Infinity });
        let pos = [0, 0, 0];
        for await (const line of rl) {
            const
                command = line.split(' '),
                value = parseInt(command[1], 10)
            ;
            switch(command[0]) {
                case 'down':
                    pos[2] += value;
                    break;
                case 'forward':
                    pos[0] += value;
                    pos[1] += pos[2] * value;
                    break;
                case 'up':
                    pos[2] -= value;
                    break;
                default:
                    console.error(`I don't know command "${command[0]}"`);
                    break;
            }
        }
        console.log(`Product of final position: ${pos[0] * pos[1]}`);
    } catch (err) {
        console.error(err);
    }
}