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
            if (new Date(sampleData) instanceof Date && !isNaN(new Date(sampleData))){
                output = generateRandomData(new Date(sampleData), shouldSeed).toString();
                break;
            }
            output = genString(sampleData, shouldSeed);
        } break;

        case 'number': {
            output = genNumber(sampleData, shouldSeed);
        } break;

        case 'boolean': {
            output = Chance(shouldSeed && sampleData).bool();
        } break;

        case 'object': {
            if (sampleData instanceof Date ) {
                output = Chance(shouldSeed && sampleData).date();
            }
            else if (Array.isArray(sampleData)) {
                output = genArray(sampleData, shouldSeed);
            } else {
                output = genJSON(sampleData, shouldSeed);
            }
        } break;

        case 'function': {
            const data = sampleData();
            //Enums
            if (Array.isArray(data)) {
                output = Chance(shouldSeed && data).pickone(data);
            }
        } break;

        default: output = null;
    }

    return output;
}

function genArray(sampleData, shouldSeed) {
    return sampleData.map((elm) => generateRandomData(elm, shouldSeed));
}

function genJSON(sampleData, shouldSeed) {
    let newObj = {};
    Object.keys(sampleData).forEach(el => {
        if(guess = guessKeys(el, sampleData[el], shouldSeed)){
            newObj[el] = guess;
        } else {
            newObj[el] = generateRandomData(sampleData[el], shouldSeed);
        }
    });
    return newObj;
}

module.exports = { generateRandomData }