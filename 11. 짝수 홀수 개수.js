// https://school.programmers.co.kr/learn/courses/30/lessons/120814
function solution(num_list) {
  const s1 = performance.now();
  return num_list.reduce(
    (acc, cur) => {
      return cur % 2 === 0 ? [acc[0]++, acc[1]] : [acc[0], acc[1]++];
    },
    [0, 0]
  );
  const e1 = performance.now();
  console.log(e1 - s1);
}

function bestSolution(num_list) {
  let answer = [0, 0];

  for (let a of num_list) {
    answer[a % 2] += 1;
  }

  return answer;
}
