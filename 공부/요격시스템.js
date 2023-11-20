//https://school.programmers.co.kr/learn/courses/30/lessons/181188
// 설명 https://chamdom.blog/pg2-181188/
// [[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]] // 3
function solution(targets) {
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
  solution([
    [4, 5],
    [4, 8],
    [10, 14],
    [11, 13],
    [5, 12],
    [3, 7],
    [1, 4],
  ])
);
