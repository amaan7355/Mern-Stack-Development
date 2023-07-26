const nums = [23, 6, 5, 34, 57, 62, '8674'];
console.log(nums);
console.log(typeof nums);
console.log('--------');

const movies = ['Batman', 'Oppenheimer', 'Inception', 'Gadar', 'Pathan', 'Jawan'];
console.log(movies.length);
console.log(movies[3]);
console.log(movies[-2]);
console.log(movies.at(-3));

//  SLICING
console.log(movies.slice(2,5));
console.log(movies.slice(2,-2));
console.log(movies.slice(2));
console.log(movies.slice(2,100));
console.log('--------');

// ADDING ELEMENTS
movies.unshift('Flash');  // Adding elements at the start
movies.push('PK');   // Adding elements at the end
console.log(movies);
console.log('--------');

// REMOVING ELEMENTS
movies.shift();  // remove elements from the start
movies.pop();   // remove elements from the end
console.log(movies);
console.log('--------');

// SPLICE
movies.splice(2, 2); // removes from 2nd index element and two elements will be removed.
console.log(movies);
movies.splice(0, 1, 'Titanic'); // replace 0th index element with new input element
console.log(movies);
movies.splice(2, 3); 
console.log(movies);
console.log(...movies);  // Spread operator (...)
console.log(['AMK', ...movies, 'DDLJ', 'YJHD']);

