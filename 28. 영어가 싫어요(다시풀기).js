//https://school.programmers.co.kr/learn/courses/30/lessons/120894

function solution(numbers) {
  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
    for (let i = 0; i < arr.length; i++) { 
        numbers = numbers.split(arr[i]).join(i);
    }
  return numbers;
}

console.log(solution("onetwothreefourfivesixseveneightnine"));