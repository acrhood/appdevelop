(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sessionstatus-sessionstatus-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sessionstatus/sessionstatus.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sessionstatus/sessionstatus.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/sessionstatus/sessionstatus-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/sessionstatus/sessionstatus-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SessionstatusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionstatusPageRoutingModule", function() { return SessionstatusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sessionstatus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sessionstatus.page */ "./src/app/pages/sessionstatus/sessionstatus.page.ts");




const routes = [
    {
        path: '',
        component: _sessionstatus_page__WEBPACK_IMPORTED_MODULE_3__["SessionstatusPage"]
    }
];
let SessionstatusPageRoutingModule = class SessionstatusPageRoutingModule {
};
SessionstatusPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SessionstatusPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/sessionstatus/sessionstatus.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/sessionstatus/sessionstatus.module.ts ***!
  \*************************************************************/
/*! exports provided: SessionstatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionstatusPageModule", function() { return SessionstatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sessionstatus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sessionstatus-routing.module */ "./src/app/pages/sessionstatus/sessionstatus-routing.module.ts");
/* harmony import */ var _sessionstatus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sessionstatus.page */ "./src/app/pages/sessionstatus/sessionstatus.page.ts");







let SessionstatusPageModule = class SessionstatusPageModule {
};
SessionstatusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sessionstatus_routing_module__WEBPACK_IMPORTED_MODULE_5__["SessionstatusPageRoutingModule"]
        ],
        declarations: [_sessionstatus_page__WEBPACK_IMPORTED_MODULE_6__["SessionstatusPage"]]
    })
], SessionstatusPageModule);



/***/ }),

/***/ "./src/app/pages/sessionstatus/sessionstatus.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/sessionstatus/sessionstatus.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nlc3Npb25zdGF0dXMvc2Vzc2lvbnN0YXR1cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/sessionstatus/sessionstatus.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/sessionstatus/sessionstatus.page.ts ***!
  \***********************************************************/
/*! exports provided: SessionstatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionstatusPage", function() { return SessionstatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_general_general_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/general/general.component */ "./src/app/components/general/general.component.ts");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");








const tipon = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tiponegocio;
let SessionstatusPage = class SessionstatusPage {
    constructor(navCtrl, afAuth, crudService, general, appc) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.crudService = crudService;
        this.general = general;
        this.appc = appc;
    }
    ngOnInit() {
        this.afAuth.user.subscribe(res => {
            console.log('res');
            console.log(res);
            if (res != null) {
                console.log(res.uid);
                const data = { sel: 'idtipo', tbl: 5, where: 'uid = "' + res.uid + '"' };
                this.crudService.crud(data).subscribe(tipo => {
                    console.log('tipo');
                    console.log(tipo);
                    if (tipo[0][0][0] == 2 || tipo[0][0][0] == 1) {
                        const tiposuc = { sel: 'idtiponegocio', tbl: 39, where: 'idtiponegocio = ' + tipon };
                        this.crudService.crud(tiposuc).subscribe(succ => {
                            console.log('succ tiposuc');
                            console.log(succ);
                            if (succ[0][0][0] == 1) {
                                this.appc.updateUser();
                                this.navCtrl.navigateBack('/menu');
                            }
                            else if (succ[0][0][0] == 3) {
                                this.navCtrl.navigateBack('/tabsrestaurant/restaurant');
                            }
                        }, err => {
                            console.log('error');
                            console.log(err);
                        });
                    }
                    else {
                        this.navCtrl.navigateBack('/signin');
                        this.general.mostrar_error('Este usuario no existe en la aplicación');
                    }
                }, err => {
                    console.log(err);
                });
            }
            else {
                this.navCtrl.navigateBack('/signin');
            }
        });
    }
};
SessionstatusPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] },
    { type: _components_general_general_component__WEBPACK_IMPORTED_MODULE_6__["GeneralComponent"] },
    { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logSectionBtn1', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], SessionstatusPage.prototype, "logsectionbtn1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logSectionBtn2', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], SessionstatusPage.prototype, "logsectionbtn2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logSectionBtn3', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], SessionstatusPage.prototype, "logsectionbtn3", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataLog', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], SessionstatusPage.prototype, "datalog", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('btnLoginMail', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], SessionstatusPage.prototype, "btnloginmail", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('smSocialMediaBtns', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], SessionstatusPage.prototype, "smsocialmediabtns", void 0);
SessionstatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sessionstatus',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sessionstatus.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sessionstatus/sessionstatus.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sessionstatus.page.scss */ "./src/app/pages/sessionstatus/sessionstatus.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        _services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"], _components_general_general_component__WEBPACK_IMPORTED_MODULE_6__["GeneralComponent"],
        src_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]])
], SessionstatusPage);



/***/ })

}]);
//# sourceMappingURL=pages-sessionstatus-sessionstatus-module-es2015.js.map