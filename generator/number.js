const Chance = require('chance');

function genNumber(val, { shouldSeed, seed }) {
    const min = Chance(shouldSeed && (seed || val)).floating({ min: 0, max: 1 }) * (val - 1) + 1;
    const max = Chance(shouldSeed && (seed || val)).floating({ min: 0, max: 1 }) * (val - 1) + 1 + Math.abs(val);

    let num = Chance(shouldSeed && (seed || val)).floating({ min, max });

    const int = parseInt(num);

    if (val % 1) {
        // Float to have equal scale
        const flt = num.toString().substring(0, int.toString().length + val.toString().match(/\..*$/)[0].length);
        return parseFloat(flt);
    } else {
        return int;
    }
}

module.exports = { genNumber }