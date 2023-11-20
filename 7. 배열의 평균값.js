// https://school.programmers.co.kr/learn/courses/30/lessons/120817
function solution(numbers) {
  return (((numbers[0] + numbers[numbers.length - 1]) * 5) / 10).toFixed(1);
}

const q = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 5.5
const q2 = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]; // 94.0
console.log(solution(q));
console.log(solution(q2));
