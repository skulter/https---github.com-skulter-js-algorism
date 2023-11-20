//https://school.programmers.co.kr/learn/courses/30/lessons/120826
function solution(my_string, letter) {
  const sol = Array.from(my_string)
    .filter((x) => x !== letter)
    .join("");
  return sol;
}

function bestSolution(my_string, letter) {
  const answer = my_string.split(letter).join("");
  return answer;
}
