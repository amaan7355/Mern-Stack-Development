let user = {
    name: 'ramu',
    email: 'ramu@mail.com',
    password: '8765432123',
    age: 32
};
console.log(user.name);
console.log(user['email']);

user.password = 'abrakadabra';
user.address = 'Lucknow';
console.log(user);

let smartphone = {
    brand : 'Samsung',
    model : 'S23',
    price : 70000,
    colors : ['black', 'white', 'blue'],
    features : {
        cpu : 'sd 865',
        ram : '8gb',
        storage : '128gb'
    }
};

console.log(Object.keys(smartphone));
console.log(Object.values(smartphone));

// syntax to access third color from smartphone

console.log(smartphone.colors[2]);
//console.log(smartphone['colors[2]']);

smartphone.colors[2] = 'grey';
console.log(smartphone);

// syntax to change the value of cpu from sd 865 to 880
smartphone.features.cpu = 'sd 880';
console.log(smartphone);

// Display all the keys of features object 
console.log(Object.keys(smartphone.features));

let smartphones = [
{
    brand : 'Poco',
    model : 'M4 Pro ',
    price : 70000,
    colors : ['black', 'blue']
},

{
    brand : 'Mi',
    model : 'Note 14 Pro',
    price : 25000,
    colors : ['white', 'Yellow']
},
{
    brand : 'Nothing',
    model : '2',
    price : 50000,
    colors : ['black', 'white']
},
{
    brand : 'Realme',
    model : '5 Pro',
    price : 28000,
    colors : ['blue', 'Purple']
},
];

//1. change price of 2nd phone to 35000
smartphones[1].price = 35000;
console.log(smartphones);

//2. add a new color to last 2nd phone
smartphones.at(-2).colors.push('white');
console.log(smartphones);

//3. Use a for of loop to count the number of phone having price less than 50000

let count = 0;
for (let phone of smartphones){
    if (phone.price < 50000){
        count++;
    }
}
console.log(count);

// use map to get an array of all the brands of smartphones 
 let brands = smartphones.map((phone) => {return phone.brand});
 console.log(brands);

// use filter get all smartphones having price less than 50000
let phone1 = smartphones.filter((phone) => {return phone.price<50000});
console.log(phone1);

// use filter get all smartphones having color black
let phone2 = smartphones.filter((phone) => {return phone.colors.includes('black')});
console.log(phone2);
