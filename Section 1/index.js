console.log('Hello JavaScript');
console.log('Amaan Alam');

age = 21;
console.log(age);
console.log(typeof age);

message = 'nice';
console.log(message);
console.log(typeof message);

isHungry = true;
console.log(typeof isHungry);

empty = null;
console.log(empty);

if(age >= 18){
    console.log('You are eligible for DL');
    x = 'this should be global';
    // let y = 'this should be local';
    var z = 'this should be local';
    // const pi = 3.14;
    // pi = 24.158476;
}else{
    console.log("You are not eligible for DL");
}

console.log(x);
// console.log(y);
console.log(z);
// console.log(pi);


//Arithematic Operator
// + : Addition
// - : Subtraction
// * : Multiplication
// / : Division
// % : Modulus
// ** : Exponential

console.log(2 ** 5);
console.log(25 **(1/2));