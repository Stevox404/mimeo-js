function genNumber(val) {
    const minVal = Math.random() * (val - 0) + 0;
    const maxVal = Math.random() * (val - 0) + 0 + val;

    let num = Math.random() * (maxVal - minVal) + minVal;
    const int = parseInt(num);
    
    if (val%1) {
        const flt = num.toString().substring(0, num.toString().length+val.toString().match(/\.(.*$)/)[1].length);
        return parseFloat(flt);
    } else {
        return int;
    }
}

module.exports = { genNumber }