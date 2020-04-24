(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"gradient-header\" color=\"app\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <img src=\"../../../assets/icon/menuicon.svg\" style=\"width: 80%; margin: 0 auto\">\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title [routerLink]=\"['/menu']\">\n      Appexpress\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"color: #7C7C7C;\">\n  <ion-grid class=\"ion-padding ion-margin-top\">\n    <ion-row>\n      <h3>Configuración</h3>\n    </ion-row>\n    <ion-row class=\"ion-padding ion-margin-top\" style=\"background: #f7f7f7;\" [routerLink]=\"['/infouser']\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"information-circle-outline\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-label>Mis Datos</ion-label>\n        <ion-icon *ngIf=\"!platform.is('ios')\" name=\"arrow-forward\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-padding ion-margin-top\" style=\"background: #f7f7f7;\" [routerLink]=\"['/security']\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"lock-closed-outline\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-label>Seguridad</ion-label>\n        <ion-icon *ngIf=\"!platform.is('ios')\" name=\"arrow-forward\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-padding ion-margin-top\" style=\"background: #f7f7f7;\" [routerLink]=\"['/settings']\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"options\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-label>Ajustes</ion-label>\n        <ion-icon *ngIf=\"!platform.is('ios')\" name=\"arrow-forward\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-padding ion-margin-top ion-hide\" style=\"background: #f7f7f7;\" [routerLink]=\"['/reports']\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"stats\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"10\" id=\"reports\">\n        <ion-label>Reportes</ion-label>\n        <ion-icon *ngIf=\"!platform.is('ios')\" name=\"arrow-forward\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-grid class=\"ion-padding ion-margin-top\">\n    <ion-row style=\"background: #f7f7f7;\">\n      <ion-col size=\"8\" class=\"ion-margin-left\">\n        <label class=\"name-text\" style=\"display: block; margin-top: 5px;\">{{ nameusr }}</label>\n        <label class=\"mail-text\" style=\"display: block\">{{ mailusr }}</label>\n      </ion-col>\n      <ion-col size=\"4\" (click)=\"logout()\" class=\"ion-text-center\">\n        <p>Cerrar Sesión</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/user/user-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/user/user-routing.module.ts ***!
  \***************************************************/
/*! exports provided: UserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageRoutingModule", function() { return UserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.page */ "./src/app/pages/user/user.page.ts");




const routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_3__["UserPage"]
    }
];
let UserPageRoutingModule = class UserPageRoutingModule {
};
UserPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/user/user.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.module.ts ***!
  \*******************************************/
/*! exports provided: UserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/pages/user/user-routing.module.ts");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.page */ "./src/app/pages/user/user.page.ts");







let UserPageModule = class UserPageModule {
};
UserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserPageRoutingModule"]
        ],
        declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]]
    })
], UserPageModule);



/***/ }),

/***/ "./src/app/pages/user/user.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app {\n  background-color: var(--ion-color-insideapp) !important;\n  color: #F8F8F8 !important;\n}\n\n.name-text {\n  margin-left: 20px !important;\n}\n\n.mail-text {\n  color: rgba(0, 0, 0, 0.5);\n  margin-left: 20px !important;\n}\n\n.cart-icon {\n  position: fixed;\n}\n\n#badgeorders {\n  color: white !important;\n  background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNjZXNwZWRlcy9Eb2N1bWVudHMvYXBwcy9hcHBiYXNlX3YwLjEvc3JjL2FwcC9wYWdlcy91c2VyL3VzZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy91c2VyL3VzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdURBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0Esa0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItaW5zaWRlYXBwKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjRjhGOEY4ICFpbXBvcnRhbnQ7XG59XG5cbi5uYW1lLXRleHQge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYWlsLXRleHQge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmNhcnQtaWNvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4jYmFkZ2VvcmRlcnMge1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59IiwiLmFwcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1pbnNpZGVhcHApICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRjhGOEY4ICFpbXBvcnRhbnQ7XG59XG5cbi5uYW1lLXRleHQge1xuICBtYXJnaW4tbGVmdDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ubWFpbC10ZXh0IHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmNhcnQtaWNvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuI2JhZGdlb3JkZXJzIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/user/user.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/user/user.page.ts ***!
  \*****************************************/
/*! exports provided: UserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPage", function() { return UserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);






let UserPage = class UserPage {
    constructor(crudService, navCtrl, platform, authService) {
        this.crudService = crudService;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.authService = authService;
        firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().onAuthStateChanged((user) => {
            if (user) {
                console.log(user.uid);
                const data = { sel: '', tbl: 8, where: '"' + user.uid + '"' };
                this.crudService.crud(data).subscribe(res => {
                    console.log(res);
                    this.nameusr = res[0][0][1];
                    this.tipoUser = res[0][0][2];
                    this.mailusr = res[0][0][3];
                    const reportes = document.getElementById('reports');
                    console.log(res[0][0][2]);
                    if (res[0][0][2] == 1) {
                        reportes.classList.remove('ion-hide');
                    }
                    else {
                        reportes.classList.add('ion-hide');
                    }
                }, err => {
                    console.log(err);
                });
            }
        });
    }
    ngOnInit() { }
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('Logout');
            this.authService.signOut().then((res) => {
                console.log(res);
                this.navCtrl.navigateBack('/signin');
                if (this.platform.is('hybrid')) {
                    console.log('storage');
                }
            });
        });
    }
};
UserPage.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
UserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.page.scss */ "./src/app/pages/user/user.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], UserPage);



/***/ })

}]);
//# sourceMappingURL=pages-user-user-module-es2015.js.map