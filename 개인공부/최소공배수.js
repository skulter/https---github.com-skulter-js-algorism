// Least Common Multiple
function LCM(x, y) {
    let answer = 1;
    for (let i = Math.min(x, y); i > 1 ; i--){
        if (x % i === 0 && y % i === 0) {
            answer = i * (x / i) * (y / i);
            break;
        }
    }
    return answer;
}

// 유클리드 호제법을 이용한 LCM
const GCD = (x, y) => x % y === 0 ? y : GCD(y, x % y);
const LCM = (x,y) => x * y / GCD(x,y) 

console.log(LCM(8,12)) // 24
