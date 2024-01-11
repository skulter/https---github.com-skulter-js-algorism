function eratosthenesSieve(size) {
    const answer = [...Array(size)].map((_, i) => i);
    answer[1] = 0;
    for (let i = 2; i < Math.sqrt(answer.length); i++) {
        if (answer[i] === 0) continue;
        for (let j = i * i; j < size; j += i) {
            if (answer[j] === 0) continue;
            answer[j] = 0;
        }
    }

    return answer.filter((v) => v !== 0);
}

const s = performance.now();
console.log(eratosthenesSieve(1_000_000));
const e = performance.now();

console.log(((e - s)/1000).toFixed(3),"Seconds");

