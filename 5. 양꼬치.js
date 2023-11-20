// https://school.programmers.co.kr/learn/courses/30/lessons/120830

function solution(n, k) {
  const service = ~~(n / 10);
  return n * 12000 + (k - service) * 2000;
}
