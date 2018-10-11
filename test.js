const mimic = require('./index.js').mimic;

console.log("Get random 'similar' data. Similar in the loosest sense.\n\n");

console.log('Get random string:',mimic('yfsyfvasyvtyaftycv'));
console.log('Choose from list [A-E]:',mimic(() => ['A', 'B', 'C', 'D', 'E']));
console.log('Get random number:',mimic(274));
console.log('Get random boolean:',mimic(true));
console.log('Get random array:',mimic([1, 2, 345, 40]));
console.log('Get random object:',mimic(
    { 
        email: 'foo@bar.com', 
        username: 'foo404',
        role: () => ['administrator', 'moderator', 'user'], 
        details: { 
            gender: 'male', 
            dob: new Date(), 
        } 
    }
));

//TODO: Write proper tests