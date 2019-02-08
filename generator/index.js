const Chance = require('chance');

const { genString } = require('./string');
const { genNumber } = require('./number');
const { guessKeys } = require('./json');

/**
 * Function to generate random data
 *
 * @param {object} sampleData - data to be mimicked
 * @param {boolean} shouldSeed - seed the random function using the sample data
 * @returns {object} data in the structure of the provided @param sampleData
 */
function generateRandomData(sampleData, shouldSeed) {
    let output;

    switch (typeof sampleData) {
        case "string": {
            output = genString(sampleData, seed);
        } break;

        case 'number': {
            output = genNumber(sampleData, seed);
        } break;

        case 'boolean': {
            output = Chance(seed && sampleData).bool();
        } break;

        case 'object': {
            if (Array.isArray(sampleData)) {
                output = genArray(sampleData, seed);
            } else {
                output = genJSON(sampleData, seed);
            }
        } break;

        case 'function': {
            const data = sampleData();
            //Enums
            if (Array.isArray(data)) {
                output = Chance(seed && data).pickone(data);
            }
        } break;

        default: output = null;
    }

    return output;
}

function genArray(sampleData, seed) {
    return sampleData.map((elm) => generateRandomData(elm, seed));
}

function genJSON(sampleData, seed) {
    let newObj = {};
    Object.keys(sampleData).forEach(el => {
        if(guess = guessKeys(el, sampleData[el], seed)){
            newObj[el] = guess;
        } else {
            newObj[el] = generateRandomData(sampleData[el], seed);
        }
    });
    return newObj;
}

module.exports = { generateRandomData }