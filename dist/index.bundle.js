module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/passport-local/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/passport-local/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\nvar Strategy = __webpack_require__(/*! ./strategy */ \"./node_modules/passport-local/lib/strategy.js\");\n\n\n/**\n * Expose `Strategy` directly from package.\n */\nexports = module.exports = Strategy;\n\n/**\n * Export constructors.\n */\nexports.Strategy = Strategy;\n\n\n//# sourceURL=webpack:///./node_modules/passport-local/lib/index.js?");

/***/ }),

/***/ "./node_modules/passport-local/lib/strategy.js":
/*!*****************************************************!*\
  !*** ./node_modules/passport-local/lib/strategy.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\nvar passport = __webpack_require__(/*! passport-strategy */ \"./node_modules/passport-strategy/lib/index.js\")\n  , util = __webpack_require__(/*! util */ \"util\")\n  , lookup = __webpack_require__(/*! ./utils */ \"./node_modules/passport-local/lib/utils.js\").lookup;\n\n\n/**\n * `Strategy` constructor.\n *\n * The local authentication strategy authenticates requests based on the\n * credentials submitted through an HTML-based login form.\n *\n * Applications must supply a `verify` callback which accepts `username` and\n * `password` credentials, and then calls the `done` callback supplying a\n * `user`, which should be set to `false` if the credentials are not valid.\n * If an exception occured, `err` should be set.\n *\n * Optionally, `options` can be used to change the fields in which the\n * credentials are found.\n *\n * Options:\n *   - `usernameField`  field name where the username is found, defaults to _username_\n *   - `passwordField`  field name where the password is found, defaults to _password_\n *   - `passReqToCallback`  when `true`, `req` is the first argument to the verify callback (default: `false`)\n *\n * Examples:\n *\n *     passport.use(new LocalStrategy(\n *       function(username, password, done) {\n *         User.findOne({ username: username, password: password }, function (err, user) {\n *           done(err, user);\n *         });\n *       }\n *     ));\n *\n * @param {Object} options\n * @param {Function} verify\n * @api public\n */\nfunction Strategy(options, verify) {\n  if (typeof options == 'function') {\n    verify = options;\n    options = {};\n  }\n  if (!verify) { throw new TypeError('LocalStrategy requires a verify callback'); }\n  \n  this._usernameField = options.usernameField || 'username';\n  this._passwordField = options.passwordField || 'password';\n  \n  passport.Strategy.call(this);\n  this.name = 'local';\n  this._verify = verify;\n  this._passReqToCallback = options.passReqToCallback;\n}\n\n/**\n * Inherit from `passport.Strategy`.\n */\nutil.inherits(Strategy, passport.Strategy);\n\n/**\n * Authenticate request based on the contents of a form submission.\n *\n * @param {Object} req\n * @api protected\n */\nStrategy.prototype.authenticate = function(req, options) {\n  options = options || {};\n  var username = lookup(req.body, this._usernameField) || lookup(req.query, this._usernameField);\n  var password = lookup(req.body, this._passwordField) || lookup(req.query, this._passwordField);\n  \n  if (!username || !password) {\n    return this.fail({ message: options.badRequestMessage || 'Missing credentials' }, 400);\n  }\n  \n  var self = this;\n  \n  function verified(err, user, info) {\n    if (err) { return self.error(err); }\n    if (!user) { return self.fail(info); }\n    self.success(user, info);\n  }\n  \n  try {\n    if (self._passReqToCallback) {\n      this._verify(req, username, password, verified);\n    } else {\n      this._verify(username, password, verified);\n    }\n  } catch (ex) {\n    return self.error(ex);\n  }\n};\n\n\n/**\n * Expose `Strategy`.\n */\nmodule.exports = Strategy;\n\n\n//# sourceURL=webpack:///./node_modules/passport-local/lib/strategy.js?");

/***/ }),

/***/ "./node_modules/passport-local/lib/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/passport-local/lib/utils.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.lookup = function(obj, field) {\n  if (!obj) { return null; }\n  var chain = field.split(']').join('').split('[');\n  for (var i = 0, len = chain.length; i < len; i++) {\n    var prop = obj[chain[i]];\n    if (typeof(prop) === 'undefined') { return null; }\n    if (typeof(prop) !== 'object') { return prop; }\n    obj = prop;\n  }\n  return null;\n};\n\n\n//# sourceURL=webpack:///./node_modules/passport-local/lib/utils.js?");

/***/ }),

/***/ "./node_modules/passport-strategy/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/passport-strategy/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\nvar Strategy = __webpack_require__(/*! ./strategy */ \"./node_modules/passport-strategy/lib/strategy.js\");\n\n\n/**\n * Expose `Strategy` directly from package.\n */\nexports = module.exports = Strategy;\n\n/**\n * Export constructors.\n */\nexports.Strategy = Strategy;\n\n\n//# sourceURL=webpack:///./node_modules/passport-strategy/lib/index.js?");

/***/ }),

/***/ "./node_modules/passport-strategy/lib/strategy.js":
/*!********************************************************!*\
  !*** ./node_modules/passport-strategy/lib/strategy.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Creates an instance of `Strategy`.\n *\n * @constructor\n * @api public\n */\nfunction Strategy() {\n}\n\n/**\n * Authenticate request.\n *\n * This function must be overridden by subclasses.  In abstract form, it always\n * throws an exception.\n *\n * @param {Object} req The request to authenticate.\n * @param {Object} [options] Strategy-specific options.\n * @api public\n */\nStrategy.prototype.authenticate = function(req, options) {\n  throw new Error('Strategy#authenticate must be overridden by subclass');\n};\n\n\n/**\n * Expose `Strategy`.\n */\nmodule.exports = Strategy;\n\n\n//# sourceURL=webpack:///./node_modules/passport-strategy/lib/strategy.js?");

/***/ }),

/***/ "./node_modules/passport/lib/authenticator.js":
/*!****************************************************!*\
  !*** ./node_modules/passport/lib/authenticator.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\nvar SessionStrategy = __webpack_require__(/*! ./strategies/session */ \"./node_modules/passport/lib/strategies/session.js\")\n  , SessionManager = __webpack_require__(/*! ./sessionmanager */ \"./node_modules/passport/lib/sessionmanager.js\");\n\n\n/**\n * `Authenticator` constructor.\n *\n * @api public\n */\nfunction Authenticator() {\n  this._key = 'passport';\n  this._strategies = {};\n  this._serializers = [];\n  this._deserializers = [];\n  this._infoTransformers = [];\n  this._framework = null;\n  this._userProperty = 'user';\n  \n  this.init();\n}\n\n/**\n * Initialize authenticator.\n *\n * @api protected\n */\nAuthenticator.prototype.init = function() {\n  this.framework(__webpack_require__(/*! ./framework/connect */ \"./node_modules/passport/lib/framework/connect.js\")());\n  this.use(new SessionStrategy(this.deserializeUser.bind(this)));\n  this._sm = new SessionManager({ key: this._key }, this.serializeUser.bind(this));\n};\n\n/**\n * Utilize the given `strategy` with optional `name`, overridding the strategy's\n * default name.\n *\n * Examples:\n *\n *     passport.use(new TwitterStrategy(...));\n *\n *     passport.use('api', new http.BasicStrategy(...));\n *\n * @param {String|Strategy} name\n * @param {Strategy} strategy\n * @return {Authenticator} for chaining\n * @api public\n */\nAuthenticator.prototype.use = function(name, strategy) {\n  if (!strategy) {\n    strategy = name;\n    name = strategy.name;\n  }\n  if (!name) { throw new Error('Authentication strategies must have a name'); }\n  \n  this._strategies[name] = strategy;\n  return this;\n};\n\n/**\n * Un-utilize the `strategy` with given `name`.\n *\n * In typical applications, the necessary authentication strategies are static,\n * configured once and always available.  As such, there is often no need to\n * invoke this function.\n *\n * However, in certain situations, applications may need dynamically configure\n * and de-configure authentication strategies.  The `use()`/`unuse()`\n * combination satisfies these scenarios.\n *\n * Examples:\n *\n *     passport.unuse('legacy-api');\n *\n * @param {String} name\n * @return {Authenticator} for chaining\n * @api public\n */\nAuthenticator.prototype.unuse = function(name) {\n  delete this._strategies[name];\n  return this;\n};\n\n/**\n * Setup Passport to be used under framework.\n *\n * By default, Passport exposes middleware that operate using Connect-style\n * middleware using a `fn(req, res, next)` signature.  Other popular frameworks\n * have different expectations, and this function allows Passport to be adapted\n * to operate within such environments.\n *\n * If you are using a Connect-compatible framework, including Express, there is\n * no need to invoke this function.\n *\n * Examples:\n *\n *     passport.framework(require('hapi-passport')());\n *\n * @param {Object} name\n * @return {Authenticator} for chaining\n * @api public\n */\nAuthenticator.prototype.framework = function(fw) {\n  this._framework = fw;\n  return this;\n};\n\n/**\n * Passport's primary initialization middleware.\n *\n * This middleware must be in use by the Connect/Express application for\n * Passport to operate.\n *\n * Options:\n *   - `userProperty`  Property to set on `req` upon login, defaults to _user_\n *\n * Examples:\n *\n *     app.use(passport.initialize());\n *\n *     app.use(passport.initialize({ userProperty: 'currentUser' }));\n *\n * @param {Object} options\n * @return {Function} middleware\n * @api public\n */\nAuthenticator.prototype.initialize = function(options) {\n  options = options || {};\n  this._userProperty = options.userProperty || 'user';\n  \n  return this._framework.initialize(this, options);\n};\n\n/**\n * Middleware that will authenticate a request using the given `strategy` name,\n * with optional `options` and `callback`.\n *\n * Examples:\n *\n *     passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' })(req, res);\n *\n *     passport.authenticate('local', function(err, user) {\n *       if (!user) { return res.redirect('/login'); }\n *       res.end('Authenticated!');\n *     })(req, res);\n *\n *     passport.authenticate('basic', { session: false })(req, res);\n *\n *     app.get('/auth/twitter', passport.authenticate('twitter'), function(req, res) {\n *       // request will be redirected to Twitter\n *     });\n *     app.get('/auth/twitter/callback', passport.authenticate('twitter'), function(req, res) {\n *       res.json(req.user);\n *     });\n *\n * @param {String} strategy\n * @param {Object} options\n * @param {Function} callback\n * @return {Function} middleware\n * @api public\n */\nAuthenticator.prototype.authenticate = function(strategy, options, callback) {\n  return this._framework.authenticate(this, strategy, options, callback);\n};\n\n/**\n * Middleware that will authorize a third-party account using the given\n * `strategy` name, with optional `options`.\n *\n * If authorization is successful, the result provided by the strategy's verify\n * callback will be assigned to `req.account`.  The existing login session and\n * `req.user` will be unaffected.\n *\n * This function is particularly useful when connecting third-party accounts\n * to the local account of a user that is currently authenticated.\n *\n * Examples:\n *\n *    passport.authorize('twitter-authz', { failureRedirect: '/account' });\n *\n * @param {String} strategy\n * @param {Object} options\n * @return {Function} middleware\n * @api public\n */\nAuthenticator.prototype.authorize = function(strategy, options, callback) {\n  options = options || {};\n  options.assignProperty = 'account';\n  \n  var fn = this._framework.authorize || this._framework.authenticate;\n  return fn(this, strategy, options, callback);\n};\n\n/**\n * Middleware that will restore login state from a session.\n *\n * Web applications typically use sessions to maintain login state between\n * requests.  For example, a user will authenticate by entering credentials into\n * a form which is submitted to the server.  If the credentials are valid, a\n * login session is established by setting a cookie containing a session\n * identifier in the user's web browser.  The web browser will send this cookie\n * in subsequent requests to the server, allowing a session to be maintained.\n *\n * If sessions are being utilized, and a login session has been established,\n * this middleware will populate `req.user` with the current user.\n *\n * Note that sessions are not strictly required for Passport to operate.\n * However, as a general rule, most web applications will make use of sessions.\n * An exception to this rule would be an API server, which expects each HTTP\n * request to provide credentials in an Authorization header.\n *\n * Examples:\n *\n *     app.use(connect.cookieParser());\n *     app.use(connect.session({ secret: 'keyboard cat' }));\n *     app.use(passport.initialize());\n *     app.use(passport.session());\n *\n * Options:\n *   - `pauseStream`      Pause the request stream before deserializing the user\n *                        object from the session.  Defaults to _false_.  Should\n *                        be set to true in cases where middleware consuming the\n *                        request body is configured after passport and the\n *                        deserializeUser method is asynchronous.\n *\n * @param {Object} options\n * @return {Function} middleware\n * @api public\n */\nAuthenticator.prototype.session = function(options) {\n  return this.authenticate('session', options);\n};\n\n// TODO: Make session manager pluggable\n/*\nAuthenticator.prototype.sessionManager = function(mgr) {\n  this._sm = mgr;\n  return this;\n}\n*/\n\n/**\n * Registers a function used to serialize user objects into the session.\n *\n * Examples:\n *\n *     passport.serializeUser(function(user, done) {\n *       done(null, user.id);\n *     });\n *\n * @api public\n */\nAuthenticator.prototype.serializeUser = function(fn, req, done) {\n  if (typeof fn === 'function') {\n    return this._serializers.push(fn);\n  }\n  \n  // private implementation that traverses the chain of serializers, attempting\n  // to serialize a user\n  var user = fn;\n\n  // For backwards compatibility\n  if (typeof req === 'function') {\n    done = req;\n    req = undefined;\n  }\n  \n  var stack = this._serializers;\n  (function pass(i, err, obj) {\n    // serializers use 'pass' as an error to skip processing\n    if ('pass' === err) {\n      err = undefined;\n    }\n    // an error or serialized object was obtained, done\n    if (err || obj || obj === 0) { return done(err, obj); }\n    \n    var layer = stack[i];\n    if (!layer) {\n      return done(new Error('Failed to serialize user into session'));\n    }\n    \n    \n    function serialized(e, o) {\n      pass(i + 1, e, o);\n    }\n    \n    try {\n      var arity = layer.length;\n      if (arity == 3) {\n        layer(req, user, serialized);\n      } else {\n        layer(user, serialized);\n      }\n    } catch(e) {\n      return done(e);\n    }\n  })(0);\n};\n\n/**\n * Registers a function used to deserialize user objects out of the session.\n *\n * Examples:\n *\n *     passport.deserializeUser(function(id, done) {\n *       User.findById(id, function (err, user) {\n *         done(err, user);\n *       });\n *     });\n *\n * @api public\n */\nAuthenticator.prototype.deserializeUser = function(fn, req, done) {\n  if (typeof fn === 'function') {\n    return this._deserializers.push(fn);\n  }\n  \n  // private implementation that traverses the chain of deserializers,\n  // attempting to deserialize a user\n  var obj = fn;\n\n  // For backwards compatibility\n  if (typeof req === 'function') {\n    done = req;\n    req = undefined;\n  }\n  \n  var stack = this._deserializers;\n  (function pass(i, err, user) {\n    // deserializers use 'pass' as an error to skip processing\n    if ('pass' === err) {\n      err = undefined;\n    }\n    // an error or deserialized user was obtained, done\n    if (err || user) { return done(err, user); }\n    // a valid user existed when establishing the session, but that user has\n    // since been removed\n    if (user === null || user === false) { return done(null, false); }\n    \n    var layer = stack[i];\n    if (!layer) {\n      return done(new Error('Failed to deserialize user out of session'));\n    }\n    \n    \n    function deserialized(e, u) {\n      pass(i + 1, e, u);\n    }\n    \n    try {\n      var arity = layer.length;\n      if (arity == 3) {\n        layer(req, obj, deserialized);\n      } else {\n        layer(obj, deserialized);\n      }\n    } catch(e) {\n      return done(e);\n    }\n  })(0);\n};\n\n/**\n * Registers a function used to transform auth info.\n *\n * In some circumstances authorization details are contained in authentication\n * credentials or loaded as part of verification.\n *\n * For example, when using bearer tokens for API authentication, the tokens may\n * encode (either directly or indirectly in a database), details such as scope\n * of access or the client to which the token was issued.\n *\n * Such authorization details should be enforced separately from authentication.\n * Because Passport deals only with the latter, this is the responsiblity of\n * middleware or routes further along the chain.  However, it is not optimal to\n * decode the same data or execute the same database query later.  To avoid\n * this, Passport accepts optional `info` along with the authenticated `user`\n * in a strategy's `success()` action.  This info is set at `req.authInfo`,\n * where said later middlware or routes can access it.\n *\n * Optionally, applications can register transforms to proccess this info,\n * which take effect prior to `req.authInfo` being set.  This is useful, for\n * example, when the info contains a client ID.  The transform can load the\n * client from the database and include the instance in the transformed info,\n * allowing the full set of client properties to be convieniently accessed.\n *\n * If no transforms are registered, `info` supplied by the strategy will be left\n * unmodified.\n *\n * Examples:\n *\n *     passport.transformAuthInfo(function(info, done) {\n *       Client.findById(info.clientID, function (err, client) {\n *         info.client = client;\n *         done(err, info);\n *       });\n *     });\n *\n * @api public\n */\nAuthenticator.prototype.transformAuthInfo = function(fn, req, done) {\n  if (typeof fn === 'function') {\n    return this._infoTransformers.push(fn);\n  }\n  \n  // private implementation that traverses the chain of transformers,\n  // attempting to transform auth info\n  var info = fn;\n\n  // For backwards compatibility\n  if (typeof req === 'function') {\n    done = req;\n    req = undefined;\n  }\n  \n  var stack = this._infoTransformers;\n  (function pass(i, err, tinfo) {\n    // transformers use 'pass' as an error to skip processing\n    if ('pass' === err) {\n      err = undefined;\n    }\n    // an error or transformed info was obtained, done\n    if (err || tinfo) { return done(err, tinfo); }\n    \n    var layer = stack[i];\n    if (!layer) {\n      // if no transformers are registered (or they all pass), the default\n      // behavior is to use the un-transformed info as-is\n      return done(null, info);\n    }\n    \n    \n    function transformed(e, t) {\n      pass(i + 1, e, t);\n    }\n    \n    try {\n      var arity = layer.length;\n      if (arity == 1) {\n        // sync\n        var t = layer(info);\n        transformed(null, t);\n      } else if (arity == 3) {\n        layer(req, info, transformed);\n      } else {\n        layer(info, transformed);\n      }\n    } catch(e) {\n      return done(e);\n    }\n  })(0);\n};\n\n/**\n * Return strategy with given `name`. \n *\n * @param {String} name\n * @return {Strategy}\n * @api private\n */\nAuthenticator.prototype._strategy = function(name) {\n  return this._strategies[name];\n};\n\n\n/**\n * Expose `Authenticator`.\n */\nmodule.exports = Authenticator;\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/authenticator.js?");

/***/ }),

/***/ "./node_modules/passport/lib/errors/authenticationerror.js":
/*!*****************************************************************!*\
  !*** ./node_modules/passport/lib/errors/authenticationerror.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * `AuthenticationError` error.\n *\n * @constructor\n * @api private\n */\nfunction AuthenticationError(message, status) {\n  Error.call(this);\n  Error.captureStackTrace(this, arguments.callee);\n  this.name = 'AuthenticationError';\n  this.message = message;\n  this.status = status || 401;\n}\n\n// Inherit from `Error`.\nAuthenticationError.prototype.__proto__ = Error.prototype;\n\n\n// Expose constructor.\nmodule.exports = AuthenticationError;\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/errors/authenticationerror.js?");

/***/ }),

/***/ "./node_modules/passport/lib/framework/connect.js":
/*!********************************************************!*\
  !*** ./node_modules/passport/lib/framework/connect.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\nvar initialize = __webpack_require__(/*! ../middleware/initialize */ \"./node_modules/passport/lib/middleware/initialize.js\")\n  , authenticate = __webpack_require__(/*! ../middleware/authenticate */ \"./node_modules/passport/lib/middleware/authenticate.js\");\n  \n/**\n * Framework support for Connect/Express.\n *\n * This module provides support for using Passport with Express.  It exposes\n * middleware that conform to the `fn(req, res, next)` signature and extends\n * Node's built-in HTTP request object with useful authentication-related\n * functions.\n *\n * @return {Object}\n * @api protected\n */\nexports = module.exports = function() {\n  \n  // HTTP extensions.\n  exports.__monkeypatchNode();\n  \n  return {\n    initialize: initialize,\n    authenticate: authenticate\n  };\n};\n\nexports.__monkeypatchNode = function() {\n  var http = __webpack_require__(/*! http */ \"http\");\n  var IncomingMessageExt = __webpack_require__(/*! ../http/request */ \"./node_modules/passport/lib/http/request.js\");\n  \n  http.IncomingMessage.prototype.login =\n  http.IncomingMessage.prototype.logIn = IncomingMessageExt.logIn;\n  http.IncomingMessage.prototype.logout =\n  http.IncomingMessage.prototype.logOut = IncomingMessageExt.logOut;\n  http.IncomingMessage.prototype.isAuthenticated = IncomingMessageExt.isAuthenticated;\n  http.IncomingMessage.prototype.isUnauthenticated = IncomingMessageExt.isUnauthenticated;\n};\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/framework/connect.js?");

/***/ }),

/***/ "./node_modules/passport/lib/http/request.js":
/*!***************************************************!*\
  !*** ./node_modules/passport/lib/http/request.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Module dependencies.\n */\n//var http = require('http')\n//  , req = http.IncomingMessage.prototype;\n\n\nvar req = exports = module.exports = {};\n\n/**\n * Initiate a login session for `user`.\n *\n * Options:\n *   - `session`  Save login state in session, defaults to _true_\n *\n * Examples:\n *\n *     req.logIn(user, { session: false });\n *\n *     req.logIn(user, function(err) {\n *       if (err) { throw err; }\n *       // session saved\n *     });\n *\n * @param {User} user\n * @param {Object} options\n * @param {Function} done\n * @api public\n */\nreq.login =\nreq.logIn = function(user, options, done) {\n  if (typeof options == 'function') {\n    done = options;\n    options = {};\n  }\n  options = options || {};\n  \n  var property = 'user';\n  if (this._passport && this._passport.instance) {\n    property = this._passport.instance._userProperty || 'user';\n  }\n  var session = (options.session === undefined) ? true : options.session;\n  \n  this[property] = user;\n  if (session) {\n    if (!this._passport) { throw new Error('passport.initialize() middleware not in use'); }\n    if (typeof done != 'function') { throw new Error('req#login requires a callback function'); }\n    \n    var self = this;\n    this._passport.instance._sm.logIn(this, user, function(err) {\n      if (err) { self[property] = null; return done(err); }\n      done();\n    });\n  } else {\n    done && done();\n  }\n};\n\n/**\n * Terminate an existing login session.\n *\n * @api public\n */\nreq.logout =\nreq.logOut = function() {\n  var property = 'user';\n  if (this._passport && this._passport.instance) {\n    property = this._passport.instance._userProperty || 'user';\n  }\n  \n  this[property] = null;\n  if (this._passport) {\n    this._passport.instance._sm.logOut(this);\n  }\n};\n\n/**\n * Test if request is authenticated.\n *\n * @return {Boolean}\n * @api public\n */\nreq.isAuthenticated = function() {\n  var property = 'user';\n  if (this._passport && this._passport.instance) {\n    property = this._passport.instance._userProperty || 'user';\n  }\n  \n  return (this[property]) ? true : false;\n};\n\n/**\n * Test if request is unauthenticated.\n *\n * @return {Boolean}\n * @api public\n */\nreq.isUnauthenticated = function() {\n  return !this.isAuthenticated();\n};\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/http/request.js?");

/***/ }),

/***/ "./node_modules/passport/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/passport/lib/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\nvar Passport = __webpack_require__(/*! ./authenticator */ \"./node_modules/passport/lib/authenticator.js\")\n  , SessionStrategy = __webpack_require__(/*! ./strategies/session */ \"./node_modules/passport/lib/strategies/session.js\");\n\n\n/**\n * Export default singleton.\n *\n * @api public\n */\nexports = module.exports = new Passport();\n\n/**\n * Expose constructors.\n */\nexports.Passport =\nexports.Authenticator = Passport;\nexports.Strategy = __webpack_require__(/*! passport-strategy */ \"./node_modules/passport-strategy/lib/index.js\");\n\n/**\n * Expose strategies.\n */\nexports.strategies = {};\nexports.strategies.SessionStrategy = SessionStrategy;\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/index.js?");

/***/ }),

/***/ "./node_modules/passport/lib/middleware/authenticate.js":
/*!**************************************************************!*\
  !*** ./node_modules/passport/lib/middleware/authenticate.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\nvar http = __webpack_require__(/*! http */ \"http\")\n  , IncomingMessageExt = __webpack_require__(/*! ../http/request */ \"./node_modules/passport/lib/http/request.js\")\n  , AuthenticationError = __webpack_require__(/*! ../errors/authenticationerror */ \"./node_modules/passport/lib/errors/authenticationerror.js\");\n\n\n/**\n * Authenticates requests.\n *\n * Applies the `name`ed strategy (or strategies) to the incoming request, in\n * order to authenticate the request.  If authentication is successful, the user\n * will be logged in and populated at `req.user` and a session will be\n * established by default.  If authentication fails, an unauthorized response\n * will be sent.\n *\n * Options:\n *   - `session`          Save login state in session, defaults to _true_\n *   - `successRedirect`  After successful login, redirect to given URL\n *   - `successMessage`   True to store success message in\n *                        req.session.messages, or a string to use as override\n *                        message for success.\n *   - `successFlash`     True to flash success messages or a string to use as a flash\n *                        message for success (overrides any from the strategy itself).\n *   - `failureRedirect`  After failed login, redirect to given URL\n *   - `failureMessage`   True to store failure message in\n *                        req.session.messages, or a string to use as override\n *                        message for failure.\n *   - `failureFlash`     True to flash failure messages or a string to use as a flash\n *                        message for failures (overrides any from the strategy itself).\n *   - `assignProperty`   Assign the object provided by the verify callback to given property\n *\n * An optional `callback` can be supplied to allow the application to override\n * the default manner in which authentication attempts are handled.  The\n * callback has the following signature, where `user` will be set to the\n * authenticated user on a successful authentication attempt, or `false`\n * otherwise.  An optional `info` argument will be passed, containing additional\n * details provided by the strategy's verify callback - this could be information about\n * a successful authentication or a challenge message for a failed authentication.\n * An optional `status` argument will be passed when authentication fails - this could\n * be a HTTP response code for a remote authentication failure or similar.\n *\n *     app.get('/protected', function(req, res, next) {\n *       passport.authenticate('local', function(err, user, info, status) {\n *         if (err) { return next(err) }\n *         if (!user) { return res.redirect('/signin') }\n *         res.redirect('/account');\n *       })(req, res, next);\n *     });\n *\n * Note that if a callback is supplied, it becomes the application's\n * responsibility to log-in the user, establish a session, and otherwise perform\n * the desired operations.\n *\n * Examples:\n *\n *     passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' });\n *\n *     passport.authenticate('basic', { session: false });\n *\n *     passport.authenticate('twitter');\n *\n * @param {String|Array} name\n * @param {Object} options\n * @param {Function} callback\n * @return {Function}\n * @api public\n */\nmodule.exports = function authenticate(passport, name, options, callback) {\n  if (typeof options == 'function') {\n    callback = options;\n    options = {};\n  }\n  options = options || {};\n  \n  var multi = true;\n  \n  // Cast `name` to an array, allowing authentication to pass through a chain of\n  // strategies.  The first strategy to succeed, redirect, or error will halt\n  // the chain.  Authentication failures will proceed through each strategy in\n  // series, ultimately failing if all strategies fail.\n  //\n  // This is typically used on API endpoints to allow clients to authenticate\n  // using their preferred choice of Basic, Digest, token-based schemes, etc.\n  // It is not feasible to construct a chain of multiple strategies that involve\n  // redirection (for example both Facebook and Twitter), since the first one to\n  // redirect will halt the chain.\n  if (!Array.isArray(name)) {\n    name = [ name ];\n    multi = false;\n  }\n  \n  return function authenticate(req, res, next) {\n    if (http.IncomingMessage.prototype.logIn\n        && http.IncomingMessage.prototype.logIn !== IncomingMessageExt.logIn) {\n      __webpack_require__(/*! ../framework/connect */ \"./node_modules/passport/lib/framework/connect.js\").__monkeypatchNode();\n    }\n    \n    \n    // accumulator for failures from each strategy in the chain\n    var failures = [];\n    \n    function allFailed() {\n      if (callback) {\n        if (!multi) {\n          return callback(null, false, failures[0].challenge, failures[0].status);\n        } else {\n          var challenges = failures.map(function(f) { return f.challenge; });\n          var statuses = failures.map(function(f) { return f.status; });\n          return callback(null, false, challenges, statuses);\n        }\n      }\n      \n      // Strategies are ordered by priority.  For the purpose of flashing a\n      // message, the first failure will be displayed.\n      var failure = failures[0] || {}\n        , challenge = failure.challenge || {}\n        , msg;\n    \n      if (options.failureFlash) {\n        var flash = options.failureFlash;\n        if (typeof flash == 'string') {\n          flash = { type: 'error', message: flash };\n        }\n        flash.type = flash.type || 'error';\n      \n        var type = flash.type || challenge.type || 'error';\n        msg = flash.message || challenge.message || challenge;\n        if (typeof msg == 'string') {\n          req.flash(type, msg);\n        }\n      }\n      if (options.failureMessage) {\n        msg = options.failureMessage;\n        if (typeof msg == 'boolean') {\n          msg = challenge.message || challenge;\n        }\n        if (typeof msg == 'string') {\n          req.session.messages = req.session.messages || [];\n          req.session.messages.push(msg);\n        }\n      }\n      if (options.failureRedirect) {\n        return res.redirect(options.failureRedirect);\n      }\n    \n      // When failure handling is not delegated to the application, the default\n      // is to respond with 401 Unauthorized.  Note that the WWW-Authenticate\n      // header will be set according to the strategies in use (see\n      // actions#fail).  If multiple strategies failed, each of their challenges\n      // will be included in the response.\n      var rchallenge = []\n        , rstatus, status;\n      \n      for (var j = 0, len = failures.length; j < len; j++) {\n        failure = failures[j];\n        challenge = failure.challenge;\n        status = failure.status;\n          \n        rstatus = rstatus || status;\n        if (typeof challenge == 'string') {\n          rchallenge.push(challenge);\n        }\n      }\n    \n      res.statusCode = rstatus || 401;\n      if (res.statusCode == 401 && rchallenge.length) {\n        res.setHeader('WWW-Authenticate', rchallenge);\n      }\n      if (options.failWithError) {\n        return next(new AuthenticationError(http.STATUS_CODES[res.statusCode], rstatus));\n      }\n      res.end(http.STATUS_CODES[res.statusCode]);\n    }\n    \n    (function attempt(i) {\n      var layer = name[i];\n      // If no more strategies exist in the chain, authentication has failed.\n      if (!layer) { return allFailed(); }\n    \n      // Get the strategy, which will be used as prototype from which to create\n      // a new instance.  Action functions will then be bound to the strategy\n      // within the context of the HTTP request/response pair.\n      var prototype = passport._strategy(layer);\n      if (!prototype) { return next(new Error('Unknown authentication strategy \"' + layer + '\"')); }\n    \n      var strategy = Object.create(prototype);\n      \n      \n      // ----- BEGIN STRATEGY AUGMENTATION -----\n      // Augment the new strategy instance with action functions.  These action\n      // functions are bound via closure the the request/response pair.  The end\n      // goal of the strategy is to invoke *one* of these action methods, in\n      // order to indicate successful or failed authentication, redirect to a\n      // third-party identity provider, etc.\n      \n      /**\n       * Authenticate `user`, with optional `info`.\n       *\n       * Strategies should call this function to successfully authenticate a\n       * user.  `user` should be an object supplied by the application after it\n       * has been given an opportunity to verify credentials.  `info` is an\n       * optional argument containing additional user information.  This is\n       * useful for third-party authentication strategies to pass profile\n       * details.\n       *\n       * @param {Object} user\n       * @param {Object} info\n       * @api public\n       */\n      strategy.success = function(user, info) {\n        if (callback) {\n          return callback(null, user, info);\n        }\n      \n        info = info || {};\n        var msg;\n      \n        if (options.successFlash) {\n          var flash = options.successFlash;\n          if (typeof flash == 'string') {\n            flash = { type: 'success', message: flash };\n          }\n          flash.type = flash.type || 'success';\n        \n          var type = flash.type || info.type || 'success';\n          msg = flash.message || info.message || info;\n          if (typeof msg == 'string') {\n            req.flash(type, msg);\n          }\n        }\n        if (options.successMessage) {\n          msg = options.successMessage;\n          if (typeof msg == 'boolean') {\n            msg = info.message || info;\n          }\n          if (typeof msg == 'string') {\n            req.session.messages = req.session.messages || [];\n            req.session.messages.push(msg);\n          }\n        }\n        if (options.assignProperty) {\n          req[options.assignProperty] = user;\n          return next();\n        }\n      \n        req.logIn(user, options, function(err) {\n          if (err) { return next(err); }\n          \n          function complete() {\n            if (options.successReturnToOrRedirect) {\n              var url = options.successReturnToOrRedirect;\n              if (req.session && req.session.returnTo) {\n                url = req.session.returnTo;\n                delete req.session.returnTo;\n              }\n              return res.redirect(url);\n            }\n            if (options.successRedirect) {\n              return res.redirect(options.successRedirect);\n            }\n            next();\n          }\n          \n          if (options.authInfo !== false) {\n            passport.transformAuthInfo(info, req, function(err, tinfo) {\n              if (err) { return next(err); }\n              req.authInfo = tinfo;\n              complete();\n            });\n          } else {\n            complete();\n          }\n        });\n      };\n      \n      /**\n       * Fail authentication, with optional `challenge` and `status`, defaulting\n       * to 401.\n       *\n       * Strategies should call this function to fail an authentication attempt.\n       *\n       * @param {String} challenge\n       * @param {Number} status\n       * @api public\n       */\n      strategy.fail = function(challenge, status) {\n        if (typeof challenge == 'number') {\n          status = challenge;\n          challenge = undefined;\n        }\n        \n        // push this failure into the accumulator and attempt authentication\n        // using the next strategy\n        failures.push({ challenge: challenge, status: status });\n        attempt(i + 1);\n      };\n      \n      /**\n       * Redirect to `url` with optional `status`, defaulting to 302.\n       *\n       * Strategies should call this function to redirect the user (via their\n       * user agent) to a third-party website for authentication.\n       *\n       * @param {String} url\n       * @param {Number} status\n       * @api public\n       */\n      strategy.redirect = function(url, status) {\n        // NOTE: Do not use `res.redirect` from Express, because it can't decide\n        //       what it wants.\n        //\n        //       Express 2.x: res.redirect(url, status)\n        //       Express 3.x: res.redirect(status, url) -OR- res.redirect(url, status)\n        //         - as of 3.14.0, deprecated warnings are issued if res.redirect(url, status)\n        //           is used\n        //       Express 4.x: res.redirect(status, url)\n        //         - all versions (as of 4.8.7) continue to accept res.redirect(url, status)\n        //           but issue deprecated versions\n        \n        res.statusCode = status || 302;\n        res.setHeader('Location', url);\n        res.setHeader('Content-Length', '0');\n        res.end();\n      };\n      \n      /**\n       * Pass without making a success or fail decision.\n       *\n       * Under most circumstances, Strategies should not need to call this\n       * function.  It exists primarily to allow previous authentication state\n       * to be restored, for example from an HTTP session.\n       *\n       * @api public\n       */\n      strategy.pass = function() {\n        next();\n      };\n      \n      /**\n       * Internal error while performing authentication.\n       *\n       * Strategies should call this function when an internal error occurs\n       * during the process of performing authentication; for example, if the\n       * user directory is not available.\n       *\n       * @param {Error} err\n       * @api public\n       */\n      strategy.error = function(err) {\n        if (callback) {\n          return callback(err);\n        }\n        \n        next(err);\n      };\n      \n      // ----- END STRATEGY AUGMENTATION -----\n    \n      strategy.authenticate(req, options);\n    })(0); // attempt\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/middleware/authenticate.js?");

/***/ }),

/***/ "./node_modules/passport/lib/middleware/initialize.js":
/*!************************************************************!*\
  !*** ./node_modules/passport/lib/middleware/initialize.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Passport initialization.\n *\n * Intializes Passport for incoming requests, allowing authentication strategies\n * to be applied.\n *\n * If sessions are being utilized, applications must set up Passport with\n * functions to serialize a user into and out of a session.  For example, a\n * common pattern is to serialize just the user ID into the session (due to the\n * fact that it is desirable to store the minimum amount of data in a session).\n * When a subsequent request arrives for the session, the full User object can\n * be loaded from the database by ID.\n *\n * Note that additional middleware is required to persist login state, so we\n * must use the `connect.session()` middleware _before_ `passport.initialize()`.\n *\n * If sessions are being used, this middleware must be in use by the\n * Connect/Express application for Passport to operate.  If the application is\n * entirely stateless (not using sessions), this middleware is not necessary,\n * but its use will not have any adverse impact.\n *\n * Examples:\n *\n *     app.use(connect.cookieParser());\n *     app.use(connect.session({ secret: 'keyboard cat' }));\n *     app.use(passport.initialize());\n *     app.use(passport.session());\n *\n *     passport.serializeUser(function(user, done) {\n *       done(null, user.id);\n *     });\n *\n *     passport.deserializeUser(function(id, done) {\n *       User.findById(id, function (err, user) {\n *         done(err, user);\n *       });\n *     });\n *\n * @return {Function}\n * @api public\n */\nmodule.exports = function initialize(passport) {\n  \n  return function initialize(req, res, next) {\n    req._passport = {};\n    req._passport.instance = passport;\n\n    if (req.session && req.session[passport._key]) {\n      // load data from existing session\n      req._passport.session = req.session[passport._key];\n    }\n\n    next();\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/middleware/initialize.js?");

/***/ }),

/***/ "./node_modules/passport/lib/sessionmanager.js":
/*!*****************************************************!*\
  !*** ./node_modules/passport/lib/sessionmanager.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function SessionManager(options, serializeUser) {\n  if (typeof options == 'function') {\n    serializeUser = options;\n    options = undefined;\n  }\n  options = options || {};\n  \n  this._key = options.key || 'passport';\n  this._serializeUser = serializeUser;\n}\n\nSessionManager.prototype.logIn = function(req, user, cb) {\n  var self = this;\n  this._serializeUser(user, req, function(err, obj) {\n    if (err) {\n      return cb(err);\n    }\n    if (!req._passport.session) {\n      req._passport.session = {};\n    }\n    req._passport.session.user = obj;\n    if (!req.session) {\n      req.session = {};\n    }\n    req.session[self._key] = req._passport.session;\n    cb();\n  });\n}\n\nSessionManager.prototype.logOut = function(req, cb) {\n  if (req._passport && req._passport.session) {\n    delete req._passport.session.user;\n  }\n  cb && cb();\n}\n\n\nmodule.exports = SessionManager;\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/sessionmanager.js?");

/***/ }),

/***/ "./node_modules/passport/lib/strategies/session.js":
/*!*********************************************************!*\
  !*** ./node_modules/passport/lib/strategies/session.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\nvar pause = __webpack_require__(/*! pause */ \"./node_modules/pause/index.js\")\n  , util = __webpack_require__(/*! util */ \"util\")\n  , Strategy = __webpack_require__(/*! passport-strategy */ \"./node_modules/passport-strategy/lib/index.js\");\n\n\n/**\n * `SessionStrategy` constructor.\n *\n * @api public\n */\nfunction SessionStrategy(options, deserializeUser) {\n  if (typeof options == 'function') {\n    deserializeUser = options;\n    options = undefined;\n  }\n  options = options || {};\n  \n  Strategy.call(this);\n  this.name = 'session';\n  this._deserializeUser = deserializeUser;\n}\n\n/**\n * Inherit from `Strategy`.\n */\nutil.inherits(SessionStrategy, Strategy);\n\n/**\n * Authenticate request based on the current session state.\n *\n * The session authentication strategy uses the session to restore any login\n * state across requests.  If a login session has been established, `req.user`\n * will be populated with the current user.\n *\n * This strategy is registered automatically by Passport.\n *\n * @param {Object} req\n * @param {Object} options\n * @api protected\n */\nSessionStrategy.prototype.authenticate = function(req, options) {\n  if (!req._passport) { return this.error(new Error('passport.initialize() middleware not in use')); }\n  options = options || {};\n\n  var self = this, \n      su;\n  if (req._passport.session) {\n    su = req._passport.session.user;\n  }\n\n  if (su || su === 0) {\n    // NOTE: Stream pausing is desirable in the case where later middleware is\n    //       listening for events emitted from request.  For discussion on the\n    //       matter, refer to: https://github.com/jaredhanson/passport/pull/106\n    \n    var paused = options.pauseStream ? pause(req) : null;\n    this._deserializeUser(su, req, function(err, user) {\n      if (err) { return self.error(err); }\n      if (!user) {\n        delete req._passport.session.user;\n      } else {\n        // TODO: Remove instance access\n        var property = req._passport.instance._userProperty || 'user';\n        req[property] = user;\n      }\n      self.pass();\n      if (paused) {\n        paused.resume();\n      }\n    });\n  } else {\n    self.pass();\n  }\n};\n\n\n/**\n * Expose `SessionStrategy`.\n */\nmodule.exports = SessionStrategy;\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/strategies/session.js?");

/***/ }),

/***/ "./node_modules/pause/index.js":
/*!*************************************!*\
  !*** ./node_modules/pause/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nmodule.exports = function(obj){\n  var onData\n    , onEnd\n    , events = [];\n\n  // buffer data\n  obj.on('data', onData = function(data, encoding){\n    events.push(['data', data, encoding]);\n  });\n\n  // buffer end\n  obj.on('end', onEnd = function(data, encoding){\n    events.push(['end', data, encoding]);\n  });\n\n  return {\n    end: function(){\n      obj.removeListener('data', onData);\n      obj.removeListener('end', onEnd);\n    },\n    resume: function(){\n      this.end();\n      for (var i = 0, len = events.length; i < len; ++i) {\n        obj.emit.apply(obj, events[i]);\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/pause/index.js?");

/***/ }),

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nconst devConfig = {\n  MONGO_URL: 'mongodb://localhost:27017/test'\n};\n\nconst testConfig = {\n  MONGO_URL: 'mongodb://localhost:27017/test'\n};\n\nconst prodConfig = {\n  MONGO_URL: 'mongodb://localhost:27017/test'\n};\n\nconst defaultConfig = {\n  PORT: process.env.PORT || 3000\n};\n\nfunction envConfig(env) {\n  switch (env) {\n    case 'development':\n      return devConfig;\n    case 'test':\n      return testConfig;\n    default:\n      return prodConfig;\n  }\n}\n\nexports.default = Object.assign({}, defaultConfig, envConfig(\"development\"));\n\n//# sourceURL=webpack:///./src/config/constants.js?");

/***/ }),

/***/ "./src/config/database.js":
/*!********************************!*\
  !*** ./src/config/database.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_mongoose2.default.Promise = global.Promise;\n\ntry {\n  _mongoose2.default.set('useCreateIndex', true);\n  _mongoose2.default.connect(_constants2.default.MONGO_URL, { useNewUrlParser: true });\n} catch (err) {\n  _mongoose2.default.createConnection(_constants2.default.MONGO_URL);\n}\n\n_mongoose2.default.connection.once('open', () => console.log('MongoDB running')).on('error', e => {\n  throw error;\n});\n\n//# sourceURL=webpack:///./src/config/database.js?");

/***/ }),

/***/ "./src/config/middleware.js":
/*!**********************************!*\
  !*** ./src/config/middleware.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _passport = __webpack_require__(/*! passport */ \"./node_modules/passport/lib/index.js\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst isDev = \"development\" === 'development';\nconst isProd = \"development\" === 'production';\n\nexports.default = app => {\n  if (isProd) {\n    app.use((0, _compression2.default)());\n    app.use((0, _helmet2.default)());\n  }\n\n  app.use(_bodyParser2.default.json());\n  app.use(_bodyParser2.default.urlencoded({ extended: true }));\n  app.use(_passport2.default.initialize());\n\n  if (isDev) {\n    app.use((0, _morgan2.default)('dev'));\n  }\n};\n\n//# sourceURL=webpack:///./src/config/middleware.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _constants = __webpack_require__(/*! ./config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\n__webpack_require__(/*! ./config/database */ \"./src/config/database.js\");\n\nvar _middleware = __webpack_require__(/*! ./config/middleware */ \"./src/config/middleware.js\");\n\nvar _middleware2 = _interopRequireDefault(_middleware);\n\nvar _modules = __webpack_require__(/*! ./modules */ \"./src/modules/index.js\");\n\nvar _modules2 = _interopRequireDefault(_modules);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst app = (0, _express2.default)(); /* eslint-disable no-console */\n\n(0, _middleware2.default)(app);\n\napp.get('/', (req, res) => {\n  res.send('Hello World!');\n});\n\n(0, _modules2.default)(app);\n\napp.listen(_constants2.default.PORT, err => {\n  if (err) {\n    throw err;\n  } else {\n    console.log(`\n      Server running on port: ${_constants2.default.PORT}\n      ---\n      Running on ${\"development\"}\n      ---\n      Make something great!\n    `);\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _user = __webpack_require__(/*! ./users/user.routes */ \"./src/modules/users/user.routes.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = app => {\n  app.use('/api/v1/users', _user2.default);\n};\n\n//# sourceURL=webpack:///./src/modules/index.js?");

/***/ }),

/***/ "./src/modules/users/user.controllers.js":
/*!***********************************************!*\
  !*** ./src/modules/users/user.controllers.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.signUp = signUp;\nexports.login = login;\n\nvar _user = __webpack_require__(/*! ./user.model */ \"./src/modules/users/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nasync function signUp(req, res) {\n\n  try {\n    const user = await _user2.default.create(req.body);\n    return res.status(201).json(user);\n  } catch (e) {\n    return res.status(500).json(e);\n  }\n}\n\nfunction login(req, res, next) {\n  res.status(200).json(req.user);\n\n  return next();\n}\n\n//# sourceURL=webpack:///./src/modules/users/user.controllers.js?");

/***/ }),

/***/ "./src/modules/users/user.model.js":
/*!*****************************************!*\
  !*** ./src/modules/users/user.model.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _validator = __webpack_require__(/*! validator */ \"validator\");\n\nvar _validator2 = _interopRequireDefault(_validator);\n\nvar _bcryptNodejs = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n\nvar _user = __webpack_require__(/*! ./user.validation */ \"./src/modules/users/user.validation.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst UserSchema = new _mongoose.Schema({\n  email: {\n    type: String,\n    unique: true,\n    required: [true, 'Email is required!'],\n    trim: true,\n    validate: {\n      validator(email) {\n        return _validator2.default.isEmail(email);\n      },\n      message: '{VALUE} is not a valid email'\n    }\n  },\n  firstName: {\n    type: String,\n    required: [true, 'First name is required!'],\n    trim: true\n  },\n  lastName: {\n    type: String,\n    required: [true, 'Last name is required!'],\n    trim: true\n  },\n  userName: {\n    type: String,\n    required: [true, 'Username is required!'],\n    unique: true,\n    trim: true\n  },\n  password: {\n    type: String,\n    required: [true, 'Password is required!'],\n    trim: true,\n    minlength: [6, 'Password need to be longer!'],\n    validate: {\n      validator(password) {\n        return _user.passwordReg.test(password);\n      },\n      message: '{VALUE} is not a valid password!'\n    }\n  }\n});\n\nUserSchema.pre('save', function (next) {\n  if (this.isModified('password')) {\n    this.password = this._hashPassword(this.password);\n    return next();\n  }\n\n  return next();\n});\n\nUserSchema.methods = {\n  _hashPassword(password) {\n    return (0, _bcryptNodejs.hashSync)(password);\n  },\n  authenticateUser(password) {\n    return (0, _bcryptNodejs.compareSync)(password, this.password);\n  }\n};\n\nexports.default = _mongoose2.default.model('User', UserSchema);\n\n//# sourceURL=webpack:///./src/modules/users/user.model.js?");

/***/ }),

/***/ "./src/modules/users/user.routes.js":
/*!******************************************!*\
  !*** ./src/modules/users/user.routes.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nvar _expressValidation2 = _interopRequireDefault(_expressValidation);\n\nvar _auth = __webpack_require__(/*! ../../services/auth.services */ \"./src/services/auth.services.js\");\n\nvar _user = __webpack_require__(/*! ./user.controllers */ \"./src/modules/users/user.controllers.js\");\n\nvar userController = _interopRequireWildcard(_user);\n\nvar _user2 = __webpack_require__(/*! ./user.validation */ \"./src/modules/users/user.validation.js\");\n\nvar _user3 = _interopRequireDefault(_user2);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst routes = new _express.Router();\n\nroutes.post('/signup', (0, _expressValidation2.default)(_user3.default.signup), userController.signUp);\nroutes.post('/login', _auth.authLocal, userController.login);\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/users/user.routes.js?");

/***/ }),

/***/ "./src/modules/users/user.validation.js":
/*!**********************************************!*\
  !*** ./src/modules/users/user.validation.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.passwordReg = undefined;\n\nvar _joi = __webpack_require__(/*! joi */ \"joi\");\n\nvar _joi2 = _interopRequireDefault(_joi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Password validator, rules:\n * 1. At least 6 characters\n * 2. Must contain at least one upper case letter\n */\n\nconst passwordReg = exports.passwordReg = /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;\n\nexports.default = {\n  signup: {\n    email: _joi2.default.string().email().required(),\n    password: _joi2.default.string().regex(passwordReg).required(),\n    firstName: _joi2.default.string().required(),\n    lastName: _joi2.default.string().required(),\n    userName: _joi2.default.string().required()\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/users/user.validation.js?");

/***/ }),

/***/ "./src/services/auth.services.js":
/*!***************************************!*\
  !*** ./src/services/auth.services.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.authLocal = undefined;\n\nvar _passport = __webpack_require__(/*! passport */ \"./node_modules/passport/lib/index.js\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _passportLocal = __webpack_require__(/*! passport-local */ \"./node_modules/passport-local/lib/index.js\");\n\nvar _passportLocal2 = _interopRequireDefault(_passportLocal);\n\nvar _user = __webpack_require__(/*! ../modules/users/user.model */ \"./src/modules/users/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Local strategy\nconst localOpts = {\n  usernameField: 'email'\n};\n\nconst localStrategy = new _passportLocal2.default(localOpts, async (email, password, done) => {\n  try {\n    const user = await _user2.default.findOne({ email });\n    if (!user) {\n      return done(null, false);\n    } else if (!user.authenticateUser(password)) {\n      return done(null, false);\n    }\n\n    return done(null, user);\n  } catch (e) {\n    return done(e, false);\n  }\n});\n\n_passport2.default.use(localStrategy);\n\nconst authLocal = exports.authLocal = _passport2.default.authenticate('local', { session: false });\n\n//# sourceURL=webpack:///./src/services/auth.services.js?");

/***/ }),

/***/ "bcrypt-nodejs":
/*!********************************!*\
  !*** external "bcrypt-nodejs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt-nodejs\");\n\n//# sourceURL=webpack:///external_%22bcrypt-nodejs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-validation":
/*!*************************************!*\
  !*** external "express-validation" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validation\");\n\n//# sourceURL=webpack:///external_%22express-validation%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"joi\");\n\n//# sourceURL=webpack:///external_%22joi%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack:///external_%22util%22?");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");\n\n//# sourceURL=webpack:///external_%22validator%22?");

/***/ })

/******/ });