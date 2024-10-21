const sumAll = function(start, end) {
    if (!(Number.isInteger(start)) || !(Number.isInteger(end)) || start < 0 || end < 0) {
        return "ERROR";
    }
    
    let res = start;
    if (start < end) {
        for (let curr = start + 1; curr <= end; curr++) {
            res += curr;
        } 
    } else if (end < start) {
        for (let curr = start - 1; curr >= end; curr--) {
            res += curr;
        }
    } else {
        return start;
    }
        
    return res;
};

// Do not edit below this line
module.exports = sumAll;
