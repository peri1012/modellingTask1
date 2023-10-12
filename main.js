function task1(n) {
    let current= [20, 0];

    for (let s = 1; s<=n; s++) {
        let randomNumber = randomInt(1, 21);
        if (randomNumber <= current[0]) {
            current[0]--;
            current[1]++;
        } else {
            current[0]++;
            current[1]--;
        }
        console.log(`(${s} ${randomNumber})---(${current[0]}, ${current[1]})`);
    }
}
task1(20);

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function task2(n) {
    const first = [20, 0];
    let current;
    const iterations = [];

    for (let i = 1; i <= n; i++) {
        let iteration = 1;
        current = [20, 0];
        while (true) {
            const randomNumber = randomInt(1, 21);
            if (randomNumber <= current[0]) {
                current[0]--;
                current[1]++;
            } else {
                current[0]++;
                current[1]--;
            }

            if (current[0] === first[0] && current[1] === first[1]) {
                break;
            }

            iteration++;
        }

        iterations.push(iteration);
    }

    const average = iterations.reduce((acc, val) => acc + val, 0) / iterations.length;
    console.log(`Average: ${average}`);
}
task2(20);
