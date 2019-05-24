
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

// map();
// filter();
// find();
// every();
// some();
// reduce();

