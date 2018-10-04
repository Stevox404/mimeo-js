const chance = require('chance').Chance();

function guessKeys(key, val){
    if(/email/i.test(key)){
        return chance.email();
    }
    if(/firstName|fName/i.test(key)){
        return chance.first();
    }
    if(/name/i.test(key)){
        if(val.split(' ').length>1){
            return chance.name();
        } else {
            return chance.last();
        }
    }
    if(/gender/i.test(key)){
        const gen = chance.gender();
        return val.length > 1 ? gen : gen[0];
    }
    if(/d\.?o\.?b|date|birthday/i.test(key) && val instanceof Date){
        return chance.birthday();
    }
    if(/city|town/i.test(key)){
        return chance.city();
    }
    
}