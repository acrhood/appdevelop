import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { ModalController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../../../environments/environment';
import { OrderPage } from '../order/order.page';
const impresa = environment.impresa;

@Component({
  selector: 'app-detalleproductos',
  templateUrl: './detalleproductos.page.html',
  styleUrls: ['./detalleproductos.page.scss'],
})
export class DetalleproductosPage implements OnInit {
  // tslint:disable: triple-equals
  @Input() vid: number;
  @Input() route: any;

  file: any;
  nombre: any;
  descr: any;
  precio: any;
  favorito: any;
  isfav: number;
  userid: string;
  cant: any;
  idprod: any;
  listaimgs: any;
  fileslength: any;
  fileext: any;

  constructor( private crudService: CrudService,
               private modalCtrl: ModalController,
               private afAuth: AngularFireAuth,
               private toastCtrl: ToastController,
               private order: OrderPage ) { }

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 1,
    spaceBetween: 10
  };

  ngOnInit() {
    this.userid = this.afAuth.auth.currentUser.uid;
    this.cargarInfo();
    this.cargarFiles();
  }

  cargarInfo() {
    console.log('cargarInfo', this.vid + ',' + impresa + ',"' + this.userid + '"');
    const data = { sel: '', tbl: 93, where: this.vid + ',' + impresa + ',"' + this.userid + '"' };
    let producto: any = '';
    this.crudService.crud( data ).subscribe(res => {
      console.log('res', res);
      producto = res[0];
      console.log('[0][0]', producto[0][0]);
      console.log('[0][1]', producto[0][1]);
      console.log('[0][2]', producto[0][2]);
      console.log('[0][3]', producto[0][3]);
      console.log('[0][4]', producto[0][4]);
      this.idprod = producto[0][0];
      this.nombre = producto[0][1];
      this.descr = producto[0][2];
      this.precio = producto[0][3];
      // this.file = producto[0][4];
      this.isfav = producto[0][4];
    }, err => {
      console.log(err);
    });
  }

  cargarFiles() {
    const data = { sel: 'url, SUBSTRING(url, -3, 3)', tbl: 2, where: 'idproducto = ' +  this.vid + ' and id > 0' };
    this.crudService.crud( data ).subscribe(res => {
      console.log(res);
      this.fileslength = res[0].length;
      if (this.fileslength == 1) {
        this.file = res[0][0][0];
        this.fileext = res[0][0][1];
        // console.log('UNA', res[0][0][0]);
      } else {
        this.listaimgs = res[0];
        // console.log('VARIAS', res[0]);
      }
    }, err => {
    console.log(err);
    });
  }

  setfavorito() {
    console.log('this.vid, this.userid');
    console.log(this.vid, this.userid);
    const data = { sel: '', tbl: 58, where: this.vid + ',"' + this.userid + '"' };
    this.crudService.crud( data ).subscribe(res => {
      console.log(res);
      this.cargarInfo();
    }, err => {
      console.log(err);
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }


  restoCant() {
    console.log('resta');
    const cantidad = (document.getElementById('cant')) as HTMLInputElement;
    if ( Number(cantidad.value) != 1 ) {
      this.cant = Number(cantidad.value) - 1;
      cantidad.value = this.cant;
    }
    console.log('cantidad');
    console.log(cantidad.value);
    console.log('cant resto');
    console.log(this.cant);
  }

  plusCant() {
    console.log('suma');
    const cantidad = (document.getElementById('cant')) as HTMLInputElement;
    this.cant = Number(cantidad.value) + 1;
    cantidad.value = this.cant;
    console.log('cantidad');
    console.log(cantidad.value);
    console.log('cant sumo');
    console.log(this.cant);
  }

  inputCant() {
    console.log('input');
    const cantidad = (document.getElementById('cant')) as HTMLInputElement;
    this.cant = Number(cantidad.value);
    cantidad.value = this.cant;
    console.log('cantidad');
    console.log(cantidad.value);
    console.log('cant input');
    console.log(this.cant);
  }

  addToOrden( vidprod: any ) {
    this.userid = this.afAuth.auth.currentUser.uid;
    const idusuario = this.userid;
    const idproducto: string = vidprod;
    const cantidad = (document.getElementById('cant')) as HTMLInputElement;
    console.log('addToOrden');
    console.log('1,0,' + idproducto + ',' + cantidad.value + ',"' + idusuario + '",' + impresa);
    const datos = { sel: '', tbl: 9, where: '1,0,' + idproducto + ',' + cantidad.value + ',"' + idusuario + '",' + impresa };
    this.crudService.crud( datos ).subscribe(async res => {
      console.log( res );
      this.mostrar_mensaje('Agregado a la orden');
      this.order.countordenes();
    }, async err => {
      console.log( err );
      this.mostrar_mensaje( err );
    });
  }

  async mostrar_mensaje( mensaje: any ) {
    const toast = await this.toastCtrl.create({
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
  }

}
