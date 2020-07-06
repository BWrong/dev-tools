module.exports = function (source) {
  source = source.replace(/webpack/i, 'world');
  return source;
};