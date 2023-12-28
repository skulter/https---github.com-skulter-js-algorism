//https://school.programmers.co.kr/learn/courses/30/lessons/120921
function solution(A, B) {
    if (A === B) return 0
    const arr = [...A];
    for (let i = 1; i <= arr.length; i++) {
      arr.unshift(arr.pop());
      if(arr.join('').toString() === B) return i
    }
  return -1;
}


let bestSolution = (a, b) => (b + b).indexOf(a);

console.log(bestSolution("hello", "ohell")); //1
console.log(bestSolution("apple", "elppa"));//-1
console.log(bestSolution("atat", "tata"));//1
console.log(bestSolution("abc", "abc"));//0

