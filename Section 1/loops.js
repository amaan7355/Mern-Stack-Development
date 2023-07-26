//   FOR LOOP
for(let i=0; i<10; i++){
    console.log(i);
};
console.log("---------");

for(i=20; i>=0; i-=3){
    console.log(i);
}
console.log("---------");

//WAP to print all no. divisible by 7 & 11 in range of 50 - 100;
for(let i=50; i<=1000; i++){
    if (i % 7 === 0 && i % 11 === 0){
        console.log(i);
    }
}
console.log("---------");

//WAP to check whether the no. is perfect square or not.
let n=25;
const sqrt = n**0.5;
if(sqrt === parseInt(sqrt)){
    console.log("Perfect Square");
}else{
    console.log("Not a Perfect Square");
}

console.log("---------");

console.log(79 == '79');// two equals only check value
console.log(79 === '79');// three equals check value and type both
console.log("---------");

//     WHILE LOOP

let myNum = 5;
while(myNum<20){
    console.log(myNum);
    myNum += 2
}
console.log("---------");

// DO WHILE LOOP
myNum = 5;
do{
    console.log(myNum);
    myNum++;
}while(myNum < 10);
console.log("---------");

// WAP to reverse digits of a number
let num = 3745;
let rev = 0;
while(num>0){
    d = num % 10;
    rev = rev * 10 + d;
    num = parseInt(num/10);
}
console.log(rev);
console.log("---------");