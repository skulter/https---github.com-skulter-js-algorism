// https://school.programmers.co.kr/learn/courses/30/lessons/120871
function solution(n) {
  const test = [...Array(n)].reduce((acc, cur) => {
    while (acc % 3 === 0 || String(acc).includes("3")) {
      acc++;
    }
    if (String(acc).length === 2 && String(acc)[0].includes("3")) acc += 10;
    return acc + 1;
  }, 1);
  return test - 1;
}

function bestSolution(n) {
  // 잘 이해가 안감. 3을 곱해서 수량을 늘린 후 3의 배수와 3이 포함된 요소를 제거 한 후 n 번째 수를 찾음
  return [...Array(n * 3)]
    .map((_, i) => i + 1)
    .filter((num) => num % 3 !== 0 && !num.toString().includes("3"))[n - 1];
}

function goodSolution(n) {
  const answer = [...Array(n)].reduce((acc, cur, index) => {
    if (acc % 3 === 0) acc += 1;
    if (String(acc).includes("3")) acc += 1;
    return acc + 1;
  }, 1);
  return answer;
}

console.log(goodSolution(15)); // 25
console.log(goodSolution(40)); // 76

function goodSolution(n) {
  let arr = [];
  let num = 0;
  while (arr.length !== n && ++num)
    if (num % 3 !== 0 && !num.toString().includes("3")) arr.push(num);
  return arr
}
