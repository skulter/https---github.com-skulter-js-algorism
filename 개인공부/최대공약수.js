// function GCD(x, y) {
//     let answer = x % y;
//     if (answer === 0) {
//         return y;
//     }
//     return GCD(y, answer);
// }

const GCD = (x, y) => x % y === 0 ? y : GCD(y, x % y);
console.log(GCD(18, 30))

