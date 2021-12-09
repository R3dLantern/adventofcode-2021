import * as readline from 'readline';
import fs from 'fs';

export async function task01_1() {
    try {
        const strm = fs.createReadStream('./data/01.txt');
        const rl = readline.createInterface({
            input: strm,
            crlfDelay: Infinity
        });
        let prev = Infinity;
        let increases = 0;
        for await (const line of rl) {
            const parsed = parseInt(line, 10);
            if (parsed > prev) {
                increases++;
            }
            prev = parsed;
        }
        console.log(`Increases from single measurements: ${increases}`);
    } catch (err) {
        console.error(err);
    }
}

export async function task01_2() {
    try {
        const data = fs.readFileSync('./data/01.txt', 'utf8').split(/\r?\n/).map(i => parseInt(i, 10));
        let prev = Infinity, increases = 0;
        for (let i = 0; i < data.length - 2; i++) {
            const step = data[i] + data[i + 1] + data[i + 2];
            if (step > prev) {
                increases++
            }
            prev = step;
        }
        console.log(`Increases from step measurements: ${increases}`);
    } catch (err) {
        console.error(err);
    }
}