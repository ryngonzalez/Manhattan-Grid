(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function prefix(string) {
  return 'GridCell--' + string;
}

var Cell = (function (_Component) {
  _inherits(Cell, _Component);

  function Cell() {
    _classCallCheck(this, Cell);

    _get(Object.getPrototypeOf(Cell.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Cell, [{
    key: 'render',
    value: function render() {
      var classes = ['GridCell', prefix(this.props.size), this.props.className].join(' ');

      return _react2['default'].createElement(
        'div',
        { className: classes },
        this.props.children
      );
    }
  }]);

  return Cell;
})(_react.Component);

Cell.propTypes = {
  size: _react.PropTypes.string,
  children: _react.PropTypes.element.isRequired
};

Cell.defaultProps = {
  size: 'full',
  children: function children() {
    return _react2['default'].createElement(
      'div',
      null,
      'Empty Cell'
    );
  }
};

exports['default'] = Cell;
module.exports = exports['default'];

},{"react":undefined}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function prefix(string) {
  return 'GridGroup--' + string;
}

function classNameForOption(option, validOptions, type) {
  if (option in validOptions) {
    return validOptions[option];
  } else {
    console.error('Incorrect ' + type + ' applied to GridGroup.');
    return '';
  }
}

var JUSTIFICATIONS = {
  'BETWEEEN': prefix('spaceBetween'),
  'AROUND': prefix('spaceAround'),
  'CENTER': prefix('justifycenter'),
  'START': prefix('justifyStart'),
  'END': prefix('justifyEnd')
};

var DIRECTIONS = {
  'ROW': prefix('row'),
  'COLUMN': prefix('column')
};
var ALIGNMENTS = {
  'START': prefix('start'),
  'CENTER': prefix('center'),
  'END': prefix('end')
};
var WRAP = {
  'START': prefix('start'),
  'CENTER': prefix('center'),
  'END': prefix('end')
};

var Group = (function (_Component) {
  _inherits(Group, _Component);

  function Group() {
    _classCallCheck(this, Group);

    _get(Object.getPrototypeOf(Group.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Group, [{
    key: 'render',
    value: function render() {
      var classes = ['GridGroup', direction(), alignment(), wrap(), justification(), this.props.className].join(' ');

      return _react2['default'].createElement(
        'div',
        { className: classes },
        this.props.children
      );
    }
  }, {
    key: 'direction',
    value: function direction() {
      var direction = this.props.direction;

      direction = direction.toUpperCase();
      return classNameForOption(direction, DIRECTIONS, 'direction');
    }
  }, {
    key: 'alignment',
    value: function alignment() {
      var align = this.props.align;
      var alignment = align.toUpperCase();
      return classNameForOption(alignment, ALIGNMENTS, 'alignment');
    }
  }, {
    key: 'wrap',
    value: function wrap() {
      var wrap = this.props.wrap;

      wrap = wrap.toUpperCase();
      return classNameForOption(wrap, WRAPS, 'wrap');
    }
  }, {
    key: 'justification',
    value: (function (_justification) {
      function justification() {
        return _justification.apply(this, arguments);
      }

      justification.toString = function () {
        return _justification.toString();
      };

      return justification;
    })(function () {
      var justify = this.props.justify;

      justification = justify.toUpperCase();
      return classNameForOption(justification, JUSTIFICATIONS, 'justification');
    })
  }]);

  return Group;
})(_react.Component);

Group.defaultProps = {
  direction: 'row',
  align: 'start',
  wrap: 'wrap',
  justify: 'start'
};

Group.propTypes = {
  direction: _react.PropTypes.string,
  align: _react.PropTypes.string,
  wrap: _react.PropTypes.string,
  justify: _react.PropTypes.string
};

exports['default'] = Group;
module.exports = exports['default'];

},{"react":undefined}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Group = require('./Group');

var _Group2 = _interopRequireDefault(_Group);

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

exports['default'] = { Group: _Group2['default'], Cell: _Cell2['default'] };
module.exports = exports['default'];

},{"./Cell":1,"./Group":2}]},{},[3]);
