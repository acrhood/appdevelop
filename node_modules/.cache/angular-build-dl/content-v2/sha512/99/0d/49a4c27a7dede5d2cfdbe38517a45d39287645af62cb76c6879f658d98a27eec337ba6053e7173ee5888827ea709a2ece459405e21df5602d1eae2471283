function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-addcard-addcard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addcard/addcard.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addcard/addcard.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAddcardAddcardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"gradient-header\" color=\"app\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/cards\"></ion-back-button>\n    </ion-buttons>\n    <ion-title slot=\"end\">Agregar tarjeta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <div class=\"card\" id=\"cc-card\">\n      <div class=\"flipper\">\n        <div class=\"front\">\n          <div class=\"shine\"></div>\n          <div class=\"shadow\"></div>\n          <div class=\"card-bg\">\n            <img src=\"../assets/images/cc-front-bg.svg\"/>\n          </div>\n          <div class=\"card-content\">\n            <div #typecard class=\"credit-card-type\"></div>\n            <div class=\"card-number\">\n              <span>{{ this.numC }}</span>\n            </div>\n            <div class=\"card-holder\">\n              <em>Titular</em>\n              <span>{{ this.titC }}</span>\n            </div>\n            <div class=\"validuntil\">\n              <em>Expira</em>\n              <div class=\"e-month\">\n                <span>{{ this.expM }}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ion-row>\n  <div class=\"ion-padding\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <div class=\"form-group\">\n          <label>Número de tarjeta </label>\n          <ion-item>\n            <ion-input type=\"tel\" placeholder=\"0000 0000 0000 0000\" [brmasker]=\"{mask:'9999 9999 9999 9999', len:19}\" (keyup)=\"actNumcard($event)\"></ion-input>\n          </ion-item>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"form-group\">\n          <label>Titular de tarjeta</label>\n          <ion-item>\n            <ion-input #titcard placeholder=\"NOMBRE\" (keyup)=\"actTitcard($event)\" style=\"text-transform: uppercase;\"></ion-input>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <div class=\"form-group\">\n          <label>Expiración</label>\n          <ion-item>\n            <ion-input type=\"text\" placeholder=\"MM/YY\" [brmasker]=\"{mask:'99/99', len:5}\" (keyup)=\"actExpdate($event)\"></ion-input>\n          </ion-item>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\">\n        <div class=\"form-group\">\n          <label>CVV </label>\n          <ion-item>\n            <ion-input placeholder=\"000\" type=\"password\" #psscard maxlength=\"3\"></ion-input>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-button class=\"btnapp\" color=\"btnapp\" size=\"block\" (click)=\"registerCard()\" id=\"regCard\">\n    Agregar tarjeta\n  </ion-button>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/addcard/addcard-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/addcard/addcard-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: AddcardPageRoutingModule */

  /***/
  function srcAppPagesAddcardAddcardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddcardPageRoutingModule", function () {
      return AddcardPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _addcard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./addcard.page */
    "./src/app/pages/addcard/addcard.page.ts");

    var routes = [{
      path: '',
      component: _addcard_page__WEBPACK_IMPORTED_MODULE_3__["AddcardPage"]
    }];

    var AddcardPageRoutingModule = function AddcardPageRoutingModule() {
      _classCallCheck(this, AddcardPageRoutingModule);
    };

    AddcardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddcardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/addcard/addcard.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/addcard/addcard.module.ts ***!
    \*************************************************/

  /*! exports provided: AddcardPageModule */

  /***/
  function srcAppPagesAddcardAddcardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddcardPageModule", function () {
      return AddcardPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _addcard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./addcard-routing.module */
    "./src/app/pages/addcard/addcard-routing.module.ts");
    /* harmony import */


    var _addcard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./addcard.page */
    "./src/app/pages/addcard/addcard.page.ts");
    /* harmony import */


    var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! br-mask */
    "./node_modules/br-mask/dist/index.js");

    var AddcardPageModule = function AddcardPageModule() {
      _classCallCheck(this, AddcardPageModule);
    };

    AddcardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _addcard_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddcardPageRoutingModule"], br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"]],
      declarations: [_addcard_page__WEBPACK_IMPORTED_MODULE_6__["AddcardPage"]]
    })], AddcardPageModule);
    /***/
  },

  /***/
  "./src/app/pages/addcard/addcard.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/addcard/addcard.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAddcardAddcardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app {\n  background: var(--ion-color-insideapp) !important;\n  color: #F8F8F8 !important;\n}\n\n.btnapp {\n  background: var(--ion-color-btnapp) !important;\n  color: #f8f8f8;\n  height: 50px;\n}\n\n.card {\n  margin: 15px auto;\n  width: 300px;\n  height: 188px;\n  border-radius: 16px;\n  perspective: 1000px;\n  transition: transform 0.5s ease-in;\n  z-index: 5;\n}\n\n.card .shine {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 16px;\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 60%);\n  z-index: 5;\n}\n\n.card .card-bg {\n  z-index: 2;\n}\n\n.card .shadow {\n  position: absolute;\n  top: 0;\n  left: 5%;\n  width: 90%;\n  height: 100%;\n  transition: all 0.2s ease-out;\n  box-shadow: 0 8px 30px rgba(14, 21, 47, 0.6);\n  z-index: 1;\n  border-radius: 16px;\n}\n\n.card .flipper {\n  transition: 0.75s;\n  transform-style: preserve-3d;\n  position: relative;\n  width: 300px;\n  height: 188px;\n}\n\n.card.flipped .flipper {\n  transform: rotateY(180deg);\n}\n\n.card .front,\n.card .back,\n.card .card-bg,\n.card .card-content {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n\n.card .card-content {\n  text-shadow: -1px -1px 0px rgba(255, 255, 255, 0.3), 1px 1px 0px rgba(0, 0, 0, 0.5);\n  color: #b0b0b0;\n  font-family: \"Droid Serif\", serif;\n  z-index: 4;\n}\n\n.card .card-content span {\n  left: 0;\n  top: 0;\n  display: block;\n  position: absolute;\n  width: 100%;\n  overflow: hidden;\n  color: #e9e9e9;\n  padding-left: 2px;\n  white-space: nowrap;\n}\n\n.card .card-content span + span {\n  color: #969696;\n  height: 7px;\n  overflow: hidden;\n}\n\n.card .card-content strong {\n  font-weight: normal;\n}\n\n.card .card-content em {\n  text-transform: uppercase;\n  position: absolute;\n  font-style: normal;\n  font-size: 9px !important;\n  text-shadow: none;\n  font-family: Open sans, sans-serif;\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.card .card-content .glow {\n  -webkit-animation: glow 0.5s;\n          animation: glow 0.5s;\n}\n\n.card .front,\n.card .back {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  box-shadow: 0 4px 8px rgba(10, 10, 10, 0.25);\n  border-radius: 16px;\n}\n\n.card .front {\n  z-index: 2;\n  transform: rotateY(0deg);\n}\n\n.card .back {\n  z-index: 1;\n  transform: rotateY(180deg);\n}\n\n.card .back .card-content {\n  opacity: 0.7;\n  text-shadow: -1px -1px 0px rgba(0, 0, 0, 0.5), 1px 1px 0px rgba(255, 255, 255, 0.3);\n  transform: rotateY(180deg);\n}\n\n.card .back .card-content span + span {\n  color: transparent;\n}\n\n.card .ccv {\n  position: absolute;\n  right: 15px;\n  height: 20px;\n  width: 30px;\n  top: 52px;\n  font-size: 14px;\n}\n\n.card .ccv strong {\n  font-weight: normal;\n  font-style: italic;\n}\n\n.card .ccv em {\n  position: absolute;\n  white-space: nowrap;\n  font-size: 8px;\n  left: -60px;\n}\n\n.card .credit-card-type {\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  background-color: rgba(255, 255, 255, 0.4);\n  width: 50px;\n  height: 30px;\n  border-style: solid;\n  border-color: rgba(255, 255, 255, 0);\n  border-width: 2px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center center;\n}\n\n.card .credit-card-type.amex {\n  background-image: url('amex.svg');\n}\n\n.card .credit-card-type.visa {\n  background-image: url('visa.svg');\n}\n\n.card .credit-card-type.mastercard {\n  background-image: url('mastercard.svg');\n}\n\n.card .card-number {\n  position: absolute;\n  width: 240px;\n  top: 100px;\n  left: 30px;\n  font-size: 21px;\n  height: 21px;\n  font-family: courier;\n  text-align: justify;\n}\n\n.card .card-holder {\n  text-transform: uppercase;\n  position: absolute;\n  width: 240px;\n  top: 160px;\n  left: 20px;\n  font-size: 14px;\n  font-weight: 100;\n  height: 30px;\n}\n\n.card .card-holder em {\n  top: -16px;\n}\n\n.card .card-holder span {\n  letter-spacing: 1px;\n}\n\n.card .card-holder span + span {\n  height: 4px;\n}\n\n.card .validuntil {\n  font-family: courier;\n  position: absolute;\n  top: 128px;\n  left: 150px;\n  font-size: 16px;\n  height: 16px;\n  width: 120px;\n  white-space: nowrap;\n  font-family: courier;\n}\n\n.card .validuntil em {\n  top: 3px;\n  left: -36px;\n}\n\n.card .validuntil .e-month,\n.card .validuntil .e-divider,\n.card .validuntil .e-year {\n  letter-spacing: 1px;\n  display: inline-block;\n  position: relative;\n  margin: 0 1px;\n}\n\n.card .validuntil .e-month span,\n.card .validuntil .e-divider span,\n.card .validuntil .e-year span {\n  position: relative;\n}\n\n.card .validuntil .e-month span + span,\n.card .validuntil .e-divider span + span,\n.card .validuntil .e-year span + span {\n  position: absolute;\n  height: 5px;\n}\n\n.card-bg img {\n  border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNjZXNwZWRlcy9Eb2N1bWVudHMvYXBwcy9hcHBiYXNlX3YwLjEvc3JjL2FwcC9wYWdlcy9hZGRjYXJkL2FkZGNhcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZGRjYXJkL2FkZGNhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaURBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVFO0VBQ0UsOENBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRElFO0VBQ0UsaUJBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7QUNGSjs7QURJRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkZBQUE7RUFDQSxVQUFBO0FDREo7O0FER0U7RUFDRSxVQUFBO0FDQUo7O0FERUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0U7RUFDRSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0VKOztBREFFO0VBQ0UsMEJBQUE7QUNHSjs7QURERTs7OztFQUlFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkU7RUFDRSxtRkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7QUNLSjs7QURIRTtFQUNFLE9BQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBRUEsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNLSjs7QURIRTtFQUVFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNLSjs7QURIRTtFQUNFLG1CQUFBO0FDTUo7O0FESkU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSwrQkFBQTtBQ09KOztBRExFO0VBQ0UsNEJBQUE7VUFBQSxvQkFBQTtBQ1FKOztBRE5FOztFQUVFLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FDU0o7O0FEUEU7RUFDRSxVQUFBO0VBQ0Esd0JBQUE7QUNVSjs7QURSRTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtBQ1dKOztBRFRFO0VBQ0UsWUFBQTtFQUNBLG1GQUFBO0VBQ0EsMEJBQUE7QUNZSjs7QURWRTtFQUNFLGtCQUFBO0FDYUo7O0FEWEU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDY0o7O0FEWkU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FDZUo7O0FEYkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNnQko7O0FEZEU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQ0FBQTtBQ2lCSjs7QURmRTtFQUNFLGlDQUFBO0FDa0JKOztBRGZFO0VBQ0UsaUNBQUE7QUNrQko7O0FEZkU7RUFDRSx1Q0FBQTtBQ2tCSjs7QURmRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDa0JKOztBRGhCRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDbUJKOztBRGpCRTtFQUNFLFVBQUE7QUNvQko7O0FEbEJFO0VBQ0UsbUJBQUE7QUNxQko7O0FEbkJFO0VBQ0UsV0FBQTtBQ3NCSjs7QURwQkU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDdUJKOztBRHJCRTtFQUNFLFFBQUE7RUFDQSxXQUFBO0FDd0JKOztBRHRCRTs7O0VBR0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ3lCSjs7QUR2QkU7OztFQUdFLGtCQUFBO0FDMEJKOztBRHhCRTs7O0VBR0Usa0JBQUE7RUFDQSxXQUFBO0FDMkJKOztBRHhCRTtFQUNFLG1CQUFBO0FDMkJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRkY2FyZC9hZGRjYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1pbnNpZGVhcHApICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNGOEY4RjggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmJ0bmFwcHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYnRuYXBwKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZjhmOGY4O1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxuICBcbiAgLy8gKioqICoqKlxuICBcbiAgLmNhcmQge1xuICAgIG1hcmdpbjogMTVweCBhdXRvO1xuICAgIC8vIHRvcDogNTBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAxODhweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlLWluO1xuICAgIHotaW5kZXg6IDU7XG4gIH1cbiAgLmNhcmQgLnNoaW5lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA2MCUpO1xuICAgIHotaW5kZXg6IDU7XG4gIH1cbiAgLmNhcmQgLmNhcmQtYmcge1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbiAgLmNhcmQgLnNoYWRvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiA1JTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMHB4IHJnYmEoMTQsIDIxLCA0NywgMC42KTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIH1cbiAgLmNhcmQgLmZsaXBwZXIge1xuICAgIHRyYW5zaXRpb246IDAuNzVzO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDE4OHB4O1xuICB9XG4gIC5jYXJkLmZsaXBwZWQgLmZsaXBwZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICB9XG4gIC5jYXJkIC5mcm9udCxcbiAgLmNhcmQgLmJhY2ssXG4gIC5jYXJkIC5jYXJkLWJnLFxuICAuY2FyZCAuY2FyZC1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAuY2FyZCAuY2FyZC1jb250ZW50IHtcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyksIDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBjb2xvcjogI2IwYjBiMDtcbiAgICBmb250LWZhbWlseTogJ0Ryb2lkIFNlcmlmJywgc2VyaWY7XG4gICAgei1pbmRleDogNDtcbiAgfVxuICAuY2FyZCAuY2FyZC1jb250ZW50IHNwYW4ge1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC8vIGNvbG9yOiAjN2ExYTg2O1xuICAgIGNvbG9yOiAjZTllOWU5O1xuICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbiAgLmNhcmQgLmNhcmQtY29udGVudCBzcGFuICsgc3BhbiB7XG4gICAgLy8gY29sb3I6ICNhNTQ1YjE7XG4gICAgY29sb3I6ICM5Njk2OTY7XG4gICAgaGVpZ2h0OiA3cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuY2FyZCAuY2FyZC1jb250ZW50IHN0cm9uZyB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuICAuY2FyZCAuY2FyZC1jb250ZW50IGVtIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiA5cHggIWltcG9ydGFudDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICBmb250LWZhbWlseTogT3BlbiBzYW5zLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIH1cbiAgLmNhcmQgLmNhcmQtY29udGVudCAuZ2xvdyB7XG4gICAgYW5pbWF0aW9uOiBnbG93IC41cztcbiAgfVxuICAuY2FyZCAuZnJvbnQsXG4gIC5jYXJkIC5iYWNrIHtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMTAsIDEwLCAxMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgfVxuICAuY2FyZCAuZnJvbnQge1xuICAgIHotaW5kZXg6IDI7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICB9XG4gIC5jYXJkIC5iYWNrIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICB9XG4gIC5jYXJkIC5iYWNrIC5jYXJkLWNvbnRlbnQge1xuICAgIG9wYWNpdHk6IC43O1xuICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMXB4IDFweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICB9XG4gIC5jYXJkIC5iYWNrIC5jYXJkLWNvbnRlbnQgc3BhbiArIHNwYW4ge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICAuY2FyZCAuY2N2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIHRvcDogNTJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmNhcmQgLmNjdiBzdHJvbmcge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG4gIC5jYXJkIC5jY3YgZW0ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGxlZnQ6IC02MHB4O1xuICB9XG4gIC5jYXJkIC5jcmVkaXQtY2FyZC10eXBlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgfVxuICAuY2FyZCAuY3JlZGl0LWNhcmQtdHlwZS5hbWV4IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ljb24vYW1leC5zdmcpO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbiAgLmNhcmQgLmNyZWRpdC1jYXJkLXR5cGUudmlzYSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pY29uL3Zpc2Euc3ZnKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG4gIC5jYXJkIC5jcmVkaXQtY2FyZC10eXBlLm1hc3RlcmNhcmQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaWNvbi9tYXN0ZXJjYXJkLnN2Zyk7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICAuY2FyZCAuY2FyZC1udW1iZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgdG9wOiAxMDBweDtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgZm9udC1mYW1pbHk6IGNvdXJpZXI7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxuICAuY2FyZCAuY2FyZC1ob2xkZXIge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICB0b3A6IDE2MHB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG4gIC5jYXJkIC5jYXJkLWhvbGRlciBlbSB7XG4gICAgdG9wOiAtMTZweDtcbiAgfVxuICAuY2FyZCAuY2FyZC1ob2xkZXIgc3BhbiB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuICAuY2FyZCAuY2FyZC1ob2xkZXIgc3BhbiArIHNwYW4ge1xuICAgIGhlaWdodDogNHB4O1xuICB9XG4gIC5jYXJkIC52YWxpZHVudGlsIHtcbiAgICBmb250LWZhbWlseTogY291cmllcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMjhweDtcbiAgICBsZWZ0OiAxNTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZvbnQtZmFtaWx5OiBjb3VyaWVyO1xuICB9XG4gIC5jYXJkIC52YWxpZHVudGlsIGVtIHtcbiAgICB0b3A6IDNweDtcbiAgICBsZWZ0OiAtMzZweDtcbiAgfVxuICAuY2FyZCAudmFsaWR1bnRpbCAuZS1tb250aCxcbiAgLmNhcmQgLnZhbGlkdW50aWwgLmUtZGl2aWRlcixcbiAgLmNhcmQgLnZhbGlkdW50aWwgLmUteWVhciB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMCAxcHg7XG4gIH1cbiAgLmNhcmQgLnZhbGlkdW50aWwgLmUtbW9udGggc3BhbixcbiAgLmNhcmQgLnZhbGlkdW50aWwgLmUtZGl2aWRlciBzcGFuLFxuICAuY2FyZCAudmFsaWR1bnRpbCAuZS15ZWFyIHNwYW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuY2FyZCAudmFsaWR1bnRpbCAuZS1tb250aCBzcGFuICsgc3BhbixcbiAgLmNhcmQgLnZhbGlkdW50aWwgLmUtZGl2aWRlciBzcGFuICsgc3BhbixcbiAgLmNhcmQgLnZhbGlkdW50aWwgLmUteWVhciBzcGFuICsgc3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogNXB4O1xuICB9XG4gIFxuICAuY2FyZC1iZyBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIH0iLCIuYXBwIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWluc2lkZWFwcCkgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGOEY4RjggIWltcG9ydGFudDtcbn1cblxuLmJ0bmFwcCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1idG5hcHApICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZjhmOGY4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxODhweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbjtcbiAgei1pbmRleDogNTtcbn1cblxuLmNhcmQgLnNoaW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNjAlKTtcbiAgei1pbmRleDogNTtcbn1cblxuLmNhcmQgLmNhcmQtYmcge1xuICB6LWluZGV4OiAyO1xufVxuXG4uY2FyZCAuc2hhZG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUlO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xuICBib3gtc2hhZG93OiAwIDhweCAzMHB4IHJnYmEoMTQsIDIxLCA0NywgMC42KTtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cblxuLmNhcmQgLmZsaXBwZXIge1xuICB0cmFuc2l0aW9uOiAwLjc1cztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTg4cHg7XG59XG5cbi5jYXJkLmZsaXBwZWQgLmZsaXBwZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLmNhcmQgLmZyb250LFxuLmNhcmQgLmJhY2ssXG4uY2FyZCAuY2FyZC1iZyxcbi5jYXJkIC5jYXJkLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY2FyZCAuY2FyZC1jb250ZW50IHtcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpLCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGNvbG9yOiAjYjBiMGIwO1xuICBmb250LWZhbWlseTogXCJEcm9pZCBTZXJpZlwiLCBzZXJpZjtcbiAgei1pbmRleDogNDtcbn1cblxuLmNhcmQgLmNhcmQtY29udGVudCBzcGFuIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6ICNlOWU5ZTk7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY2FyZCAuY2FyZC1jb250ZW50IHNwYW4gKyBzcGFuIHtcbiAgY29sb3I6ICM5Njk2OTY7XG4gIGhlaWdodDogN3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY2FyZCAuY2FyZC1jb250ZW50IHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5jYXJkIC5jYXJkLWNvbnRlbnQgZW0ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiA5cHggIWltcG9ydGFudDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIHNhbnMsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG5cbi5jYXJkIC5jYXJkLWNvbnRlbnQgLmdsb3cge1xuICBhbmltYXRpb246IGdsb3cgMC41cztcbn1cblxuLmNhcmQgLmZyb250LFxuLmNhcmQgLmJhY2sge1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDEwLCAxMCwgMTAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuXG4uY2FyZCAuZnJvbnQge1xuICB6LWluZGV4OiAyO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG59XG5cbi5jYXJkIC5iYWNrIHtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi5jYXJkIC5iYWNrIC5jYXJkLWNvbnRlbnQge1xuICBvcGFjaXR5OiAwLjc7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMXB4IDFweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLmNhcmQgLmJhY2sgLmNhcmQtY29udGVudCBzcGFuICsgc3BhbiB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmNhcmQgLmNjdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHRvcDogNTJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2FyZCAuY2N2IHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmNhcmQgLmNjdiBlbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGxlZnQ6IC02MHB4O1xufVxuXG4uY2FyZCAuY3JlZGl0LWNhcmQtdHlwZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5jYXJkIC5jcmVkaXQtY2FyZC10eXBlLmFtZXgge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ljb24vYW1leC5zdmcpO1xufVxuXG4uY2FyZCAuY3JlZGl0LWNhcmQtdHlwZS52aXNhIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pY29uL3Zpc2Euc3ZnKTtcbn1cblxuLmNhcmQgLmNyZWRpdC1jYXJkLXR5cGUubWFzdGVyY2FyZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaWNvbi9tYXN0ZXJjYXJkLnN2Zyk7XG59XG5cbi5jYXJkIC5jYXJkLW51bWJlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI0MHB4O1xuICB0b3A6IDEwMHB4O1xuICBsZWZ0OiAzMHB4O1xuICBmb250LXNpemU6IDIxcHg7XG4gIGhlaWdodDogMjFweDtcbiAgZm9udC1mYW1pbHk6IGNvdXJpZXI7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5jYXJkIC5jYXJkLWhvbGRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI0MHB4O1xuICB0b3A6IDE2MHB4O1xuICBsZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmNhcmQgLmNhcmQtaG9sZGVyIGVtIHtcbiAgdG9wOiAtMTZweDtcbn1cblxuLmNhcmQgLmNhcmQtaG9sZGVyIHNwYW4ge1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uY2FyZCAuY2FyZC1ob2xkZXIgc3BhbiArIHNwYW4ge1xuICBoZWlnaHQ6IDRweDtcbn1cblxuLmNhcmQgLnZhbGlkdW50aWwge1xuICBmb250LWZhbWlseTogY291cmllcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEyOHB4O1xuICBsZWZ0OiAxNTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1mYW1pbHk6IGNvdXJpZXI7XG59XG5cbi5jYXJkIC52YWxpZHVudGlsIGVtIHtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IC0zNnB4O1xufVxuXG4uY2FyZCAudmFsaWR1bnRpbCAuZS1tb250aCxcbi5jYXJkIC52YWxpZHVudGlsIC5lLWRpdmlkZXIsXG4uY2FyZCAudmFsaWR1bnRpbCAuZS15ZWFyIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCAxcHg7XG59XG5cbi5jYXJkIC52YWxpZHVudGlsIC5lLW1vbnRoIHNwYW4sXG4uY2FyZCAudmFsaWR1bnRpbCAuZS1kaXZpZGVyIHNwYW4sXG4uY2FyZCAudmFsaWR1bnRpbCAuZS15ZWFyIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkIC52YWxpZHVudGlsIC5lLW1vbnRoIHNwYW4gKyBzcGFuLFxuLmNhcmQgLnZhbGlkdW50aWwgLmUtZGl2aWRlciBzcGFuICsgc3Bhbixcbi5jYXJkIC52YWxpZHVudGlsIC5lLXllYXIgc3BhbiArIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNXB4O1xufVxuXG4uY2FyZC1iZyBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/addcard/addcard.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/addcard/addcard.page.ts ***!
    \***********************************************/

  /*! exports provided: AddcardPage */

  /***/
  function srcAppPagesAddcardAddcardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddcardPage", function () {
      return AddcardPage;
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


    var _services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/crud.service */
    "./src/app/services/crud.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _components_general_general_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/general/general.component */
    "./src/app/components/general/general.component.ts");
    /* harmony import */


    var _services_ftpayment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/ftpayment.service */
    "./src/app/services/ftpayment.service.ts");
    /* harmony import */


    var _modals_verifypass_verifypass_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../modals/verifypass/verifypass.page */
    "./src/app/modals/verifypass/verifypass.page.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var impresa = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].impresa;

    var AddcardPage = /*#__PURE__*/function () {
      function AddcardPage(afAuth, crudService, navCtrl, modalCtrl, general, fts, loadingController, storage) {
        _classCallCheck(this, AddcardPage);

        this.afAuth = afAuth;
        this.crudService = crudService;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.general = general;
        this.fts = fts;
        this.loadingController = loadingController;
        this.storage = storage; // tslint:disable: triple-equals
        // tslint:disable: max-line-length, no-unused-expression

        this.vopt = 1;
        this.numC = '0000 0000 0000 0000';
        this.v4num = '0000';
        this.titC = 'NOMBRE';
        this.expM = 'MM/YY';
        this.cvv = '';
        this.errsystem = {
          sel: '',
          tbl: 80,
          where: ''
        };
      }

      _createClass(AddcardPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userid = this.afAuth.auth.currentUser.uid;
          this.username = this.afAuth.auth.currentUser.email;
        }
      }, {
        key: "actNumcard",
        value: function actNumcard(event) {
          this.numC = '';
          this.numC += event.target.value;
          var vcard = this.numC.substring(-2, 2);
          this.v4num = this.numC.substring(15, 19);
          console.log('v4num');
          console.log(this.v4num);

          if (vcard == '34' || vcard == '37') {
            console.log('American Express');
            this.type = 'amex';
            this.typecard.nativeElement.classList.add('amex');
          } else if (vcard == '51' || vcard == '52' || vcard == '53' || vcard == '54' || vcard == '55') {
            console.log('Mastercard');
            this.type = 'mastercard';
            this.typecard.nativeElement.classList.add('mastercard');
          } else if (vcard == '40' || vcard == '41' || vcard == '42' || vcard == '43' || vcard == '44' || vcard == '45' || vcard == '46' || vcard == '47' || vcard == '48' || vcard == '49') {
            console.log('Visa');
            this.type = 'visa';
            this.typecard.nativeElement.classList.add('visa');
          } else {
            this.type = undefined;
            this.typecard.nativeElement.classList.remove('visa');
            this.typecard.nativeElement.classList.remove('mastercard');
            this.typecard.nativeElement.classList.remove('amex');
          }

          console.log(this.numC);
          console.log('length');
          console.log(this.numC.length);
          console.log('substr');
        }
      }, {
        key: "actTitcard",
        value: function actTitcard(event) {
          this.titC = '';
          this.titC += event.target.value;
          console.log(this.titC);
        }
      }, {
        key: "actExpdate",
        value: function actExpdate(event) {
          this.expM = '';
          this.expM += event.target.value;
          console.log(this.expM);
        }
      }, {
        key: "crud",
        value: function crud(data) {
          var _this = this;

          this.crudService.crud(data).subscribe(function (res) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('data');
                      console.log(data);
                      console.log('informacion de tarjeta actualizada');
                      console.log(res);
                      console.log(JSON.stringify(res));
                      this.modalCtrl.dismiss({
                        dismissed: true
                      });
                      this.navCtrl.navigateBack('/cards');
                      this.vaciaCampos();
                      return _context.abrupt("return", true);

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "vaciaCampos",
        value: function vaciaCampos() {
          this.numC = '';
          this.titC = '';
          this.cardTokenId = '';
        }
      }, {
        key: "registerCard",
        value: function registerCard() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var regCard, providerId, loading, fecha, month, year, numcard;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    regCard = document.getElementById('regCard');
                    regCard.disabled = true;
                    this.cardTokenId = 'cardTokenId';
                    this.cvv = this.psscard.nativeElement.value;
                    console.log('cardTokenId vopt type cvv');
                    console.log(this.cardTokenId, this.vopt, this.type, this.cvv);

                    if (!(this.type == undefined)) {
                      _context2.next = 11;
                      break;
                    }

                    this.general.mostrar_alert('El formato de tarjeta no es correcto, por favor verifica la información');
                    regCard.disabled = false;
                    _context2.next = 32;
                    break;

                  case 11:
                    console.log('storage');
                    providerId = this.afAuth.auth.currentUser.providerData[0].providerId;

                    if (!(providerId == 'google.com' || providerId == 'facebook.com')) {
                      _context2.next = 31;
                      break;
                    }

                    _context2.next = 16;
                    return this.loadingController.create({
                      message: 'Agregando tarjeta...'
                    });

                  case 16:
                    loading = _context2.sent;
                    _context2.next = 19;
                    return loading.present();

                  case 19:
                    fecha = this.expM.split('/');
                    month = fecha[0];
                    year = '20' + fecha[1];
                    numcard = this.numC.replace(' ', '').replace(' ', '').replace(' ', '');
                    _context2.next = 25;
                    return this.storage.getItem('passCache');

                  case 25:
                    this.pssC = _context2.sent.value;
                    console.log('pass');
                    this.pssC = this.pssC.substring(0, this.pssC.length - 1);
                    this.addingCard(loading, numcard, month, year);
                    _context2.next = 32;
                    break;

                  case 31:
                    this.storage.getItem('passCache').then(function (suc) {
                      console.log(suc);

                      _this2.presentModal(suc);
                    }, function (err) {
                      console.log(err);

                      _this2.presentModal(err);
                    })["catch"](function (errCatch) {
                      console.log(errCatch);
                    });

                  case 32:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentModal",
        value: function presentModal(pass) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal, _ref, data, loading, fecha, month, year, numcard;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalCtrl.create({
                      component: _modals_verifypass_verifypass_page__WEBPACK_IMPORTED_MODULE_7__["VerifypassPage"],
                      cssClass: 'modal-modal',
                      componentProps: {
                        getuser: this.username,
                        passwd: pass
                      }
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    _context3.next = 7;
                    return modal.onWillDismiss();

                  case 7:
                    _ref = _context3.sent;
                    data = _ref.data;
                    console.log('data');
                    console.log(JSON.stringify(data));
                    console.log(data);
                    _context3.next = 14;
                    return this.loadingController.create({
                      message: 'Agregando tarjeta...'
                    });

                  case 14:
                    loading = _context3.sent;
                    _context3.next = 17;
                    return loading.present();

                  case 17:
                    if (data != undefined) {
                      this.pssC = data.pass;
                      fecha = this.expM.split('/');
                      month = fecha[0];
                      year = '20' + fecha[1];
                      numcard = this.numC.replace(' ', '').replace(' ', '').replace(' ', '');
                      console.log('numcard');
                      console.log(numcard);
                      this.addingCard(loading, numcard, month, year);
                    } else {
                      loading.dismiss();
                    }

                  case 18:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "addingCard",
        value: function addingCard(loading, numcard, month, year) {
          var _this3 = this;

          this.crudService.crud({
            sel: '',
            tbl: 96,
            where: impresa
          }).subscribe(function (sucft) {
            _this3.fts.userIncludeCard(sucft[0][0][0], _this3.username, _this3.pssC + '$', _this3.titC, numcard, month, year, _this3.cvv).subscribe(function (succ) {
              console.log('include card');
              console.log(JSON.stringify(succ));
              console.log(succ);
              var regCard = document.getElementById('regCard');

              if (succ == null) {
                loading.dismiss();
              } else {
                if (succ.apiStatus == 'Successful') {
                  var info = {
                    sel: '',
                    tbl: 46,
                    where: '1,0,"' + _this3.v4num + '","' + _this3.titC + '","' + succ.cardTokenId + '","' + _this3.userid + '","' + _this3.type + '"'
                  };

                  _this3.crud(info);

                  loading.dismiss(); // tslint:disable-next-line: quotemark
                } else if (succ.apiStatus == 'Invalid User or Password') {
                  loading.dismiss();

                  _this3.general.mostrar_alert('Usuario o contraseña invalidos');

                  regCard.disabled = false;
                } else if (succ.apiStatus == 'Too Many Cards Per User Max (\'3\')') {
                  loading.dismiss();

                  _this3.general.mostrar_alert('Se ha excedido el numero de tarjetas que puede registrar(Máximo 3 tarjetas)');

                  regCard.disabled = false;
                } else if (succ.apiStatus == 'Max Users Same Card') {
                  loading.dismiss();

                  _this3.general.mostrar_alert('Esta tarjeta está asociada a muchos usuarios');

                  regCard.disabled = false;
                } else {
                  _this3.errsystem.where = '0,"' + succ.apiStatus + '","' + _this3.userid + '",' + JSON.stringify(succ);

                  _this3.crudService.crud(_this3.errsystem).subscribe(function (res) {
                    console.log(res);
                    loading.dismiss();

                    _this3.general.mostrar_alert('Tuvimos un problema para guardar la información, revisa la información de la' + 'tarjeta e intenta de nuevo intenta de nuevo por favor.');

                    regCard.disabled = false;
                  }, function (err) {
                    loading.dismiss();
                    console.log(err);
                  });
                }
              }
            });
          }, function (err) {
            console.log('err');
            console.log(err);
          });
        }
      }]);

      return AddcardPage;
    }();

    AddcardPage.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _components_general_general_component__WEBPACK_IMPORTED_MODULE_5__["GeneralComponent"]
      }, {
        type: _services_ftpayment_service__WEBPACK_IMPORTED_MODULE_6__["FtpaymentService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('typecard', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AddcardPage.prototype, "typecard", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('psscard', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AddcardPage.prototype, "psscard", void 0);
    AddcardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addcard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addcard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addcard/addcard.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addcard.page.scss */
      "./src/app/pages/addcard/addcard.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _components_general_general_component__WEBPACK_IMPORTED_MODULE_5__["GeneralComponent"], _services_ftpayment_service__WEBPACK_IMPORTED_MODULE_6__["FtpaymentService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]])], AddcardPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-addcard-addcard-module-es5.js.map