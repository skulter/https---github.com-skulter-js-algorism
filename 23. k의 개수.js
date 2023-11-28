//https://school.programmers.co.kr/learn/courses/30/lessons/120887
function solution(i, j, k) {
  let count = 0;
  for (i; i <= j; i++) {
    count += i
      .toString()
      .split("")
      .filter((x) => x == k).length;
  }
  return count;
}

function bestSolution(i, j, k) {
  let a = "";
  for (i; i <= j; i++) {
    a += i;
  }

  return a.split(k).length - 1;
}

console.log(solution(1, 13, 1));
