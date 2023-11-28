//https:school.programmers.co.kr/learn/courses/30/lessons/120844
function solution(numbers, direction) {
  let newNumbers;

  if (direction === "left") {
    newNumbers = numbers.map((x, i) => {
      if (i === numbers.length - 1) {
        return numbers[0];
      }
      return numbers[i + 1];
    });
  } else {
    newNumbers = numbers.map((x, i) => {
      if (i === 0) {
        return numbers[numbers.length - 1];
      }
      return numbers[i - 1];
    });
  }
  return newNumbers;
}

function bestSolution(numbers, direction) {
  var answer = [];

  if ("right" == direction) {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }

  answer = numbers;

  return answer;
}

function bestSolution2(numbers, direction) {
  return direction === "right"
    ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)]
    : [...numbers.slice(1), numbers[0]];
}

console.log(solution([4, 455, 6, 4, -1, 45, 6], "left"));
console.log(solution([1, 2, 3], "right"));
