//https://school.programmers.co.kr/learn/courses/30/lessons/120890
function solution(array, n) {
  array.push(n);
  const index = array.sort((a, b) => a - b).indexOf(n);

  if (index === 0) {
    return array[1];
  }
  if (index === array.length - 1) {
    return array[array.length - 2];
  }
  const [min, max] = [array[index - 1], array[index + 1]];
  if (Math.abs(n - min) - Math.abs(n - max) === 0) {
    return min;
  }
  return Math.abs(n - min) - Math.abs(n - max) < 0 ? min : max;
}

console.log(solution([3, 10, 28], 20));
console.log(solution([10, 11, 12], 13));
console.log(solution([0, 1, 2, 4], 20));

function bestSolution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a -b);
  return array[0];
}
console.log(bestSolution([3, 10, 28], 20));
console.log(bestSolution([10, 11, 12], 13));
console.log(bestSolution([0, 1, 2, 4], 20));
