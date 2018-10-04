const { genString } = require('./string');
const { genNumber } = require('./number');

function generateRandomData(sampleData) {
    let output;

    switch (typeof sampleData) {
        case "string": {
            output = genString(sampleData);
        } break;

        case 'number': {
            output = genNumber(sampleData);
        } break;

        case 'boolean': {
            output = parseInt(Math.random() * 10) % 2 ? true : false;
        } break;

        case 'object': {
            if (Array.isArray(sampleData)) {
                output = genArray(sampleData);
            } else {
                output = genJSON(sampleData);
            }
        } break;

        default: output = null;
    }

    return output;
}

function genArray(sampleData) {
    return sampleData.map((elm) => generateRandomData(elm));
}

function genJSON(sampleData) {
    let newObj = {};
    Object.keys(sampleData).forEach(el => {
        newObj[el] = generateRandomData(sampleData[el]);
    });
    return newObj;
}

module.exports = { generateRandomData }