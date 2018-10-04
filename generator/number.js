function genNumber(val) {
    const minVal = Math.random() * (val - 1) + 1;
    const maxVal = Math.random() * (val - 1) + 1 + val;

    let num = Math.random() * (maxVal - minVal) + minVal;
    const int = parseInt(num);
    
    if (val%1) {
        const flt = num.toString().substring(0, int.toString().length+val.toString().match(/\..*$/)[0].length);
        return parseFloat(flt);
    } else {
        return int;
    }
}

module.exports = { genNumber }