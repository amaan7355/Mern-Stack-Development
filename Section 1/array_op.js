const nums = [1, 5, 7, 6, 28, 89, 75, 32];

// program to square each element of array

const res = nums.map( (n) => { return n**2 } );

console.log(res);

// program to divide each element of array by 2

const res2 = nums.map( (n) => { return n/2 } );

console.log(res2);

const prices = ['$43.99', '$9.20', '$992.50', '$34.999'];
// program to convert each element of array to integer


console.log('$43.99'.slice(1));

const res3 = prices.map( (p) => { return parseInt(p.slice(1)) } );

console.log(res3);

const res4 = nums.map( (n) => { return n%2===0 ? n/2 : n*3 } );

console.log(res4);

const filterArr1 = nums.filter( ( a ) => { return a%2===0 } );

console.log(filterArr1);

const prices2 = [345, 299, 788, 1024, 99, 291, 124, 3821, 800];

// program to filter out prices greater than 500
// filter out price which is not a perfect square
// filter out price that is a prime number

const filteredPrices = prices2.filter( (p) => { return p<500 } );
const perfectPrices = prices2.filter( (p) => { return Math.sqrt(p)%1===0 } );