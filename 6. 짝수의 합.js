// https://school.programmers.co.kr/learn/courses/30/lessons/120831
// 짝수의 합
function solution(n) {
  return [...Array(n)].reduce((acc, _, i) => {
    const currentValue = i + 1;
    return currentValue % 2 === 0 ? acc + currentValue : acc;
  }, 0);
}

function goodSolution(n) {
  var half = Math.floor(n / 2);
  return half * (half + 1);
}

console.log(solution(10));
console.log(goodSolution(10));

// 홀수의 합 (번외)
function solution2(n) {
  return [...Array(n)].reduce((acc, _, i) => {
    const currentValue = i + 1;
    return currentValue % 2 !== 0 ? acc + currentValue : acc;
  }, 0);
}

function goodSolution2(n) {
  var half = Math.floor(n / 2);
  return Math.pow(half, 2);
}

console.log(solution2(10));
console.log(goodSolution2(10));
