(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"z-index: 0 !important\">\n  <!-- class=\"app\" color=\"app\" -->\n  <ion-toolbar style=\"background: transparent !important; box-shadow: none !important;\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/signin\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title>Registro</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card-header align=\"center\">\n    <img src=\"../../assets/images/signup_head.svg\" width=\"45%\">\n  </ion-card-header>\n  <ion-card-content>\n    <ion-grid>\n      <ion-row>\n        <ion-title style=\"color: #636363\">Crea una cuenta!</ion-title>\n      </ion-row>\n      <ion-row>\n        <ion-col style=\"background: #F7F7F7;\" class=\"ion-margin-top ion-margin-start ion-margin-end\">\n            <!-- <ion-label position=\"floating\"></ion-label> -->\n            <ion-input clearInput #xname [(ngModel)]=\"name\" placeholder=\"Nombre completo\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col style=\"background: #F7F7F7;\" class=\"ion-margin-top ion-margin-start ion-margin-end\">\n            <!-- <ion-label position=\"floating\">Correo</ion-label> -->\n            <ion-input clearInput #xemail [(ngModel)]=\"email\" placeholder=\"Correo electrónico\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col style=\"background: #F7F7F7;\" class=\"ion-margin-top ion-margin-start ion-margin-end\">\n            <!-- <ion-label position=\"floating\">Contraseña</ion-label> -->\n            <ion-input clearInput #xpass [(ngModel)]=\"pass\" type=\"password\" placeholder=\"Contraseña\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col style=\"background: #F7F7F7;\" class=\"ion-margin-top ion-margin-start ion-margin-end\">\n            <ion-input clearInput #xphone [(ngModel)]=\"phone\" placeholder=\"Número telefónico\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col style=\"background: #F7F7F7;\" class=\"ion-margin-top ion-margin-start ion-margin-end\">\n            <ion-input type=\"number\" clearInput #xcedula [(ngModel)]=\"cedula\" placeholder=\"Cédula\"\n              [brmasker]=\"{mask: '999999999', len: 9}\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-margin-top\">\n        <ion-col class=\"ion-margin-top\">\n            <ion-button class=\"btnapp\"\n                        color=\"app\"\n                        expand=\"block\"\n                        (click)=\"registerUser()\">\n              REGISTRAR\n            </ion-button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </ion-card-content>\n</ion-content>\n<ion-footer class=\"ion-padding\" style=\"font-size: 0.8em;\">\n  <ion-row>\n    <ion-col size=\"1\">\n      <ion-checkbox (click)=\"addValue( $event )\" style=\"margin-top: 12.5px\" checked color=\"dark\"></ion-checkbox>\n    </ion-col>\n    <ion-col>\n      <ion-label [routerLink]=\"['/terminosycondiciones']\">Acepto de manera expresa e informada los Términos & Condiciones y la Política de Tratamiento de Datos Personales de PIPE Costa Rica.</ion-label>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/signup/signup-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/pages/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! br-mask */ "./node_modules/br-mask/dist/index.js");








let SignupPageModule = class SignupPageModule {
};
SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"],
            br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app {\n  background: var(--ion-color-insideapp) !important;\n  color: #F8F8F8 !important;\n}\n\n.btnapp {\n  background: var(--ion-color-btnapp) !important;\n  color: #f8f8f8;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNjZXNwZWRlcy9Eb2N1bWVudHMvYXBwcy9hcHBiYXNlX3YwLjEvc3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpREFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSw4Q0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1pbnNpZGVhcHApICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNGOEY4RjggIWltcG9ydGFudDtcbn1cblxuLmJ0bmFwcHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYnRuYXBwKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZjhmOGY4O1xuICAgIGhlaWdodDogNTBweDtcbn0iLCIuYXBwIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWluc2lkZWFwcCkgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGOEY4RjggIWltcG9ydGFudDtcbn1cblxuLmJ0bmFwcCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1idG5hcHApICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZjhmOGY4O1xuICBoZWlnaHQ6IDUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/signup/signup.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_general_general_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/general/general.component */ "./src/app/components/general/general.component.ts");
/* harmony import */ var _services_ftpayment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/ftpayment.service */ "./src/app/services/ftpayment.service.ts");









const impresa = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].impresa;
let SignupPage = class SignupPage {
    constructor(loadingCtrl, navCtrl, authService, afAuth, crudService, general, fts) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.afAuth = afAuth;
        this.crudService = crudService;
        this.general = general;
        this.fts = fts;
        this.isChecked = false;
        this.errsystem = { sel: '', tbl: 80, where: '' };
    }
    ngOnInit() { }
    registerUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.name, this.email, this.pass, this.phone, this.cedula);
            console.log('validando');
            const valCreateUSer = this.validateRegister();
            console.log(valCreateUSer);
            const loading = yield this.loadingCtrl.create({
                message: 'Creando usuario..',
                duration: 2000
            });
            yield loading.present();
            if (valCreateUSer == false) {
                console.log('creando usuario');
                this.crudService.crud({ sel: '', tbl: 96, where: impresa }).subscribe(sucft => {
                    this.fts.createUser(sucft[0][0][0], this.email, this.email, this.email, this.pass + '$', this.email.replace(/\s+/g, ''), this.phone)
                        .subscribe((succ) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        console.log('succ api');
                        console.log(JSON.stringify(succ));
                        console.log(succ);
                        if (succ != null) {
                            switch (succ.apiStatus) {
                                case 'DuplicateUserName':
                                    loading.dismiss();
                                    this.general.mostrar_error('Este usuario ya había sido creado anteriormente');
                                    break;
                                case 'Invalid Mail Format':
                                    loading.dismiss();
                                    this.general.mostrar_error('Formato del correo introducido es inválido. (Ej: nombre@gmail.com)');
                                    break;
                                case 'InvalidPassword':
                                    loading.dismiss();
                                    this.general.mostrar_error('La contraseña debe tener mínimo 8 caracteres. Obligatorio debe' +
                                        'contener letras, números y caracteres especiales como $, &, @, /, _, ., (, ), ‘, -');
                                    break;
                                case 'Invalid Phone Format':
                                    loading.dismiss();
                                    this.general.mostrar_error('Formato de teléfono inválido');
                                    break;
                                case 'Success':
                                    this.authService.signUpWithEmail(this.email.replace(/\s+/g, ''), this.pass + '$').then(res => {
                                        console.log(res);
                                        loading.dismiss();
                                        this.phone = this.phone == undefined ? '' : this.phone;
                                        this.cedula = this.cedula == undefined ? 0 : this.cedula;
                                        this.userid = res.user.uid;
                                        const data = { sel: '', tbl: 6, where: '1,0,"' + this.name + '","' + this.email + '","' + this.pass +
                                                '$",' + impresa + ',"' + this.phone + '","' + this.userid + '",' + this.cedula + ',2' };
                                        this.crudService.crud(data).subscribe(result => {
                                            console.log('result database');
                                            console.log(result);
                                            this.afAuth.auth.currentUser.updateProfile({
                                                displayName: this.name
                                            }).then(ready => {
                                                console.log('ready');
                                                console.log(ready);
                                                console.log(res.additionalUserInfo.isNewUser);
                                                loading.dismiss();
                                                if (res.additionalUserInfo.isNewUser == true) {
                                                    console.log('go session');
                                                    this.navCtrl.navigateBack('/sessionstatus');
                                                }
                                            }).catch(noready => {
                                                console.log('noready');
                                                console.log(noready);
                                            });
                                        }, error => {
                                            console.log(error);
                                        });
                                    }).catch((error) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                        console.log(error);
                                        console.log(error.code);
                                        if (error.code == 'auth/invalid-email') {
                                            loading.dismiss();
                                            this.general.mostrar_error('Correo inválido');
                                        }
                                        else if (error.code == 'auth/weak-password') {
                                            loading.dismiss();
                                            this.general.mostrar_error('Contraseña inválida');
                                        }
                                        else if (error.code == 'auth/email-already-in-use') {
                                            loading.dismiss();
                                            this.general.mostrar_error('Este usuario ya ha sido registrado');
                                        }
                                        else {
                                            this.errsystem.where = '0,"' + error.code + '","' + this.email + '",' + JSON.stringify(error);
                                            this.crudService.crud(this.errsystem).subscribe(res => {
                                                loading.dismiss();
                                                console.log(res);
                                            }, err => {
                                                loading.dismiss();
                                                console.log(err);
                                            });
                                        }
                                    }));
                                    break;
                                default:
                                    this.errsystem.where = '0,"' + succ.apiStatus + '","' + this.email + '",' + JSON.stringify(succ);
                                    this.crudService.crud(this.errsystem).subscribe(res => {
                                        loading.dismiss();
                                        console.log(res);
                                    }, err => {
                                        loading.dismiss();
                                        console.log(err);
                                    });
                                    break;
                            }
                        }
                        else {
                            loading.dismiss();
                            this.general.mostrar_error('Tuvimos un inconveniente para registrar este usuario, por favor intentelo de nuevo');
                        }
                    }), (err) => {
                        console.log(err);
                        if (err.status == 0) {
                            loading.dismiss();
                            this.general.mostrar_error('No hay internet');
                        }
                        else {
                            loading.dismiss();
                            this.general.mostrar_error('');
                        }
                    });
                }, err => {
                    console.log('err');
                    console.log(err);
                });
            }
            else {
                loading.dismiss();
                this.general.mostrar_error(String(valCreateUSer));
            }
        });
    }
    validateRegister() {
        if (this.name == undefined || this.name == '') {
            this.xname.setFocus();
            return 'Nombre requerido';
        }
        if (this.email == undefined || this.email == '') {
            this.xemail.setFocus();
            return 'Correo requerido';
        }
        if (this.pass == undefined || this.pass == '') {
            this.xpass.setFocus();
            return 'Contraseña requerido';
        }
        if (this.phone == undefined || this.phone == '') {
            this.xphone.setFocus();
            return 'Teléfono requerido';
        }
        // if (this.cedula == undefined) {
        //   this.xphone.setFocus();
        //   return 'Cédula requerida';
        // }
        if (String(this.cedula).length > 0 && String(this.cedula).length < 9) {
            this.xcedula.setFocus();
            return 'La cédula debe contener mínimo 9 dígitos';
        }
        if (this.isChecked == true) {
            return 'Debe aceptar los Términos & Condiciones y Políticas de Privacidad';
        }
        return false;
    }
    addValue(e) {
        this.isChecked = e.currentTarget.checked;
        console.log('isChecked', this.isChecked);
    }
};
SignupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] },
    { type: _components_general_general_component__WEBPACK_IMPORTED_MODULE_7__["GeneralComponent"] },
    { type: _services_ftpayment_service__WEBPACK_IMPORTED_MODULE_8__["FtpaymentService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('xname', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SignupPage.prototype, "xname", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('xemail', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SignupPage.prototype, "xemail", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('xpass', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SignupPage.prototype, "xpass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('xphone', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SignupPage.prototype, "xphone", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('xcedula', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SignupPage.prototype, "xcedula", void 0);
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/signup/signup.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
        _services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"],
        _components_general_general_component__WEBPACK_IMPORTED_MODULE_7__["GeneralComponent"],
        _services_ftpayment_service__WEBPACK_IMPORTED_MODULE_8__["FtpaymentService"]])
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module-es2015.js.map