function genString() {
    return Math.random().toString(36).substring(Math.random() * 10 + 2);
}

module.exports = { genString };