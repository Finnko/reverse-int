module.exports = function reverse (n) {
    let res = '';
    const str = Math.abs(n).toString();

    for (const char of str) {
        res = char + res;
    }

    return Number(res);
}
