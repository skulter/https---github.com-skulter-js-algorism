// https://school.programmers.co.kr/learn/courses/30/lessons/120814
function solution(num_list) {
  return num_list.reduce(
    (acc, cur) => {
      return cur % 2 === 0 ? [acc[0]++, acc[1]] : [acc[0], acc[1]++];
    },
    [0, 0]
  );
}

function bestSolution(num_list) {
  let answer = [0, 0];

  for (let a of num_list) {
    answer[a % 2] += 1;
  }

  return answer;
}
