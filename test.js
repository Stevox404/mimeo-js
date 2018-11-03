const mimic = require('./index.js').mimic;

console.log("Get random 'similar' data.\n\n");

console.log('Get random string:',mimic('hippopotumus'));
console.log('Get random sentence:',mimic('Hello there World!'));
console.log('Choose from list [A-E]:',mimic(() => ['A', 'B', 'C', 'D', 'E']));
console.log('Get random number:',mimic(274));
console.log('Get random double:',mimic(-27.5664, true));
console.log('Get random boolean:',mimic(true));
console.log('Get random array:',mimic([1, 2, [345, 6, 23], 40]));
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