'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var pixi_js = require('pixi.js');
var animated$2 = require('@react-spring/animated');
var Reconciler = require('react-reconciler');
var performanceNow = require('performance-now');
var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Reconciler__default = /*#__PURE__*/_interopDefaultLegacy(Reconciler);
var performanceNow__default = /*#__PURE__*/_interopDefaultLegacy(performanceNow);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// borrowed from fbjs
function invariant(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  {
    return;
  }
}

/**
 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

var lodash_isnil = isNil;

/**
 * Parse PIXI point value to array of coordinates
 *
 * @param {*} value
 * @returns {Array}
 */

function parsePoint(value) {
  var arr = [];

  if (typeof value === 'undefined') {
    return arr;
  } else if (typeof value === 'string') {
    arr = value.split(',');
  } else if (typeof value === 'number') {
    arr = [value];
  } else if (Array.isArray(value)) {
    arr = _toConsumableArray(value);
  } else if (value !== null && _typeof(value) === 'object') {
    var x = value && (value === null || value === void 0 ? void 0 : value.x) || 0;
    var y = value && (value === null || value === void 0 ? void 0 : value.y) || 0;
    arr = [x, y];
  } else {
    return arr;
  }

  return arr.filter(function (p) {
    return !lodash_isnil(p) && !isNaN(p);
  }).map(Number);
}
/**
 * Check if two points are equal
 *
 * @param {*} oldValue
 * @param {*} newValue
 * @returns {boolean}
 */

function pointsAreEqual(oldValue, newValue) {
  if (oldValue.length !== newValue.length) {
    return false;
  }

  for (var i = 0; i < oldValue.length; i++) {
    if (oldValue[i] !== newValue[i]) {
      return false;
    }
  }

  return true;
}
/**
 * Determine value is type of Point or ObservablePoint
 * See https://github.com/michalochman/react-pixi-fiber/blob/a4dbddbef0ffbf0f563c64d30766ea28222a51ea/src/utils.js#L48
 *
 * @param {*} value
 * @returns {boolean}
 */

function isPointType(value) {
  return value instanceof pixi_js.Point || value instanceof pixi_js.ObservablePoint;
}
/**
 * Event handlers
 *
 * @type {string[]}
 */

var eventHandlers = ['click', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mouseupoutside', 'tap', 'touchstart', 'touchmove', 'touchend', 'touchendoutside', 'pointercancel', 'pointerout', 'pointerover', 'pointertap', 'pointerdown', 'pointerup', 'pointerupoutside', 'pointermove', 'rightclick', 'rightdown', 'rightup', 'rightupoutside', 'touchcancel', 'touchendoutside', 'touchmove', 'touchstart'];
/**
 * Set value on a PIXI.DisplayObject
 * See https://github.com/Izzimach/react-pixi/blob/a25196251a13ed9bb116a8576d93e9fceac2a14c/src/ReactPIXI.js#L114
 *
 * @param {PIXI.DisplayObject} instance
 * @param {string} prop
 * @param {*} value
 */

function setValue(instance, prop, value) {
  if (isPointType(instance[prop]) && isPointType(value)) {
    // copy value
    instance[prop].copyFrom(value);
  } else if (isPointType(instance[prop])) {
    // parse value if a non-Point type is being assigned to a Point type
    var coordinates = parsePoint(value);
    invariant(typeof coordinates !== 'undefined' && coordinates.length > 0 && coordinates.length < 3, 'The property `%s` is a `PIXI.Point` or `PIXI.ObservablePoint` and must be set to a comma-separated string of ' + 'either 1 or 2 coordinates, a 1 or 2 element array containing coordinates, or a PIXI Point/ObservablePoint. ' + 'If only one coordinate is given then X and Y will be set to the provided value. Received: `%s` of type `%s`.', prop, JSON.stringify(value), _typeof(value));
    instance[prop].set(coordinates.shift(), coordinates.shift());
  } else {
    // just hard assign value
    instance[prop] = value;
  }
}

var isFunction = function isFunction() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.every(function (v) {
    return typeof v === 'function';
  });
};
var isObject = function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};
var hasKey = function hasKey(collection) {
  var coll = collection;

  if (!Array.isArray(coll)) {
    if (isObject(collection)) {
      coll = Object.keys(collection);
    } else {
      throw new Error('collection needs to be an Array or Object');
    }
  }

  var index = {};
  coll.forEach(function (key) {
    index[key] = true;
  });
  return function (key) {
    return typeof index[key] !== 'undefined';
  };
};
var not = function not(boolFn) {
  return function () {
    return !boolFn.apply(void 0, arguments);
  };
};

var _PROPS_RESERVED;
var CHILDREN = 'children';
/**
 * Reserved props
 *
 * @type {Object}
 */

var PROPS_RESERVED = (_PROPS_RESERVED = {}, _defineProperty(_PROPS_RESERVED, CHILDREN, true), _defineProperty(_PROPS_RESERVED, "parent", true), _defineProperty(_PROPS_RESERVED, "worldAlpha", true), _defineProperty(_PROPS_RESERVED, "worldTransform", true), _defineProperty(_PROPS_RESERVED, "worldVisible", true), _PROPS_RESERVED);
/**
 * Default display object props
 * See https://github.com/michalochman/react-pixi-fiber/blob/a4dbddbef0ffbf0f563c64d30766ea28222a51ea/src/props.js#L9
 *
 * @type {Object}
 */

var PROPS_DISPLAY_OBJECT = {
  alpha: 1,
  buttonMode: false,
  cacheAsBitmap: false,
  cursor: null,
  filterArea: null,
  filters: null,
  hitArea: null,
  interactive: false,
  mask: null,
  pivot: 0,
  position: 0,
  renderable: true,
  rotation: 0,
  scale: 1,
  skew: 0,
  transform: null,
  visible: true,
  x: 0,
  y: 0
};
/**
 * Helper util for fetching the texture from props
 * Can be either texture or image
 *
 * @param {string} elementType
 * @param {object} props
 * @returns {PIXI.Texture|null}
 */

var getTextureFromProps = function getTextureFromProps(elementType) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var emitChange = function emitChange() {
    return requestAnimationFrame(function () {
      window.dispatchEvent(new CustomEvent('__REACT_PIXI_REQUEST_RENDER__'));
    });
  };

  var check = function check(inType, validator) {
    if (props.hasOwnProperty(inType)) {
      var valid = validator.typeofs.some(function (t) {
        return _typeof(props[inType]) === t;
      }) || validator.instanceofs.some(function (i) {
        return props[inType] instanceof i;
      });
      invariant(valid, "".concat(elementType, " ").concat(inType, " prop is invalid"));
      return props[inType];
    }
  };

  if (props.texture) {
    invariant(props.texture instanceof pixi_js.Texture, "".concat(elementType, " texture needs to be typeof `PIXI.Texture`"));
    return props.texture;
  } else {
    var result = check('image', {
      typeofs: ['string'],
      instanceofs: [HTMLImageElement]
    }) || check('video', {
      typeofs: ['string'],
      instanceofs: [HTMLVideoElement]
    }) || check('source', {
      typeofs: ['string', 'number'],
      instanceofs: [HTMLImageElement, HTMLVideoElement, HTMLCanvasElement, pixi_js.Texture]
    });
    invariant(!!result, "".concat(elementType, " could not get texture from props"));
    var texture = pixi_js.Texture.from(result);
    texture.once('update', emitChange);
    texture.once('loaded', emitChange);

    if (texture.valid) {
      emitChange();
    }

    return texture;
  }
};
var filterProps = not(hasKey([].concat(_toConsumableArray(Object.keys(PROPS_RESERVED)), _toConsumableArray(eventHandlers))));
/**
 * Apply default props on Display Object instance (which are all components)
 *
 * @param {PIXI.DisplayObject} instance
 * @param {Object} oldProps
 * @param {Object} newProps
 */

function applyDefaultProps(instance, oldProps, newProps) {
  var changed = false;
  invariant(pixi_js.DisplayObject.prototype.isPrototypeOf(instance), 'instance needs to be typeof `PIXI.DisplayObject`, ' + 'got `%s`', _typeof(instance)); // update event handlers

  if (!newProps.ignoreEvents) {
    var hasRemoveListener = typeof instance.removeListener === 'function';
    var hasOn = typeof instance.on === 'function';

    for (var i = 0; i < eventHandlers.length; i++) {
      var evt = eventHandlers[i];

      if (oldProps[evt] !== newProps[evt]) {
        changed = true;

        if (typeof oldProps[evt] === 'function' && hasRemoveListener) {
          instance.removeListener(evt, oldProps[evt]);
        }

        if (typeof newProps[evt] === 'function' && hasOn) {
          instance.on(evt, newProps[evt]);
        }
      }
    }
  }

  var newPropKeys = Object.keys(newProps || {}); // hard overwrite all props? can speed up performance

  if (newProps.overwriteProps) {
    for (var _i = 0; _i < newPropKeys.length; _i++) {
      var p = newPropKeys[_i];

      if (oldProps[p] !== newProps[p]) {
        changed = true;
        setValue(instance, p, newProps[p]);
      }
    }

    return;
  }

  var props = newPropKeys.filter(filterProps);

  for (var _i2 = 0; _i2 < props.length; _i2++) {
    var prop = props[_i2];
    var value = newProps[prop];

    if (newProps[prop] !== oldProps[prop]) {
      changed = true;
    }

    if (value !== undefined) {
      // set value if defined
      setValue(instance, prop, value);
    } else if (prop in PROPS_DISPLAY_OBJECT) {
      // is a default value, use that
      console.warn("setting default value: ".concat(prop, ", from: ").concat(instance[prop], " to: ").concat(value, " for"), instance);
      changed = true;
      setValue(instance, prop, PROPS_DISPLAY_OBJECT[prop]);
    } else {
      console.warn("ignoring prop: ".concat(prop, ", from ").concat(instance[prop], " to ").concat(value, " for"), instance);
    }
  }

  return changed;
}

var BitmapText$2 = function BitmapText(root, props) {
  var text = props.text,
      style = props.style;
  return new pixi_js.BitmapText(text, style);
};

var Container$2 = function Container() {
  return new pixi_js.Container();
};

var _excluded$7 = ["draw"];

var Graphics$2 = function Graphics(root, props) {
  var g = new pixi_js.Graphics();

  g.applyProps = function (instance, oldProps, newProps) {
    var draw = newProps.draw,
        props = _objectWithoutProperties(newProps, _excluded$7);

    var changed = applyDefaultProps(instance, oldProps, props);

    if (oldProps.draw !== draw && typeof draw === 'function') {
      changed = true;
      draw.call(g, g);
    }

    return changed;
  };

  return g;
};

var _excluded$6 = ["image", "texture"];

var NineSlicePlane$2 = function NineSlicePlane(root, props) {
  var _props$leftWidth = props.leftWidth,
      leftWidth = _props$leftWidth === void 0 ? 10 : _props$leftWidth,
      _props$topHeight = props.topHeight,
      topHeight = _props$topHeight === void 0 ? 10 : _props$topHeight,
      _props$rightWidth = props.rightWidth,
      rightWidth = _props$rightWidth === void 0 ? 10 : _props$rightWidth,
      _props$bottomHeight = props.bottomHeight,
      bottomHeight = _props$bottomHeight === void 0 ? 10 : _props$bottomHeight;
  var texture = getTextureFromProps('NineSlicePlane', props);
  var nineSlicePlane = new pixi_js.NineSlicePlane(texture, leftWidth, topHeight, rightWidth, bottomHeight);

  nineSlicePlane.applyProps = function (instance, oldProps, newProps) {
    var image = newProps.image,
        texture = newProps.texture,
        props = _objectWithoutProperties(newProps, _excluded$6);

    var changed = applyDefaultProps(instance, oldProps, props);

    if (image || texture) {
      // change = true not required for image, getTextureFromProps will call update
      if (texture !== oldProps.texture) {
        changed = true;
      }

      instance.texture = getTextureFromProps('NineSlicePlane', newProps);
    }

    return changed;
  };

  return nineSlicePlane;
};

var ParticleContainer$2 = function ParticleContainer(root, props) {
  var _props$maxSize = props.maxSize,
      maxSize = _props$maxSize === void 0 ? 1500 : _props$maxSize,
      _props$batchSize = props.batchSize,
      batchSize = _props$batchSize === void 0 ? 16384 : _props$batchSize,
      _props$autoResize = props.autoResize,
      autoResize = _props$autoResize === void 0 ? false : _props$autoResize;

  var properties = _objectSpread2(_objectSpread2({}, {
    vertices: false,
    scale: true,
    position: true,
    rotation: true,
    uvs: true,
    tint: true
  }), props.properties || {});

  var destroyOptions = _objectSpread2(_objectSpread2({}, {
    children: false,
    texture: false,
    baseTexture: false
  }), props.destroyOptions || {});

  var container = new pixi_js.ParticleContainer(maxSize, properties, batchSize, autoResize);

  container.willUnmount = function (instance, child, parent) {
    instance.destroy(destroyOptions);
  };

  return container;
};

var _excluded$5 = ["image", "texture"];

var Sprite$2 = function Sprite(root, props) {
  var sprite = new pixi_js.Sprite(getTextureFromProps('Sprite', props));

  sprite.applyProps = function (instance, oldProps, newProps) {
    var image = newProps.image,
        texture = newProps.texture,
        props = _objectWithoutProperties(newProps, _excluded$5);

    var changed = applyDefaultProps(instance, oldProps, props);

    if (texture && oldProps.texture !== newProps.texture || image && oldProps.image !== newProps.image) {
      // getTextureFromProps will call update for image
      if (oldProps.texture !== newProps.texture) {
        changed = true;
      }

      instance.texture = getTextureFromProps('Sprite', newProps);
    }

    return changed;
  };

  return sprite;
};

var _excluded$4 = ["textures", "isPlaying", "initialFrame"];

var AnimatedSprite$2 = function AnimatedSprite(root, props) {
  var textures = props.textures,
      images = props.images,
      _props$isPlaying = props.isPlaying,
      isPlaying = _props$isPlaying === void 0 ? true : _props$isPlaying,
      initialFrame = props.initialFrame;

  var makeTexture = function makeTexture(textures) {
    return textures.map(function (texture) {
      invariant(texture instanceof pixi_js.Texture || (texture === null || texture === void 0 ? void 0 : texture.texture), "AnimationSprite texture needs to be an array of `PIXI.Texture` or `{ texture: PIXI.Texture, time: number }`");
      return texture;
    });
  };

  var animatedSprite = images ? pixi_js.AnimatedSprite.fromImages(images) : new pixi_js.AnimatedSprite(makeTexture(textures));
  animatedSprite[isPlaying ? 'gotoAndPlay' : 'gotoAndStop'](initialFrame || 0);

  animatedSprite.applyProps = function (instance, oldProps, newProps) {
    var textures = newProps.textures,
        isPlaying = newProps.isPlaying,
        initialFrame = newProps.initialFrame,
        props = _objectWithoutProperties(newProps, _excluded$4);

    var changed = applyDefaultProps(instance, oldProps, props);

    if (textures && oldProps['textures'] !== textures) {
      instance.textures = makeTexture(textures);
      changed = true;
    }

    if (isPlaying !== oldProps.isPlaying || initialFrame !== oldProps.initialFrame) {
      var frame = typeof initialFrame === 'number' ? initialFrame : animatedSprite.currentFrame || 0;
      animatedSprite[isPlaying ? 'gotoAndPlay' : 'gotoAndStop'](frame);
      changed = true;
    }

    return changed;
  };

  return animatedSprite;
};

var Text$2 = function Text(root, props) {
  var _props$text = props.text,
      text = _props$text === void 0 ? '' : _props$text,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      isSprite = props.isSprite;
  var pixiText = new pixi_js.Text(text, style);

  if (isSprite) {
    pixiText.updateText();
    return new pixi_js.Sprite(pixiText.texture);
  }

  return pixiText;
};

var _excluded$3 = ["tileScale", "tilePosition", "image", "texture"];

var TilingSprite$2 = function TilingSprite(root, props) {
  var _props$width = props.width,
      width = _props$width === void 0 ? 100 : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? 100 : _props$height;
  var texture = getTextureFromProps('TilingSprite', props);
  var ts = new pixi_js.TilingSprite(texture, width, height);

  ts.applyProps = function (instance, oldProps, newProps) {
    var tileScale = newProps.tileScale,
        tilePosition = newProps.tilePosition,
        image = newProps.image,
        texture = newProps.texture,
        props = _objectWithoutProperties(newProps, _excluded$3);

    var changed = applyDefaultProps(instance, oldProps, props);

    if (tilePosition) {
      var _instance$tilePositio;

      var newTilePosition = parsePoint(tilePosition);

      (_instance$tilePositio = instance.tilePosition).set.apply(_instance$tilePositio, _toConsumableArray(newTilePosition));

      changed = !pointsAreEqual(parsePoint(oldProps.tilePosition), newTilePosition) || changed;
    }

    if (tileScale) {
      var _instance$tileScale;

      var newTileScale = parsePoint(tileScale);

      (_instance$tileScale = instance.tileScale).set.apply(_instance$tileScale, _toConsumableArray(newTileScale));

      changed = !pointsAreEqual(parsePoint(oldProps.tileScale), newTileScale) || changed;
    }

    if (image || texture) {
      // change = true not required for image, getTextureFromProps will call update
      if (texture !== oldProps.texture) {
        changed = true;
      }

      instance.texture = getTextureFromProps('Sprite', newProps);
    }

    return changed;
  };

  return ts;
};

var _excluded$2 = ["image", "texture"];

var SimpleMesh$2 = function SimpleMesh(root, props) {
  var texture = getTextureFromProps('Mesh', props);
  var vertices = props.vertices,
      uvs = props.uvs,
      indices = props.indices,
      _props$drawMode = props.drawMode,
      drawMode = _props$drawMode === void 0 ? pixi_js.DRAW_MODES.TRIANGLES : _props$drawMode;
  var simpleMesh = new pixi_js.SimpleMesh(texture, vertices, uvs, indices, drawMode);

  simpleMesh.applyProps = function (instance, oldProps, newProps) {
    var image = newProps.image,
        texture = newProps.texture,
        props = _objectWithoutProperties(newProps, _excluded$2);

    var changed = applyDefaultProps(instance, oldProps, props);

    if (image || texture) {
      // change = true not required for image, getTextureFromProps will call update
      if (texture !== oldProps.texture) {
        changed = true;
      }

      instance.texture = getTextureFromProps('Mesh', newProps);
    }

    return changed;
  };

  return simpleMesh;
};

var _excluded$1 = ["image", "texture"];

var SimpleRope$2 = function SimpleRope(root, props) {
  var texture = getTextureFromProps('SimpleRope', props);
  var points = props.points;
  var rope = new pixi_js.SimpleRope(texture, points);

  rope.applyProps = function (instance, oldProps, newProps) {
    var image = newProps.image,
        texture = newProps.texture,
        props = _objectWithoutProperties(newProps, _excluded$1);

    invariant(Array.isArray(newProps.points), 'SimpleRope points needs to be %s', 'Array<PIXI.Point>');
    var changed = applyDefaultProps(instance, oldProps, props);

    if (image || texture) {
      if (texture !== oldProps.texture) {
        changed = true;
      }

      instance.texture = getTextureFromProps('SimpleRope', newProps);
    }

    return changed;
  };

  return rope;
};

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BitmapText: BitmapText$2,
  Container: Container$2,
  Graphics: Graphics$2,
  NineSlicePlane: NineSlicePlane$2,
  ParticleContainer: ParticleContainer$2,
  Sprite: Sprite$2,
  Text: Text$2,
  TilingSprite: TilingSprite$2,
  SimpleMesh: SimpleMesh$2,
  SimpleRope: SimpleRope$2,
  AnimatedSprite: AnimatedSprite$2
});

/**
 * Available tag types
 *
 * @type {Object}
 */

var TYPES = {
  BitmapText: 'BitmapText',
  Container: 'Container',
  Graphics: 'Graphics',
  NineSlicePlane: 'NineSlicePlane',
  ParticleContainer: 'ParticleContainer',
  Sprite: 'Sprite',
  AnimatedSprite: 'AnimatedSprite',
  Text: 'Text',
  TilingSprite: 'TilingSprite',
  SimpleMesh: 'SimpleMesh',
  SimpleRope: 'SimpleRope'
};
var ELEMENTS = Object.keys(TYPES).reduce(function (elements, type) {
  return _objectSpread2(_objectSpread2({}, elements), {}, _defineProperty({}, type, components[type]));
}, {});
/**
 * Inject types
 *
 * @type {Object}
 */

var TYPES_INJECTED = {};
/**
 * Create an element based on tag type
 * Similar to react-dom's `React.createElement()`
 *
 * @param {string} type Element type
 * @param {Object} props Component props
 * @param {Object} root Root instance
 */

function createElement(type) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var root = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var fn = ELEMENTS[type];
  var instance;
  var applyProps;

  if (typeof fn === 'function') {
    instance = fn(root, props);
  }

  if (!instance) {
    // not found, is there any injected custom component?
    var injected = TYPES_INJECTED[type];

    if (injected) {
      instance = injected.create(props);
      instance.didMount = injected.didMount ? injected.didMount.bind(instance) : undefined;
      instance.willUnmount = injected.willUnmount ? injected.willUnmount.bind(instance) : undefined;
      instance.applyProps = injected.applyProps ? injected.applyProps.bind(instance) : undefined;
    }
  } // apply initial props!


  if (instance) {
    var _instance;

    applyProps = typeof ((_instance = instance) === null || _instance === void 0 ? void 0 : _instance.applyProps) === 'function' ? instance.applyProps : applyDefaultProps;
    applyProps(instance, {}, props);
  }

  return instance;
}
/**
 * Create Component
 *
 * @param {string} type
 * @param {Object} lifecycle methods
 */

function PixiComponent(type, lifecycle) {
  invariant(!!type, 'Expect type to be defined, got `%s`', type);
  invariant(!TYPES[type], 'Component `%s` could not be created, already exists in default components.', type);
  TYPES_INJECTED[type] = lifecycle;
  return type;
}

var primitives = Object.keys(TYPES);
var host = animated$2.createHost(primitives, {
  applyAnimatedValues: function applyAnimatedValues(instance, props) {
    if (!(instance.nodeType || instance.pluginName)) {
      return false;
    }

    var applyProps = typeof (instance === null || instance === void 0 ? void 0 : instance.applyProps) === 'function' ? instance.applyProps : applyDefaultProps;
    applyProps(instance, {}, props);
  }
});
var animated$1 = host.animated;

var BitmapText$1 = animated$1[TYPES.BitmapText];
var Container$1 = animated$1[TYPES.Container];
var Graphics$1 = animated$1[TYPES.Graphics];
var NineSlicePlane$1 = animated$1[TYPES.NineSlicePlane];
var ParticleContainer$1 = animated$1[TYPES.ParticleContainer];
var Sprite$1 = animated$1[TYPES.Sprite];
var AnimatedSprite$1 = animated$1[TYPES.AnimatedSprite];
var Text$1 = animated$1[TYPES.Text];
var TilingSprite$1 = animated$1[TYPES.TilingSprite];
var SimpleMesh$1 = animated$1[TYPES.SimpleMesh];
var SimpleRope$1 = animated$1[TYPES.SimpleRope];

var animated = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BitmapText: BitmapText$1,
  Container: Container$1,
  Graphics: Graphics$1,
  NineSlicePlane: NineSlicePlane$1,
  ParticleContainer: ParticleContainer$1,
  Sprite: Sprite$1,
  AnimatedSprite: AnimatedSprite$1,
  Text: Text$1,
  TilingSprite: TilingSprite$1,
  SimpleMesh: SimpleMesh$1,
  SimpleRope: SimpleRope$1
});

var NO_CONTEXT = {};

function _appendChild(parent, child) {
  if (parent.addChild) {
    parent.addChild(child);

    if (typeof child.didMount === 'function') {
      child.didMount.call(child, child, parent);
    }
  }
}

function _removeChild(parent, child) {
  var _child$children;

  if (typeof child.willUnmount === 'function') {
    child.willUnmount.call(child, child, parent);
  } // unmount potential children


  if ((_child$children = child.children) !== null && _child$children !== void 0 && _child$children.length) {

    _toConsumableArray(child.children).forEach(function (c) {
      _removeChild(child, c);
    });
  }

  parent.removeChild(child);
  child.destroy();
}

function insertBefore(parent, child, beforeChild) {
  invariant(child !== beforeChild, 'react-pixi: PixiFiber cannot insert node before itself');
  var childExists = parent.children.indexOf(child) !== -1;
  var index = parent.getChildIndex(beforeChild);
  childExists ? parent.setChildIndex(child, index) : parent.addChildAt(child, index);
} // get diff between 2 objects
// https://github.com/facebook/react/blob/97e2911/packages/react-dom/src/client/ReactDOMFiberComponent.js#L546


function diffProperties(pixiElement, type, lastProps, nextProps, rootContainerElement) {
  var updatePayload = null;

  for (var propKey in lastProps) {
    if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey) || lastProps[propKey] == null) {
      continue;
    }

    if (propKey === CHILDREN) ; else {
      // For all other deleted properties we add it to the queue. We use
      // the whitelist in the commit phase instead.
      if (!updatePayload) {
        updatePayload = [];
      }

      updatePayload.push(propKey, null);
    }
  }

  for (var _propKey in nextProps) {
    var nextProp = nextProps[_propKey];
    var lastProp = lastProps != null ? lastProps[_propKey] : undefined;

    if (!nextProps.hasOwnProperty(_propKey) || nextProp === lastProp || nextProp == null && lastProp == null) {
      continue;
    }

    if (_propKey === CHILDREN) ; else {
      // For any other property we always add it to the queue and then we
      // filter it out using the whitelist during the commit.
      if (!updatePayload) {
        updatePayload = [];
      }

      updatePayload.push(_propKey, nextProp);
    }
  }

  return updatePayload;
}

var prepareChanged = null;
var HostConfig = {
  getRootHostContext: function getRootHostContext() {
    return NO_CONTEXT;
  },
  getChildHostContext: function getChildHostContext() {
    return NO_CONTEXT;
  },
  getChildHostContextForEventComponent: function getChildHostContextForEventComponent(parentHostContext) {
    return parentHostContext;
  },
  getPublicInstance: function getPublicInstance(instance) {
    return instance;
  },
  prepareForCommit: function prepareForCommit() {
    // noop
    return null;
  },
  resetAfterCommit: function resetAfterCommit() {// noop
  },
  createInstance: createElement,
  hideInstance: function hideInstance(instance) {
    instance.visible = false;
  },
  unhideInstance: function unhideInstance(instance, props) {
    var visible = props !== undefined && props !== null && props.hasOwnProperty('visible') ? props.visible : true;
    instance.visible = visible;
  },
  finalizeInitialChildren: function finalizeInitialChildren(wordElement, type, props) {
    return false;
  },
  prepareUpdate: function prepareUpdate(pixiElement, type, oldProps, newProps, rootContainerInstance, hostContext) {
    prepareChanged = diffProperties(pixiElement, type, oldProps, newProps);
    return prepareChanged;
  },
  shouldSetTextContent: function shouldSetTextContent(type, props) {
    return false;
  },
  shouldDeprioritizeSubtree: function shouldDeprioritizeSubtree(type, props) {
    var isAlphaVisible = typeof props.alpha === 'undefined' || props.alpha > 0;
    var isRenderable = typeof props.renderable === 'undefined' || props.renderable === true;
    var isVisible = typeof props.visible === 'undefined' || props.visible === true;
    return !(isAlphaVisible && isRenderable && isVisible);
  },
  createTextInstance: function createTextInstance(text, rootContainerInstance, internalInstanceHandler) {
    invariant(false, 'react-pixi: Error trying to add text node "' + text + '"', 'PixiFiber does not support text nodes as children of a Pixi component. ' + 'To pass a string value to your component, use a property other than children. ' + 'If you wish to display some text, you can use &lt;Text text={string} /&gt; instead.');
  },
  unhideTextInstance: function unhideTextInstance(textInstance, text) {// noop
  },
  mountEventComponent: function mountEventComponent() {// noop
  },
  updateEventComponent: function updateEventComponent() {// noop
  },
  handleEventTarget: function handleEventTarget() {// noop
  },
  scheduleTimeout: setTimeout,
  cancelTimeout: clearTimeout,
  noTimeout: -1,
  warnsIfNotActing: false,
  now: performanceNow__default['default'],
  isPrimaryRenderer: false,
  supportsMutation: true,
  supportsPersistence: false,
  supportsHydration: false,

  /**
   * -------------------------------------------
   * Mutation
   * -------------------------------------------
   */
  appendInitialChild: function appendInitialChild() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var res = _appendChild.apply(null, args);

    window.dispatchEvent(new CustomEvent("__REACT_PIXI_REQUEST_RENDER__", {
      detail: 'appendInitialChild'
    }));
    return res;
  },
  appendChild: function appendChild() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var res = _appendChild.apply(null, args);

    window.dispatchEvent(new CustomEvent("__REACT_PIXI_REQUEST_RENDER__", {
      detail: 'appendChild'
    }));
    return res;
  },
  appendChildToContainer: function appendChildToContainer() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var res = _appendChild.apply(null, args);

    window.dispatchEvent(new CustomEvent("__REACT_PIXI_REQUEST_RENDER__", {
      detail: 'appendChildToContainer'
    }));
    return res;
  },
  removeChild: function removeChild() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    var res = _removeChild.apply(null, args);

    window.dispatchEvent(new CustomEvent("__REACT_PIXI_REQUEST_RENDER__", {
      detail: 'removeChild'
    }));
    return res;
  },
  removeChildFromContainer: function removeChildFromContainer() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    var res = _removeChild.apply(null, args);

    window.dispatchEvent(new CustomEvent("__REACT_PIXI_REQUEST_RENDER__", {
      detail: 'removeChildFromContainer'
    }));
    return res;
  },
  insertBefore: insertBefore,
  insertInContainerBefore: function insertInContainerBefore() {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    var res = insertBefore.apply(null, args);
    window.dispatchEvent(new CustomEvent("__REACT_PIXI_REQUEST_RENDER__", {
      detail: 'insertInContainerBefore'
    }));
    return res;
  },
  commitUpdate: function commitUpdate(instance, updatePayload, type, oldProps, newProps) {
    var applyProps = instance && instance.applyProps;

    if (typeof applyProps !== 'function') {
      applyProps = applyDefaultProps;
    }

    var changed = applyProps(instance, oldProps, newProps);

    if (changed || prepareChanged) {
      window.dispatchEvent(new CustomEvent("__REACT_PIXI_REQUEST_RENDER__", {
        detail: 'commitUpdate'
      }));
    }
  },
  commitMount: function commitMount(instance, updatePayload, type, oldProps, newProps) {// noop
  },
  commitTextUpdate: function commitTextUpdate(textInstance, oldText, newText) {// noop
  },
  resetTextContent: function resetTextContent(pixiElement) {// noop
  },
  clearContainer: function clearContainer(container) {// TODO implement this
  },
  getFundamentalComponentInstance: function getFundamentalComponentInstance(fundamentalInstance) {
    throw new Error('Not yet implemented.');
  },
  mountFundamentalComponent: function mountFundamentalComponent(fundamentalInstance) {
    throw new Error('Not yet implemented.');
  },
  shouldUpdateFundamentalComponent: function shouldUpdateFundamentalComponent(fundamentalInstance) {
    throw new Error('Not yet implemented.');
  },
  unmountFundamentalComponent: function unmountFundamentalComponent(fundamentalInstance) {
    throw new Error('Not yet implemented.');
  },
  getInstanceFromNode: function getInstanceFromNode(node) {
    throw new Error('Not yet implemented.');
  },
  isOpaqueHydratingObject: function isOpaqueHydratingObject(value) {
    throw new Error('Not yet implemented');
  },
  makeOpaqueHydratingObject: function makeOpaqueHydratingObject(attemptToReadValue) {
    throw new Error('Not yet implemented.');
  },
  makeClientIdInDEV: function makeClientIdInDEV(warnOnAccessInDEV) {
    throw new Error('Not yet implemented');
  },
  beforeActiveInstanceBlur: function beforeActiveInstanceBlur(internalInstanceHandle) {// noop
  },
  afterActiveInstanceBlur: function afterActiveInstanceBlur() {// noop
  },
  preparePortalMount: function preparePortalMount(portalInstance) {// noop
  }
};

var PixiFiber = Reconciler__default['default'](HostConfig);
PixiFiber.injectIntoDevTools({
  bundleType: 0,
  version: "17.0.2",
  rendererPackageName: "@inlet/react-pixi",
  findHostInstanceByFiber: PixiFiber.findHostInstance
});

var roots = new Map();
/**
 * Custom Renderer
 * Use this without React-DOM
 *
 * @param {*} element
 * @param {PIXI.Container} container (i.e. the Stage)
 * @param {Function} callback
 */

function render(element, container) {
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
  invariant(pixi_js.Container.prototype.isPrototypeOf(container), 'Invalid argument `container`, expected instance of `PIXI.Container`.');
  var root = roots.get(container);

  if (!root) {
    // get the flushed fiber container
    root = PixiFiber.createContainer(container);
    roots.set(container, root);
  } // schedules a top level update


  PixiFiber.updateContainer(element, root, undefined, callback); // return the root instance

  return PixiFiber.getPublicRootInstance(root);
}
function unmountComponentAtNode(container) {
  if (roots.has(container)) {
    // unmount component
    PixiFiber.updateContainer(null, roots.get(container), undefined, function () {
      roots.delete(container);
    });
  }
}

var Context = /*#__PURE__*/React__default['default'].createContext(null);
var AppProvider = Context.Provider;
var AppConsumer = Context.Consumer;

var withPixiApp = function withPixiApp(BaseComponent) {
  var wrapper = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
    return /*#__PURE__*/React__default['default'].createElement(AppConsumer, null, function (app) {
      return /*#__PURE__*/React__default['default'].createElement(BaseComponent, _extends({}, props, {
        ref: ref,
        app: app
      }));
    });
  });
  wrapper.displayName = "withPIXIApp(".concat(BaseComponent.displayName || BaseComponent.name, ")");
  return wrapper;
};

var noop = function noop() {};
/**
 * -------------------------------------------
 * Stage React Component (use this in react-dom)
 *
 * @usage
 *
 * const App = () => (
 *   <Stage
 *     width={500}
 *     height={500}
 *     options={ backgroundColor: 0xff0000 }
 *     onMount={( renderer, canvas ) => {
 *       console.log('PIXI renderer: ', renderer)
 *       console.log('Canvas element: ', canvas)
 *     }}>
 * );
 *
 * -------------------------------------------
 */


var propTypes = {
  // dimensions
  width: PropTypes__default['default'].number,
  height: PropTypes__default['default'].number,
  // will return renderer
  onMount: PropTypes__default['default'].func,
  onUnmount: PropTypes__default['default'].func,
  // run ticker at start?
  raf: PropTypes__default['default'].bool,
  // render component on component lifecycle changes?
  renderOnComponentChange: PropTypes__default['default'].bool,
  children: PropTypes__default['default'].node,
  // PIXI options, see https://pixijs.download/dev/docs/PIXI.Application.html
  options: PropTypes__default['default'].shape({
    autoStart: PropTypes__default['default'].bool,
    width: PropTypes__default['default'].number,
    height: PropTypes__default['default'].number,
    useContextAlpha: PropTypes__default['default'].bool,
    backgroundAlpha: PropTypes__default['default'].number,
    autoDensity: PropTypes__default['default'].bool,
    antialias: PropTypes__default['default'].bool,
    preserveDrawingBuffer: PropTypes__default['default'].bool,
    resolution: PropTypes__default['default'].number,
    forceCanvas: PropTypes__default['default'].bool,
    backgroundColor: PropTypes__default['default'].number,
    clearBeforeRender: PropTypes__default['default'].bool,
    powerPreference: PropTypes__default['default'].string,
    sharedTicker: PropTypes__default['default'].bool,
    sharedLoader: PropTypes__default['default'].bool,
    // resizeTo needs to be a window or HTMLElement
    resizeTo: function resizeTo(props, propName) {
      var el = props[propName];
      el && invariant(el === window || el instanceof HTMLElement, "Invalid prop `resizeTo` of type ".concat(_typeof(el), ", expect `window` or an `HTMLElement`."));
    },
    // view is optional, use if provided
    view: function view(props, propName, componentName) {
      var el = props[propName];
      el && invariant(el instanceof HTMLCanvasElement, "Invalid prop `view` of type ".concat(_typeof(el), ", supplied to ").concat(componentName, ", expected `<canvas> Element`"));
    }
  })
};
var defaultProps = {
  width: 800,
  height: 600,
  onMount: noop,
  onUnmount: noop,
  raf: true,
  renderOnComponentChange: true
};
function getCanvasProps(props) {
  var reserved = [].concat(_toConsumableArray(Object.keys(propTypes)), _toConsumableArray(Object.keys(PROPS_DISPLAY_OBJECT)));
  return Object.keys(props).filter(function (p) {
    return !reserved.includes(p);
  }).reduce(function (all, prop) {
    return _objectSpread2(_objectSpread2({}, all), {}, _defineProperty({}, prop, props[prop]));
  }, {});
}

var Stage = /*#__PURE__*/function (_React$Component) {
  _inherits(Stage, _React$Component);

  var _super = _createSuper(Stage);

  function Stage() {
    var _this;

    _classCallCheck(this, Stage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "_canvas", null);

    _defineProperty(_assertThisInitialized(_this), "_mediaQuery", null);

    _defineProperty(_assertThisInitialized(_this), "_ticker", null);

    _defineProperty(_assertThisInitialized(_this), "_needsUpdate", true);

    _defineProperty(_assertThisInitialized(_this), "app", null);

    _defineProperty(_assertThisInitialized(_this), "updateSize", function () {
      var _this$props = _this.props,
          width = _this$props.width,
          height = _this$props.height,
          options = _this$props.options;

      if (!(options !== null && options !== void 0 && options.resolution)) {
        _this.app.renderer.resolution = window.devicePixelRatio;

        _this.resetInteractionManager();
      }

      _this.app.renderer.resize(width, height);
    });

    _defineProperty(_assertThisInitialized(_this), "needsRenderUpdate", function () {
      _this._needsUpdate = true;
    });

    _defineProperty(_assertThisInitialized(_this), "renderStage", function () {
      var _this$props2 = _this.props,
          renderOnComponentChange = _this$props2.renderOnComponentChange,
          raf = _this$props2.raf;

      if (!raf && renderOnComponentChange && _this._needsUpdate) {
        _this._needsUpdate = false;

        _this.app.renderer.render(_this.app.stage);
      }
    });

    return _this;
  }

  _createClass(Stage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          onMount = _this$props3.onMount,
          width = _this$props3.width,
          height = _this$props3.height,
          options = _this$props3.options,
          raf = _this$props3.raf,
          renderOnComponentChange = _this$props3.renderOnComponentChange;
      this.app = new pixi_js.Application(_objectSpread2(_objectSpread2({
        width: width,
        height: height,
        view: this._canvas
      }, options), {}, {
        autoDensity: (options === null || options === void 0 ? void 0 : options.autoDensity) !== false
      }));
      this.app.ticker.autoStart = false;
      this.app.ticker[raf ? 'start' : 'stop']();
      this.mountNode = PixiFiber.createContainer(this.app.stage);
      PixiFiber.updateContainer(this.getChildren(), this.mountNode, this);
      onMount(this.app); // update size on media query resolution change?
      // only if autoDensity = true

      if (options !== null && options !== void 0 && options.autoDensity && window.matchMedia && (options === null || options === void 0 ? void 0 : options.resolution) === undefined) {
        this._mediaQuery = window.matchMedia("(-webkit-min-device-pixel-ratio: 1.3), (min-resolution: 120dpi)");

        this._mediaQuery.addListener(this.updateSize);
      } // listen for reconciler changes


      if (renderOnComponentChange && !raf) {
        this._ticker = new pixi_js.Ticker();
        this._ticker.autoStart = true;

        this._ticker.add(this.renderStage);

        window.addEventListener('__REACT_PIXI_REQUEST_RENDER__', this.needsRenderUpdate);
      }

      this.updateSize();
      this.renderStage();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, prevContext) {
      var _prevProps$options;

      var _this$props4 = this.props,
          width = _this$props4.width,
          height = _this$props4.height,
          raf = _this$props4.raf,
          renderOnComponentChange = _this$props4.renderOnComponentChange,
          options = _this$props4.options; // update resolution

      if ((options === null || options === void 0 ? void 0 : options.resolution) !== undefined && (prevProps === null || prevProps === void 0 ? void 0 : prevProps.options.resolution) !== (options === null || options === void 0 ? void 0 : options.resolution)) {
        this.app.renderer.resolution = options.resolution;
        this.resetInteractionManager();
      } // update size


      if (prevProps.height !== height || prevProps.width !== width || ((_prevProps$options = prevProps.options) === null || _prevProps$options === void 0 ? void 0 : _prevProps$options.resolution) !== (options === null || options === void 0 ? void 0 : options.resolution)) {
        this.updateSize();
      } // handle raf change


      if (prevProps.raf !== raf) {
        this.app.ticker[raf ? 'start' : 'stop']();
      } // flush fiber


      PixiFiber.updateContainer(this.getChildren(), this.mountNode, this);

      if (prevProps.width !== width || prevProps.height !== height || prevProps.raf !== raf || prevProps.renderOnComponentChange !== renderOnComponentChange || prevProps.options !== options) {
        this._needsUpdate = true;
        this.renderStage();
      }
    }
  }, {
    key: "resetInteractionManager",
    value: function resetInteractionManager() {
      this.app.renderer.plugins.interaction.resolution = this.app.renderer.resolution;
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      var children = this.props.children;
      return /*#__PURE__*/React__default['default'].createElement(AppProvider, {
        value: this.app
      }, children);
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      console.error("Error occurred in `Stage`.");
      console.error(error);
      console.error(errorInfo);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.onUnmount(this.app);

      if (this._ticker) {
        this._ticker.remove(this.renderStage);

        this._ticker.destroy();
      }

      window.removeEventListener('__REACT_PIXI_REQUEST_RENDER__', this.needsRenderUpdate);
      PixiFiber.updateContainer(null, this.mountNode, this);

      if (this._mediaQuery) {
        this._mediaQuery.removeListener(this.updateSize);

        this._mediaQuery = null;
      }

      this.app.destroy();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var options = this.props.options;

      if (options && options.view) {
        invariant(options.view instanceof HTMLCanvasElement, 'options.view needs to be a `HTMLCanvasElement`');
        return null;
      }

      return /*#__PURE__*/React__default['default'].createElement("canvas", _extends({}, getCanvasProps(this.props), {
        ref: function ref(c) {
          return _this2._canvas = c;
        }
      }));
    }
  }]);

  return Stage;
}(React__default['default'].Component);

Stage.propTypes = propTypes;
Stage.defaultProps = defaultProps;

function useApp() {
  var app = React.useContext(Context);
  invariant(app instanceof pixi_js.Application, 'No Context found with `%s`. Make sure to wrap component with `%s`', 'PIXI.Application', 'AppProvider');
  return app;
}

function useTick(callback) {
  var enabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var app = useApp();
  invariant(typeof callback === 'function', '`useTick` needs a callback function.');
  invariant(app instanceof pixi_js.Application, 'No Context found with `%s`. Make sure to wrap component with `%s`', 'PIXI.Application', 'AppProvider');
  var savedRef = React.useRef(null);
  React.useEffect(function () {
    savedRef.current = callback;
  }, [callback]);
  React.useEffect(function () {
    if (enabled) {
      var tick = function tick(delta) {
        return savedRef.current(delta);
      };

      app.ticker.add(tick);
      return function () {
        if (app.ticker) {
          app.ticker.remove(tick);
        }
      };
    }
  }, [enabled]);
}

var _excluded = ["children", "apply"];
var withFilters = function withFilters(WrapperComponent, filters) {
  invariant(_typeof(filters) === 'object', 'Second argument needs to be an indexed object with { prop: Filter }');
  var keys = Object.keys(filters);

  var Wrapper = function Wrapper(_ref) {
    var children = _ref.children,
        apply = _ref.apply,
        props = _objectWithoutProperties(_ref, _excluded);

    // create filters
    var filterList = React.useRef(React.useMemo(function () {
      return keys.map(function (prop) {
        var _props$prop;

        var constructorArgs = (props === null || props === void 0 ? void 0 : (_props$prop = props[prop]) === null || _props$prop === void 0 ? void 0 : _props$prop.construct) || [];
        return _construct(filters[prop], _toConsumableArray(constructorArgs));
      });
    }, [keys]));
    var filterObj = React.useMemo(function () {
      return keys.reduce(function (all, c, i) {
        return _objectSpread2(_objectSpread2({}, all), {}, _defineProperty({}, c, filterList.current[i]));
      }, {});
    }, [keys]); // get rest props

    var restProps = React.useMemo(function () {
      return Object.keys(props).filter(not(hasKey(keys))).reduce(function (all, c) {
        return _objectSpread2(_objectSpread2({}, all), {}, _defineProperty({}, c, props[c]));
      }, {});
    }, [props, keys]); // update filter params

    keys.forEach(function (k, i) {
      return Object.assign(filterList.current[i], props[k]);
    }); // use apply ?

    if (apply && isFunction(apply)) {
      apply.call(WrapperComponent, filterObj);
    }

    return /*#__PURE__*/React__default['default'].createElement(WrapperComponent, _extends({}, restProps, {
      filters: filterList.current
    }), children);
  };

  Wrapper.displayName = 'FilterWrapper';
  Wrapper.propTypes = {
    children: PropTypes__default['default'].node,
    apply: PropTypes__default['default'].func
  };
  return Wrapper;
};

var BitmapText = TYPES.BitmapText;
var Container = TYPES.Container;
var Graphics = TYPES.Graphics;
var NineSlicePlane = TYPES.NineSlicePlane;
var ParticleContainer = TYPES.ParticleContainer;
var Sprite = TYPES.Sprite;
var AnimatedSprite = TYPES.AnimatedSprite;
var Text = TYPES.Text;
var TilingSprite = TYPES.TilingSprite;
var SimpleMesh = TYPES.SimpleMesh;
var SimpleRope = TYPES.SimpleRope;

exports.Animated = animated;
exports.AnimatedSprite = AnimatedSprite;
exports.AppConsumer = AppConsumer;
exports.AppContext = Context;
exports.AppProvider = AppProvider;
exports.BitmapText = BitmapText;
exports.Container = Container;
exports.Graphics = Graphics;
exports.NineSlicePlane = NineSlicePlane;
exports.ParticleContainer = ParticleContainer;
exports.PixiComponent = PixiComponent;
exports.PixiFiber = PixiFiber;
exports.SimpleMesh = SimpleMesh;
exports.SimpleRope = SimpleRope;
exports.Sprite = Sprite;
exports.Stage = Stage;
exports.Text = Text;
exports.TilingSprite = TilingSprite;
exports.applyDefaultProps = applyDefaultProps;
exports.eventHandlers = eventHandlers;
exports.render = render;
exports.unmountComponentAtNode = unmountComponentAtNode;
exports.useApp = useApp;
exports.useTick = useTick;
exports.withFilters = withFilters;
exports.withPixiApp = withPixiApp;
//# sourceMappingURL=index.js.map
