
// array helpers

const colors = ['blue', 'gray', 'black', 'red', ''];

// traditional for
// for( var i = 0; i < colors.length; i++ ) {
//   console.log(colors[i]);
// }

// foreach
colors.forEach( color => {
  console.log( color );
});

colors.forEach( ( value, index, colors ) => {
  console.log(`Valor: ${ value }, index: ${ index }, array: ${ colors }`);
});


const logArrayElements = ( value, index, colors ) => {
  console.log( `arr[${ index }] = ${ value }` );
}
colors.forEach( logArrayElements );


// Exercize: the images array contains objects with the sizes, calculate the area of each image and sote in a new array called areas.

const images = [
  {height: 10, width: 30},
  {height: 20, width: 25},
  {height: 40, width: 40}
]
const areas = [];

images.forEach( (image) => {
  areas.push( image.width * image.height );
});

console.log(areas);




// map();
// filter();
// find();
// every();
// some();
// reduce();

