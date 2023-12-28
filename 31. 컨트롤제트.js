//https://school.programmers.co.kr/learn/courses/30/lessons/120853
function solution(s) {
    var answer = 0;
    var temp = 0;
    s.split(' ').forEach((v) => {
        if (v === 'Z') answer -= temp;   
        else {
          answer += +v;
          temp = +v;
        }
    })
  return answer;
}

console.log(solution("1 2 Z 3"));// 4