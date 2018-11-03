const Chance = require('chance');

function genString(str, seed) {
    const length = str.length;
    const words = str.split(' ').length;

    
    if(!words){
        return Chance(seed && str).word({length});
    } else {
        return Chance(seed && str).sentence({words});
    }
}

module.exports = { genString };