let a, b, c, s, p;
let d = 2;
a = +prompt('A', '');
b = +prompt('B', '');
c = +prompt('C', '');
p = (a + b + c) / d;
s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
if (isNaN(s) || a <= 0 || b <= 0 || c <= 0 || s === 0) {
  console.log('Triangle doesn’t exist');
} else if (a === b && b === c && c === a) {
  console.log('Eequivalent triangle');
} else if (a === b || b === c || c === a) {
  console.log('Isosceles triangle');
} else {
  console.log('Normal triangle');
}
