const Chance = require('chance');

function guessKeys(key, val, seed){
    if( typeof val === 'function') {
        const data = val();
        //Enums
        if (Array.isArray(data)) {
            return Chance(seed && val).pickone(data);
        }
    }
    if(/email/i.test(key) && /.+?@.+\..+/.test(val)){
        return Chance(seed && val).email({domain: 'mailinator.com'});
    }
    if(/firstName|fName/i.test(key) && typeof val === 'string'){
        return Chance(seed && val).first();
    }
    if(/name/i.test(key) && typeof val === 'string'){
        if(val.split(' ').length>1){
            return Chance(seed && val).name();
        } else {
            return Chance(seed && val).last();
        }
    }
    if(/gender/i.test(key) && typeof val === 'string'){
        const gen = Chance(seed && val).gender();
        return val.length > 1 ? gen : gen[0];
    }
    if(/d\.?o\.?b|date|birthday/i.test(key) && val instanceof Date){
        return Chance(seed && val).birthday();
    }
    if(/city|town/i.test(key) && typeof val === 'string'){
        return Chance(seed && val).city();
    }
    
    return false;
}

module.exports = { guessKeys }
