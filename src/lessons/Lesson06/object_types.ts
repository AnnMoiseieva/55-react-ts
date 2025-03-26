//--- Type any - any type can be used
let city: any = "Berlin";
city = ["Paris", 12334];

//--- Typing an object via an interface
interface User {
  name: string,
  age?: number | string
}

const userData: User = {
  name: "Tom",
  age: 34,
}

interface User {
  isAdmin?: boolean
}

//--- Interface inheritance
interface Admin extends User {
  email: string,
  tel: string
}

const personData: Admin = {
  name: "Bob",
  email: "asd@gmail.com",
  tel: "904578"
}

const newUser: User = {
  name: "John",
  // email: '' - error
}

//--- Typing via 'type'
//using 'type' to create a complex type
type Weight = string | number | null;

let userWeight: Weight = "52";
let animalWeight: Weight = null;

//example of using union to restrict a variable by value
type Status = "success" | "error" | "loading";
let requestStatus: Status = "success";
requestStatus = "loading";

//   example of an incorrect value
//   requestStatus = 'eror';

//using type to typify an object
type Animal = {
  name: string,
  weight?: number
};

const animalData: Animal = {
  name: "Lion",
  weight: 200
}

//  !types with the same names cannot be created
//  type Animal = {country: string};

//type union
type NewAnimal = Animal & { country: string };

const zebra: NewAnimal = {
  name: "Zebra",
  country: "Africa",
};

const dog: Animal = {
  name: "Dog",
  // country: 'Germany'
}

//GenericType - generic is a variable that we can substitute into
// the required type at the moment of using this type (interface)
type CustomArrayType<T = null> = (string | T)[];

const arrayMix1: CustomArrayType<number> = ["red", 123, "black"];
const arrayMix2: CustomArrayType<number[]> = ["apple", [1, 4, 1]];
const arrayMix3: CustomArrayType = ["zebra", null];

// Genetic&Interface
interface Fruit<T = number> {
  title: string,
  address: T
}

const fruitObj: Fruit<string> = {
  title: "Grape",
  address: "London, str..."
}

//--- Numeric enumeration
enum Colors { Red, Black = 6, Green };

//---String enumeration
// enum for traffic light colors
export enum TRAFFIC_LIGHT {
  RED = "red",
  YELLOW = "yellow",
  GREEN = "green"
}

// Named export example
export const getAction = (light: TRAFFIC_LIGHT) => {
  switch (light) {
    case TRAFFIC_LIGHT.RED:
      return "Stop!";
    case TRAFFIC_LIGHT.YELLOW:
      return "Get ready to go!";
    case TRAFFIC_LIGHT.GREEN:
      return "You can go!";
  }
}