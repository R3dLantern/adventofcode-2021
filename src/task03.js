import fs from 'fs';

export function task03_1() {
    try {
        const data = fs.readFileSync('./data/03.txt', 'utf8').split(/\r?\n/);
        const length = data[0].length;
        let gamma = '', epsilon = '';
        for (let i = 0; i < length; i++) {
            let zeroes = 0,
                ones = 0
            ;
            for (const line of data) {
                const ch = line.charAt(i);
                if (ch === '1') {
                    ones++;
                } else {
                    zeroes++;
                }
            }
            if (zeroes > ones) {
                gamma += '0';
                epsilon += '1';
            } else {
                gamma += '1';
                epsilon += '0';
            }
        }
        console.log(`Power consumption: ${parseInt(gamma, 2) * parseInt(epsilon, 2)}`);
    } catch (err) {
        console.error(err);
    }
}

export function task03_2() {
    try {
        const data = fs.readFileSync('./data/03.txt', 'utf8').split(/\r?\n/);
        const length = data[0].length;
        let i = 0,
            oxygenRating = data,
            scrubberRating = data
        ;
        while (i < length && (oxygenRating.length !== 1 || scrubberRating.length !== 1)) {
            let
                zeroes = 0,
                ones = 0
            ;
            if (oxygenRating.length !== 1) {
                for (const line of oxygenRating) {
                    const ch = line.charAt(i);
                    if (ch === '1') {
                        ones++;
                    } else {
                        zeroes++;
                    }
                }
                oxygenRating = oxygenRating.filter(line => line.charAt(i) === (ones >= zeroes ? '1' : '0'));
                zeroes = 0;
                ones = 0;
            }
            if (scrubberRating.length !== 1) {
                for (const line of scrubberRating) {
                    const ch = line.charAt(i);
                    if (ch === '1') {
                        ones++;
                    } else {
                        zeroes++;
                    }
                }
                scrubberRating = scrubberRating.filter(line => line.charAt(i) === (ones >= zeroes ? '0': '1'));
            }
            i++;
        }
        oxygenRating = parseInt(oxygenRating[0], 2);
        scrubberRating = parseInt(scrubberRating[0], 2);
        console.log(`Life support rating: ${oxygenRating * scrubberRating}`);
    } catch (err) {
        console.error(err);
    }
}