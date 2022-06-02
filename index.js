// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//closure example Javascript
var sum = function (a) {
  console.log('sum result - ' + a);
  var c = 1;
  return function (b) {
    return a + b + c;
  };
};
var store = sum(5);
console.log('inner function result - '+store(2));

//normally function call k bad value retain nahi hoti in other languages,
//but JS m retain kr rahi a and c ki value inner funciton k sath CLOSURE,
//funciton call k bad value lost nahi hote retain kar skte h JS m
//inner function is showing lexical scope

//example 2
//show multiple return value from funciton
var add = function(a,b,c){
  return{
    getSumTwo:function(){
      return a+b;
    },
    getSumThree:function(){
      return a+b+c;
    }
  }
}
var store2 = add(2,3,1);
console.log("addition for 2 variable calling getsumtwo funciton- "+store2.getSumTwo());
console.log("addition for 3 variable calling getsumthree funciton- "+store2.getSumThree());

var store3 = add(2,5,3);
console.log("addition for 2 variable calling getsumtwo funciton- "+store3.getSumTwo());
console.log("addition for 3 variable calling getsumthree funciton- "+store3.getSumThree());