const mimic = require('./index.js').mimic;

console.log(mimic('yfsyfvasyvtyaftycv'));
console.log(mimic(274));
console.log(mimic(true));
console.log(mimic([1, 2, 3, 4]));
console.log(mimic({ email: 'foo@bar.com', bar: 404, baz: { test: 44, data: true } }));

console.log("\n\nTODO: Write proper tests");