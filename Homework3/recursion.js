// рекурсивну функцію для обчислення факторіалу
;(function () {
  console.log( 'Напишемо рекурсивну функцію для обчислення факторіалу');
  function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  console.log( factorial(5) );

  console.log( 'Напишемо рекурсивну функцію для обчислення степені числа');
  function stepen(x, n) {
    if (n != 1 && n != 0) {
      return x * stepen(x, n - 1);
    }
    else {
      return x;
    }
  }
  console.log( stepen(5,3) );

  console.log( 'Напишемо рекурсивну функцію для обчислення суми цифр цілого числа');
  function summ(n) {
    if (n < 10) {
      return n; }
    else {
      return n % 10 + summ(Math.floor(n / 10)); }
  }
  console.log( summ(123456789) );
  console.log( 'Напишемо функцію для обчислення факторіалу без рекурсії');
  function factor(n) {
    let x = 1;
    for (var y = 1; y <= n; y++) {
      x = x * y;
    }
    return x;
  }
  console.log( factor(5) );
  console.log( 'Напишемо функцію для обчислення степені числа без рекурсії');
  function stepen(x, n) {
    let a = x;
    for (var i = 1; i < n; i++) {
    a *= x; }
    return a;
  }
  console.log( stepen(5,3) );

  console.log( 'Напишемо функцію для обчислення суми цифр цілого числа без рекурсії');
  function summa(num) {
    let n = 0;
    let i;
    for(i = num; i > 0; i = Math.floor(i / 10)) {
      n += (i % 10); }
    return n;
  }
  console.log( summa(123456789) )

  function count(func, arg, steps){
    console.time();
    while(steps--){
    func.apply(null, arg); }
    console.timeEnd();
  }
  console.log( count() )
})();
