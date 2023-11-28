// https://school.programmers.co.kr/learn/courses/30/lessons/120848
function solution(n) {
  let fec = 1;

  for (let i = 1; i <= n; i++) {
    fec *= i;
    if (n === fec) return i;
    if (fec > n) return i - 1;
  }
}

console.log(solution(3628800)); //10
console.log(solution(1)); //1
console.log(solution(2)); //2
console.log(solution(3)); //3
console.log(solution(4)); //3
console.log(solution(5)); //3
console.log(solution(6)); //3
console.log(solution(7)); //3

// console.log(solution(8)); //4
// console.log(solution(9)); //4
// console.log(solution(10)); //4
// console.log(solution(11)); //4
// console.log(solution(12)); //4
// console.log(solution(13)); //4
// console.log(solution(14)); //4
// console.log(solution(15)); //4
// console.log(solution(16)); //4
// console.log(solution(17)); //4

// console.log(solution(18)); //4

// console.log(solution(19)); //4
// console.log(solution(20)); //4
// console.log(solution(21)); //4
// console.log(solution(22)); //4
// console.log(solution(23)); //4
// console.log(solution(24)); //4
// console.log(solution(25)); //4
