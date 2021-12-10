import {task01_1, task01_2} from './src/task01.js';
import {task02_1, task02_2} from './src/task02.js';
import {task03_1, task03_2} from './src/task03.js';

(async function () {
    // 12-01
    await task01_1();
    await task01_2();
    // 12-02
    await task02_1();
    await task02_2();
    // 12-03
    await task03_1();
    await task03_2();
})();

