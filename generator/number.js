function genNumber({ minVal, maxVal, allowFloats }) {
    let num = Math.random() * (maxVal - minVal) + minVal;
    if (allowFloats) {
        return num;
    } else {
        return parseInt(num);
    }
}

module.exports = { genNumber }