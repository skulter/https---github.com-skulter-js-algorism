//https://school.programmers.co.kr/learn/courses/30/lessons/120882
// function solution(score) {
//   let answer = score.map((val) =>(val[0] + val[1]) / 2);
//   return answer.map(val =>[...answer].sort((a, b) => b - a).indexOf(val) + 1)
// }


function bestSolution(score) {
  return score.map((el) => {
    return (
      score.filter((v) => {
        console.log(v[0] + v[1], el[0]+el[1])
        return (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2
      }).length + 1
    );
  });
}

console.log(
  bestSolution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
);