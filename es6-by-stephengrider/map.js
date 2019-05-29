let numbers = [1,2,3];
let doubledNumbers = [];

// Old way
for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push( numbers[i] * 2 );
}
console.log(doubledNumbers);

// Map
let double = numbers.map( (number) => {
  return number * 2;
});
console.log(double);


let cars = [
  {car: 'fusca', price: 'CHEAP'},
  {car: 'BMW', price: 'expensive'},
  {car: 'monza', price: 'CHEAP'}
];

let prices = cars.map( (car) => {
  return car.price;
});

console.log(prices);


// Exercize: Using map, create a new array that contains the 'height' property of each Object.
let images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

let heights = images.map( image => {
  return image.height;
});

console.log(heights);

// Exercize: create a new array that contains the speed value from each trip.
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

let speeds = trips.map( trip => {
  return trip.distance / trip.time;
});

console.log(speeds);

// Exercize: Implement a 'plunk' function. Pluck should accept an array and a string representing a property name and return an array containing that property from each object.
const pluck = ( array, property ) => {
  return array.map( item => item[property] );
}

console.log( pluck( images, 'width' ) );
console.log( pluck( trips, 'distance' ) );

