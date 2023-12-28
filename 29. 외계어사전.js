//https://school.programmers.co.kr/learn/courses/30/lessons/120869
function solution(spell, dic) {
    return dic.some((arr) => [...arr].sort().toString() === spell.sort().toString())    ? 1    : 2;
}

// console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"])); // 2
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"])); // 1
// console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"])); // 2

console.log(['z','d','x'].sort().toString())