const { genString } = require('./string');
const { genNumber } = require('./number');

generateRandomData('yfsyfvasyvtyaftycv');
generateRandomData(786);
generateRandomData(true);
generateRandomData([1, 2, 3, 4]);
foo = generateRandomData({ foo: 'mine', bar: 123, baz: { test: 5454, data: true } });

console.log(foo)


function generateRandomData(sampleData, opts = {
    //Default opts
    noSpaces: false, //typeof string :: TODO alphaNumeric, symbols
    maxVal: 9001, minVal: 0, allowFloats: false //typeof number
}) {
    let output;
    const { noSpaces = false, } = opts;
    const { maxVal, minVal, allowFloats } = opts;

    switch (typeof sampleData) {
        case "string": {
            output = '';
            while ((output += ((!noSpaces && output.length > 0) ? ' ' : '') + genString()).length < sampleData.length + Math.random()*10);
        } break;

        case 'number': {
            output = genNumber(opts);
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