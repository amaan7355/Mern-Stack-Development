const nums = [3, 5, 6, 9, 12, 8];
for (i=0; i<nums.length; i++){
    console.log(nums[i] ** 2);
}
console.log('--------');

// for of Loop

for (let i of nums){
    console.log(i ** 2);
}
console.log('--------');

for (let i of 'Hello'){
    console.log(i);
}console.log('--------');

for (let i of nums.slice(0, 3)){
    console.log(i ** 2);
}

