(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-menu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/filter/filter.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/filter/filter.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  filter works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"gradient-header\">\n  <ion-toolbar class=\"\" color=\"app\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\">\n          <!-- <ion-menu-button><img src=\"../../../assets/icon/menuicon.svg\" style=\"width: 80%; margin: 0 auto\"></ion-menu-button> -->\n          <!-- #dadada -->\n            <section style=\"background: transparent; border-radius: 0 2.5em 2.5em 0; margin-left: -15px;\">\n              <ion-menu-button><img src=\"../../../assets/icon/avatar1.svg\" style=\"width: 90%; margin: 0 auto; border-radius: 50%; padding: 2px; position: relative; margin-left: 18px;\" alt=\"\"></ion-menu-button>\n            </section>\n        </ion-col>\n        <ion-col size=\"8\">\n          <div class=\"search\" align=\"center\">\n            <ion-input type=\"text\" (keyup)=\"sproduct()\" role=\"search\" clearInput id=\"search\" placeholder=\"    Buscar\" required></ion-input>\n          </div>\n        </ion-col>\n        <ion-col size=\"2\" [routerLink]=\"['/order']\">\n          <img class=\"cart-icon\" src=\"../../../assets/icon/cart.svg\" style=\"margin: 10px auto !important\">\n          <ion-badge style=\"margin-top: 5px; margin-left: 11px; color: black\" id=\"badgeorders\"></ion-badge>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid style=\"padding-bottom: 0;\" class=\"ion-hide\" id=\"gridTable\">\n      <ion-list class=\"app\">\n        <ion-item-sliding color=\"app\">\n          <ion-item class=\"ion-text-center\" color=\"app\">\n            <ion-label style=\"font-size: 1.2em; color: #fff;\" id=\"nmesa\"></ion-label>\n          </ion-item>\n          <ion-item-options side=\"end\">\n            <ion-item-option color=\"btnapp\" (click)=\"deleteTable(ntable)\">Borrar</ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-grid>\n    <ion-grid class=\"gradient-header\" style=\"width: 100%; padding-top: 0; height: 90%;\">\n      <ion-slides pager=\"true\" [options]=\"slideMenuopt\" class=\"ion-padding\" align=\"center\" style=\"padding: 0 16px 0 16px\">\n        <ion-slide *ngFor=\"let item of listatipoprods\" (click)=\"onClick(item[0])\" style=\"width: auto !important; padding: 3%;\">\n          <ion-label style=\"font: 0.5em; font-weight: 400; color: black;\">{{ item[1] }}</ion-label>\n        </ion-slide>\n      </ion-slides>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row style=\"height: 40px;\">\n      <ion-col size=\"2\" align=\"center\" (click)=\"fPopover( $event )\"><ion-icon style=\"margin-top: 12px\" name=\"options-outline\"></ion-icon></ion-col>\n      <ion-col size=\"10\" align=\"center\" [routerLink]=\"['/sucursales']\" class=\"ion-padding\" style=\"font-weight: 300; font-size: 0.9em; color: #505050; background: #fafafa;\">\n        <ion-col>Comprar en</ion-col>\n        <ion-col><ion-icon name=\"caret-forward-outline\"></ion-icon></ion-col>\n        <ion-col><b>Alajuela</b></ion-col>\n      </ion-col>\n      <!-- <ion-col align=\"center\" class=\"ion-padding\" size=\"8\" style=\"font-weight: 300; font-size: 0.8em; color: #505050;\">Más de {{ results }} resultados</ion-col> -->\n      <!-- <ion-col align=\"center\" class=\"ion-padding\" size=\"4\" style=\"font-weight: 300; font-size: 0.9em; color: #505050; background: #f8f8f8;\" (click)=\"fPopover( $event )\">Filtrar <ion-icon name=\"arrow-dropdown\"></ion-icon></ion-col> -->\n    </ion-row>\n  </ion-grid>\n    \n  <ion-row class=\"ion-padding\" style=\"margin-top: -2.5px; width: 100%;\" *ngIf=\"fileslength == 1 && visible == 1\">\n    <img id=\"{{ idcupon }}\" src=\"{{ file }}\" (click)=\"verDetallecupon( idcupon )\" style=\"background-size: cover;\" alt=\"Cupón de descuento\">\n  </ion-row>\n  <ion-grid style=\"margin-top: -2.5px; width: 100%;\">\n  <ion-grid *ngIf=\"fileslength > 1\">\n      <ion-slides pager=\"true\" [options]=\"slideOpts\">\n          <ion-slide *ngFor=\"let item of listacupones\">\n              <img [id]=\"item[0]\" [src]=\"item[4]\" (click)=\"verDetallecupon( item[0] )\" style=\"background-size: cover;\" alt=\"Cupón de descuento\">\n          </ion-slide>\n      </ion-slides>\n    </ion-grid>\n    \n    <ion-slides scrollbar=\"true\" [options]=\"slideCategories\" style=\"margin-top: 15px;\">\n      <ion-slide>\n        <div align=\"center\" *ngFor=\"let cat of listacategorias\">\n          <img [src]=\"cat[2]\" style=\"padding: 3%; width: 70px; height: 70px;\" (click)=\"buscarCategoria(cat[0])\">\n          <!-- <ion-label style=\"font-size: 0.8em; font-weight: 250;\">{{ cat[1] }}</ion-label> -->\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </ion-grid>\n  <ion-grid>\n    <div [ngSwitch]=\"tipo\">\n      <ion-list *ngSwitchCase=\"1\">\n        <ion-row>\n          <ion-col *ngFor=\"let item of listacomidas\" size=\"6\" style=\" border: 1px solid #fafafa;\">\n            <ion-card-header>\n              <ion-img [src]=\"item[4]\" alt=\"\" style=\"margin: 0 auto; padding: 2%; width: auto;\" (click)=\"verDetalle(item[0])\"></ion-img>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <p (click)=\"verDetalle(item[0])\">{{ (item[1].length>16) ? (item[1] | slice:0:16)+'..':(item[1]) }}</p>\n                </ion-col>\n                <ion-col size=\"12\" style=\"margin-top: -15px;\">\n                  <p style=\"font-weight: 300; color: #525252;\"><label style=\"margin-bottom: 15px !important; font-size: 0.8em\">₡</label> {{ item[3] }}</p>\n                </ion-col>\n                <ion-col id=\"sectAdd{{ item[0] }}\" size=\"12\" style=\"margin-top: -10px;\" class=\"{{item[7] == 2 || item[7] == null ? '' : 'ion-hide'}}\">\n                  <ion-chip color=\"{{item[7] == 2 || item[7] == null ? 'dark' : 'success'}}\" align=\"center\"\n                    (click)=\"addToOrden( item[0] )\" id=\"prod{{ item[0] }}\">\n                    <ion-icon id=\"ico{{ item[0] }}\" name=\"{{item[7] != null ? 'checkmark' : 'add'}}\"></ion-icon>\n                    <ion-label id=\"txt{{ item[0] }}\">{{item[7] != null ? 'Agregado' : 'Agregar'}}</ion-label>\n                  </ion-chip>\n                </ion-col>\n                <ion-col id=\"sectCant{{ item[0] }}\" size=\"12\" class=\"{{item[7] == 2 || item[7] == null ? 'ion-hide' : ''}}\" style=\"margin-top: -10px;\">\n                  <div class=\"quantity-selector\">\n                    <div class=\"product-minus-button quantity-button\" (click)=\"restoCant( item[0] )\"><ion-icon class=\"iconcant\" name=\"remove-outline\"></ion-icon></div>\n                    <input type=\"number\" class=\"quantity-selector-field\" id=\"cant{{ item[0] }}\" value=\"1\" data-max=\"2\" #cant disabled>\n                    <div class=\"product-plus-button quantity-button\" (click)=\"plusCant( item[0] )\"><ion-icon class=\"iconcant\" name=\"add-outline\"></ion-icon></div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n      <ion-list *ngSwitchCase=\"2\">\n        <ion-row>\n          <ion-col *ngFor=\"let item of listabebidas\" size=\"6\" style=\" border: 1px solid #fafafa;\">\n            <ion-card-header style=\"height: 200px; max-height: 200px; min-height: 200px;\">\n              <ion-img [src]=\"item[4]\" alt=\"\" style=\"margin: 0 auto; padding: 5%;\" (click)=\"verDetalle(item[0])\"></ion-img>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <p (click)=\"verDetalle(item[0])\">{{ (item[1].length>15) ? (item[1] | slice:0:15)+'..':(item[1]) }}</p>\n                </ion-col>\n                <ion-col size=\"12\" style=\"margin-top: -15px;\">\n                  <p style=\"font-weight: 300; color: #525252;\"><label style=\"margin-bottom: 15px !important; font-size: 0.8em\">₡</label> {{ item[3] }}</p>\n                </ion-col>\n                <ion-col size=\"12\" style=\"margin-top: -10px;\">\n                  <ion-chip color=\"{{item[7] == 2 || item[7] == null ? 'dark' : 'success'}}\" align=\"center\"\n                    (click)=\"addToOrden( item[0] )\" id=\"prod{{ item[0] }}\">\n                    <ion-icon id=\"ico{{ item[0] }}\" name=\"{{item[7] != null ? 'checkmark' : 'add'}}\"></ion-icon>\n                    <ion-label id=\"txt{{ item[0] }}\">{{item[7] != null ? 'Agregado' : 'Agregar'}}</ion-label>\n                  </ion-chip>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n      <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"dots\"\n          loadingText=\"Cargando productos...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </div>\n  </ion-grid>\n  \n  <!-- fab placed to the bottom end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" id=\"scanner\" class=\"ion-hide\">\n    <ion-fab-button (click)=\"scanTable()\">\n      <ion-icon name=\"arrow-forward-circle\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/filter/filter.component */ "./src/app/components/filter/filter.component.ts");




let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_3__["FilterComponent"]
        ],
        exports: [
            _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_3__["FilterComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/filter/filter.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/filter/filter.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-size: 0.95em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNjZXNwZWRlcy9Eb2N1bWVudHMvYXBwcy9hcHBiYXNlX3YwLjEvc3JjL2FwcC9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBmb250LXNpemU6IDAuOTVlbTtcbn0iLCIqIHtcbiAgZm9udC1zaXplOiAwLjk1ZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/components/filter/filter.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/filter/filter.component.ts ***!
  \*******************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let FilterComponent = class FilterComponent {
    constructor(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    ngOnInit() { }
    onClick(valor) {
        console.log('Opc:', valor);
        this.popoverCtrl.dismiss({
            item: valor
        });
    }
};
FilterComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/filter/filter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filter.component.scss */ "./src/app/components/filter/filter.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], FilterComponent);



/***/ }),

/***/ "./src/app/pages/menu/menu-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/menu/menu-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function() { return MenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/menu/menu.page.ts");




const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"]
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/menu/menu.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-routing.module */ "./src/app/pages/menu/menu-routing.module.ts");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/menu/menu.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/filter/filter.component */ "./src/app/components/filter/filter.component.ts");









let MenuPageModule = class MenuPageModule {
};
MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_8__["FilterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "./src/app/pages/menu/menu.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-avatar ion-img, ion-avatar img {\n  width: 75px !important;\n  height: 75px !important;\n  max-width: 75px !important;\n  max-height: 75px !important;\n  padding: 1% !important;\n}\n\nion-card-header {\n  height: 180px;\n  max-height: 180px;\n  min-height: 180px;\n  background: transparent !important;\n}\n\n.btnadd {\n  padding: 0.8em 0.9em !important;\n  color: #fff;\n  z-index: 1000;\n  position: absolute;\n  margin: -22px 0px 0px 0px !important;\n}\n\n.btnalready {\n  padding: 0.8em 0.9em !important;\n  background: rgba(235, 54, 72, 0.2) !important;\n  color: rgba(201, 18, 18, 0.5);\n  z-index: 1000;\n  position: absolute;\n  margin: -22px 0px 0px 0px !important;\n}\n\n.cart-icon {\n  position: fixed;\n  width: 10%;\n  margin-top: 15px;\n}\n\n#badgeorders {\n  background: transparent !important;\n}\n\n[name=add] {\n  font-size: 1.6em;\n}\n\n.app {\n  background-color: var(--ion-color-insideapp) !important;\n  color: #F8F8F8 !important;\n}\n\n.color-grey-text {\n  color: #989aa2 !important;\n}\n\n.vsearch:hover {\n  opacity: 1;\n}\n\n.vsearch:hover .btnsearch {\n  opacity: 1;\n}\n\n.search {\n  margin-top: 1%;\n  margin-left: 1%;\n  width: 95% !important;\n  display: inline-block;\n  position: relative;\n}\n\n.search > ion-input {\n  color: #444444;\n  font-size: 16px;\n  width: 100%;\n  background: #ebebeb;\n  padding: 15px;\n  height: 35px;\n  border: none;\n  outline: none;\n  transition: ease 0.5s;\n  text-align: left;\n  --padding-start: 25px;\n}\n\n.search > ion-input::-webkit-input-placeholder {\n  color: #929292;\n  opacity: 1;\n}\n\n.search > ion-input::-moz-placeholder {\n  color: #929292;\n  opacity: 1;\n}\n\n.search > ion-input::-ms-input-placeholder {\n  color: #929292;\n  opacity: 1;\n}\n\n.search > ion-input::placeholder {\n  color: #929292;\n  opacity: 1;\n}\n\n.search > ion-input::-ms-placeholder {\n  color: #929292;\n}\n\n.search > ion-input::-ms-input-placeholder {\n  color: #929292;\n}\n\n.search > ion-input:focus,\n.search > ion-input:valid {\n  background: white;\n}\n\n.quantity-selector {\n  clear: both;\n  visibility: visible;\n  display: block;\n  width: 100%;\n}\n\n.product-minus-button,\n.product-plus-button {\n  padding: 0;\n  margin-top: 5px;\n  height: 30px;\n  width: 30px;\n  text-align: center;\n  cursor: pointer;\n  float: left;\n  font-size: 20px;\n  background: #ecfcf1;\n  color: #67c48c;\n  border-radius: 50%;\n}\n\n.quantity-selector input {\n  max-width: 70px;\n  background: transparent;\n  font-size: 1em;\n  position: relative;\n  z-index: 1;\n  margin: -5px -1px;\n  float: left;\n  display: block;\n  width: 41%;\n  text-align: center;\n  height: 45px;\n  border: none;\n}\n\n.iconcant {\n  margin-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNjZXNwZWRlcy9Eb2N1bWVudHMvYXBwcy9hcHBiYXNlX3YwLjEvc3JjL2FwcC9wYWdlcy9tZW51L21lbnUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tZW51L21lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtBQ0NGOztBREVBO0VBQ0ksK0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0VBQ0EsNkNBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FDQ0o7O0FERUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQ0FBQTtBQ0VGOztBRENBO0VBQ0ksZ0JBQUE7QUNFSjs7QURDQTtFQUNJLHVEQUFBO0VBQ0EseUJBQUE7QUNFSjs7QURDQTtFQUNJLHlCQUFBO0FDRUo7O0FEQ0E7RUFDSSxVQUFBO0FDRUo7O0FEREk7RUFDSSxVQUFBO0FDR1I7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0VKOztBRENFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBRUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQUo7O0FER0U7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ0FKOztBREZFO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUNBSjs7QURGRTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FDQUo7O0FERkU7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ0FKOztBREdFO0VBQ0UsY0FBQTtBQ0FKOztBREdFO0VBQ0UsY0FBQTtBQ0FKOztBREdFOztFQUVFLGlCQUFBO0FDQUo7O0FER0U7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREVFOztFQUVFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUU7RUFDRSxlQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZW51L21lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciBpb24taW1nLCBpb24tYXZhdGFyIGltZ3tcbiAgICB3aWR0aDogNzVweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNzVweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogNzVweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDc1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxJSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBoZWlnaHQ6IDE4MHB4O1xuICBtYXgtaGVpZ2h0OiAxODBweDtcbiAgbWluLWhlaWdodDogMTgwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5hZGQge1xuICAgIHBhZGRpbmc6IDAuOGVtIDAuOWVtICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiAtMjJweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xufVxuXG4uYnRuYWxyZWFkeSB7XG4gICAgcGFkZGluZzogMC44ZW0gMC45ZW0gIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNSwgNTQsIDcyLDAuMikgIWltcG9ydGFudDtcbiAgICBjb2xvcjogcmdiYSgyMDEsIDE4LCAxOCwgMC41KTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IC0yMnB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJ0LWljb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMCU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4jYmFkZ2VvcmRlcnN7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbltuYW1lPWFkZF17XG4gICAgZm9udC1zaXplOiAxLjZlbTtcbn1cblxuLmFwcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWluc2lkZWFwcCkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI0Y4RjhGOCAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItZ3JleS10ZXh0IHtcbiAgICBjb2xvcjogIzk4OWFhMiAhaW1wb3J0YW50O1xufVxuXG4udnNlYXJjaDpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAuYnRuc2VhcmNoIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5zZWFyY2gge1xuICAgIG1hcmdpbi10b3A6IDElO1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLnNlYXJjaCA+IGlvbi1pbnB1dCB7XG4gICAgY29sb3I6ICM0NDQ0NDQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcbiAgICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gICAgdHJhbnNpdGlvbjogZWFzZSAwLjVzO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyNXB4O1xuICB9XG4gIFxuICAuc2VhcmNoID4gaW9uLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM5MjkyOTI7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICBcbiAgLnNlYXJjaCA+IGlvbi1pbnB1dDo6LW1zLXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzkyOTI5MjtcbiAgfVxuICBcbiAgLnNlYXJjaCA+IGlvbi1pbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzkyOTI5MjtcbiAgfVxuICBcbiAgLnNlYXJjaCA+IGlvbi1pbnB1dDpmb2N1cyxcbiAgLnNlYXJjaCA+IGlvbi1pbnB1dDp2YWxpZCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgfVxuICAvLyAqKioqKioqKioqKioqKioqKipcbiAgLnF1YW50aXR5LXNlbGVjdG9yIHtcbiAgICBjbGVhcjogYm90aDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wcm9kdWN0LW1pbnVzLWJ1dHRvbixcbiAgLnByb2R1Y3QtcGx1cy1idXR0b24ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZWNmY2YxO1xuICAgIGNvbG9yOiAjNjdjNDhjO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICAucXVhbnRpdHktc2VsZWN0b3IgaW5wdXQge1xuICAgIG1heC13aWR0aDogNzBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBtYXJnaW46IC01cHggLTFweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNDElO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIC5pY29uY2FudCB7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICB9IiwiaW9uLWF2YXRhciBpb24taW1nLCBpb24tYXZhdGFyIGltZyB7XG4gIHdpZHRoOiA3NXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNzVweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDc1cHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogNzVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxJSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBoZWlnaHQ6IDE4MHB4O1xuICBtYXgtaGVpZ2h0OiAxODBweDtcbiAgbWluLWhlaWdodDogMTgwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5hZGQge1xuICBwYWRkaW5nOiAwLjhlbSAwLjllbSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgei1pbmRleDogMTAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IC0yMnB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5hbHJlYWR5IHtcbiAgcGFkZGluZzogMC44ZW0gMC45ZW0gIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzUsIDU0LCA3MiwgMC4yKSAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiYSgyMDEsIDE4LCAxOCwgMC41KTtcbiAgei1pbmRleDogMTAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IC0yMnB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJ0LWljb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMCU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbiNiYWRnZW9yZGVycyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbltuYW1lPWFkZF0ge1xuICBmb250LXNpemU6IDEuNmVtO1xufVxuXG4uYXBwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWluc2lkZWFwcCkgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGOEY4RjggIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWdyZXktdGV4dCB7XG4gIGNvbG9yOiAjOTg5YWEyICFpbXBvcnRhbnQ7XG59XG5cbi52c2VhcmNoOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi52c2VhcmNoOmhvdmVyIC5idG5zZWFyY2gge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2VhcmNoIHtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcbiAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNlYXJjaCA+IGlvbi1pbnB1dCB7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xuICBwYWRkaW5nOiAxNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogZWFzZSAwLjVzO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAtLXBhZGRpbmctc3RhcnQ6IDI1cHg7XG59XG5cbi5zZWFyY2ggPiBpb24taW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5MjkyOTI7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zZWFyY2ggPiBpb24taW5wdXQ6Oi1tcy1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTI5MjkyO1xufVxuXG4uc2VhcmNoID4gaW9uLWlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzkyOTI5Mjtcbn1cblxuLnNlYXJjaCA+IGlvbi1pbnB1dDpmb2N1cyxcbi5zZWFyY2ggPiBpb24taW5wdXQ6dmFsaWQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnF1YW50aXR5LXNlbGVjdG9yIHtcbiAgY2xlYXI6IGJvdGg7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2R1Y3QtbWludXMtYnV0dG9uLFxuLnByb2R1Y3QtcGx1cy1idXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWNmY2YxO1xuICBjb2xvcjogIzY3YzQ4YztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ucXVhbnRpdHktc2VsZWN0b3IgaW5wdXQge1xuICBtYXgtd2lkdGg6IDcwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDFlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW46IC01cHggLTFweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDElO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uaWNvbmNhbnQge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/menu/menu.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _detalleproductos_detalleproductos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../detalleproductos/detalleproductos.page */ "./src/app/pages/detalleproductos/detalleproductos.page.ts");
/* harmony import */ var _detallecupones_detallecupones_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../detallecupones/detallecupones.page */ "./src/app/pages/detallecupones/detallecupones.page.ts");
/* harmony import */ var src_app_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/filter/filter.component */ "./src/app/components/filter/filter.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_general_general_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/general/general.component */ "./src/app/components/general/general.component.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _order_order_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../order/order.page */ "./src/app/pages/order/order.page.ts");














/* import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'; */

const tipon = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tiponegocio;
let MenuPage = class MenuPage {
    constructor(afAuth, toastCtrl, crudService, modalCtrl, popoverCtrl, appc, platform, general, storage, order /*private barcodeScanner: BarcodeScanner*/) {
        this.afAuth = afAuth;
        this.toastCtrl = toastCtrl;
        this.crudService = crudService;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.appc = appc;
        this.platform = platform;
        this.general = general;
        this.storage = storage;
        this.order = order;
        // tslint:disable: triple-equals
        // tslint:disable: max-line-length
        this.tipo = 1;
        this.limC = 0;
        this.limB = 0;
        this.categoria = 0;
        this.filprecio = 0;
        this.results = 0;
        this.slideCategories = { initialSlide: 1, slidesPerView: 1, spaceBetween: 10, speed: 400, freeMode: true, pagination: false };
        this.slideMenuopt = { slidesPerView: 2, spaceBetween: 5, freeMode: true, pagination: false };
        this.slideOpts = { initialSlide: 1, slidesPerView: 1, speed: 400 };
    }
    ngOnInit() {
        console.log('usuario firebase');
        console.log(this.afAuth.auth);
        this.userid = this.afAuth.auth.currentUser.uid;
        // opcion 1
        // if ((await this.storage.getItem('impresa')).value == undefined) {
        //   this.crudService.crud({sel: 'min(id)', tbl: 39, where: 'madre_sucursales = ' + impresa}).subscribe(suc => {
        //     this.impresa = suc[0][0][0];
        //   }, err => {
        //     console.log(err);
        //   });
        // } else {
        //   this.impresa = (await this.storage.getItem('impresa')).value;
        // }
        // opcion 2
        // agarrar direccion
        this.loadResults();
    }
    // changesucursal
    // this.storage.setItem('impresa', '1');
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('ionViewWillEnter');
            this.limB = 0;
            this.limC = 0;
            // obtener id sucursal
            this.impresa = (yield this.storage.getItem('impresa')).value;
            this.crudService.crud({ sel: 'nombre', tbl: 39, where: 'id = ' + this.impresa }).subscribe(suc => {
                this.nomSuc = suc[0][0][0];
            }, err => {
                console.log(err);
            });
            this.cargarProductos(0, 1, 1, 0, '', 0, this.filprecio);
            this.cargarProductos(0, 1, 2, 0, '', 0, this.filprecio);
            this.cargarCategorias();
            this.cargarTipoprods();
            this.loadResults();
            this.cargarCupones();
            this.appc.updateOrders();
            this.appc.updateUser();
            const badge = document.getElementById('badgeorders');
            if (tipon == 2) {
                this.cargarMesa();
                document.getElementById('scanner').classList.remove('ion-hide');
                document.getElementById('gridTable').classList.remove('ion-hide');
            }
            else {
                document.getElementById('scanner').classList.add('ion-hide');
                document.getElementById('gridTable').classList.add('ion-hide');
            }
            // count ordenes
            console.log(this.userid, this.impresa);
            const data = { sel: '', tbl: 41, where: '"' + this.userid + '",' + this.impresa };
            this.crudService.crud(data).subscribe(succ => {
                console.log('suc ionViewWillEnter');
                console.log(succ);
                document.getElementById('badgeorders').innerHTML = succ[0][0][0];
            }, err => {
                console.log('err ionViewWillEnter');
                console.log(err);
            });
        });
    }
    cargarMesa() {
        const datamesa = { sel: '', tbl: 40, where: '2,0,"' + this.userid + '",' + this.impresa };
        this.crudService.crud(datamesa).subscribe(succ => {
            if (succ[0].length > 0 && succ[0][0][0] != 0) {
                this.ntable = succ[0][0][0];
                document.getElementById('gridTable').classList.remove('ion-hide');
                document.getElementById('nmesa').innerHTML = succ[0][0][1];
            }
            else {
                this.ntable = 0;
                document.getElementById('gridTable').classList.add('ion-hide');
            }
        }, (err) => {
            console.log('err');
            console.log(err);
        });
    }
    loadResults() {
        const data = { sel: '', tbl: 59, where: '' };
        this.crudService.crud(data).subscribe(succ => {
            console.log('succ');
            console.log(succ);
            this.results = succ[0][0];
        }, err => {
            console.log(err);
        });
    }
    verDetalle(vid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('id producto');
            console.log(vid);
            const modal = yield this.modalCtrl.create({
                component: _detalleproductos_detalleproductos_page__WEBPACK_IMPORTED_MODULE_6__["DetalleproductosPage"],
                componentProps: { vid, tipo: this.tipo, categoria: this.categoria, route: 'menu' }
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            console.log('Cierra modal detalle productos');
            console.log(data);
            const badge = document.getElementById('badgeorders');
            console.log(badge);
            const dataCount = { sel: '', tbl: 41, where: '"' + this.userid + '",' + this.impresa };
            this.crudService.crud(dataCount).subscribe(succ => {
                console.log('suc ionViewWillEnter');
                console.log(succ);
                badge.innerHTML = String(succ[0][0][0]);
            }, err => {
                console.log('err ionViewWillEnter');
                console.log(err);
            });
        });
    }
    verDetallecupon(vid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(vid);
            const modal = yield this.modalCtrl.create({
                component: _detallecupones_detallecupones_page__WEBPACK_IMPORTED_MODULE_7__["DetallecuponesPage"],
                componentProps: {
                    vid,
                    route: 'menu'
                }
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            console.log('Cierra modal detalle productos');
            console.log(data);
            const badge = document.getElementById('badgeorders');
            console.log(badge);
            const dataCount = { sel: '', tbl: 41, where: '"' + this.userid + '",' + this.impresa };
            this.crudService.crud(dataCount).subscribe(succ => {
                console.log('suc ionViewWillEnter');
                console.log(succ);
                badge.innerHTML = String(succ[0][0][0]);
            }, err => {
                console.log('err ionViewWillEnter');
                console.log(err);
            });
        });
    }
    buscarCategoria(vid) {
        const search = document.getElementById('search').value;
        this.categoria = vid;
        this.cargarProductos(0, 1, this.tipo, 0, search, this.categoria, this.filprecio);
    }
    cargarCategorias() {
        const data = { sel: '', tbl: 66, where: this.impresa + ',' + this.tipo };
        this.crudService.crud(data).subscribe(res => {
            console.log('res');
            console.log(res);
            this.listacategorias = res[0];
        }, err => {
            console.log('err');
            console.log(err);
        });
    }
    cargarTipoprods() {
        const data = { sel: '*', tbl: 62, where: 'id > 0 and idsucursal = ' + this.impresa };
        this.crudService.crud(data).subscribe(res => {
            console.log('res');
            console.log(res);
            this.listatipoprods = res[0];
        }, err => {
            console.log('err');
            console.log(err);
        });
    }
    sproduct() {
        const search = document.getElementById('search').value;
        console.log(search);
        this.cargarProductos(0, 1, this.tipo, 0, search, 0, this.filprecio);
    }
    onClick(vtipo) {
        console.log('tipo');
        console.log(this.tipo);
        this.tipo = vtipo;
        const search = document.getElementById('search').value;
        console.log('search');
        console.log(search);
        this.limC = 0;
        this.limB = 0;
        this.cargarProductos(0, 1, 2, 0, search, 0, this.filprecio);
        this.cargarCategorias();
        this.cargarCupones();
    }
    cargarProductos(vid, vacc, vtipo, lim, vsearch, categoria, fprecio) {
        console.log('impresa: ' + this.impresa);
        const prod = { sel: '', tbl: 7, where: vid + ',' + vtipo + ',' + lim + ',"' + vsearch + '",' +
                categoria + ',"' + this.userid + '", ' + fprecio + ',' + this.impresa };
        console.log(prod);
        this.crudService.crud(prod).subscribe(res => {
            console.log(res);
            if (vtipo == 1) {
                if (vacc == 1) {
                    this.listacomidas = res[0];
                }
                else {
                    console.log('listacomidas');
                    res[0].forEach((comidas) => {
                        console.log('comidas');
                        console.log(comidas);
                        this.listacomidas.push(comidas);
                    });
                }
            }
            else {
                if (vacc == 1) {
                    this.listabebidas = res[0];
                }
                else {
                    console.log('listabebidas');
                    res[0].forEach((bebidas) => {
                        console.log('bebidas');
                        console.log(bebidas);
                        this.listabebidas.push(bebidas);
                    });
                }
            }
        }, err => {
            console.log('error productos');
            console.log(err);
            console.log(JSON.stringify(err));
        });
    }
    loadData(event) {
        const search = document.getElementById('search').value;
        if (this.tipo == 1) {
            this.limC = this.limC + 20;
            setTimeout(() => {
                this.cargarProductos(0, 2, this.tipo, this.limC, search, 0, this.filprecio);
                event.target.complete();
            }, 500);
        }
        else {
            this.limB = this.limB + 20;
            setTimeout(() => {
                this.cargarProductos(0, 2, this.tipo, this.limB, search, 0, this.filprecio);
                event.target.complete();
            }, 500);
        }
        console.log('complete');
    }
    addToOrden(vid) {
        const datos = { sel: '', tbl: 9, where: '1,0,' + vid + ',1,"' + this.userid + '",' + this.impresa };
        this.crudService.crud(datos).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(res);
            const badge = document.getElementById('badgeorders');
            const data = { sel: '', tbl: 41, where: '"' + this.userid + '",' + this.impresa };
            this.crudService.crud(data).subscribe(succ => {
                console.log('count adToOrden');
                console.log(succ);
                badge.innerHTML = String(succ[0][0][0]);
            }, err => {
                console.log(err);
            });
            this.appc.updateOrders();
            document.getElementById('sectCant' + vid).classList.remove('ion-hide');
            document.getElementById('sectAdd' + vid).classList.add('ion-hide');
            // document.getElementById('prod' + vid).setAttribute('color', 'success');
            // document.getElementById('ico' + vid).setAttribute('name', 'checkmark');
            // document.getElementById('txt' + vid).innerHTML = 'Agregado';
        }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(err);
            this.mostrar_mensaje('No pudimos agregar este producto a tu orden, intentalo de nuevo o cierra ' +
                'la aplicación e inicia nuevamente la aplicación');
        }));
    }
    scanTable() {
        if (this.platform.is('hybrid')) {
            console.log('movil');
            /*this.barcodeScanner.scan().then(barcodeData => {
              const txtbarcode = atob(barcodeData.text);
              const txt = txtbarcode.split(',')[0];
              this.ntable = Number((barcodeData.text).split(',')[1]);
              document.getElementById('nmesa').innerHTML = txt;
              const datamesa = { sel: '', tbl: 40, where: '1 ,' + this.ntable + ',"' + this.userid + '",' + this.impresa };
              this.crudService.crud( datamesa ).subscribe(succ => {
                console.log('succ');
                console.log(succ);
              }, (err: any) => {
                console.log('err');
                console.log(err);
              });
            }).catch(err => {
              console.log('Error', err);
            });*/
        }
        else {
            console.log('web');
            document.getElementById('gridTable').classList.remove('ion-hide');
            const tag = atob('TWVzYSMxLDE=');
            const txtbarcode = tag.split(',');
            document.getElementById('nmesa').innerHTML = String(txtbarcode[0]);
            this.ntable = Number(txtbarcode[1]);
            const datamesa = { sel: '', tbl: 40, where: '1 ,' + this.ntable + ',"' + this.userid + '",' + this.impresa };
            this.crudService.crud(datamesa).subscribe(succ => {
                console.log(succ);
            }, (err) => {
                console.log(err);
            });
        }
    }
    deleteTable() {
        document.getElementById('gridTable').classList.add('ion-hide');
        const datamesa = { sel: '', tbl: 40, where: '3,0,"' + this.userid + '",' + this.impresa };
        this.crudService.crud(datamesa).subscribe(succ => {
            console.log(succ);
        }, (err) => {
            console.log(err);
        });
    }
    mostrar_mensaje(mensaje) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: mensaje,
                duration: 2000,
                position: 'bottom',
                buttons: [{
                        side: 'end',
                        text: 'Cerrar',
                        handler: () => {
                            console.log(mensaje);
                        }
                    }]
            });
            toast.present();
        });
    }
    fPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // const popover = await this.popoverCtrl.create({ component: FilterComponent, event: ev, mode: 'ios' });
            const popover = yield this.popoverCtrl.create({
                component: src_app_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_8__["FilterComponent"],
                event: ev,
                mode: 'ios'
                // translucent: true
            });
            popover.style.cssText = '--min-width: 320px; --max-width: 320px;';
            yield popover.present();
            const { data } = yield popover.onWillDismiss();
            if (data != undefined) {
                this.filprecio = data.item;
                const search = document.getElementById('search').value;
                this.cargarProductos(0, 1, this.tipo, 0, search, this.categoria, this.filprecio);
            }
        });
    }
    onKey(event) {
        console.log(event.target.value);
    }
    cargarCupones() {
        this.currentDatetime = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(new Date(), 'yyyy-MM-dd HH:mm', 'en');
        console.log('now()', this.currentDatetime);
        const cupones = { sel: '', tbl: 82, where: '"","0,10",' + this.impresa };
        this.crudService.crud(cupones).subscribe(rsult => {
            console.log('cupones', rsult);
            this.fileslength = rsult[0].length;
            if (this.fileslength == 1) {
                console.log('UN CUPON', rsult[0][0][4]);
                if (this.currentDatetime >= rsult[0][0][5] && this.currentDatetime <= rsult[0][0][6]) {
                    this.visible = 1;
                    this.idcupon = rsult[0][0][0];
                    this.file = rsult[0][0][4];
                }
                else {
                    this.visible = 0;
                    console.log('PLAZO DE CUPON VENCIDO');
                    this.general.mostrar_error('Lo sentimos, este cupón ya no se encuentra disponible!');
                }
            }
            else {
                console.log('VARIOS CUPONES', rsult[0]);
                // if (this.currentDatetime >= rsult[0][0][5] && this.currentDatetime <= rsult[0][0][6]) {
                this.visible = 1;
                this.listacupones = rsult[0];
                // } else {
                //   this.visible = 0;
                //   console.log('PLAZO DE CUPON VENCIDO');
                // }
            }
        }, err => {
            console.log('err');
            console.log(err);
        });
    }
    restoCant(vid) {
        console.log('resta');
        let resto;
        // let cantidad = Number(document.getElementsByClassName('cant' + vid).item(0).innerHTML);
        const cantidad = (document.getElementById('cant' + vid));
        if (Number(cantidad.value) != 1) {
            resto = Number(cantidad.value) - 1;
            // this.order.doCant( 2, vid, 0 );
            cantidad.value = resto;
        }
        else {
            document.getElementById('sectCant' + vid).classList.add('ion-hide');
            document.getElementById('sectAdd' + vid).classList.remove('ion-hide');
            document.getElementById('prod' + vid).setAttribute('color', 'dark');
            document.getElementById('ico' + vid).setAttribute('name', 'add');
            document.getElementById('txt' + vid).innerHTML = 'Agregar';
        }
        console.log('cantidad');
        console.log(cantidad.value);
        console.log('resto');
        console.log(resto);
    }
    plusCant(vid) {
        console.log('suma');
        let sumo;
        // this.order.doCant( 1, vid, 0 );
        const cantidad = (document.getElementById('cant' + vid));
        sumo = Number(cantidad.value) + 1;
        cantidad.value = sumo;
        this.addToOrden(vid);
        console.log('cantidad');
        console.log(cantidad.value);
        console.log('sumo');
        console.log(sumo);
    }
};
MenuPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _components_general_general_component__WEBPACK_IMPORTED_MODULE_11__["GeneralComponent"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_12__["StorageService"] },
    { type: _order_order_page__WEBPACK_IMPORTED_MODULE_13__["OrderPage"] /*private barcodeScanner: BarcodeScanner*/ }
];
MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.page.scss */ "./src/app/pages/menu/menu.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _components_general_general_component__WEBPACK_IMPORTED_MODULE_11__["GeneralComponent"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_12__["StorageService"], _order_order_page__WEBPACK_IMPORTED_MODULE_13__["OrderPage"] /*private barcodeScanner: BarcodeScanner*/])
], MenuPage);



/***/ })

}]);
//# sourceMappingURL=pages-menu-menu-module-es2015.js.map