let internalCounter = 0;

function continuous_substr (str, length) {
  if (str.length < length) {
    length = str.length;
  }
  if (internalCounter >= str.length) {
    return '';
  }
  let substr = str.substr(internalCounter, length);
  internalCounter += length;
  return substr;
}

function reset_continuous_substr () {
  internalCounter = 0;
}

module.exports = { continuous_substr, reset_continuous_substr };
