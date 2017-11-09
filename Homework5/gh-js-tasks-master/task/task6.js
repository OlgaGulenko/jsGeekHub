'use strict';

/**
 * Красивый год
 *
 * А знали ли Вы забавный факт о том, что 2013 год является первым годом после далекого 1987 года,
 * в котором все цифры различны?
 *
 * Теперь же Вам предлагается решить следующую задачу: задан номер года, найдите наименьший номер года,
 * который строго больше заданного и в котором все цифры различны.
 *
 * Входные данные
 * В единственной строке задано целое число y (1000 ≤ y ≤ 9000) — номер года.
 *
 * Выходные данные
 * Выведите единственное целое число — минимальный номер года, который строго больше y, в котором все цифры различны.
 * Гарантируется, что ответ существует.
 */

var prettyYearTests = [
    {
        parameters: ["1987"],
        expectedResult: 2013
    },
    {
        parameters: ["2013"],
        expectedResult: 2014
    },
    {
        parameters: ["8796"],
        expectedResult: 8901
    }
];


function prettyYear(y) {
  var num;
  var newyear;
  for (num = +y+1; num < 9000; num++){
    newyear = num.toString();
    if (newyear[0] != newyear[1] && newyear[0] != newyear[2] && newyear[0] != newyear[3]
        && newyear[1] != newyear[2] && newyear[1] != newyear[3]
        && newyear[2] != newyear[3]) {
        return num;
      }
  }
    return NaN;
}

// function prettyYear(y) {
//     for (var i = +y+1; i < 9000; i++) {
//         var year = i.toString();
//         if (year[0] != year[1] && year[0] != year[2] && year[0] != year[3]
//             && year[1] != year[2] && year[1] != year[3]
//             && year[2] != year[3]) {
//             return i;
//         }
//     }
//     return NaN;
// }

tasks.push({
    title: "Красивый год",
    solution: prettyYear,
    tests: prettyYearTests
});
