(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-payment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"gradient-header\" color=\"app\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/orderoptions\"></ion-back-button>\n    </ion-buttons>\n    <ion-title slot=\"end\">Realizar pago</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <h6>Detalle del compra</h6>\n    <ion-card-content style=\"background: #f7f7f7;\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">\n            Productos (<span id=\"cantprod\">{{ nproducto }}</span>):\n          </ion-col>\n          <ion-col size=\"6\" align=\"right\">\n            ₡ {{ subtotal }}\n          </ion-col>\n          <ion-col size=\"6\">\n            Envío y manejo:\n          </ion-col>\n          <ion-col size=\"6\" align=\"right\">\n            ₡ {{ flete }}\n          </ion-col>\n          <ion-col size=\"6\">\n            Subtotal:\n          </ion-col>\n          <ion-col size=\"6\" align=\"right\">\n            ₡ {{ fpaymentAmount }}\n          </ion-col>\n          <ion-col size=\"6\">\n            <b style=\"font-size: 18px;\">Total del pedido:</b>\n          </ion-col>\n          <ion-col size=\"6\" align=\"right\">\n            <b style=\"font-size: 18px;\" color=\"app\">₡ {{ fpaymentAmount }}</b>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n\n    <ion-card-content>\n      <ion-grid>\n        <ion-row align=\"center\">\n          <ion-col>\n            <section>\n              <div>\n                <img (click)=\"selectOptdelivery( $event )\" id=\"express\" src=\"../../../assets/icon/express_.svg\" alt=\"Express\" width=55%>\n              </div>\n              <label class=\"optexpress active\">Express</label>\n            </section>\n          </ion-col>\n          <ion-col>\n            <section>\n              <div>\n                <img (click)=\"selectOptdelivery( $event )\" id=\"recoge\" src=\"../../../assets/icon/recoge_.svg\" alt=\"Recoger\" width=50%>\n              </div>\n              <label class=\"optrecoge\">Recoger</label>\n            </section>\n          </ion-col>\n          <ion-col id=\"served\">\n            <section>\n              <div>\n                <img (click)=\"selectOptdelivery( $event )\" id=\"servido\" src=\"../../../assets/icon/recoge_.svg\" alt=\"Recoger\" width=50%>\n              </div>\n              <label class=\"optservido\">Servido</label>\n            </section>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n\n    <div id=\"direcciones\">\n      <h6>Dirección de envío</h6>\n      <ion-card-content style=\"background: #f7f7f7;\" (click)=\"showDirections()\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"11\">\n              <b id=\"direccion\"></b>\n              <p id=\"otrassenas\"></p> \n            </ion-col>\n            <ion-col size=\"1\">\n              <ion-icon name=\"arrow-dropright\" style=\"margin-top: 13px; font-size: 18px;\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </div>\n\n      <h6>Información de pago</h6>\n      <ion-card-content id=\"infopago\" style=\"background: #f7f7f7; display: none;\">\n        <ion-grid>\n          <ion-row align=\"center\">\n            <ion-col>\n              <section>\n                <div>\n                  <img (click)=\"changeinfopago( $event )\" id=\"efectivo\" src=\"../../../assets/icon/efectivo.svg\" width=\"50%\" alt=\"Efectivo\">\n                </div>\n                <label class=\"optefectivo active\">Efectivo</label>\n              </section>\n            </ion-col>\n            <ion-col>\n              <section>\n                <div>\n                  <img (click)=\"changeinfopago( $event )\" id=\"tarjeta\" src=\"../../../assets/icon/tarjeta.svg\" width=\"50%\" alt=\"tarjeta\">\n                </div>\n                <label class=\"opttarjeta\">Tarjeta</label>\n              </section>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n\n      <ion-card-content id=\"tarjetas\" style=\"background: #f7f7f7;\" (click)=\"showCards()\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"11\">\n              <p id=\"infoCard\"></p>\n            </ion-col>\n            <ion-col size=\"1\">\n              <ion-icon name=\"arrow-dropright\" style=\"font-size: 18px;\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n      \n      <ion-row class=\"ion-margin-top\">\n        <ion-col class=\"ion-margin-top\">\n          <ion-button class=\"btnapp\"\n                      (click)=\"doPay()\"\n                      color=\"app pipe-button ion-text-capitalize\"\n                      expand=\"block\"\n                      id=\"payment\">\n            Realizar pago\n          </ion-button>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/payment/payment-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/payment/payment-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function() { return PaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment.page */ "./src/app/pages/payment/payment.page.ts");




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/payment/payment.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.module.ts ***!
  \*************************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-routing.module */ "./src/app/pages/payment/payment-routing.module.ts");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.page */ "./src/app/pages/payment/payment.page.ts");







let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentPageRoutingModule"]
        ],
        declarations: [
            _payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]
        ],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
        ]
    })
], PaymentPageModule);



/***/ }),

/***/ "./src/app/pages/payment/payment.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app {\n  background: var(--ion-color-insideapp) !important;\n  color: #F8F8F8 !important;\n}\n\n.btnapp {\n  background: var(--ion-color-app) !important;\n  color: #f8f8f8;\n  height: 50px;\n}\n\nlabel.active {\n  background: var(--ion-color-app) !important;\n  color: #fff;\n  padding: 1.8%;\n  border-radius: 0.2em;\n}\n\n.divOpt {\n  border-radius: 2.5em;\n  background: #f7f7f7;\n  height: 55px;\n  width: 55px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNjZXNwZWRlcy9Eb2N1bWVudHMvYXBwcy9hcHBiYXNlX3YwLjEvc3JjL2FwcC9wYWdlcy9wYXltZW50L3BheW1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYXltZW50L3BheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaURBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksMkNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksMkNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXltZW50L3BheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWluc2lkZWFwcCkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI0Y4RjhGOCAhaW1wb3J0YW50O1xufVxuXG4uYnRuYXBwe1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1hcHApICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmOGY4Zjg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG5sYWJlbC5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1hcHApICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMS44JTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbn1cblxuLmRpdk9wdCB7XG4gICAgYm9yZGVyLXJhZGl1czogMi41ZW07XG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgd2lkdGg6IDU1cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59IiwiLmFwcCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1pbnNpZGVhcHApICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRjhGOEY4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5hcHAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYXBwKSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2Y4ZjhmODtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG5sYWJlbC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYXBwKSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMS44JTtcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XG59XG5cbi5kaXZPcHQge1xuICBib3JkZXItcmFkaXVzOiAyLjVlbTtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgaGVpZ2h0OiA1NXB4O1xuICB3aWR0aDogNTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/payment/payment.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/payment/payment.page.ts ***!
  \***********************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _receipt_receipt_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../receipt/receipt.page */ "./src/app/pages/receipt/receipt.page.ts");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _services_ftpayment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/ftpayment.service */ "./src/app/services/ftpayment.service.ts");
/* harmony import */ var _components_general_general_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/general/general.component */ "./src/app/components/general/general.component.ts");
/* harmony import */ var _modals_modal_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modals/modal/modal.page */ "./src/app/modals/modal/modal.page.ts");
/* harmony import */ var _modals_modalcard_modalcard_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../modals/modalcard/modalcard.page */ "./src/app/modals/modalcard/modalcard.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");












const impresa = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].impresa;
const tipon = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].tiponegocio;
let PaymentPage = class PaymentPage {
    constructor(afAuth, crudService, navCtrl, fts, modalCtrl, afauth, general, loadingCtrl, datepipe) {
        this.afAuth = afAuth;
        this.crudService = crudService;
        this.navCtrl = navCtrl;
        this.fts = fts;
        this.modalCtrl = modalCtrl;
        this.afauth = afauth;
        this.general = general;
        this.loadingCtrl = loadingCtrl;
        this.datepipe = datepipe;
        this.currency = 'CRC';
        this.currencyIcon = '$';
        this.tipoenvio = 'express';
        this.infopago = 0;
        this.today = new Date();
        this.days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        this.errsystem = { sel: '', tbl: 80, where: '' };
    }
    ngOnInit() {
        this.userid = this.afAuth.auth.currentUser.uid;
        this.nametoday = this.days[new Date().getDay()];
        this.getinfoHorario();
        this.getinfoFeriados();
        if (tipon == 2) {
            document.getElementById('served').classList.remove('ion-hide');
        }
        else {
            document.getElementById('served').classList.add('ion-hide');
        }
    }
    ionViewWillEnter() {
        console.log('userid: ', this.userid);
        const data = { sel: '', tbl: 22, where: '"' + this.userid + '",' + impresa };
        this.crudService.crud(data).subscribe(res => {
            console.log('res');
            console.log(JSON.stringify(res));
            this.fpaymentAmount = res[0][0][0];
            this.paymentAmount = Number(res[0][0][1]);
            this.idorden = res[0][0][2];
            this.subtotal = res[0][0][3];
            this.flete = res[0][0][4];
            this.nproducto = res[0][0][5];
            this.chsub = res[0][0][3];
            this.chtot = res[0][0][0];
            this.chfle = res[0][0][4];
            console.log(this.fpaymentAmount);
            console.log(this.paymentAmount);
            console.log(this.flete);
            this.showDefaultCard();
            if (this.flete != '0.00') {
                this.showDefaultDirection();
            }
            else {
                document.getElementById('direccion').innerHTML = 'No hay direcciones registradas';
            }
        }, err => {
            console.log(err);
        });
    }
    getinfoHorario() {
        console.log('SUBSTRING_INDEX(' + this.nametoday + ', "/",1), SUBSTRING_INDEX(' + this.nametoday + ', "/",-1)');
        const horario = { sel: 'SUBSTRING_INDEX(' + this.nametoday + ', "/",1), SUBSTRING_INDEX(' + this.nametoday + ', "/",-1)',
            tbl: 77,
            where: 'idsucursal = ' + impresa };
        this.crudService.crud(horario).subscribe(rsult => {
            console.log('horario', rsult[0][0]);
            this.aperture = rsult[0][0][0];
            this.clousure = rsult[0][0][1];
        }, err => {
            console.log('err');
            console.log(err);
        });
    }
    getinfoFeriados() {
        const date = new Date();
        console.log('date', date);
        this.datetoday = this.datepipe.transform(date, 'yyyy/MM/dd');
        const feriado = { sel: '',
            tbl: 75,
            where: impresa + ',"' + this.datetoday + '"' };
        this.crudService.crud(feriado).subscribe(rsult => {
            console.log('feriado', rsult[0][0]);
            this.feriado = rsult[0][0];
        }, err => {
            console.log('err');
            console.log(err);
        });
    }
    doPay() {
        // this.bodyXML.returnXML(this.userid, this.medioPago);
        const verifyemail = this.afAuth.auth.currentUser.emailVerified;
        console.log(verifyemail);
        if (this.infopago == 0 || this.infopago == 2) {
            this.medioPago = '02';
        }
        else {
            this.medioPago = '01';
        }
        // console.log('today:', this.nametoday);
        // console.log('aperture:', this.aperture);
        // console.log('clousure:', this.clousure);
        // const date = new Date();
        // this.currentTime = date.getHours() + ':' + date.getMinutes();
        // console.log('currentTime', this.currentTime);
        // if (!verifyemail) {
        //   this.general.mostrar_error('El correo no ha sido verificado, favor revise su correo para verificar el correo de este usuario');
        // } else {
        // if  ( this.currentTime >= this.aperture && this.currentTime <= this.clousure) {
        this.crudService.crud({ sel: '', tbl: 8, where: '"' + this.afAuth.auth.currentUser.uid + '"' })
            .subscribe((session) => {
            if (session[0][0][4] == '') {
                this.general.mostrar_alert('Debes de confirmar tu número de teléfono antes de continuar con el pago');
                this.navCtrl.navigateBack('/infouser');
            }
            else {
                this.afauth.user.subscribe((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    console.log(result.email);
                    this.loadingG = yield this.loadingCtrl.create({
                        message: 'Por favor espere mientras realizamos su pago..'
                    });
                    yield this.loadingG.present();
                    console.log('resuser');
                    console.log('verified password');
                    console.log(result.email);
                    this.ftcard = this.cardTid;
                    console.log('ftcard');
                    console.log(this.ftcard);
                    console.log('validar direcciones y tarjetas');
                    console.log(this.cardTid, this.iddireccion, this.infopago);
                    /* incluir cargos si no hay */
                    // infopago =  0 express 1 efectivo 2 tarjeta
                    if (this.infopago == 0 || this.infopago == 2) {
                        this.idenvio = this.iddireccion;
                        this.total = Number(this.fpaymentAmount.replace(/\,/g, ''));
                        if (this.cardTid == undefined || this.iddireccion == undefined) {
                            this.general.mostrar_error('Es necesario una direccion y una tarjeta para continuar');
                            this.loadingG.dismiss();
                        }
                        else {
                            this.chargeFT(result.email);
                        }
                    }
                    else {
                        this.idenvio = 0;
                        this.idcard = 0;
                        this.total = Number(String(this.subtotal).replace(/\,/g, ''));
                        this.makePayment('', 'Recoger', this.total);
                    }
                    console.log('fin');
                }), err => {
                    console.log(err);
                });
            }
        });
        console.log('SI');
        // } else {
        //     console.log('NO');
        //     this.general.mostrar_error('Lo sentimos, no podemos procesar su solicitud porque estamos fuera del horario laboral');
        // }
        // }
        return false;
    }
    chargeFT(email) {
        this.crudService.crud({ sel: '', tbl: 96, where: impresa }).subscribe(sucft => {
            this.fts.appIncludeCharge(sucft[0][0][0], sucft[0][0][1], email, 'Comercio: Los Pira', this.currency, this.paymentAmount)
                .subscribe((chargeIncluded) => {
                console.log('chargeIncluded');
                console.log(chargeIncluded);
                // apply charge
                if (chargeIncluded != null) {
                    this.ftcharge = chargeIncluded.chargeTokenId;
                    this.fts.appApplyCharge(sucft[0][0][0], sucft[0][0][1], email, this.ftcharge, this.ftcard).subscribe((pago) => {
                        console.log('pago');
                        console.log(pago);
                        if (pago != null) {
                            if (pago.apiStatus == 'Successful') {
                                console.log('Pago realizado exitosamente');
                                /* registrar pago en base de datos y redireccionar a la vista de la factura */
                                const idpay = pago.systemTrace;
                                const estado = pago.isApproved;
                                console.log(idpay, estado);
                                // infopago =  0 express 1 efectivo 2 tarjeta
                                if (this.infopago == 0 || this.infopago == 2) {
                                    this.idenvio = this.iddireccion;
                                    this.makePayment(idpay, estado, this.total);
                                }
                                else {
                                    this.idenvio = 0;
                                    this.makePayment('', 'Recoger', this.total);
                                }
                            }
                            else if (pago.apiStatus == 'Declined') {
                                this.fts.appDeleteCharge(sucft[0][0][0], sucft[0][0][1], email, this.ftcharge).subscribe(chargeDeleted => {
                                    console.log('chargeDeleted');
                                    console.log(chargeDeleted);
                                }, errDeleted => {
                                    console.log(errDeleted);
                                });
                                this.loadingG.dismiss();
                                this.general.mostrar_error('Tuvimos un error al procesar su pago. Intente con otro método de pago');
                            }
                            else {
                                console.log('error con el pago');
                                this.errsystem.where = '0,"' + pago.apiStatus + '","' + email + '",' + JSON.stringify(pago);
                                this.crudService.crud(this.errsystem).subscribe(res => {
                                    this.loadingG.dismiss();
                                    console.log(res);
                                }, err => {
                                    this.loadingG.dismiss();
                                    console.log(err);
                                });
                                this.general.mostrar_error('Tuvimos un error al procesar su pago. Intentelo de nuevo');
                            }
                        }
                        else {
                            this.loadingG.dismiss();
                            this.general.mostrar_error('Tuvimos un error al procesar su pago. Intente con otro método de pago');
                        }
                    }, err => {
                        console.log('error pago');
                        console.log(err);
                    });
                }
                else {
                    this.loadingG.dismiss();
                    this.general.mostrar_error('Tuvimos un inconveniente con su pago, favor intentelo de nuevo');
                }
            }, err => {
                console.log(err);
            });
        }, err => {
            console.log('err');
            console.log(err);
        });
    }
    makePayment(idpay, estado, total) {
        console.log('makePayment');
        console.log(this.ftcharge, this.idorden);
        this.ftcharge = this.ftcharge == undefined ? '' : this.ftcharge;
        const makepayment = { sel: '', tbl: 18, where: '1,0,' + this.idorden + ',"' + idpay + '","' + this.userid + '",1,"'
                + estado + '",' + total + ',' + this.idenvio + ',' + this.idcard + ',' + this.infopago + ',"' + this.ftcharge + '"' };
        console.log('1,0,' + this.idorden + ',"' + idpay + '","' + this.userid + '",1,"'
            + estado + '",' + total + ',' + this.idenvio + ',' + this.idcard + ',' + this.infopago + ',"' + this.ftcharge + '"');
        this.crudService.crud(makepayment).subscribe((resultpayment) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('result payment');
            console.log(JSON.stringify(resultpayment));
            console.log(resultpayment[0][0][0]);
            console.log('mostrar orden idpay');
            console.log(idpay);
            this.loadingG.dismiss();
            if (idpay == '') {
                idpay = resultpayment[0][0][0];
            }
            const modalP = yield this.modalCtrl.create({
                component: _receipt_receipt_page__WEBPACK_IMPORTED_MODULE_5__["ReceiptPage"],
                componentProps: {
                    idpago: idpay,
                    tipo: 1
                }
            });
            yield modalP.present();
            const { data } = yield modalP.onWillDismiss();
            console.log(data);
            if (data.tipo == 1) {
                this.navCtrl.navigateBack('/menu');
            }
            else {
                this.navCtrl.navigateBack('/orderview');
            }
        }), err => {
            this.loadingG.dismiss();
            console.log('err');
            console.log(err);
        });
    }
    changeinfopago(event) {
        // infopago =  0 express 1 efectivo 2 tarjeta
        const vtype = event.target.id;
        console.log('type');
        console.log(vtype);
        if (vtype == 'efectivo') {
            this.infopago = 1;
            document.querySelector('.opttarjeta').classList.remove('active');
            document.querySelector('.optefectivo').classList.add('active');
            const tarjetas = document.getElementById('tarjetas');
            tarjetas.style.display = 'none';
        }
        else {
            this.infopago = 2;
            document.querySelector('.opttarjeta').classList.add('active');
            document.querySelector('.optefectivo').classList.remove('active');
            const tarjetas = document.getElementById('tarjetas');
            tarjetas.style.display = 'block';
        }
    }
    showDefaultDirection() {
        console.log('showDefaultDirection');
        console.log(this.userid);
        const data = { sel: '', tbl: 53, where: '"' + this.userid + '"' };
        this.crudService.crud(data).subscribe(res => {
            console.log('default direccion');
            console.log(res);
            if (res[0].length > 0) {
                console.log('default res');
                console.log(res);
                console.log(res[0][0][0]);
                this.iddireccion = res[0][0][0];
                document.getElementById('direccion').innerHTML = res[0][0][1];
                document.getElementById('otrassenas').innerHTML = res[0][0][2];
                // infopago =  0 express 1 efectivo 2 tarjeta
                this.infopago = 0;
            }
            else {
                document.getElementById('direccion').innerHTML = 'No hay direcciones registradas';
            }
        }, err => {
            console.log(err);
        });
    }
    showDefaultCard() {
        console.log(this.userid);
        const data = { sel: '', tbl: 52, where: '"' + this.userid + '"' };
        this.crudService.crud(data).subscribe(res => {
            console.log('default tarjeta');
            console.log(res);
            if (res[0].length > 0) {
                this.cardTid = res[0][0][1];
                this.idcard = res[0][0][5];
                console.log(this.cardTid);
                document.getElementById('infoCard').innerHTML = res[0][0][2] + ' que termina en ' + res[0][0][0];
                this.infopago = 0;
            }
            else {
                document.getElementById('infoCard').innerHTML = 'No hay tarjetas registradas';
            }
        }, err => {
            console.log(err);
        });
    }
    presentModal(vid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _receipt_receipt_page__WEBPACK_IMPORTED_MODULE_5__["ReceiptPage"],
                componentProps: {
                    idpago: vid
                }
            });
            return yield modal.present();
        });
    }
    goback() {
        this.navCtrl.navigateBack('/user');
    }
    showDirections() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modals_modal_modal_page__WEBPACK_IMPORTED_MODULE_9__["ModalPage"],
                cssClass: 'modal-modal'
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            this.iddireccion = data.viddirection;
            const datadir = { sel: '', tbl: 17, where: this.iddireccion };
            console.log(datadir);
            this.crudService.crud(datadir).subscribe(res => {
                console.log(res);
                document.getElementById('direccion').innerHTML = res[0][0][1];
                document.getElementById('otrassenas').innerHTML = res[0][0][2];
                const dataTotExpress = { sel: '', tbl: 50, where: '"' + this.userid + '",' + this.iddireccion + ',' + impresa };
                this.crudService.crud(dataTotExpress).subscribe(exp => {
                    console.log(exp);
                    this.fpaymentAmount = exp[0][0][0];
                    this.paymentAmount = Number(exp[0][0][1]);
                    this.subtotal = exp[0][0][3];
                    this.flete = exp[0][0][4];
                }, errexp => {
                    console.log(errexp);
                });
            }, err => {
                console.log(err);
            });
        });
    }
    selectOptdelivery(event) {
        const vtype = event.target.id;
        this.tipoenvio = vtype;
        console.log('type');
        console.log(vtype);
        if (vtype == 'express') {
            document.querySelector('.optrecoge').classList.remove('active');
            document.querySelector('.optservido').classList.remove('active');
            document.querySelector('.optexpress').classList.add('active');
            this.fpaymentAmount = this.chtot;
            console.log('total');
            console.log(this.fpaymentAmount);
            console.log(Number(this.fpaymentAmount.replace(/\,/g, '')));
            this.flete = this.chfle;
            this.subtotal = this.chsub;
            const direcciones = document.getElementById('direcciones');
            const tarjetas = document.getElementById('tarjetas');
            const infopago = document.getElementById('infopago');
            direcciones.style.display = 'block';
            tarjetas.style.display = 'block';
            infopago.style.display = 'none';
            this.infopago = 0;
        }
        else if (vtype == 'servido') {
            document.querySelector('.optservido').classList.add('active');
            document.querySelector('.optrecoge').classList.remove('active');
            document.querySelector('.optexpress').classList.remove('active');
            document.querySelector('.opttarjeta').classList.remove('active');
            document.querySelector('.optefectivo').classList.add('active');
            this.fpaymentAmount = this.chsub;
            this.flete = '0.00';
            this.subtotal = this.chsub;
            const direcciones = document.getElementById('direcciones');
            const tarjetas = document.getElementById('tarjetas');
            const infopago = document.getElementById('infopago');
            direcciones.style.display = 'none';
            tarjetas.style.display = 'none';
            infopago.style.display = 'block';
            this.infopago = 1;
        }
        else {
            document.querySelector('.optrecoge').classList.add('active');
            document.querySelector('.optexpress').classList.remove('active');
            document.querySelector('.opttarjeta').classList.remove('active');
            document.querySelector('.optefectivo').classList.add('active');
            this.fpaymentAmount = this.chsub;
            console.log('subtotal');
            console.log(String(this.subtotal).replace(/\,/g, ''));
            this.flete = '0.00';
            this.subtotal = this.chsub;
            const direcciones = document.getElementById('direcciones');
            const tarjetas = document.getElementById('tarjetas');
            const infopago = document.getElementById('infopago');
            direcciones.style.display = 'none';
            tarjetas.style.display = 'none';
            infopago.style.display = 'block';
            this.infopago = 1;
        }
    }
    haveDirections(vaccion) {
        const express = { sel: '', tbl: 21, where: vaccion + ',"' + this.userid + '"' };
        this.crudService.crud(express).subscribe(res => {
            console.log('haveDirections');
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    showCards() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modals_modalcard_modalcard_page__WEBPACK_IMPORTED_MODULE_10__["ModalcardPage"],
                cssClass: 'modal-modal'
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            console.log(data);
            if (data != undefined) {
                this.idcard = data.idcard;
                this.cardTid = data.cardTokenId;
                console.log('this.idcard, this.cardTid');
                console.log(this.idcard, this.cardTid);
                const datadir = { sel: '', tbl: 54, where: this.idcard };
                this.crudService.crud(datadir).subscribe(res => {
                    console.log(res);
                    document.getElementById('infoCard').innerHTML = res[0][0][2] + ' que termina en ' + res[0][0][1];
                }, err => {
                    console.log(err);
                });
            }
        });
    }
};
PaymentPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_ftpayment_service__WEBPACK_IMPORTED_MODULE_7__["FtpaymentService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _components_general_general_component__WEBPACK_IMPORTED_MODULE_8__["GeneralComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Map', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], PaymentPage.prototype, "mapElement", void 0);
PaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment.page.scss */ "./src/app/pages/payment/payment.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
        _services_crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _services_ftpayment_service__WEBPACK_IMPORTED_MODULE_7__["FtpaymentService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
        _components_general_general_component__WEBPACK_IMPORTED_MODULE_8__["GeneralComponent"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]])
], PaymentPage);



/***/ })

}]);
//# sourceMappingURL=pages-payment-payment-module-es2015.js.map