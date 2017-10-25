 // Створити об'єкт. В цьому об'єкті написати власні
 // реалізації наступних методів масиву: pop(), push(),
 // slice(), join(), reverse()
 //https://learn.javascript.ru/task/get-last-in-array
 ;(function users(){
   let testing = ['a','b','c',4,5,6]
   console.log(testing);
   let methods = {

     pop:function (){
       /*delete this[5];*/
       /* return this.splice(5)*/
       return this.splice(this.length-1, 1)
       /*return this;*/
     },
     push:function (number){
       return this[this.length] = number;
       /*return this.unshift(this.length-1,1)=number;*/
       /*return this.push(7);*/
     },
     slice:function (begin, end){
       let testing = [];
       for (begin; begin < end; begin++) {
           testing.push(this[begin]);
       }
       return testing;
       /*return Array.prototype.slice.call(arguments, 0)*/
     },
    //  x.sum(y) === x + y
     join:function (x){
       let sum = '';
       let y;
       for (y = 0; y < this.length; y++) {
           if (y === 0 && this[y] !== undefined) {
               sum += this[y];
           } else if (this[y] === undefined) {
               sum = sum + y;
           } else {
               sum = sum + y + [this[y]];
           }
       }

       return sum;
      //  let testing=[];
      //  return testing;
       /*return this.join();*/
     },
     reverse:function (){
       var testing = [];

       for (var i = 0; i < this.length; i++) {
           testing.unshift(this[i]);
       }
       return testing;
        // for (var i = 0, len = this.length; i <= len; i++)
        //   testing.push(String(this).charAt(len - i));
        // return testing.join('');
     },
   };
   methods.pop.call(testing);
   console.log('method pop');
   console.log(testing);

   methods.push.call(testing,7);
   console.log('method push');
   console.log(testing);

  //  methods.slice.call(testing);
   console.log('method slice');
    // console.log(testing);
   console.log(methods.slice.call(testing, 4, 5));

   methods.join.call(testing);
   console.log('method join');
   console.log(String(testing));

   console.log('method reverse');
   console.log(methods.reverse.call(testing));

  //  methods.reverse.call(testing);
  //  console.log('method reverse');
  //  console.log(testing);
  console.log('Продемонструэмо роботу кожного методу, перевизначивши метод прототипу масиву:');

  Array.prototype.pop = methods.pop;
  var prototypePop = ['g','k','h',8,9,10];
  prototypePop.pop();
  console.log(prototypePop);

  Array.prototype.push = methods.push;
  let prototypePush = ['g','k','h',8,9,10];
  prototypePush.push(11);
  console.log(prototypePush);

  Array.prototype.slice = methods.slice;
  let prototypeSlice = ['g','k','h',8,9,10];
  console.log(prototypeSlice.slice(4,5));

  Array.prototype.join = methods.join;
  console.log(['g','k','h',8,9,10].join(''));

  Array.prototype.reverse = methods.reverse;
  let prototypeReverse = ['g','k','h',8,9,10];
  console.log(prototypeReverse.reverse());

  //  users.name = ['Nathan','William','Eugene','Natalia','Victor'];
  //  users.age = [17,55,12,19,22,55,33,16];
   //
  //  usName = users.name.slice(2);
  //   console.log(usName);
  //  usAge= users.age.pop(3);
  //   console.log(usAge);*/
})();
