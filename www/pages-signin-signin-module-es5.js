function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signin-signin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signin/signin.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signin/signin.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSigninSigninPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"height: 100% !important;\">\n  <!-- <ion-card-header>\n      <br><br><br><br><br><br>\n  </ion-card-header> -->\n  <ion-card-content class=\"ion-padding\" style=\"color: #7C7C7C; padding-top: 25% !important;\">\n    <ion-row class=\"ion-margin-start\">\n      <p style=\"font-size: 3em; color: #636363;\">Bienvenido,</p>\n      <p style=\"margin-top: -10px;\">Inicia sesión para continuar</p>\n    </ion-row>\n    <ion-row>\n      <ion-col style=\"background: #F7F7F7;\" class=\"ion-margin-top ion-margin-start ion-margin-end\">\n          <ion-input clearInput [(ngModel)]=\"this.email\" placeholder=\"Correo Electrónico\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-margin-top\">\n      <ion-col style=\"background: #F7F7F7;\" class=\"ion-margin-start ion-margin-end\">\n          <ion-input clearInput type=\"password\" [(ngModel)]=\"this.pass\" (keyup.enter)=\"onEnter()\" placeholder=\"Contraseña\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-margin-top ion-margin-end\" align=\"right\">\n        <ion-label ngModel=\"msg\" ngDefaultControl></ion-label>\n        <ion-label [routerLink]=\"['/security']\">Olvidó su contraseña?</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-margin-top\" align=\"center\">\n        <ion-button color=\"ion-text-capitalize\" class=\"btnapp\" color=\"app\" expand=\"block\" (click)=\"loginWithEmail()\">\n          <ion-icon name=\"mail\"></ion-icon> &nbsp;&nbsp;&nbsp;\n            Inicio con correo electrónico\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"12\" align=\"center\">\n        o inicie sesión con:\n      </ion-col>\n      <ion-col align=\"center\">\n        <ion-button shape=\"round\" color=\"ion-text-capitalize\" (click)=\"loginWithFacebook()\" style=\"background:#455CA7; height: 45px; border-radius: 2.5em; width: 80%;\">\n          <ion-icon name=\"logo-facebook\"></ion-icon> &nbsp;&nbsp;&nbsp;\n            Inicio con Facebook\n        </ion-button>\n      </ion-col>\n      <ion-col align=\"center\">\n        <ion-button shape=\"round\" color=\"ion-text-capitalize\" (click)=\"loginWithGoogle()\" style=\"background:#F1897F; height: 45px; border-radius: 2.5em; width: 80%;\">\n          <ion-icon name=\"logo-google\"></ion-icon> &nbsp;&nbsp;&nbsp;\n            Inicio con Google\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <br>\n    <ion-row>\n      <ion-col class=\"ion-margin-top\" align=\"center\">\n        Eres nuevo aquí? <b style=\"color: #55D8A3\" routerLink=\"/signup\">Crear cuenta</b>\n      </ion-col>\n    </ion-row>\n  </ion-card-content>\n</div>";
    /***/
  },

  /***/
  "./src/app/pages/signin/signin-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/signin/signin-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: SigninPageRoutingModule */

  /***/
  function srcAppPagesSigninSigninRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninPageRoutingModule", function () {
      return SigninPageRoutingModule;
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


    var _signin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signin.page */
    "./src/app/pages/signin/signin.page.ts");

    var routes = [{
      path: '',
      component: _signin_page__WEBPACK_IMPORTED_MODULE_3__["SigninPage"]
    }];

    var SigninPageRoutingModule = function SigninPageRoutingModule() {
      _classCallCheck(this, SigninPageRoutingModule);
    };

    SigninPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SigninPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/signin/signin.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/signin/signin.module.ts ***!
    \***********************************************/

  /*! exports provided: SigninPageModule */

  /***/
  function srcAppPagesSigninSigninModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninPageModule", function () {
      return SigninPageModule;
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


    var _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signin-routing.module */
    "./src/app/pages/signin/signin-routing.module.ts");
    /* harmony import */


    var _signin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signin.page */
    "./src/app/pages/signin/signin.page.ts");

    var SigninPageModule = function SigninPageModule() {
      _classCallCheck(this, SigninPageModule);
    };

    SigninPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__["SigninPageRoutingModule"]],
      declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]]
    })], SigninPageModule);
    /***/
  },

  /***/
  "./src/app/pages/signin/signin.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/signin/signin.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSigninSigninPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app {\n  background: var(--ion-color-insideapp) !important;\n  color: #F8F8F8 !important;\n}\n\n.btnapp {\n  height: 50px;\n  background: var(--ion-color-btnapp) !important;\n  color: #F8F8F8 !important;\n}\n\n@media screen and (min-width: 769px) {\n  .signin_foot {\n    bottom: 0% !important;\n    position: fixed;\n    width: 100%;\n  }\n\n  .signin_head {\n    margin: auto 0 !important;\n  }\n}\n\n@media screen and (min-device-width: 481px) and (max-device-width: 768px) {\n  .signin_foot {\n    bottom: 0% !important;\n    position: fixed;\n    width: 100%;\n  }\n\n  .signin_head {\n    margin: auto 0 !important;\n  }\n}\n\n@media only screen and (max-device-width: 480px) {\n  .signin_foot {\n    bottom: 0% !important;\n    position: fixed;\n    width: 100%;\n  }\n\n  .signin_head {\n    margin: auto 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNjZXNwZWRlcy9Eb2N1bWVudHMvYXBwcy9hcHBiYXNlX3YwLjEvc3JjL2FwcC9wYWdlcy9zaWduaW4vc2lnbmluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lnbmluL3NpZ25pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpREFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsOENBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxxQkFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0VDQ047O0VERUU7SUFDSSx5QkFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSTtJQUNJLHFCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7RUNBTjs7RURHRTtJQUNJLHlCQUFBO0VDQU47QUFDRjs7QURHQTtFQUNJO0lBQ0kscUJBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtFQ0ROOztFRElFO0lBQ0kseUJBQUE7RUNETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbmluL3NpZ25pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItaW5zaWRlYXBwKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjRjhGOEY4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5hcHAge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYnRuYXBwKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjRjhGOEY4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgLnNpZ25pbl9mb290IHtcbiAgICAgICAgYm90dG9tOiAwJSAhaW1wb3J0YW50O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICAuc2lnbmluX2hlYWQge1xuICAgICAgICBtYXJnaW46IGF1dG8gMCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MXB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDc2OHB4KSB7IFxuICAgIC5zaWduaW5fZm9vdCB7XG4gICAgICAgIGJvdHRvbTogMCUgIWltcG9ydGFudDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgXG4gICAgLnNpZ25pbl9oZWFkIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvIDAgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XG4gICAgLnNpZ25pbl9mb290IHtcbiAgICAgICAgYm90dG9tOiAwJSAhaW1wb3J0YW50O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICAuc2lnbmluX2hlYWQge1xuICAgICAgICBtYXJnaW46IGF1dG8gMCAhaW1wb3J0YW50O1xuICAgIH1cbn0iLCIuYXBwIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWluc2lkZWFwcCkgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGOEY4RjggIWltcG9ydGFudDtcbn1cblxuLmJ0bmFwcCB7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJ0bmFwcCkgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGOEY4RjggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgLnNpZ25pbl9mb290IHtcbiAgICBib3R0b206IDAlICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnNpZ25pbl9oZWFkIHtcbiAgICBtYXJnaW46IGF1dG8gMCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgxcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNzY4cHgpIHtcbiAgLnNpZ25pbl9mb290IHtcbiAgICBib3R0b206IDAlICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnNpZ25pbl9oZWFkIHtcbiAgICBtYXJnaW46IGF1dG8gMCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkge1xuICAuc2lnbmluX2Zvb3Qge1xuICAgIGJvdHRvbTogMCUgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuc2lnbmluX2hlYWQge1xuICAgIG1hcmdpbjogYXV0byAwICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/signin/signin.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/signin/signin.page.ts ***!
    \*********************************************/

  /*! exports provided: SigninPage */

  /***/
  function srcAppPagesSigninSigninPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninPage", function () {
      return SigninPage;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/crud.service */
    "./src/app/services/crud.service.ts");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _components_general_general_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/general/general.component */
    "./src/app/components/general/general.component.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_ftpayment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/ftpayment.service */
    "./src/app/services/ftpayment.service.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/storage.service */
    "./src/app/services/storage.service.ts");

    var tipon = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].tiponegocio;
    var impresa = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].impresa;

    var SigninPage = /*#__PURE__*/function () {
      function SigninPage(authService, navCtrl, toastCtrl, platform, crudService, modalCtrl, general, fts, storage) {
        _classCallCheck(this, SigninPage);

        this.authService = authService;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.crudService = crudService;
        this.modalCtrl = modalCtrl;
        this.general = general;
        this.fts = fts;
        this.storage = storage;
        this.data = {};
        this.datasesion = {};
        this.errsystem = {
          sel: '',
          tbl: 80,
          where: ''
        };
      }

      _createClass(SigninPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "resetPass",
        value: function resetPass(mail) {
          firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().sendPasswordResetEmail(mail);
        }
      }, {
        key: "loginWithEmail",
        value: function loginWithEmail() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log('Login Email'); // quitar espacios en blanco

                    this.authService.signInWithEmail(this.email.replace(/\s+/g, ''), this.pass + '$').then(function (res) {
                      console.log(res); // Verificacion correo
                      // if ( res.user.emailVerified ) {

                      console.log('signin success');
                      console.log(res.user.uid);
                      var data = {
                        sel: 'idtipo',
                        tbl: 5,
                        where: 'uid = "' + res.user.uid + '"'
                      };

                      _this.crudService.crud(data).subscribe(function (tipo) {
                        console.log(tipo); // store password on cache

                        if (_this.platform.is('hybrid')) {
                          _this.storage.setItem('passCache', _this.pass + '$').then(function (suc) {
                            console.log('suc', suc);
                          }, function (rej) {
                            console.log('rej', rej);
                          })["catch"](function (errCatch) {
                            console.log('errCatch', errCatch);
                          }); // this.nativeStorage.setItem('passCache', this.pass + '$').then(passc => {
                          //   console.log('passCache');
                          //   console.log(passc);
                          // }, err => {
                          //   console.log(err);
                          // });

                        }

                        if (res != null) {
                          if (tipo[0][0][0] == 2 || tipo[0][0][0] == 1) {
                            var datasuc = {
                              sel: 'idtiponegocio',
                              tbl: 39,
                              where: 'idtiponegocio = ' + tipon
                            };

                            _this.crudService.crud(datasuc).subscribe(function (succ) {
                              console.log('succ tiposuc');
                              console.log(succ);

                              _this.crudService.crud({
                                sel: '',
                                tbl: 96,
                                where: impresa
                              }).subscribe(function (sucft) {
                                _this.fts.logOnUser(sucft[0][0][0], _this.email, _this.pass + '$').subscribe(function (logging) {
                                  console.log('logging');
                                  console.log(logging);
                                }, function (errlog) {
                                  console.log(errlog);
                                });
                              }, function (err) {
                                console.log('err');
                                console.log(err);
                              });

                              if (succ[0][0][0] == 1) {
                                _this.navCtrl.navigateBack('/menu');
                              } else if (succ[0][0][0] == 3) {
                                _this.navCtrl.navigateBack('/restaurant');
                              }
                            }, function (err) {
                              console.log('error');
                              console.log(err);
                            });
                          } else {
                            _this.general.mostrar_error('Este usuario no existe en la aplicación');
                          }
                        } else {
                          _this.navCtrl.navigateBack('/signin');
                        }
                      }, function (err) {
                        console.log(err);
                      }); // this.navCtrl.navigateBack('/tabs/menu');
                      // } else {
                      //   this.mostrar_error('Debe de verificar el correo');
                      // }

                    })["catch"](function (error) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                console.log(JSON.stringify(error));

                                if (error.code == 'auth/wrong-password') {
                                  this.general.mostrar_error('Contraseña incorrecta');
                                } else if (error.code == 'auth/invalid-email') {
                                  this.general.mostrar_error('Correo Inválido');
                                } else if (error.code == 'auth/user-not-found') {
                                  this.general.mostrar_error('Datos ingresados inválidos. Favor verificar que la información ingresada es correcta');
                                } else if (error.code == 'auth/too-many-requests') {
                                  this.general.mostrar_error('Muchos intentos fallidos de ingreso. Favor intenta de nuevo mas tarde');
                                } else {
                                  this.errsystem.where = '0,"' + error.code + '","' + this.email + '",' + JSON.stringify(error);
                                  this.crudService.crud(this.errsystem).subscribe(function (res) {
                                    console.log(res);
                                  }, function (err) {
                                    console.log(err);
                                  });
                                }

                              case 2:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "loginWithGoogle",
        value: function loginWithGoogle() {
          var _this2 = this;

          console.log('Login Google');
          this.authService.signInWithGoogle().then(function (res) {
            console.log(res);

            _this2.crudService.crud({
              sel: '',
              tbl: 8,
              where: '"' + res.user.uid + '"'
            }).subscribe(function (session) {
              console.log('suc session');
              console.log(session);
              console.log();

              if (session[0].length == 0) {
                _this2.crudService.crud({
                  sel: '',
                  tbl: 96,
                  where: impresa
                }).subscribe(function (sucft) {
                  _this2.fts.createUser(sucft[0][0][0], res.user.email, res.user.email, res.user.email, 'LoginGoogle$', res.user.email, '88888888').subscribe(function (ftsuser) {
                    console.log('ftuser');
                    console.log(ftsuser);
                    var data = {
                      sel: '',
                      tbl: 6,
                      where: '1,0,"' + res.user.displayName + '","' + res.user.email + '","LoginGoogle$",' + impresa + ',"","' + res.user.uid + '",0,2'
                    };

                    _this2.crudService.crud(data).subscribe(function (suc) {
                      console.log('suc google');
                      console.log(suc);

                      _this2.navCtrl.navigateBack('/menu');

                      _this2.storage.setItem('passCache', 'LoginGoogle$').then(function (store) {
                        console.log('store');
                        console.log(store);
                      }, function (errStore) {
                        console.log('errStore');
                        console.log(errStore);
                      });
                    }, function (err) {
                      console.log('err google');
                      console.log(err);
                    });
                  }, function (erruser) {
                    console.log('erruser');
                    console.log(erruser);
                  });
                }, function (err) {
                  console.log('err');
                  console.log(err);
                });
              } else {
                _this2.navCtrl.navigateBack('/menu');
              }
            }, function (errSession) {
              console.log('err session');
              console.log(errSession);
            });

            _this2.msg = String(res);

            _this2.navCtrl.navigateBack('/');
          })["catch"](function (error) {
            console.log(error);
            _this2.msg = String(error);
          });
        }
      }, {
        key: "loginWithFacebook",
        value: function loginWithFacebook() {
          var _this3 = this;

          console.log('Login Facebook');

          if (this.platform.is('hybrid')) {
            console.log('Login Facebook App');
            this.authService.signInWithFacebookApp().then(function (res) {
              console.log('res facebook app');
              console.log(JSON.stringify(res));
              var facebookCredential = firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
              firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().signInWithCredential(facebookCredential).then(function (succ) {
                console.log('facebook success');
                console.log(succ);

                _this3.crudService.crud({
                  sel: '',
                  tbl: 8,
                  where: '"' + succ.user.uid + '"'
                }).subscribe(function (session) {
                  if (session[0].length == 0) {
                    _this3.crudService.crud({
                      sel: '',
                      tbl: 96,
                      where: impresa
                    }).subscribe(function (sucft) {
                      _this3.fts.createUser(sucft[0][0][0], succ.user.email, succ.user.email, succ.user.email, 'LoginFacebook$', succ.user.email, '88888888').subscribe(function (suc) {
                        var data = {
                          sel: '',
                          tbl: 6,
                          where: '1,0, "' + succ.user.displayName + '","' + succ.user.email + '","LoginFacebook$",' + impresa + ',"","' + succ.user.uid + '",0,2'
                        };

                        _this3.crudService.crud(data).subscribe(function (result) {
                          console.log(result);

                          _this3.navCtrl.navigateBack('/menu');
                        }, function (err) {
                          console.log(err);
                        });
                      });
                    }, function (err) {
                      console.log('err');
                      console.log(err);
                    });
                  } else {
                    _this3.navCtrl.navigateBack('/menu');
                  }
                });
              })["catch"](function (error) {
                console.log('facebook error');
                console.log(JSON.stringify(error));
              });
            })["catch"](function (err) {
              console.log('err facebook app');
              console.log(JSON.stringify(err));
            });
          } else {
            console.log('Login Facebook Web');
            this.authService.signInWithFacebookWeb().then(function (res) {
              console.log('res facebook web');
              console.log(res);

              _this3.crudService.crud({
                sel: '',
                tbl: 8,
                where: '"' + res.user.uid + '"'
              }).subscribe(function (session) {
                if (session[0].length == 0) {
                  _this3.crudService.crud({
                    sel: '',
                    tbl: 96,
                    where: impresa
                  }).subscribe(function (sucft) {
                    _this3.fts.createUser(sucft[0][0][0], res.user.email, res.user.email, res.user.email, 'LoginFacebook$', res.user.email, '88888888').subscribe(function (suc) {
                      console.log('suc fts user');
                      console.log(suc);
                      var data = {
                        sel: '',
                        tbl: 6,
                        where: '1,0,"' + res.user.displayName + '","' + res.user.email + '","LoginFacebook$",' + impresa + ',"","' + res.user.uid + '",0,2'
                      };

                      _this3.crudService.crud(data).subscribe(function (sucCrud) {
                        console.log('suc facebook');
                        console.log(sucCrud);

                        _this3.navCtrl.navigateBack('/menu');

                        _this3.storage.setItem('passCache', 'LoginFacebook$').then(function (store) {
                          console.log('store');
                          console.log(store);
                        }, function (errStore) {
                          console.log('errStore');
                          console.log(errStore);
                        });
                      }, function (err) {
                        console.log('err google');
                        console.log(err);
                      });
                    }, function (errFacebook) {
                      console.log('errFacebook');
                      console.log(errFacebook);
                    });
                  }, function (err) {
                    console.log('err');
                    console.log(err);
                  });
                } else {
                  _this3.navCtrl.navigateBack('/menu');
                }
              });
            })["catch"](function (error) {
              console.log('error facebook web');
              console.log(error);

              if (error.code == 'auth/account-exists-with-different-credential') {
                _this3.general.mostrar_error('Esta cuenta ya ha sido registrada');
              }
            });
          }
        }
      }, {
        key: "emailLogin",
        value: function emailLogin() {
          // this.logsectionbtn1.nativeElement.classList.add('ion-hide');
          // this.logsectionbtn2.nativeElement.classList.add('ion-hide');
          // this.logsectionbtn3.nativeElement.classList.add('ion-hide');
          // this.datalog.nativeElement.classList.remove('ion-hide');
          // this.smsocialmediabtns.nativeElement.classList.remove('ion-hide');
          // this.logmsj.nativeElement.classList.add('ion-hide');
          this.email = '';
          this.pass = '';
        }
      }, {
        key: "showMediaBtns",
        value: function showMediaBtns() {// this.logsectionbtn1.nativeElement.classList.remove('ion-hide');
          // this.logsectionbtn2.nativeElement.classList.remove('ion-hide');
          // this.logsectionbtn3.nativeElement.classList.remove('ion-hide');
          // this.datalog.nativeElement.classList.add('ion-hide');
          // this.smsocialmediabtns.nativeElement.classList.add('ion-hide');
          // this.logmsj.nativeElement.classList.remove('ion-hide');
        }
      }, {
        key: "onEnter",
        value: function onEnter() {
          this.loginWithEmail();
        }
      }]);

      return SigninPage;
    }();

    SigninPage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _components_general_general_component__WEBPACK_IMPORTED_MODULE_6__["GeneralComponent"]
      }, {
        type: _services_ftpayment_service__WEBPACK_IMPORTED_MODULE_8__["FtpaymentService"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logSectionBtn1', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], SigninPage.prototype, "logsectionbtn1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logSectionBtn2', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], SigninPage.prototype, "logsectionbtn2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logSectionBtn3', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], SigninPage.prototype, "logsectionbtn3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataLog', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], SigninPage.prototype, "datalog", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('btnLoginMail', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], SigninPage.prototype, "btnloginmail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('smSocialMediaBtns', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], SigninPage.prototype, "smsocialmediabtns", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logMsj', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], SigninPage.prototype, "logmsj", void 0);
    SigninPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signin.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signin/signin.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signin.page.scss */
      "./src/app/pages/signin/signin.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _components_general_general_component__WEBPACK_IMPORTED_MODULE_6__["GeneralComponent"], _services_ftpayment_service__WEBPACK_IMPORTED_MODULE_8__["FtpaymentService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]])], SigninPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-signin-signin-module-es5.js.map