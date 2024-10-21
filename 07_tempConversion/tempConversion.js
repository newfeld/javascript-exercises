const convertToCelsius = function(f) {
  // (f - 32) * (5 / 9)
  let cel = (f - 32) * (5 / 9);
  if (Number.isInteger(cel)) {
    return cel;
  } else {
    return Number(((f - 32) * (5 / 9)).toFixed(1));
  }
};

const convertToFahrenheit = function(c) {
  // c * (9/5) + 32
  let fa = ((c * (9/5)) + 32);
  if (Number.isInteger(fa)) {
    return fa;
  } else {
    return Number(((c * (9/5)) + 32).toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
