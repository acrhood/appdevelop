function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, h */

  /***/
  function node_modulesIonicCoreDistEsmHapticCcbda579Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelectionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelection;
    });
    /**
     * Check to see if the Haptic Plugin is available
     * @return Returns `true` or false if the plugin is available
     */

    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */


    var hapticSelection = function hapticSelection() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.selection();
      }
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionStart();
      }
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionChanged();
      }
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionEnd();
      }
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/index-729ec402.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/index-729ec402.js ***!
    \*************************************************************/

  /*! exports provided: s */

  /***/
  function node_modulesIonicCoreDistEsmIndex729ec402Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return sanitizeDOMString;
    });
    /**
     * Does a simple sanitization of all elements
     * in an untrusted string
     */


    var sanitizeDOMString = function sanitizeDOMString(untrustedString) {
      try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
          return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */


        var documentFragment = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */

        blockedTags.forEach(function (blockedTag) {
          var getElementsToRemove = documentFragment.querySelectorAll(blockedTag);

          for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
            var element = getElementsToRemove[elementIndex];

            if (element.parentNode) {
              element.parentNode.removeChild(element);
            } else {
              documentFragment.removeChild(element);
            }
            /**
             * We still need to sanitize
             * the children of this element
             * as they are left behind
             */


            var childElements = getElementChildren(element);
            /* tslint:disable-next-line */

            for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
              sanitizeElement(childElements[childIndex]);
            }
          }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes

        var dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */

        for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
          sanitizeElement(dfChildren[childIndex]);
        } // Append document fragment to div


        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment); // First child is always the div we did our work in

        var getInnerDiv = fragmentDiv.querySelector('div');
        return getInnerDiv !== null ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
      } catch (err) {
        console.error(err);
        return '';
      }
    };
    /**
     * Clean up current element based on allowed attributes
     * and then recursively dig down into any child elements to
     * clean those up as well
     */


    var sanitizeElement = function sanitizeElement(element) {
      // IE uses childNodes, so ignore nodes that are not elements
      if (element.nodeType && element.nodeType !== 1) {
        return;
      }

      for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes.item(i);
        var attributeName = attribute.name; // remove non-allowed attribs

        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
          element.removeAttribute(attributeName);
          continue;
        } // clean up any allowed attribs
        // that attempt to do any JS funny-business


        var attributeValue = attribute.value;
        /* tslint:disable-next-line */

        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
          element.removeAttribute(attributeName);
        }
      }
      /**
       * Sanitize any nested children
       */


      var childElements = getElementChildren(element);
      /* tslint:disable-next-line */

      for (var _i = 0; _i < childElements.length; _i++) {
        sanitizeElement(childElements[_i]);
      }
    };
    /**
     * IE doesn't always support .children
     * so we revert to .childNodes instead
     */


    var getElementChildren = function getElementChildren(el) {
      return el.children != null ? el.children : el.childNodes;
    };

    var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
    var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
          return {
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {}
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmThemeC2dc54d9Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/ngx/index.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(afAuth, fb) {
        _classCallCheck(this, AuthService);

        this.afAuth = afAuth;
        this.fb = fb;
      } // Registro con correo


      _createClass(AuthService, [{
        key: "signUpWithEmail",
        value: function signUpWithEmail(email, pass) {
          return this.afAuth.auth.createUserWithEmailAndPassword(email, pass);
        } // Ingreso con email

      }, {
        key: "signInWithEmail",
        value: function signInWithEmail(email, pass) {
          return this.afAuth.auth.signInWithEmailAndPassword(email, pass);
        } // Ingreso con Google

      }, {
        key: "signInWithGoogle",
        value: function signInWithGoogle() {
          var provider = new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
          provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
          return this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider());
        } // Ingreso con Facebook web

      }, {
        key: "signInWithFacebookWeb",
        value: function signInWithFacebookWeb() {
          console.log('auth facebook'); // const provider: firebase.auth.FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();

          return this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].FacebookAuthProvider());
        } // Ingreso con Facebook app

      }, {
        key: "signInWithFacebookApp",
        value: function signInWithFacebookApp() {
          return this.fb.login(['public_profile', 'email']);
        } // Finalizar sesión

      }, {
        key: "signOut",
        value: function signOut() {
          return this.afAuth.auth.signOut();
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__["Facebook"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__["Facebook"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/services/ftpayment.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/ftpayment.service.ts ***!
    \***********************************************/

  /*! exports provided: FtpaymentService */

  /***/
  function srcAppServicesFtpaymentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FtpaymentService", function () {
      return FtpaymentService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./crud.service */
    "./src/app/services/crud.service.ts");

    var FtpaymentService = /*#__PURE__*/function () {
      function FtpaymentService(http, crud) {
        _classCallCheck(this, FtpaymentService);

        this.http = http;
        this.crud = crud;
      }
      /* User Profile Management Options */


      _createClass(FtpaymentService, [{
        key: "createUser",
        value: function createUser(appname, user, firstname, lastname, pass, email, phone) {
          return this.http.post('http://www.fttserver.com:4217/api/createUser', {
            applicationName: appname,
            userName: user,
            userFirstName: firstname,
            userLastName: lastname,
            userPassword: pass,
            userEmail: email,
            userCallerId: phone
          });
        }
      }, {
        key: "logOnUser",
        value: function logOnUser(appname, user, pass) {
          console.log('appname');
          return this.http.post("http://www.fttserver.com:4217/api/logOnUser", {
            applicationName: appname,
            userName: user,
            userPassword: pass
          });
        }
      }, {
        key: "userDeleteProfile",
        value: function userDeleteProfile(appname, user, pass, email) {
          return this.http.post("http://www.fttserver.com:4217/api/UserDeleteProfile", {
            applicationName: appname,
            userName: user,
            userPassword: pass,
            userEmail: email
          });
        }
      }, {
        key: "userChangePassword",
        value: function userChangePassword(appname, user, pass, newpass) {
          return this.http.post("http://www.fttserver.com:4217/api/userChangePassword", {
            applicationName: appname,
            userName: user,
            userPassword: pass,
            userPasswordNew: newpass
          });
        }
        /* Cards Management */

      }, {
        key: "userIncludeCard",
        value: function userIncludeCard(appname, user, pass, name, cardNumber, expMonth, expYear, cvv) {
          return this.http.post('http://www.fttserver.com:4217/api/UserIncludeCard', {
            applicationName: appname,
            userName: user,
            userPassword: pass,
            cardDescription: name,
            primaryAccountNumber: cardNumber,
            expirationMonth: expMonth,
            expirationYear: expYear,
            verificationValue: cvv
          });
        }
      }, {
        key: "userUpdateCard",
        value: function userUpdateCard(appname, user, pass, tokenId, cardNumber, expMonth, expYear, cvv) {
          return this.http.post("http://www.fttserver.com:4217/api/UserUpdateCard", {
            applicationName: appname,
            userName: user,
            userPassword: pass,
            cardTokenId: tokenId,
            cardDescription: name,
            primaryAccountNumber: cardNumber,
            expirationMonth: expMonth,
            expirationYear: expYear,
            verificationValue: cvv
          });
        }
      }, {
        key: "userDeleteCard",
        value: function userDeleteCard(appname, user, pass, tokenId) {
          return this.http.post("http://www.fttserver.com:4217/api/UserDeleteCard", {
            applicationName: appname,
            userName: user,
            userPassword: pass,
            cardTokenId: tokenId
          });
        }
      }, {
        key: "userRequestDefaultCard",
        value: function userRequestDefaultCard(appname, user, pass) {
          return this.http.post("http://www.fttserver.com:4217/api/UserRequestDefaultCard", {
            applicationName: appname,
            userName: user,
            userPassword: pass
          });
        }
      }, {
        key: "userRequestCards",
        value: function userRequestCards(appname, user, pass) {
          return this.http.post("http://www.fttserver.com:4217/api/UserRequestCards", {
            applicationName: appname,
            userName: user,
            userPassword: pass
          });
        }
      }, {
        key: "userSetDefaultCard",
        value: function userSetDefaultCard(appname, user, tokenId) {
          return this.http.post("http://www.fttserver.com:4217/api/UserSetDefaultCard", {
            applicationName: appname,
            userName: user,
            cardTokenId: tokenId
          });
        }
        /* Payment Management By Users */

      }, {
        key: "userRequestCharges",
        value: function userRequestCharges(appname, user, pass) {
          return this.http.post("http://www.fttserver.com:4217/api/UserRequestCharges", {
            applicationName: appname,
            userName: user,
            userPassword: pass
          });
        }
      }, {
        key: "userViewCharge",
        value: function userViewCharge(appname, user, pass, tokenId) {
          return this.http.post("http://www.fttserver.com:4217/api/UserViewCharge", {
            applicationName: appname,
            userName: user,
            userPassword: pass,
            chargeTokenId: tokenId
          });
        }
      }, {
        key: "userApplyCharge",
        value: function userApplyCharge(appname, user, pass, chargeId, tokenId) {
          return this.http.post("http://www.fttserver.com:4217/api/UserApplyCharge", {
            applicationName: appname,
            userName: user,
            userPassword: pass,
            chargeTokenId: chargeId,
            cardTokenId: tokenId
          });
        }
        /* Payment Management By Commerce */

      }, {
        key: "logOnApp",
        value: function logOnApp(appname, apppass) {
          return this.http.post("http://www.fttserver.com:4217/api/LogOnApp", {
            applicationName: appname,
            applicationPassword: apppass
          });
        }
      }, {
        key: "appIncludeCharge",
        value: function appIncludeCharge(appname, apppass, user, descr, curr, amount) {
          return this.http.post('http://www.fttserver.com:4217/api/AppIncludeCharge', {
            applicationName: appname,
            applicationPassword: apppass,
            chargeDescription: descr,
            userName: user,
            transactionCurrency: curr,
            transactionAmount: amount
          });
        }
      }, {
        key: "appApplyCharge",
        value: function appApplyCharge(appname, apppass, user, chargeId, tokenId) {
          return this.http.post('http://www.fttserver.com:4217/api/AppApplyCharge', {
            applicationName: appname,
            applicationPassword: apppass,
            userName: user,
            chargeTokenId: chargeId,
            cardTokenId: tokenId
          });
        }
      }, {
        key: "appVerifyUserData",
        value: function appVerifyUserData(appname, apppass, user) {
          return this.http.post("http://www.fttserver.com:4217/api/AppVerifyUserData", {
            applicationName: appname,
            applicationPassword: apppass,
            userName: user
          });
        }
      }, {
        key: "appVerifyUserDefaultCard",
        value: function appVerifyUserDefaultCard(appname, apppass, user) {
          return this.http.post("http://www.fttserver.com:4217/api/AppVerifyUserDefaultCard", {
            applicationName: appname,
            applicationPassword: apppass,
            userName: user
          });
        }
      }, {
        key: "appVerifyUserCharge",
        value: function appVerifyUserCharge(appname, apppass, user, chargeId) {
          return this.http.post("http://www.fttserver.com:4217/api/AppVerifyUserCharge", {
            applicationName: appname,
            applicationPassword: apppass,
            userName: user,
            chargeTokeId: chargeId
          });
        }
      }, {
        key: "appReturnCharge",
        value: function appReturnCharge(appname, apppass, user, chargeId) {
          return this.http.post('http://www.fttserver.com:4217/api/AppReturnCharge', {
            applicationName: appname,
            applicationPassword: apppass,
            userName: user,
            chargeTokenId: chargeId
          });
        }
      }, {
        key: "appDeleteCharge",
        value: function appDeleteCharge(appname, apppass, user, chargeId) {
          return this.http.post("http://www.fttserver.com:4217/api/AppDeleteCharge", {
            applicationName: appname,
            applicationPassword: apppass,
            userName: user,
            chargeTokenId: chargeId
          });
        }
      }, {
        key: "appGetChargesByUser",
        value: function appGetChargesByUser(appname, apppass, user) {
          return this.http.post('http://www.fttserver.com:4217/api/AppGetChargesByUser', {
            applicationName: appname,
            applicationPassword: apppass,
            userName: user
          });
        }
      }, {
        key: "appTrack2Authorization",
        value: function appTrack2Authorization(appname, t2d, cvv, chip, amount, traceNumber, curr, plan) {
          return this.http.post("", {
            applicationName: appname,
            track2Data: t2d,
            last4Digits: cvv,
            chipCardData: chip,
            transactionAmount: amount,
            systemTraceNumber: traceNumber,
            transactionCurrency: curr,
            quotePlan: plan
          });
        }
      }, {
        key: "appApplyDirectCharge",
        value: function appApplyDirectCharge(appname, apppass, descr, curr, amount, cardNumber, expMonth, expYear, cvv) {
          return this.http.post("http://www.fttserver.com:4217/api/AppApplyDirectCharge", {
            applicationName: appname,
            applicationPassword: apppass,
            chargeDescription: descr,
            transactionCurrency: curr,
            transactionAmount: amount,
            primaryAccountNumber: cardNumber,
            expirationMonth: expMonth,
            expirationYear: expYear,
            verificationValue: cvv
          });
        }
      }]);

      return FtpaymentService;
    }();

    FtpaymentService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]
      }];
    };

    FtpaymentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]])], FtpaymentService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map