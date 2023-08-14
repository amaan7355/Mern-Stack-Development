const nums = [324, 57, 3, 5 ,56 ];

const res = nums.map( (n) => { return n**2 } );

console.log(res);

const filtered = nums.filter((n) => { return n%2==0 })
const result = filtered.map((m) => {return m**2});

console.log(filtered);
console.log(result);