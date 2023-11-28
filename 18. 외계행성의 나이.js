// https://school.programmers.co.kr/learn/courses/30/lessons/120834
function solution(age) {
  const char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  return age
    .toString()
    .split("")
    .map((x) => char[+x])
    .join("");
}

function bestSolution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}
