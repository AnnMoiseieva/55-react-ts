console.log('Hi');
// --------------------------------------------------------------------------------
//                                  Destructuring
// --------------------------------------------------------------------------------

//                                     Arrays
const fruits = ['apple', 'grape'];

const arr = [...fruits, 'cherry'];

console.log(arr);
console.log(fruits);

//                                     Objects
const bookObj = {
    bookName: 'Great Gatsby',
    price: 20,
};

// Task:
// create a new object newBookObj ​​and add a new property author to it
const newBookObj = { ...bookObj, author: "Fitzgerald" };
console.log(newBookObj);

// --------------------------------------------------------------------------------
//                              Destructure assignment
// --------------------------------------------------------------------------------

//                                     Arrays
const colors = ['red', 'black'];
// Option 1 - copy values ​​from an array to variables
// const color1 = colors[0];
// const color2 = colors[1];

// Option 2 - copy values ​​from an array to variables 
// (using destructuring assignment)
const [color1, color2] = colors; // assigns in order
console.log(color1);
console.log(color2);
console.log(colors);

//                                     Objects

const animal = {
    title: 'Dog',
    weight: 20,
}

// Option 1
// const title = animal.title;

// Option 2
// When destructuring the assignment of objects, 
// it is necessary to specify the exact names of the properties 
// and then variables with the same names will be created. 
// If aliases are NOT specified
const { title, weight } = animal;
console.log(title);
console.log(weight);
console.log(animal);

// If aliases ARE specified (using ':')
const { weight: animalWeight } = animal;
console.log(animalWeight);
console.log(animal);