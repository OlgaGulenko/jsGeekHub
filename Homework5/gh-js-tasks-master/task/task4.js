'use strict';

/**
 * Упражнение на строки
 *
 * Петя записался в кружок по программированию.
 * На первом занятии Пете задали написать простую программу.
 * Программа должна делать следующее: в заданной строке, которая состоит из прописных и строчных латинских букв, она:
 * удаляет все гласные буквы,
 * перед каждой согласной буквой ставит символ ".",
 * все прописные согласные буквы заменяет на строчные.
 *
 * Гласными буквами считаются буквы "A", "O", "Y", "E", "U", "I", а согласными — все остальные.
 * На вход программе подается ровно одна строка, она должна вернуть результат в виде одной строки,
 * получившейся после обработки.
 *
 * Помогите Пете справиться с этим несложным заданием.
 */

var stringDotTests = [
    {
        parameters: ["tour"],
        expectedResult: ".t.r"
    },
    {
        parameters: ["GeekHub"],
        expectedResult: ".g.k.h.b"
    },
    {
        parameters: ["aBAcAba"],
        expectedResult: ".b.c.b"
    },
    {
        parameters: ["aa"],
        expectedResult: ""
    }
];


function stringDot(word) {
  var newWord = word.toLowerCase().replace(new RegExp('[aoyeui]', 'g'), '');

var string = '';

for (var i = 0; i < newWord.length; i++) {
    string += '.' + newWord[i];
}
return string;
  // str = "aoyeui"
  // for i in str:

  	// str.replace(/тест/g,"прошел")
  	// str.replace(new RegExp("тест",'g'),"прошел")
}
// let regexp = new RegExp('[aoyeui]', 'ig');
// let newstr = word.replace(regexp, '').toLowerCase();
// let res = '';
// for (let i = 0; i < newstr.length; i++) {
//     res += '.' + newstr[i];
// }
// return res;

tasks.push({
    title: "Упражнение на строки",
    solution: stringDot,
    tests: stringDotTests
});
