function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-directions-directions-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/directions/directions.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/directions/directions.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDirectionsDirectionsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"gradient-header\" color=\"app\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <img src=\"../../../assets/icon/menuicon.svg\" style=\"width: 80%; margin: 0 auto\">\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title [routerLink]=\"['/menu']\">\n      Appexpress\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-padding\">\n    <ion-row>\n      <h3>Direcciones</h3>\n    </ion-row>\n    <ion-card *ngFor=\"let item of listaDirecciones\" style=\"box-shadow: none !important; background: #fafafa;\" class=\"ion-padding\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"11\">\n            <ion-item>\n              <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n              <ion-label>{{ item[1] }}</ion-label>\n              <ion-button fill=\"outline\" slot=\"end\" (click)=\"openMap( item[0] )\">Ver</ion-button>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"1\">\n            <div *ngIf=\"item[8] == 1\">\n              <ion-icon name=\"checkmark-circle\" style=\"font-size: 2em; margin-top: 10px; color: #128BC9;\"></ion-icon>\n            </div>\n            <div *ngIf=\"item[8] != 1\" (click)=\"setDefecto( item[0] )\">\n              <ion-icon name=\"radio-button-off\" style=\"font-size: 2em; margin-top: 10px;\"></ion-icon>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" *ngIf=\"item[8] > 0\" align=\"right\">\n            <ion-badge color=\"light\">Predeterminada</ion-badge>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-card-content style=\"margin-top: -20px;\">\n        <ion-row>\n          <ion-col size=\"2\">\n              <ion-icon name=\"map\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\">\n              {{ item[2] }}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"2\">\n              <ion-icon name=\"call\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\">\n              {{ item[3] }}\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n      <ion-row align-items-center>\n        <ion-col>\n          <ion-button expand=\"block\" color=\"light\" id=\"{{ item[0] }}\" (click)=\"editDireccion( $event )\">\n            Editar\n          </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button expand=\"block\" class=\"app\" color=\"app\" id=\"{{ item[0] }}\" (click)=\"deleteDireccion( $event )\">\n            Eliminar\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-grid>\n</ion-content>\n\n<ion-footer style=\"padding: 0.2em\">\n  <ion-toolbar>\n    <ion-item [routerLink]=\"['/adddirection']\">\n      <ion-label>\n        Agregar dirección\n      </ion-label>\n    <ion-icon name=\"add\" slot=\"end\"></ion-icon>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>  \n";
    /***/
  },

  /***/
  "./src/app/pages/directions/directions-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/directions/directions-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: DirectionsPageRoutingModule */

  /***/
  function srcAppPagesDirectionsDirectionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirectionsPageRoutingModule", function () {
      return DirectionsPageRoutingModule;
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


    var _directions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./directions.page */
    "./src/app/pages/directions/directions.page.ts");

    var routes = [{
      path: '',
      component: _directions_page__WEBPACK_IMPORTED_MODULE_3__["DirectionsPage"]
    }];

    var DirectionsPageRoutingModule = function DirectionsPageRoutingModule() {
      _classCallCheck(this, DirectionsPageRoutingModule);
    };

    DirectionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DirectionsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/directions/directions.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/directions/directions.module.ts ***!
    \*******************************************************/

  /*! exports provided: DirectionsPageModule */

  /***/
  function srcAppPagesDirectionsDirectionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirectionsPageModule", function () {
      return DirectionsPageModule;
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


    var _directions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./directions-routing.module */
    "./src/app/pages/directions/directions-routing.module.ts");
    /* harmony import */


    var _directions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./directions.page */
    "./src/app/pages/directions/directions.page.ts");

    var DirectionsPageModule = function DirectionsPageModule() {
      _classCallCheck(this, DirectionsPageModule);
    };

    DirectionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _directions_routing_module__WEBPACK_IMPORTED_MODULE_5__["DirectionsPageRoutingModule"]],
      declarations: [_directions_page__WEBPACK_IMPORTED_MODULE_6__["DirectionsPage"]]
    })], DirectionsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/directions/directions.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/directions/directions.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDirectionsDirectionsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app {\n  background: var(--ion-color-insideapp) !important;\n  color: #F8F8F8 !important;\n}\n\n.btnapp {\n  background: var(--ion-color-btnapp) !important;\n  color: #f8f8f8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNjZXNwZWRlcy9Eb2N1bWVudHMvYXBwcy9hcHBiYXNlX3YwLjEvc3JjL2FwcC9wYWdlcy9kaXJlY3Rpb25zL2RpcmVjdGlvbnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kaXJlY3Rpb25zL2RpcmVjdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaURBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksOENBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kaXJlY3Rpb25zL2RpcmVjdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWluc2lkZWFwcCkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI0Y4RjhGOCAhaW1wb3J0YW50O1xufVxuXG4uYnRuYXBwe1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1idG5hcHApICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmOGY4Zjg7XG59IiwiLmFwcCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1pbnNpZGVhcHApICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRjhGOEY4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5hcHAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYnRuYXBwKSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2Y4ZjhmODtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/directions/directions.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/directions/directions.page.ts ***!
    \*****************************************************/

  /*! exports provided: DirectionsPage */

  /***/
  function srcAppPagesDirectionsDirectionsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirectionsPage", function () {
      return DirectionsPage;
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


    var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _services_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/crud.service */
    "./src/app/services/crud.service.ts");
    /* harmony import */


    var _adddirection_adddirection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../adddirection/adddirection.page */
    "./src/app/pages/adddirection/adddirection.page.ts");
    /* harmony import */


    var _modals_error_error_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../modals/error/error.page */
    "./src/app/modals/error/error.page.ts");

    var DirectionsPage = /*#__PURE__*/function () {
      function DirectionsPage(alertController, afAuth, crudService, modalCtrl,
      /*private locationAccuracy: LocationAccuracy,*/
      loadingCtrl) {
        _classCallCheck(this, DirectionsPage);

        this.alertController = alertController;
        this.afAuth = afAuth;
        this.crudService = crudService;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userid = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
        this.location = {
          lat: 10.0721746,
          lng: -84.31173590000003
        };
      }

      _createClass(DirectionsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.locationAccuracy.canRequest().then((canRequest: boolean) => {
          //   if (canRequest) {
          //     // the accuracy option will be ignored by iOS
          //     this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
          //       () => {
          //         console.log('Request successful');
          //       },
          //       error => {
          //         console.log('Error requesting location permissions', error);
          //       }
          //     );
          //   } else {
          //     console.log('else can request');
          //   }
          // }).catch((err: any) => {
          //   console.log(err);
          // });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          console.log('ionViewWillEnter');
          this.getDireccionesByUser();
        }
      }, {
        key: "setDefecto",
        value: function setDefecto(viddir) {
          var _this = this;

          console.log('viddir');
          console.log(viddir);
          var data = {
            sel: '',
            tbl: 48,
            where: '"' + this.userid + '",' + viddir
          };
          this.crudService.crud(data).subscribe(function (res) {
            console.log(res);

            _this.getDireccionesByUser();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getDireccionesByUser",
        value: function getDireccionesByUser() {
          var _this2 = this;

          console.log('getDireccionesByUser2');
          this.userid = this.afAuth.auth.currentUser.uid;
          console.log(this.userid);
          var data = {
            sel: '',
            tbl: 16,
            where: '"' + this.userid + '"'
          };
          this.crudService.crud(data).subscribe(function (res) {
            console.log('res');
            console.log(JSON.stringify(res));
            _this2.listaDirecciones = res[0];
          }, function (err) {
            console.log('error: crud err');
            console.log(err);
          });
        }
      }, {
        key: "editDireccion",
        value: function editDireccion(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var viddir, data;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    viddir = event.target.id;
                    data = {
                      sel: '',
                      tbl: 17,
                      where: viddir
                    };
                    console.log('Direccion');
                    this.crudService.crud(data).subscribe(function (succ) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var modal, _ref, data;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                console.log('succ');
                                console.log(succ);
                                _context.next = 4;
                                return this.modalCtrl.create({
                                  component: _adddirection_adddirection_page__WEBPACK_IMPORTED_MODULE_6__["AdddirectionPage"],
                                  componentProps: {
                                    viddir: succ[0][0][0],
                                    vopt: 2,
                                    vdireccion: succ[0][0][1],
                                    votrasenas: succ[0][0][2],
                                    vphone: succ[0][0][3],
                                    nlat: succ[0][0][5],
                                    nlng: succ[0][0][6],
                                    nkms: succ[0][0][7],
                                    tipo: 2
                                  }
                                });

                              case 4:
                                modal = _context.sent;
                                _context.next = 7;
                                return modal.present();

                              case 7:
                                _context.next = 9;
                                return modal.onWillDismiss();

                              case 9:
                                _ref = _context.sent;
                                data = _ref.data;
                                console.log('Cierra modal editar direccion');
                                console.log(data);

                                if (data != undefined) {
                                  this.getDireccionesByUser();
                                }

                              case 14:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    }, function (error) {
                      console.log('error');
                      console.log(error);
                    });

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "deleteDireccion",
        value: function deleteDireccion(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var id, modal, _ref2, data, loading, str;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    id = event.target.id;
                    console.log(id);
                    _context3.next = 4;
                    return this.modalCtrl.create({
                      component: _modals_error_error_page__WEBPACK_IMPORTED_MODULE_7__["ErrorPage"],
                      cssClass: 'error-modal',
                      componentProps: {
                        error: 'Desea eliminar esta dirección?'
                      }
                    });

                  case 4:
                    modal = _context3.sent;
                    _context3.next = 7;
                    return modal.present();

                  case 7:
                    _context3.next = 9;
                    return modal.onWillDismiss();

                  case 9:
                    _ref2 = _context3.sent;
                    data = _ref2.data;
                    console.log(data);
                    _context3.next = 14;
                    return this.loadingCtrl.create({
                      message: 'Borrando direccion...'
                    });

                  case 14:
                    loading = _context3.sent;
                    _context3.next = 17;
                    return loading.present();

                  case 17:
                    if (data != undefined) {
                      str = {
                        sel: '',
                        tbl: 15,
                        where: '3,' + id + ',0,0,0,"","","",0'
                      };
                      this.crudService.crud(str).subscribe(function (res) {
                        console.log(res);
                        loading.dismiss();

                        _this4.getDireccionesByUser();
                      }, function (err) {
                        loading.dismiss();
                        console.log(err);
                      });
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
        key: "presentAlertConfirm",
        value: function presentAlertConfirm(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this5 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: 'Confirmacion!',
                      message: '¿Desea eliminar esta dirección?',
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Eliminar',
                        handler: function handler() {
                          console.log('Confirm Okay');

                          _this5.deleteDireccion(id);

                          _this5.getDireccionesByUser();
                        }
                      }]
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return DirectionsPage;
    }();

    DirectionsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }, {
        type: _services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Map', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], DirectionsPage.prototype, "mapElement", void 0);
    DirectionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-directions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./directions.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/directions/directions.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./directions.page.scss */
      "./src/app/pages/directions/directions.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], _services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])], DirectionsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-directions-directions-module-es5.js.map