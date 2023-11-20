//https://school.programmers.co.kr/learn/courses/30/lessons/181188
// 설명 https://chamdom.blog/pg2-181188/
// [[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]] // 3
function bestSolution(targets) {
  let answer = 1;
  // 1. 시작점을 기준으로 내림차순
  targets.sort((a, b) => b[0] - a[0]);
  // 2. 구하기
  let [s, e] = targets.shift();
  for (const target of targets) {
    const [s_t, e_t] = target;
    if (e_t <= s) {
      answer += 1;
      s = s_t;
    }
  }
  return answer;
}

console.log(
  bestSolution([
    [4, 5],
    [4, 8],
    [10, 14],
    [11, 13],
    [5, 12],
    [3, 7],
    [1, 4],
  ])
);

function solution(targets) {
  let fireCount = 1;
  targets.sort((a, b) => b[0] - a[0]);
  let s = targets[0][0];
  for (const target of targets) {
    const [currentS, currentE] = target;
    if (s >= currentE) {
      fireCount += 1;
      s = currentS;
    }
  }
  return fireCount;
}

function solution2(targets) {
  let fireCount = 1;
  targets.sort((a, b) => a[0] - b[0]);
  console.log(targets);
  let [s, e] = targets.shift();

  for (const target of targets) {
    const [currentS, currentE] = target;
    if (currentS >= e) {
      fireCount += 1;
      e = currentE;
    }
  }

  return fireCount;
}
console.log(
  solution2([
    [1, 2],
    [2, 3],
    [0, 99999],
  ]),
  solution([
    [1, 2],
    [2, 3],
    [0, 99999],
  ])
);
