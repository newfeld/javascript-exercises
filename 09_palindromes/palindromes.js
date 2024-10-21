const palindromes = function (s) {
    
    s = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    console.log(s);
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        if (s[l] != s[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
