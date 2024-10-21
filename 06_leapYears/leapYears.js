const leapYears = function(year) {
    
    return (Number.isInteger(year / 4) && !Number.isInteger(year / 100)) || Number.isInteger(year / 400);
};

// Do not edit below this line
module.exports = leapYears;
