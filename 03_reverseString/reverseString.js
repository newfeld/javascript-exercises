const reverseString = function(s) {    
    let res = "";
    for (let i = 0; i < s.length; i++) {
        res = s[i] + res;
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
