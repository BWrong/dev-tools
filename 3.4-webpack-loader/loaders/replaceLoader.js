const loaderUtils = require('loader-utils');
module.exports = function (source) {
  const options = loaderUtils.getOptions(this);
  source = source.replace(options.src, options.to);
  return source;
};