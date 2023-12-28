// https://www.youtube.com/watch?v=BgVt8YYrn7c&list=PLkfUwwo13dlWZxOdbvMhkzhAowaiEjuGS&index=24
// https://school.programmers.co.kr/learn/courses/30/lessons/120896

function solution(s) {
    const str = [...s];
    const obj = {};
    const answer = [];
    str.forEach((value) => {
        if (obj[value]) {
             obj[value]+=1
        }
        else {
             obj[value] = 1
        }
    })
    for (const [key,value] of Object.entries(obj)) {    
        if (value === 1) {
           answer.push(key)
       }
     }
    return answer.sort().join('')
}


function bestSolution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join("");
}

// 정규표현식을 이용한 풀이
var RegExpSolution = (s) =>
  [...s]
    .filter((c) => s.match(new RegExp(c, "g")).length == 1)
    .sort()
    .join("");

/***
 * s	result
"abcabcadc"	"d"
"abdc"	"abcd"
"hello"	"eho"
 */