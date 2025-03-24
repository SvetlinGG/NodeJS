const querystring = require('querystring');

// URL

const address = 'https://en.wikipedia.org/wiki/Node.js?name=Pesho&age=52#Internals';
const url = new URL(address);

console.log(address);
console.log(url);

// querystring


const searchQuery = 'name=Pesho&age=52';
const qs = querystring.parse(searchQuery);
console.log(qs);


