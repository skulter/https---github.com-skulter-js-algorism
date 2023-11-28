// //https://school.programmers.co.kr/learn/courses/30/lessons/120890
// function solution(array, n) {
//   array.push(n);
//   const index = array.sort((a, b) => a - b).indexOf(n);
//   console.log(array.length, index);
//   if (array.length === index + 1) {
//     return array[array.length - 2];
//   }

//   if (index === 0) {
//     return array[1];
//   }
//   const [min, max] = [array[index - 1], array[index + 1]];
//   return Math.abs(n - min) - Math.abs(n - max) < 0 ? min : max;
// }

// // console.log(solution([3, 10, 28], 20));
// console.log(solution([10, 11, 12], 13));
