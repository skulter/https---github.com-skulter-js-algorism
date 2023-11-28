// https://school.programmers.co.kr/learn/courses/30/lessons/120891
function solution(order) {
  return order
    .toString()
    .split("")
    .filter((x) => "369".includes(x)).length;
}

console.log(solution(29439));
