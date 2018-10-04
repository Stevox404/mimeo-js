const mimic = require('./index.js').mimic;

console.log(mimic('yfsyfvasyvtyaftycv'));
console.log(mimic(786));
console.log(mimic(true));
console.log(mimic([1, 2, 3, 4]));
console.log(mimic({ foo: 'mine', bar: 123, baz: { test: 5454, data: true } }));

console.log("\n\nTODO: Write proper tests");