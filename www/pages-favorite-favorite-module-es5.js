function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-favorite-favorite-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorite/favorite.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorite/favorite.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFavoriteFavoritePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"gradient-header\" color=\"app\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-menu-button><img src=\"../../../assets/icon/menuicon.svg\" style=\"width: 80%; margin: 0 auto\"></ion-menu-button>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-title style=\"margin-left: -10%;\" [routerLink]=\"['/menu']\">Appexpress</ion-title>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <h6>Favoritos</h6>\n  <ion-list id=\"lfavoritos\" align-items-center>\n    <section *ngFor=\"let item of listaFavoritos\">\n      <ion-item>\n        <ion-col size=\"3\" align-items-center style=\"width: 75px; height: 75px; max-width: 75px !important; max-height: 75px !important;\">\n          <ion-img [src]=\"item[10]\" alt=\"\" style=\"margin: -25% auto !important;\" (click)=\"verDetalle( item[0] )\" ></ion-img>\n        </ion-col>\n        <ion-col size=\"9\" align-items-center>\n          <ion-label>{{ item[1]}}</ion-label>\n          <ion-label style=\"color: #929292\">{{ item[2] }}</ion-label>\n          <ion-label style=\"display: inline-block; margin-top: 0.5em; color: #000; font-size: 0.9em;\">₡ {{ item[3] }}</ion-label>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-chip color=\"danger\" align=\"center\" (click)=\"setfavorito( item[0] )\">\n                <ion-icon name=\"heart\"></ion-icon>\n                <ion-label>Eliminar</ion-label>\n              </ion-chip>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-chip color=\"{{item[11] != null ? 'success' : 'dark'}}\" align=\"center\"\n                (click)=\"addFteToOrden( item[0] )\" id=\"fte{{ item[0] }}\">\n                <ion-icon id=\"ico{{ item[0] }}\" name=\"{{item[11] != null ? 'checkmark' : 'add'}}\"></ion-icon>\n                <ion-label id=\"txt{{ item[0] }}\">{{item[11] != null ? 'Agregado' : 'Agregar'}}</ion-label>\n              </ion-chip>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-item>\n    </section>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/favorite/favorite-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/favorite/favorite-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: FavoritePageRoutingModule */

  /***/
  function srcAppPagesFavoriteFavoriteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritePageRoutingModule", function () {
      return FavoritePageRoutingModule;
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


    var _favorite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./favorite.page */
    "./src/app/pages/favorite/favorite.page.ts");

    var routes = [{
      path: '',
      component: _favorite_page__WEBPACK_IMPORTED_MODULE_3__["FavoritePage"]
    }];

    var FavoritePageRoutingModule = function FavoritePageRoutingModule() {
      _classCallCheck(this, FavoritePageRoutingModule);
    };

    FavoritePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FavoritePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/favorite/favorite.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/favorite/favorite.module.ts ***!
    \***************************************************/

  /*! exports provided: FavoritePageModule */

  /***/
  function srcAppPagesFavoriteFavoriteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritePageModule", function () {
      return FavoritePageModule;
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


    var _favorite_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./favorite-routing.module */
    "./src/app/pages/favorite/favorite-routing.module.ts");
    /* harmony import */


    var _favorite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./favorite.page */
    "./src/app/pages/favorite/favorite.page.ts");

    var FavoritePageModule = function FavoritePageModule() {
      _classCallCheck(this, FavoritePageModule);
    };

    FavoritePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _favorite_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritePageRoutingModule"]],
      declarations: [_favorite_page__WEBPACK_IMPORTED_MODULE_6__["FavoritePage"]]
    })], FavoritePageModule);
    /***/
  },

  /***/
  "./src/app/pages/favorite/favorite.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/favorite/favorite.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFavoriteFavoritePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app {\n  background-color: var(--ion-color-insideapp) !important;\n  color: #F8F8F8 !important;\n}\n\n.btnapp {\n  background: var(--ion-color-btnapp) !important;\n  color: #f8f8f8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNjZXNwZWRlcy9Eb2N1bWVudHMvYXBwcy9hcHBiYXNlX3YwLjEvc3JjL2FwcC9wYWdlcy9mYXZvcml0ZS9mYXZvcml0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Zhdm9yaXRlL2Zhdm9yaXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVEQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLDhDQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmF2b3JpdGUvZmF2b3JpdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWluc2lkZWFwcCkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI0Y4RjhGOCAhaW1wb3J0YW50O1xufVxuXG4uYnRuYXBwe1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1idG5hcHApICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmOGY4Zjg7XG59IiwiLmFwcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1pbnNpZGVhcHApICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRjhGOEY4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5hcHAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYnRuYXBwKSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2Y4ZjhmODtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/favorite/favorite.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/favorite/favorite.page.ts ***!
    \*************************************************/

  /*! exports provided: FavoritePage */

  /***/
  function srcAppPagesFavoriteFavoritePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritePage", function () {
      return FavoritePage;
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


    var src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/crud.service */
    "./src/app/services/crud.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _detalleproductos_detalleproductos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../detalleproductos/detalleproductos.page */
    "./src/app/pages/detalleproductos/detalleproductos.page.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/storage.service */
    "./src/app/services/storage.service.ts"); // tslint:disable: max-line-length
    // tslint:disable: triple-equals


    var FavoritePage = /*#__PURE__*/function () {
      function FavoritePage(crudService, afAuth, toastCtrl, appc, modalCtrl, storage) {
        _classCallCheck(this, FavoritePage);

        this.crudService = crudService;
        this.afAuth = afAuth;
        this.toastCtrl = toastCtrl;
        this.appc = appc;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.tipo = 1;
        this.categoria = 0;
      }

      _createClass(FavoritePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.userid = this.afAuth.auth.currentUser.uid;
                    console.log(this.userid);
                    _context.next = 4;
                    return this.storage.getItem('impresa');

                  case 4:
                    this.impresa = _context.sent.value;
                    this.getFavorites(this.userid);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getFavorites(this.userid);
        }
      }, {
        key: "getFavorites",
        value: function getFavorites(userid) {
          var _this = this;

          console.log(userid + ' ' + this.impresa);
          var datos = {
            sel: '',
            tbl: 60,
            where: '"' + userid + '",' + this.impresa
          };
          this.crudService.crud(datos).subscribe(function (data) {
            console.log('data');
            console.log(data);
            console.log('data[0].length', data[0].length);

            if (data[0].length == 0) {
              console.log('NO HAY');
              document.getElementById('lfavoritos').innerHTML = String('<section padding align="center"><br><br><br><br><label align="center" style="color: #929292; font-size: 16px">No existen productos favoritos,<br>presione <b>Appexpress</b> para volver al menu</label><br><br><br><br><img src="../../../assets/images/favorites.svg" style="margin: 0 auto !important; width: 90%"></section>');
            } else {
              _this.listaFavoritos = data[0];
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "setfavorito",
        value: function setfavorito(vid) {
          var _this2 = this;

          console.log('vid, this.userid');
          console.log(vid, this.userid);
          var data = {
            sel: '',
            tbl: 58,
            where: vid + ',"' + this.userid + '"'
          };
          this.crudService.crud(data).subscribe(function (res) {
            console.log(res);

            _this2.getFavorites(_this2.userid);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "addFteToOrden",
        value: function addFteToOrden(vid) {
          var _this3 = this;

          console.log(vid);
          var datos = {
            sel: '',
            tbl: 9,
            where: '1,0,' + vid + ',1,"' + this.userid + '",' + this.impresa
          };
          this.crudService.crud(datos).subscribe(function (res) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var badge, data;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log(res);
                      badge = document.getElementById('badgeorders');
                      data = {
                        sel: '',
                        tbl: 41,
                        where: '"' + this.userid + '",' + this.impresa
                      };
                      this.crudService.crud(data).subscribe(function (succ) {
                        badge.innerHTML = String(succ[0][0][0]);
                      }, function (err) {
                        console.log(err);
                      });
                      this.appc.updateOrders(); // document.getElementById('prod' + vid).classList.remove('btnadd');
                      // document.getElementById('prod' + vid).classList.add('btnalready');

                      document.getElementById('fte' + vid).setAttribute('color', 'success');
                      document.getElementById('ico' + vid).setAttribute('name', 'checkmark');
                      document.getElementById('txt' + vid).innerHTML = 'Agregado';

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }, function (err) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log(err);
                      this.mostrar_mensaje('No pudimos agregar este producto a tu orden, intentalo de nuevo o reinicie la aplicación');

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          });
        }
      }, {
        key: "mostrar_mensaje",
        value: function mostrar_mensaje(mensaje) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var toast;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.toastCtrl.create({
                      message: mensaje,
                      duration: 2000,
                      position: 'bottom',
                      buttons: [{
                        side: 'end',
                        text: 'Cerrar',
                        handler: function handler() {
                          console.log(mensaje);
                        }
                      }]
                    });

                  case 2:
                    toast = _context4.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "verDetalle",
        value: function verDetalle(vid) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var modal, _ref, data;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    console.log(vid);
                    _context5.next = 3;
                    return this.modalCtrl.create({
                      component: _detalleproductos_detalleproductos_page__WEBPACK_IMPORTED_MODULE_6__["DetalleproductosPage"],
                      componentProps: {
                        vid: vid,
                        tipo: this.tipo,
                        categoria: this.categoria,
                        route: 'favorite'
                      }
                    });

                  case 3:
                    modal = _context5.sent;
                    _context5.next = 6;
                    return modal.present();

                  case 6:
                    _context5.next = 8;
                    return modal.onWillDismiss();

                  case 8:
                    _ref = _context5.sent;
                    data = _ref.data;
                    console.log('Cierra modal detalle productos');
                    console.log(data);

                  case 12:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return FavoritePage;
    }();

    FavoritePage.ctorParameters = function () {
      return [{
        type: src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
      }];
    };

    FavoritePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-favorite',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./favorite.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorite/favorite.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./favorite.page.scss */
      "./src/app/pages/favorite/favorite.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]])], FavoritePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-favorite-favorite-module-es5.js.map