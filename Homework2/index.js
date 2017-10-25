//Треугольник в цикле
var triangle = "#";
while (triangle.length<=7){
  console.log(triangle + "\n");
  triangle+="#";
}

// FizzBuzz
var number;
for(number = 1; number <= 100; number++)
  console.log(number%5||number%3?number%3?number%5?number:"Buzz":"Fizz":"FizzBuzz");

//Шахматная доска
var sizeline = "8";
var sizecell = "8";
var result = "\n";
for (var line = 1; line <= sizeline; line++) {
  for (var cell = 1; cell <= sizecell; cell++) {
    result += (line % 2 == cell % 2) ? "#" : " ";
  }
  result += "\n";
}
console.log(result);

//Минимум
function min(v1, v2) {
  if (v1 < v2)
    return v1;
  else
    return v2;
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//Рекурсия
function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

//Считаем бобы
function countChar(str, ch) {
  var counted = 0;
  for (var i = 0; i < str.length; i++)
    if (str.charAt(i) == ch)
      counted += 1;
  return counted;
}

function countBs(str) {
  return countChar(str, "B");
}

console.log(countBs("BBBCR"));
// → 2
console.log(countChar("kkukukrkyykk", "k"));
// → 4
