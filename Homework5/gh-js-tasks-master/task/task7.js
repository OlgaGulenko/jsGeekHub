'use strict';

/**
 * Double Cola
 *
 * Шелдон, Леонард, Пенни, Раджеш и Говард стоят в очереди к автомату по продаже баночек с напитком «Double Cola»,
 * других людей в очереди нет. Первый в очереди (Шелдон) покупает баночку, выпивает ее содержимое и раздваивается!
 * Получившиеся два Шелдона встают в конец очереди. Затем следующий в очереди (Леонард) покупает баночку,
 * выпивает и встает в конец очереди в двойном экземпляре, и так далее. Этот процесс продолжается до бесконечности.
 *
 * Например, третью баночку колы выпьет Пенни, и очередь будет выглядеть так:
 * Раджеш, Говард, Шелдон, Шелдон, Леонард, Леонард, Пенни, Пенни.
 *
 * Напишите программу, которая выведет имя человека, выпившего n-ую баночку.
 *
 * Обратите внимание, что в самом начале очередь выглядит так: Шелдон, Леонард, Пенни, Раджеш, Говард.
 * Первым человеком является Шелдон.
 *
 * Входные данные
 * Входные данные состоят из единственного целого числа n.
 *
 * Выходные данные
 * Выведите единственную строку — имя человека, который выпьет n-ую баночку колы. Баночки нумеруются от 1.
 * Обратите внимание, что следует выводить имена в следующем написании: "Sheldon", "Leonard", "Penny", "Rajesh", "Howard".
 * Именно в этом порядке друзья стоят в очереди изначально.
 */

var doubleColaTests = [
    {
        parameters: [1],
        expectedResult: "Sheldon"
    },
    {
        parameters: [6],
        expectedResult: "Sheldon"
    },
    {
        parameters: [1802],
        expectedResult: "Penny"
    }
    // },
    // {
    //     parameters: [12345],
    //     expectedResult: "Leonard"
    // }
];

function doubleCola(n, i) {
  var friends = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'],
      name;

    for (i = 1; n >= i; i++) {
      name = friends.shift();
        friends.push(name);
        friends.push(name);
    }

  return name;
}

// function doubleCola(n, r){
//   let total=0, k=0, flag=false, len = n.length;
//   if(r <= n.length){
//     return n[r-1];
//   }
//   while(total < r && !flag){
//     total += len*(Math.pow(2, k))
//     console.log("Total:", total)
//     k++
//     if(total + len*(Math.pow(2, k)) >= r){
//       flag = true;
//     }
//   }
//   console.log(k);
//   var numInPlace = Math.pow(2, k);
//   console.log({
//     "Numbers of each": numInPlace,
//     "Total": total
//   });
//   var remainder = r - total;
//   var place = Math.ceil(remainder/numInPlace);
//   console.log(remainder);
//   console.log("Place in line: ", place);
//   return n[place-1];
// }
//
// doubleCola(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 45);


tasks.push({
    title: "Double Cola",
    solution: doubleCola,
    tests: doubleColaTests
});
