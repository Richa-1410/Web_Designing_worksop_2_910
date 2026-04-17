//array
let numbers= [1,2,3,4,5];
console.log(numbers[0]);
console.log(numbers[2]);
console.log(numbers[1]);
//mix array
let mix = [1,"hello",{name:"smita"}];
console.log(mix[0]);
console.log(mix[1]);
console.log(mix[2]);
console.log(mix.length);
//functions
function greet(){
    console.log("hello world");
}
greet();
//normal function
function multiply(a,b){
    return a*b;
}
console.log(multiply(2,3));
//function expression(create funcn through variable)
const divide = function(a,b){
    return a/b;
};
console.log(divide(6,3));
//arrow funcn with no parameters
let hi =()=> console.log("hi"); //always through funcn expression
hi();
//arrow funcn with one parameter
let greetUser = (name) => console.log(`Hello, ${name}!`);
greetUser("Alice");
//map on array
let arr = [1,2,3,4,5];
let squaredArr = arr.map(num => num * num);
console.log(squaredArr);