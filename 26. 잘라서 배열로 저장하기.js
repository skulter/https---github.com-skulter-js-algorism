// https://www.youtube.com/watch?v=_hyCyqOVH-8&list=PLkfUwwo13dlWZxOdbvMhkzhAowaiEjuGS&index=25
// https://school.programmers.co.kr/learn/courses/30/lessons/120913

function solution(my_str, n) {
  const str = [];
  const my_str_arr = [...my_str];
  while (my_str_arr.length > 0) {
    let i = 0;
    str.push(my_str_arr.splice(i, n).join(""));
    i += 6;
  }
  return str;
}

function bestSolution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}
