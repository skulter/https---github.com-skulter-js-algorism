// https://school.programmers.co.kr/learn/courses/30/lessons/120839
function solution(rsp) {
  return [...rsp].map((x) => (x === "2" ? 0 : x === "0" ? 5 : 2)).join("");
}

function bestSolution(rsp) {
  const arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  return [...rsp].map((x) => arr[x]).join("");
}

console.log(solution("205"));
console.log(bestSolution("205"));
