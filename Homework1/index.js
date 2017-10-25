// pop
var cities = ["Kiev", "Kharkiv", "Dnipro", "Odessa", "Lviv"];
del = cities.pop();
console.log(cities)

// push
adding = cities.push("Lviv", "Vinnytsia");
console.log(cities)

// concat
var centralUkraine = ["Cherkasy", "Chernihiv", "Kiev", "Vinnytsia", "Zhytomyr"],
    westUkraine = ["Rivne", "Lviv", "Ternopil", "Volyn"];
var centralwestUkraine = centralUkraine.concat(westUkraine);
console.log(centralwestUkraine);

// indexOf
var cherkasyoblast = ["Kiev", "Kharkiv", "Dnipro", "Odessa", "Lviv"];

var obl = "Kiev is at position" + cherkasyoblast.indexOf("Kiev");
  obl += "Lviv is at position" + cherkasyoblast.indexOf("Lviv");
  obl += "Rivne is at position" + cherkasyoblast.indexOf("Rivne");
console.log(obl);

// join
var ukraine = ["Cherkasy", "Chernihiv", "Kiev", "Vinnytsia", "Zhytomyr", "Rivne", "Lviv", "Ternopil", "Volyn"];
var listofcities = ukraine.join();
console.log(listofcities);

// forEach
var ukrcities = ["Cherkasy", "Chernihiv", "Kiev", "Vinnytsia", "Zhytomyr", "Rivne", "Lviv", "Ternopil", "Volyn"];
ukrcities.forEach(function (item, index, array) {
  console.log(item, index);
});

// filter
function prices(amount) {
  return amount >= 10 && amount <= 10000;
}

var pricesfilter = [1, 876, 98, 1299, 5, 8, 13000, 44].filter(prices);
console.log(pricesfilter)

//find
function numbers(amount) {
  return amount > 1 && amount <= 100;
}

var numbersfilter = [1, 876, 98, 1299, 5, 8, 13000, 44].find(numbers);
console.log(numbersfilter)

//map
var values = [1, 6, 98, 12, 5, 8, 130, 44];
var roots = values.map(function(x) {
   return x*6;
});
console.log(roots)

// slice
var town = ["Cherkasy", "Chernihiv", "Kiev", "Vinnytsia", "Zhytomyr", "Rivne", "Lviv", "Ternopil", "Volyn"];
var sliced = town.slice(2, 8);

console.log(sliced); // ["one", "two"]

// splice
var towns = ["Cherkasy", "Chernihiv", "Kiev", "Vinnytsia", "Zhytomyr", "Rivne", "Lviv", "Ternopil", "Volyn"];
var spliced = towns.splice(2, 4, "Dnipro");

console.log(spliced);

// shift
var a = [ "Chernihiv", "Cherkasy", "Kiev", "Vinnytsia", "Zhytomyr", "Rivne", "Lviv", "Ternopil", "Volyn"];
var b = a.shift();

console.log(a);
console.log(b);

// unshift
var sa = [ "Chernihiv", "Cherkasy", "Kiev", "Vinnytsia", "Zhytomyr"];
sa.unshift( "Rivne", "Lviv", "Ternopil", "Volyn");

console.log(sa);
