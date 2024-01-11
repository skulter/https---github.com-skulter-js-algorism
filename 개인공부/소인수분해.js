function factorizationCount(num) {
    const answer = [];
    let divideNum = 2;
    let answer_count = 1;
    while (num > 1) {
        if (num % divideNum === 0) {
            num = num / divideNum;
            answer.push(divideNum);
        }
        else {
            divideNum += 1;
        }
    }
    const count = answer.reduce((acc, cur) => {
        acc[cur] = acc[cur] == null ? 1 : (acc[cur] += 1);
        return acc;
    }, {});
    for (let value of Object.values(count)) {
        answer_count *= value + 1;
    }

    return answer_count;
}

const num = 144
console.log(factorizationCount(num));
// 90 : 3 ** 2 * 2 * 5

function primeFactorization(n) {
    var factors = [];
    let answer = 1;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }
    if (n > 1) {
        factors.push(n);
    }
   const count = factors.reduce((acc, cur) => {
        acc[cur] = acc[cur] == null ? 1 : (acc[cur] += 1);
        return acc;
   }, {});
    for (let [key,value] of Object.entries(count)) {
        answer *= value+1
    }
    return answer;
}

console.log(primeFactorization(num));