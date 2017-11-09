'use strict';

/**
 * Почти счастливое число
 *
 * Петя любит счастливые числа.
 * Всем известно, что счастливыми являются положительные целые числа,
 * в десятичной записи которых содержатся только счастливые цифры 4 и 7.
 * Например, числа 47, 744, 4 являются счастливыми, а 5, 17, 467 — не являются.
 *
 * К сожалению, не все числа счастливые. Петя называет число почти счастливым,
 * если количество счастливых цифр в нем — счастливое число. Ему интересно, является ли число n почти счастливым.
 *
 * Входные данные
 * В единственной строке задано целое число n (1 ≤ n.length ≤ 1018).
 *
 * Выходные данные
 * true, если число n — почти счастливое, и false в противном случае.
 *
 * Note: обратите внимание на что такое "число" и "цифра"
 */

var luckyNumberTests = [
    {
        parameters: ["40047"],
        expectedResult: false
    },
    {
        parameters: ["7747774"],
        expectedResult: true
    },
    {
        parameters: ["1000000000000000000"],
        expectedResult: false
    },
    {
        parameters: ["44444444447777777777474744747474747474747474"],
        expectedResult: true
    },
    {
        parameters: [" "],
        expectedResult: false
    },
    {
        parameters: ["47"],
        expectedResult: false
    }
];
/**
 Примечание
 В первом примере количество счастливых цифр числа равно 3 (первая и последние две цифры), поэтому ответ false.

 Во втором примере все цифры числа — счастливые, а их общее количество — 7, поэтому ответ true.
 */


// function luckyNumber(number) {
//   var summdigits = 0;
//   var numberlength = number.length;
//   if (1 <= numberlength <= 1018) {
//     for (var i = 0; i < numberlength; i++) {
//         if (number[i] === '4' || number[i] === '7') {
//             summdigits ++;
//         }
//     }
//     if (summdigits === 7 || summdigits === 4) {
//       return true
//     }
//     return false;
//
//     if (summdigits >= 10) {
//       var summdigitslength = summdigits.length;
//       for (var i = 0; i < summdigitslength; i++) {
//         if (summdigitslength[i] !== 4 && summdigitslength[i] !== 7) {
//           return false;
//         }
//       }
//     }return true
//   }
// }
function luckyNumber(number) {
    if (1 <= number.length && number.length <= 1018) {
        number = number.replace(/[^47]/g, '');
        var len = number.length.toString();
        if (/[^47]/.test(len)) {
            return false;
        }
        else {
            return true;
        }

    }

    else {
        return false;
    }
}
// function luckyNumber(number) {
//     let count = 0;
//     for (let i = 0; i < number.length; i++) {
//         if (number[i] === '4' || number[i] === '7') {
//             count ++;
//         }
//     }
//
//     if (count >= 10) {
//         for (let i = 0; i < count.toString().length; i++) {
//             if (count.toString()[i] !== '4' && count.toString()[i] !== '7') {
//                 return false;
//             }
//         }
//         return true
//     }
//     if (count === 4 || count === 7) {
//         return true
//     }
//     return false;
// }
tasks.push({
    title: "Почти счастливое число",
    solution: luckyNumber,
    tests: luckyNumberTests
});
