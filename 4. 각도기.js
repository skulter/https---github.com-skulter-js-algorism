// https://school.programmers.co.kr/learn/courses/30/lessons/120829
const solution = (angle) => {
  if (angle < 90) return 1;
  if (angle === 90) return 2;
  if (angle < 180) return 3;
  return 4;
};

const goodSolution = (angle) => {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
};
