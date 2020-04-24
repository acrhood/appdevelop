(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-security-security-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/security/security.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/security/security.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"gradient-header\" color=\"app\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/signin\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Reiniciar contraseña</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row class=\"ion-margin-top\">\n    <ion-col size=\"1\"></ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-label position=\"floating\">Confirmar correo</ion-label>\n        <ion-input [(ngModel)]=\"email\"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n  </ion-row>\n  <ion-row class=\"ion-margin-top\">\n    <ion-col size=\"1\"></ion-col>\n    <ion-col>\n      <ion-button class=\"btnapp\" color=\"btnapp pipe-button ion-text-capitalize\"\n        expand=\"block\"\n        (click)=\"resetPass()\">Aceptar</ion-button>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/security/security-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/security/security-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SecurityPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityPageRoutingModule", function() { return SecurityPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _security_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security.page */ "./src/app/pages/security/security.page.ts");




const routes = [
    {
        path: '',
        component: _security_page__WEBPACK_IMPORTED_MODULE_3__["SecurityPage"]
    }
];
let SecurityPageRoutingModule = class SecurityPageRoutingModule {
};
SecurityPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SecurityPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/security/security.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/security/security.module.ts ***!
  \***************************************************/
/*! exports provided: SecurityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityPageModule", function() { return SecurityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _security_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./security-routing.module */ "./src/app/pages/security/security-routing.module.ts");
/* harmony import */ var _security_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./security.page */ "./src/app/pages/security/security.page.ts");







let SecurityPageModule = class SecurityPageModule {
};
SecurityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _security_routing_module__WEBPACK_IMPORTED_MODULE_5__["SecurityPageRoutingModule"]
        ],
        declarations: [_security_page__WEBPACK_IMPORTED_MODULE_6__["SecurityPage"]]
    })
], SecurityPageModule);



/***/ }),

/***/ "./src/app/pages/security/security.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/security/security.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app {\n  background: var(--ion-color-insideapp) !important;\n  color: #F8F8F8 !important;\n}\n\n.btnapp {\n  background: var(--ion-color-btnapp) !important;\n  color: #f8f8f8;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNjZXNwZWRlcy9Eb2N1bWVudHMvYXBwcy9hcHBiYXNlX3YwLjEvc3JjL2FwcC9wYWdlcy9zZWN1cml0eS9zZWN1cml0eS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlY3VyaXR5L3NlY3VyaXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlEQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLDhDQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlY3VyaXR5L3NlY3VyaXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1pbnNpZGVhcHApICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNGOEY4RjggIWltcG9ydGFudDtcbn1cblxuLmJ0bmFwcHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYnRuYXBwKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZjhmOGY4O1xuICAgIGhlaWdodDogNTBweDtcbn0iLCIuYXBwIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWluc2lkZWFwcCkgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGOEY4RjggIWltcG9ydGFudDtcbn1cblxuLmJ0bmFwcCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1idG5hcHApICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZjhmOGY4O1xuICBoZWlnaHQ6IDUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/security/security.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/security/security.page.ts ***!
  \*************************************************/
/*! exports provided: SecurityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityPage", function() { return SecurityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");





let SecurityPage = class SecurityPage {
    constructor(toastCtrl, navCtrl, auth) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.auth = auth;
        if (firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser != null) {
            this.email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
        }
    }
    ngOnInit() { }
    resetPass() {
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().sendPasswordResetEmail(this.email.replace(/\s+/g, '')).then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Cambio de contraseña enviada a su correo',
                duration: 2000,
                position: 'top'
            });
            toast.present();
            this.auth.signOut();
            this.navCtrl.navigateBack('/signin');
        }));
    }
};
SecurityPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
SecurityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-security',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./security.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/security/security.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./security.page.scss */ "./src/app/pages/security/security.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], SecurityPage);



/***/ })

}]);
//# sourceMappingURL=pages-security-security-module-es2015.js.map