let products = [
  { name: 'banana', type: 'fruta', quantity: '10', cost: '5' },
  { name: 'pasta de dente', type:  'higiene', quantity: '0', cost: '3' },
  { name: 'mamão', type: 'fruta', quantity: '3', cost: '13' },
  { name: 'pacu', type: 'higiene', quantity: '5', cost: '1' }
];
let filteredProducts = [];

// for (let i = 0; i < products.length; i++) {
//   if ( products[i].type === 'fruta' ) {
//     filteredProducts.push(products[i]);
//   }
// }

// filters
filteredProducts = products.filter( product => product.type === 'fruta' );

// Exercizes

// gimme a fruit that has more than 0 and it costs less than 10
filteredProducts = products.filter( product => {
  return product.type === 'fruta' 
  && product.quantity > 0
  && product.cost < 10
});
console.log(filteredProducts);


// Create a new array that only contains numbers greater than 50.  Assign this new array to a variable called 'filteredNumbers'.
let numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];
let filteredNumbers;

filteredNumbers = numbers.filter( number => number > 50 );
console.log(filteredNumbers);

// Filter the array of users, only returning users who have admin level access.  Assign the result to the variable 'filteredUsers'.
let users = [
  { id: 1, admin: true },  
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
 ];
let filteredUsers;

filteredUsers = users.filter( user => user.admin );
console.log(filteredUsers);

