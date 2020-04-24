import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, ToastController, ModalController, LoadingController } from '@ionic/angular';
import { ReceiptPage } from '../receipt/receipt.page';
import { FtpaymentService } from '../../services/ftpayment.service';
import { AlertPage } from '../../modals/alert/alert.page';
import { GeneralComponent } from '../../components/general/general.component';
import { environment } from '../../../environments/environment';

const impresa = environment.impresa;

@Component({
  selector: 'app-orderview',
  templateUrl: './orderview.page.html',
  styleUrls: ['./orderview.page.scss'],
})
export class OrderviewPage implements OnInit {
  // tslint:disable: triple-equals
  desde: any;
  hasta: any;
  vdesde: string;
  vhasta: string;
  listaOrdenes: any;
  userid: string;
  email: string;
  listapedidos: any;
  listadetallepedidos: any;
  loadingG: any;

  constructor( private crudService: CrudService,
               private afAuth: AngularFireAuth,
               private navCtrl: NavController,
               private toastCtrl: ToastController,
               private modalCtrl: ModalController,
               private ftp: FtpaymentService,
               private loadingCtrl: LoadingController,
               private general: GeneralComponent ) { }

  ngOnInit() {
    this.userid = this.afAuth.auth.currentUser.uid;
    this.email = this.afAuth.auth.currentUser.email;
  }

  ionViewWillEnter() {
    this.cargarPedidos();
    setTimeout(() => {
      this.loadingG.dismiss();
    }, 500);
  }

  async cargarPedidos() {
    this.loadingG = await this.loadingCtrl.create({
      message: 'Por favor espere un momento..'
    });
    await this.loadingG.present();
    console.log(this.email);
    const pedido = { sel: '', tbl: 72, where: '"' + this.userid + '",' + environment.impresa };
    this.crudService.crud( pedido ).subscribe(res => {
      console.log(res);
      this.listapedidos = res[0];
      this.listapedidos.forEach((detpedido: any) => {
        console.log('detpedido');
        console.log(detpedido);
        console.log(detpedido[0]);
        const detalle = { sel: '', tbl: 73, where: detpedido[0] };
        this.crudService.crud( detalle ).subscribe(det => {
          console.log('det');
          console.log(det);
          det[0].forEach((item: any) => {
            console.log('items');
            console.log(item);
            document.getElementById('detallepedido' + item[0]).insertAdjacentHTML('afterbegin',
              '<ion-row style="width: 100%">' +
                '<ion-col>' +
                  '<ion-chip>' +
                    '<ion-label>' + item[1] + '</ion-label>' +
                  '</ion-chip>' +
                '</ion-col>' +
                '<ion-col style="padding-top: 3%">' +
                  '<p style="font-size: 1.2em;">' + item[2] + '</p>' +
                '</ion-col>' +
                '<ion-col style="padding-top: 3%">' +
                  '<p style="font-size: 1.2em; ">CRC ' + item[3] + '</p>' +
                '</ion-col>' +
              '</ion-row>');
            console.log('for each');
            });
          }, errdet => {
            console.log('errdet');
            console.log(errdet);
            this.loadingG.dismiss();
          });
        });
      console.log('end for each');
      this.loadingG.dismiss();
      console.log('end loading');
    }, err => {
      console.log('err');
      console.log(err);
      this.loadingG.dismiss();
    });
  }

  async viewreceipt(vid: number) {
    console.log(vid);
    const modalP = await this.modalCtrl.create({
      component: ReceiptPage,
      componentProps: {
        idpago: vid,
        tipo: 1
      }
    });
    await modalP.present();
    const { data } = await modalP.onWillDismiss();
    console.log('data viewreceipt');
    console.log(data);
    if (data.tipo == 1) {
      this.navCtrl.navigateBack('/orderview');
    }
  }

  buscarOrden() {
    console.log('buscarOrden');
    console.log(this.userid);
    if (this.vdesde == undefined) {
      this.vdesde = '0000-00-00';
    }

    if (this.vhasta == undefined) {
      this.vhasta = '0000-00-00';
    }

    const data = { sel: '', tbl: 20, where: '1,"' + this.userid + '","' + this.vdesde + '","' + this.vhasta + '",0' };
    this.crudService.crud( data ).subscribe( async res => {
      console.log('res');
      console.log(res);
      if ( res[0].length > 0 ) {
        this.listaOrdenes = res[0];
        console.log(res[0]);
      } else {
        const toast = await this.toastCtrl.create({
          message: 'No se encontraron ordenes',
          duration: 2000
        });
        toast.present();
      }
    }, err => {
      console.log(err);
    });
  }

  cancel_orden(idpay: string, idorden: number, idestado: number) {
    console.log(idpay, idorden);
    const valiDate = { sel: '', tbl: 79, where: idorden };
    this.crudService.crud( valiDate ).subscribe(async vres => {
      console.log('vres' , vres);
      if (vres[0].length > 0) {
        console.log('cancelar');
        const modalP = await this.modalCtrl.create({
          component: AlertPage,
          componentProps: {
            error: 'Desea cancelar su orden?'
          },
          cssClass: 'alert-modal'
        });
        await modalP.present();
        const { data } = await modalP.onWillDismiss();
        console.log(data);
        if (data != undefined) {
          console.log('return charge');
          const loading = await this.loadingCtrl.create({
            message: 'Por favor espere un momento..'
          });
          await loading.present();
          if (idestado != 4) {
            this.crudService.crud({ sel: '', tbl: 96, where: impresa }).subscribe(sucft => {
              this.ftp.appReturnCharge(sucft[0][0][0], sucft[0][0][1], this.email, idpay).subscribe((res: any) => {
                console.log('res return charge');
                console.log(res);
                // console.log(res[0][0]);
                if (res != null) {
                  if (res.apiStatus == 'Successful') {
                    const estado = { sel: '', tbl: 30, where: idorden + ',6' };
                    this.crudService.crud( estado ).subscribe( resEstado => {
                      console.log(resEstado);
                      this.cargarPedidos();
                      loading.dismiss();
                    }, errEstado => {
                      console.log('err estado');
                      console.log(errEstado);
                      loading.dismiss();
                    });
                  } else if (res.apiStatus == 'Invalid Charge') {
                    this.general.mostrar_error('Esta orden no puede ser cancelada');
                    loading.dismiss();
                  } else {
                    this.general.mostrar_error('Tuvimos un inconveniente, favor intentelo de nuevo');
                    loading.dismiss();
                  }
                } else {
                  this.general.mostrar_error('Tuvimos un inconveniente, favor intentelo de nuevo');
                  loading.dismiss();
                }
              }, error => {
                console.log('error return charge');
                console.log(error);
                loading.dismiss();
              });
            }, err => {
              console.log('err');
              console.log(err);
            });
          } else {
            this.general.mostrar_error('Esta orden no puede ser cancelada por que ya fue enviada');
            loading.dismiss();
          }
        } else {
          this.general.mostrar_error('Tuvimos un inconveniente, favor intentelo de nuevo');
        }
      } else {
        console.log('no se puede cancelar');
        this.general.mostrar_error('Esta orden no puede ser cancelada');
      }
    }, verr => {
      console.log('verr', verr);
    });
  }

  async mostrar_orden( idpay: string ) {
    console.log('mostrar orden idpay');
    console.log(idpay);
    // this.presentModal(idpay);
    const modal = await this.modalCtrl.create({
      component: ReceiptPage,
      componentProps: {
        idpago: idpay,
        tipo: 2
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(data);
    if (data.tipo == 1) {
      this.navCtrl.navigateBack('/menu');
    } else {
      this.navCtrl.navigateBack('/orderview');
    }
  }

  async presentModal(vidpago: any) {
    const modal = await this.modalCtrl.create({
      component: ReceiptPage,
      componentProps: {
        idpago: vidpago
      }
    });
    return await modal.present();
  }

}
