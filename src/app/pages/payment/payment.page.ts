import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LoadingController, NavController, ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { ReceiptPage } from '../receipt/receipt.page';
import { CrudService } from '../../services/crud.service';
import { FtpaymentService } from '../../services/ftpayment.service';
import { GeneralComponent } from '../../components/general/general.component';
import { ModalPage } from '../../modals/modal/modal.page';
import { ModalcardPage } from '../../modals/modalcard/modalcard.page';
import { DatePipe } from '@angular/common';
const impresa = environment.impresa;
const tipon = environment.tiponegocio;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  // tslint:disable: max-line-length
  // tslint:disable: triple-equals
  paymentAmount: number; fpaymentAmount: string;
  currency = 'CRC'; currencyIcon = '$';
  userid: string; idorden: number;
  flete: string; subtotal: number;
  nproducto: any; totDolar: any; total: number;
  ftcharge: any; ftcard: any; loadingG: any;
  iddireccion: number; tipoenvio = 'express';
  idenvio: number; cardTid: string; idcard: number;
  chsub: any; chtot: any; chfle: any; infopago = 0;
  @ViewChild('Map', {static: false}) mapElement: ElementRef;
  jstoday: any; today = new Date(); strXML: string; medioPago: string;
  nametoday: any;
  days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  aperture: any; clousure: any; currentTime: any; datetoday: any; feriado: any;
  errsystem = { sel: '', tbl: 80, where: '' };

  constructor( private afAuth: AngularFireAuth,
               private crudService: CrudService,
               private navCtrl: NavController,
               private fts: FtpaymentService,
               private modalCtrl: ModalController,
               private afauth: AngularFireAuth,
               private general: GeneralComponent,
               private loadingCtrl: LoadingController,
               private datepipe: DatePipe ) { }

  ngOnInit() {
    this.userid = this.afAuth.auth.currentUser.uid;
    this.nametoday = this.days[new Date().getDay()];
    this.getinfoHorario();
    this.getinfoFeriados();
    if (tipon == 2) {
      document.getElementById('served').classList.remove('ion-hide');
    } else {
      document.getElementById('served').classList.add('ion-hide');
    }
  }

  ionViewWillEnter() {
    console.log('userid: ', this.userid);
    const data = { sel: '', tbl: 22, where: '"' + this.userid + '",' + impresa };
    this.crudService.crud( data ).subscribe(res => {
      console.log('res');
      console.log( JSON.stringify(res) ) ;
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
      } else {
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
    this.crudService.crud( horario ).subscribe( rsult => {
      console.log('horario', rsult[0][0]);
      this.aperture = rsult[0][0][0];
      this.clousure = rsult[0][0][1];
    }, err => {
      console.log('err');
      console.log( err );
    });
  }

  getinfoFeriados() {
    const date = new Date();
    console.log('date', date);
    this.datetoday = this.datepipe.transform(date, 'yyyy/MM/dd');
    const feriado = { sel: '',
                      tbl: 75,
                      where: impresa + ',"' + this.datetoday + '"' };
    this.crudService.crud( feriado ).subscribe( rsult => {
      console.log('feriado', rsult[0][0]);
      this.feriado = rsult[0][0];
    }, err => {
      console.log('err');
      console.log( err );
    });
  }

  doPay() {
    // this.bodyXML.returnXML(this.userid, this.medioPago);
    const verifyemail = this.afAuth.auth.currentUser.emailVerified;
    console.log(verifyemail);
    if (this.infopago == 0 || this.infopago == 2) {
      this.medioPago = '02';
    } else {
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
    .subscribe((session: any) => {
      if (session[0][0][4] == '') {
        this.general.mostrar_alert('Debes de confirmar tu número de teléfono antes de continuar con el pago');
        this.navCtrl.navigateBack('/infouser');
      } else {
        this.afauth.user.subscribe(async result => {
          console.log(result.email);
          this.loadingG = await this.loadingCtrl.create({
            message: 'Por favor espere mientras realizamos su pago..'
          });
          await this.loadingG.present();
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
            } else {
              this.chargeFT(result.email);
            }
          } else {
            this.idenvio = 0;
            this.idcard = 0;
            this.total = Number(String(this.subtotal).replace(/\,/g, ''));
            this.makePayment('', 'Recoger', this.total);
          }
          console.log('fin');
        }, err => {
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

  chargeFT(email: string) {
    this.crudService.crud({ sel: '', tbl: 96, where: impresa }).subscribe(sucft => {
      this.fts.appIncludeCharge(sucft[0][0][0], sucft[0][0][1], email, 'Comercio: Los Pira', this.currency, this.paymentAmount)
        .subscribe((chargeIncluded: any) => {
            console.log('chargeIncluded');
            console.log(chargeIncluded);
            // apply charge
            if (chargeIncluded != null) {
              this.ftcharge = chargeIncluded.chargeTokenId;
              this.fts.appApplyCharge(sucft[0][0][0], sucft[0][0][1], email, this.ftcharge, this.ftcard).subscribe((pago: any) => {
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
                    } else {
                      this.idenvio = 0;
                      this.makePayment('', 'Recoger', this.total);
                    }
                  } else if (pago.apiStatus == 'Declined') {
                    this.fts.appDeleteCharge(sucft[0][0][0], sucft[0][0][1], email, this.ftcharge).subscribe(chargeDeleted => {
                      console.log('chargeDeleted');
                      console.log(chargeDeleted);
                    }, errDeleted => {
                      console.log(errDeleted);
                    });
                    this.loadingG.dismiss();
                    this.general.mostrar_error('Tuvimos un error al procesar su pago. Intente con otro método de pago');
                  } else {
                    console.log('error con el pago');
                    this.errsystem.where = '0,"' + pago.apiStatus + '","' +  email + '",' + JSON.stringify(pago);
                    this.crudService.crud(this.errsystem).subscribe(res => {
                      this.loadingG.dismiss();
                      console.log(res);
                    }, err => {
                      this.loadingG.dismiss();
                      console.log(err);
                    });
                    this.general.mostrar_error('Tuvimos un error al procesar su pago. Intentelo de nuevo');
                  }
                } else {
                  this.loadingG.dismiss();
                  this.general.mostrar_error('Tuvimos un error al procesar su pago. Intente con otro método de pago');
                }
              }, err => {
                console.log('error pago');
                console.log(err);
              });
            } else {
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

  makePayment(idpay: string, estado: string, total: number) {
    console.log('makePayment');
    console.log(this.ftcharge, this.idorden);
    this.ftcharge = this.ftcharge == undefined ? '' : this.ftcharge;
    const makepayment = { sel: '', tbl: 18, where: '1,0,' + this.idorden + ',"' + idpay + '","' + this.userid + '",1,"'
    + estado + '",' + total + ',' + this.idenvio + ',' + this.idcard + ',' + this.infopago + ',"' + this.ftcharge + '"' };
    console.log('1,0,' + this.idorden + ',"' + idpay + '","' + this.userid + '",1,"'
    + estado + '",' + total + ',' + this.idenvio + ',' + this.idcard + ',' + this.infopago + ',"' + this.ftcharge + '"');
    this.crudService.crud( makepayment ).subscribe(async resultpayment => {
      console.log('result payment');
      console.log( JSON.stringify(resultpayment) );
      console.log(resultpayment[0][0][0]);
      console.log('mostrar orden idpay');
      console.log(idpay);
      this.loadingG.dismiss();
      if (idpay == '') {
        idpay = resultpayment[0][0][0];
      }
      const modalP = await this.modalCtrl.create({
        component: ReceiptPage,
        componentProps: {
          idpago: idpay,
          tipo: 1
        }
      });
      await modalP.present();
      const { data } = await modalP.onWillDismiss();
      console.log(data);
      if (data.tipo == 1) {
        this.navCtrl.navigateBack('/menu');
      } else {
        this.navCtrl.navigateBack('/orderview');
      }
    }, err => {
      this.loadingG.dismiss();
      console.log('err');
      console.log( err );
    });
  }

  changeinfopago( event: any ) {
    // infopago =  0 express 1 efectivo 2 tarjeta
    const vtype: any = event.target.id;
    console.log('type');
    console.log(vtype);

    if (vtype == 'efectivo') {
      this.infopago = 1;
      document.querySelector('.opttarjeta').classList.remove('active');
      document.querySelector('.optefectivo').classList.add('active');
      const tarjetas = document.getElementById('tarjetas') as HTMLInputElement;
      tarjetas.style.display = 'none';
    } else {
      this.infopago = 2;
      document.querySelector('.opttarjeta').classList.add('active');
      document.querySelector('.optefectivo').classList.remove('active');
      const tarjetas = document.getElementById('tarjetas') as HTMLInputElement;
      tarjetas.style.display = 'block';
    }
  }

  showDefaultDirection() {
    console.log('showDefaultDirection');
    console.log(this.userid);
    const data = { sel: '', tbl: 53, where: '"' + this.userid + '"' };
    this.crudService.crud( data ).subscribe(res => {
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
      } else {
        document.getElementById('direccion').innerHTML = 'No hay direcciones registradas';
      }
    }, err => {
      console.log(err);
    });
  }

  showDefaultCard() {
    console.log(this.userid);
    const data = { sel: '', tbl: 52, where: '"' + this.userid + '"' };
    this.crudService.crud( data ).subscribe(res => {
      console.log('default tarjeta');
      console.log(res);
      if (res[0].length > 0) {
        this.cardTid = res[0][0][1];
        this.idcard = res[0][0][5];
        console.log(this.cardTid);
        document.getElementById('infoCard').innerHTML = res[0][0][2] + ' que termina en ' + res[0][0][0];
        this.infopago = 0;
      } else {
        document.getElementById('infoCard').innerHTML = 'No hay tarjetas registradas';
      }
    }, err => {
      console.log(err);
    });
  }

  async presentModal(vid: string) {
    const modal = await this.modalCtrl.create({
      component: ReceiptPage,
      componentProps: {
        idpago: vid
      }
    });
    return await modal.present();
  }

  goback() {
    this.navCtrl.navigateBack('/user');
  }

  async showDirections() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      cssClass: 'modal-modal'
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.iddireccion = data.viddirection;
    const datadir = { sel: '', tbl: 17, where: this.iddireccion };
    console.log(datadir);
    this.crudService.crud( datadir ).subscribe(res => {
      console.log(res);
      document.getElementById('direccion').innerHTML = res[0][0][1];
      document.getElementById('otrassenas').innerHTML = res[0][0][2];
      const dataTotExpress = { sel: '', tbl: 50, where: '"' + this.userid + '",' + this.iddireccion + ',' + impresa };
      this.crudService.crud( dataTotExpress ).subscribe(exp => {
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
  }

  selectOptdelivery( event: any ) {
    const vtype: any = event.target.id;
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
      const direcciones = document.getElementById('direcciones') as HTMLInputElement;
      const tarjetas = document.getElementById('tarjetas') as HTMLInputElement;
      const infopago = document.getElementById('infopago') as HTMLInputElement;
      direcciones.style.display = 'block';
      tarjetas.style.display = 'block';
      infopago.style.display = 'none';
      this.infopago = 0;
    } else if (vtype == 'servido') {
      document.querySelector('.optservido').classList.add('active');
      document.querySelector('.optrecoge').classList.remove('active');
      document.querySelector('.optexpress').classList.remove('active');
      document.querySelector('.opttarjeta').classList.remove('active');
      document.querySelector('.optefectivo').classList.add('active');
      this.fpaymentAmount = this.chsub;
      this.flete = '0.00';
      this.subtotal = this.chsub;
      const direcciones = document.getElementById('direcciones') as HTMLInputElement;
      const tarjetas = document.getElementById('tarjetas') as HTMLInputElement;
      const infopago = document.getElementById('infopago') as HTMLInputElement;
      direcciones.style.display = 'none';
      tarjetas.style.display = 'none';
      infopago.style.display = 'block';
      this.infopago = 1;
    } else {
      document.querySelector('.optrecoge').classList.add('active');
      document.querySelector('.optexpress').classList.remove('active');
      document.querySelector('.opttarjeta').classList.remove('active');
      document.querySelector('.optefectivo').classList.add('active');
      this.fpaymentAmount = this.chsub;
      console.log('subtotal');
      console.log(String(this.subtotal).replace(/\,/g, ''));
      this.flete = '0.00';
      this.subtotal = this.chsub;
      const direcciones = document.getElementById('direcciones') as HTMLInputElement;
      const tarjetas = document.getElementById('tarjetas') as HTMLInputElement;
      const infopago = document.getElementById('infopago') as HTMLInputElement;
      direcciones.style.display = 'none';
      tarjetas.style.display = 'none';
      infopago.style.display = 'block';
      this.infopago = 1;
    }
  }

  haveDirections( vaccion: number ) {
    const express = { sel: '', tbl: 21, where: vaccion + ',"' + this.userid + '"' };
    this.crudService.crud( express ).subscribe(res => {
      console.log( 'haveDirections' );
      console.log( res );
    }, err => {
      console.log( err );
    });
  }

  async showCards() {
    const modal = await this.modalCtrl.create({
      component: ModalcardPage,
      cssClass: 'modal-modal'
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(data);
    if (data != undefined) {
      this.idcard = data.idcard;
      this.cardTid = data.cardTokenId;
      console.log('this.idcard, this.cardTid');
      console.log(this.idcard, this.cardTid);
      const datadir = { sel: '', tbl: 54, where: this.idcard };
      this.crudService.crud( datadir ).subscribe(res => {
        console.log(res);
        document.getElementById('infoCard').innerHTML = res[0][0][2] + ' que termina en ' + res[0][0][1];
      }, err => {
        console.log(err);
      });
    }
  }

}
