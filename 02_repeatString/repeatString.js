const repeatString = function(s, numRepeat) {
    if (numRepeat === 0 || s === "") {
        return "";
    } else if (numRepeat < 0) {
        return "ERROR";
    }
    let res = s;
    for (let i = 1; i < numRepeat; i++) {
        res = res + s
    } 
    return res;
};

// Do not edit below this line
module.exports = repeatString;
