// 123 -> 321
// -123 -> -321
// 120 -> 21
// 0 -> 0
// 901000 -> 109
// Constraints: -2^31 <= x <= 2^31 -1

var reverse = function (x) {
  const strX = Math.abs(x).toString();
  const num = recursion(strX);
  return num > Math.pow(2, 31) - 1 ? 0 : x < 0 ? num * -1 : num;
};

const recursion = (strX) => {
  if (strX.length === 1) return strX[0];
  return strX[strX.length - 1].concat(
    recursion(strX.slice(0, strX.length - 1))
  );
};
