const sum = require('./calculator');
const executeCalc = require('./third-party-modules');
require('./core-modules')

console.log(sum(4, 5));
executeCalc();
