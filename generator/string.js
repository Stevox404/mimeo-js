const Chance = require('chance');

function genString(str, { shouldSeed, seed }) {
    const length = str.length;
    const words = str.split(' ').length;


    if (!words) {
        return Chance(shouldSeed && (seed || str)).word({ length });
    } else {
        return Chance(shouldSeed && (seed || str)).sentence({ words });
    }
}

module.exports = { genString };