const fibonacci = function(n) {
    n = Number(n);
    if (n === 1 || n === 2) {
        return 1;
    } else if (n < 0) {
        return "OOPS";
    } else if (n === 0) {
        return 0;
    }
    let first = 1;
    let second = 1;
    while (n > 2) {
        const temp = second;
        second = second + first;
        first = temp;
        n--;
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
