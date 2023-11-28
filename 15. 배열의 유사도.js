function solution(s1, s2) {
  let answer = 0;
  s1.forEach((x) => (s2.includes(x) ? (answer += 1) : false));
  return answer;
}

function bestSolution(s1, s2) {
  return s1.filter((x) => s2.includes(x)).length;
}
