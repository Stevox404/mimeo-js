const Chance = require('chance');

function genNumber(val, { shouldSeed, seed }) {
    const decPwr = Number(1 + String(Number(val)).substr(1).replace(/\d/g, 0));
    const max = val + decPwr;
    const min = Math.max(val - decPwr, 0);

    let num = Chance(shouldSeed && (seed || val)).floating({ min, max });
    const sign = val > 0? '':'-';

    const int = Number.parseInt(sign + num);

    if (val % 1) {
        // Float to have equal scale
        const flt = num.toString().substring(0, int.toString().length + val.toString().match(/\..*$/)[0].length);
        return Number.parseFloat(sign + flt);
    } else {
        return int;
    }
}

module.exports = { genNumber }