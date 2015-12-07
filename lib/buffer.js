'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _arguments = arguments;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var splitBuffer = exports.splitBuffer = function splitBuffer(buffer, index) {
  var start = buffer.slice(0, index);
  var end = buffer.slice(index);
  return [start, end];
};

var buffersLength = exports.buffersLength = function buffersLength() {
  return _arguments.reduce(function (previousValue, currentValue) {
    return previousValue + _arguments[currentValue].length;
  }, 0);
};

var bufferFindStringIndex = exports.bufferFindStringIndex = function bufferFindStringIndex(buffer, str) {
  var strBuffer = '';
  var count = 0;
  var index = -1;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = buffer.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2);

      var c = _step$value[0];
      var i = _step$value[1];

      if (c === str.charAt(0)) strBuffer = str.charAt(0);else if (!!buffer) {
        strBuffer += c;
        ++count;
      }
      if (count == 6) {
        if (strBuffer === str) {
          index = i - 6;
          break;
        }
        count = 0;
        strBuffer = '';
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return index;
};

var concatBuffers = exports.concatBuffers = function concatBuffers() {
  return Buffer.concat(_arguments, buffersLength(_arguments));
};
//# sourceMappingURL=buffer.js.map
