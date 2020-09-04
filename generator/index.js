const Chance = require('chance');

const { genString } = require('./string');
const { genNumber } = require('./number');
const { guessKeys } = require('./json');



/**
 * Options object to be passed to the generator function.
 * @typedef {object} generatorOpts
 * @property {any} seed - Seed to be used. Falsy values will prevent seeding
 * @property {object} seed - Seed to be used. Falsy values will prevent seeding
 */

/**
 * Function to generate random data
 *
 * @param {object} sampleData - data to be mimicked
 * @param {boolean|generatorOpts} opts - whether should seed the random function using the sample data or options object
 * @returns {object} data in the structure of the provided @param sampleData
 */


function generateRandomData(sampleData, opts = {}) {
    let output;

    const shouldSeed = (opts.seed) || opts === true;
    const { seed } = opts;
    const fnOpts = { shouldSeed, ...opts }

    switch (typeof sampleData) {
        case "string": {
            if (!Number.isNaN(Date.parse(sampleData)) && (
                /^\d+?\/\d+?\/\d+$/.test(sampleData) ||
                new Date(sampleData).toString() === sampleData ||
                new Date(sampleData).toISOString() === sampleData ||
                new Date(sampleData).toUTCString() === sampleData ||
                new Date(sampleData).toDateString() === sampleData ||
                new Date(sampleData).toTimeString() === sampleData
            )) {
                output = generateRandomData(new Date(sampleData), opts).toString();
                break;
            }
            output = genString(sampleData, fnOpts);
        } break;

        case 'number': {
            output = genNumber(sampleData, fnOpts);
        } break;

        case 'boolean': {
            output = Chance(shouldSeed && (seed || sampleData)).bool();
        } break;

        case 'object': {
            if (sampleData instanceof Date) {
                const d = new Date(sampleData);
                output = Chance(shouldSeed && (seed || sampleData)).date({ year: d.getFullYear() });
            }
            else if (Array.isArray(sampleData)) {
                output = genArray(sampleData, fnOpts);
            } else {
                output = genJSON(sampleData, fnOpts);
            }
        } break;

        case 'function': {
            const chance = Chance(shouldSeed && (seed || sampleData));
            output = sampleData(chance);
        } break;

        default: output = null;
    }

    return output;
}




function genArray(sampleData, opts) {
    return sampleData.map((elm) => generateRandomData(elm, opts));
}

function genJSON(sampleData, opts) {
    let newObj = {};
    Object.keys(sampleData).forEach(el => {
        newObj[el] = guessKeys(el, sampleData[el], opts);
    });
    return newObj;
}

module.exports = { generateRandomData }