name = 'Ben';
var name;
console.log(name);
setName();
function setName(){
    var name = 'Ben';
    console.log(name);
}

console.log('first');
let avg = findAvg(2,2);
console.log('second');
function findAvg(a,b){
    console.log('inside findAvg');
    var answer = (a+b)/2;
    return answer;
}

let fruits = ['cherry', 'apple', 'blueberry', 'strawberry'];
// let favFruit;
function firstFruit(){
    console.log(fruits[0]);
    let favFruit = fruits[1];
    let leastFav = fruits[0];
    function fav(){
        console.log(favFruit+' is my favorite');
    }
    function notFav(){
        console.log(leastFav+' is my least favorite')
    }
    fav();
    notFav();
}
firstFruit();

sayHello();
function sayHello(){
    console.log('Hello');
}

let boo = function boo(){alert('BOO')};
boo();