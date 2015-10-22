(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  sum: function sum() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.reduce(function (a, b) {
      return a + b;
    });
  }
};
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jsSomething_to_test = require('../js/something_to_test');

var _jsSomething_to_test2 = _interopRequireDefault(_jsSomething_to_test);

describe('Something to something_to_test', function () {
  describe('sum', function () {
    it('should calc sum of all args', function () {
      expect(_jsSomething_to_test2['default'].sum(2, 3, 4)).to.equal(9);
    });
  });
});

},{"../js/something_to_test":1}],3:[function(require,module,exports){
// import all specs here:

'use strict';

require('./something_to_test');

},{"./something_to_test":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamQvY29ob3J0cy8yMDE1X1E0L0JERFByZS9qcy9zb21ldGhpbmdfdG9fdGVzdC5qcyIsIi9Vc2Vycy9qZC9jb2hvcnRzLzIwMTVfUTQvQkREUHJlL3NwZWMvc29tZXRoaW5nX3RvX3Rlc3QuanMiLCIvVXNlcnMvamQvY29ob3J0cy8yMDE1X1E0L0JERFByZS9zcGVjL3NwZWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztxQkNBZTtBQUNiLEtBQUcsRUFBQSxlQUFVO3NDQUFOLElBQUk7QUFBSixVQUFJOzs7QUFDVCxXQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUMsQ0FBQzthQUFLLENBQUMsR0FBRyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0dBQ3BDO0NBQ0Y7Ozs7Ozs7O21DQ0pxQix5QkFBeUI7Ozs7QUFFL0MsUUFBUSxDQUFDLGdDQUFnQyxFQUFFLFlBQVc7QUFDcEQsVUFBUSxDQUFDLEtBQUssRUFBRSxZQUFXO0FBQ3pCLE1BQUUsQ0FBQyw2QkFBNkIsRUFBRSxZQUFXO0FBQzNDLFlBQU0sQ0FBQyxpQ0FBVSxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDMUMsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDOzs7Ozs7O1FDTkkscUJBQXFCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgc3VtKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gYXJncy5yZWR1Y2UoKGEsYikgPT4gYSArIGIpO1xuICB9XG59XG4iLCJpbXBvcnQgc29tZXRoaW5nIGZyb20gJy4uL2pzL3NvbWV0aGluZ190b190ZXN0JztcblxuZGVzY3JpYmUoJ1NvbWV0aGluZyB0byBzb21ldGhpbmdfdG9fdGVzdCcsIGZ1bmN0aW9uKCkge1xuICBkZXNjcmliZSgnc3VtJywgZnVuY3Rpb24oKSB7XG4gICAgaXQoJ3Nob3VsZCBjYWxjIHN1bSBvZiBhbGwgYXJncycsIGZ1bmN0aW9uKCkge1xuICAgICAgZXhwZWN0KHNvbWV0aGluZy5zdW0oMiwzLDQpKS50by5lcXVhbCg5KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiIsIi8vIGltcG9ydCBhbGwgc3BlY3MgaGVyZTpcblxuaW1wb3J0ICcuL3NvbWV0aGluZ190b190ZXN0JztcbiJdfQ==
