const Chance = require('chance');

function guessKeys(key, val){
    if( typeof val === 'function') {
        const data = val();
        //Enums
        if (Array.isArray(data)) {
            return Chance().pickone(data);
        }
    }
    if(/email/i.test(key)){
        return Chance(val).email({domain: 'example.com'});
    }
    if(/firstName|fName/i.test(key)){
        return Chance(val).first();
    }
    if(/name/i.test(key)){
        if(val.split(' ').length>1){
            return Chance(val).name();
        } else {
            return Chance(val).last();
        }
    }
    if(/gender/i.test(key)){
        const gen = Chance(val).gender();
        return val.length > 1 ? gen : gen[0];
    }
    if(/d\.?o\.?b|date|birthday/i.test(key) && val instanceof Date){
        return Chance(val).birthday();
    }
    if(/city|town/i.test(key)){
        return Chance(val).city();
    }
    
    return false;
}

module.exports = { guessKeys }