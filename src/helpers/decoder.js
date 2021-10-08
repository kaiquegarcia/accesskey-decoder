let { continuous_substr, reset_continuous_substr } = require('./continuous_substr.js');
let { AccessKey } = require('./../entities/AccessKey.js');

function decode(accessKey) {
  accessKey = accessKey.replace(/[^0-9]/g, '');
  if (accessKey.length !== 44) {
    throw new Error('The access key must be 44 numbers');
  }
  reset_continuous_substr();
  let obj = new AccessKey();
  obj.state = continuous_substr(accessKey, 2);
  obj.year = continuous_substr(accessKey, 2);
  obj.month = continuous_substr(accessKey, 2);
  obj.cnpj = continuous_substr(accessKey, 14);
  obj.model = continuous_substr(accessKey, 2);
  obj.series = continuous_substr(accessKey, 3);
  obj.number = continuous_substr(accessKey, 9);
  obj.issueType = continuous_substr(accessKey, 1);
  obj.code = continuous_substr(accessKey, 8);
  obj.verifyingDigit = continuous_substr(accessKey, 1);

  return obj;
}

module.exports = { decode };
