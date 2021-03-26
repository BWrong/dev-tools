"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

// import '@babel/polyfill';
// 1. 语法转换
var a = function a() {
  var msg = 'hello babel';
  console.log(msg);
};

var Foo = /*#__PURE__*/function () {
  function Foo() {
    (0, _classCallCheck2.default)(this, Foo);
  }

  (0, _createClass2.default)(Foo, [{
    key: "method",
    value: function method() {}
  }]);
  return Foo;
}(); // 2. polyfill


var include = [1, 2, 3].includes(1);
new Promise(function (resolve, reject) {
  resolve();
});