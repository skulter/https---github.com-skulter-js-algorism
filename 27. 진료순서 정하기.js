//https://school.programmers.co.kr/learn/courses/30/lessons/120835
function solution(emergency) {
  return emergency.map((value) => {
    return [...emergency].sort((a, b) => b - a).indexOf(value) + 1;
  });
}

// console.log([3, 76, 24].sort((a,b)=>a-b).indexOf(76))
