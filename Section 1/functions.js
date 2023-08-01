function addNums(a, b){
    var c = a+b;
    console.log(c);
};

addNums(45, 789);
// console.log(c);

const factorial = function(n){
    let f = 1;
    for(let i=2; i<=n; i++){
        f *= i;
    };

    console.log(f);
}

factorial(5);

const calcPercent = (m1, m2, m3, m4, m5) => {
    const total = m1+m2+m3+m4+m5;
    const percent = total/5;
    // console.log(percent);
    return percent;
}

let percent = calcPercent(45, 78, 90, 100, 99);

console.log(percent);

console.log( '345' === 345 );
console.log( '345'+345+false );
console.log( 345+345+true );