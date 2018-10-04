function genString(str) {
    let output = '';
    if(/[ ]/.test(str)){
        while ((output += ((output.length > 0) ? ' ' : '') + getStr()).length < str.length + Math.random()*10);
    } else {
        while ((output += getStr()).length < str.length + Math.random()*10);
    }
    function getStr(){
        return Math.random().toString(36).substring(Math.random() * 10 + 2);
    }

    return output;
}

module.exports = { genString };