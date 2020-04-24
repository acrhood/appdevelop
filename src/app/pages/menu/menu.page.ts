import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController, ModalController, Platform } from '@ionic/angular';
import { CrudService } from '../../services/crud.service';
import { environment } from '../../../environments/environment';
import { DetalleproductosPage } from '../detalleproductos/detalleproductos.page';
import { DetallecuponesPage } from '../detallecupones/detallecupones.page';
import { PopoverController } from '@ionic/angular';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { AppComponent } from '../../app.component';
import { formatDate } from '@angular/common';
import { GeneralComponent } from '../../components/general/general.component';
import { StorageService } from '../../services/storage.service';
/* import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'; */
import { OrderPage } from '../order/order.page';
const tipon = environment.tiponegocio;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  // tslint:disable: triple-equals
  // tslint:disable: max-line-length
  tipo: any = 1;
  producto: string;
  userid: string;
  tipoUser: number;
  listacomidas: any;
  listabebidas: any;
  listacategorias: any;
  listatipoprods: any;
  listacupones: any;
  fileslength: any;
  file: any;
  idcupon: any;
  limC = 0;
  limB = 0;
  sprod: any;
  categoria = 0;
  filprecio = 0;
  results = 0;
  ntable: number;
  appname: string;
  currentDatetime: any;
  visible: number;
  impresa: string;
  nomSuc: string;

  constructor( private afAuth: AngularFireAuth, private toastCtrl: ToastController,
               private crudService: CrudService, private modalCtrl: ModalController,
               public popoverCtrl: PopoverController, public appc: AppComponent,
               private platform: Platform, private general: GeneralComponent,
               private storage: StorageService, private order: OrderPage /*private barcodeScanner: BarcodeScanner*/ ) { }

  slideCategories = { initialSlide: 1, slidesPerView: 1, spaceBetween: 10, speed: 400, freeMode: true, pagination: false };
  slideMenuopt = { slidesPerView: 2, spaceBetween: 5, freeMode: true, pagination: false };
  slideOpts = { initialSlide: 1, slidesPerView: 1, speed: 400 };

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

  async ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.limB = 0;
    this.limC = 0;
    // obtener id sucursal
    this.impresa = (await this.storage.getItem('impresa')).value;
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
    } else {
      document.getElementById('scanner').classList.add('ion-hide');
      document.getElementById('gridTable').classList.add('ion-hide');
    }

    // count ordenes
    console.log(this.userid, this.impresa);
    const data = { sel: '', tbl: 41, where: '"' + this.userid + '",' + this.impresa };
    this.crudService.crud( data ).subscribe(succ => {
      console.log('suc ionViewWillEnter');
      console.log(succ);
      document.getElementById('badgeorders').innerHTML = succ[0][0][0];
    }, err => {
      console.log('err ionViewWillEnter');
      console.log(err);
    });
  }

  cargarMesa() {
    const datamesa = { sel: '', tbl: 40, where: '2,0,"' + this.userid + '",' + this.impresa };
    this.crudService.crud( datamesa ).subscribe(succ => {
      if (succ[0].length > 0 && succ[0][0][0] != 0) {
        this.ntable = succ[0][0][0];
        document.getElementById('gridTable').classList.remove('ion-hide');
        document.getElementById('nmesa').innerHTML = succ[0][0][1];
      } else {
        this.ntable = 0;
        document.getElementById('gridTable').classList.add('ion-hide');
      }
    }, (err: any) => {
      console.log('err');
      console.log(err);
    });
  }

  loadResults() {
    const data = { sel: '', tbl: 59, where: '' };
    this.crudService.crud( data ).subscribe(succ => {
      console.log('succ');
      console.log(succ);
      this.results = succ[0][0];
    }, err => {
      console.log(err);
    });
  }

  async verDetalle(vid: number) {
    console.log('id producto');
    console.log(vid);
    const modal = await this.modalCtrl.create({
      component: DetalleproductosPage,
      componentProps: { vid, tipo: this.tipo, categoria: this.categoria, route: 'menu' }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log('Cierra modal detalle productos');
    console.log(data);
    const badge = document.getElementById('badgeorders');
    console.log(badge);
    const dataCount = { sel: '', tbl: 41, where: '"' + this.userid + '",' + this.impresa };
    this.crudService.crud( dataCount ).subscribe(succ => {
      console.log('suc ionViewWillEnter');
      console.log(succ);
      badge.innerHTML = String(succ[0][0][0]);
    }, err => {
      console.log('err ionViewWillEnter');
      console.log(err);
    });
  }

  async verDetallecupon(vid: number) {
    console.log(vid);
    const modal = await this.modalCtrl.create({
      component: DetallecuponesPage,
      componentProps: {
        vid,
        route: 'menu'
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log('Cierra modal detalle productos');
    console.log(data);
    const badge = document.getElementById('badgeorders');
    console.log(badge);
    const dataCount = { sel: '', tbl: 41, where: '"' + this.userid + '",' + this.impresa };
    this.crudService.crud( dataCount ).subscribe(succ => {
      console.log('suc ionViewWillEnter');
      console.log(succ);
      badge.innerHTML = String(succ[0][0][0]);
    }, err => {
      console.log('err ionViewWillEnter');
      console.log(err);
    });
  }

  buscarCategoria(vid: number) {
    const search = (document.getElementById('search') as HTMLInputElement).value;
    this.categoria = vid;
    this.cargarProductos(0, 1, this.tipo, 0, search, this.categoria, this.filprecio);
  }

  cargarCategorias() {
    const data = { sel: '', tbl: 66, where: this.impresa + ',' + this.tipo };
    this.crudService.crud( data ).subscribe(res => {
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
    this.crudService.crud( data ).subscribe(res => {
      console.log('res');
      console.log(res);
      this.listatipoprods = res[0];
    }, err => {
      console.log('err');
      console.log(err);
    });
  }

  sproduct() {
    const search = (document.getElementById('search') as HTMLInputElement).value;
    console.log(search);
    this.cargarProductos(0, 1, this.tipo, 0, search, 0, this.filprecio);
  }

  onClick( vtipo: any ) {
    console.log('tipo');
    console.log(this.tipo);
    this.tipo = vtipo;
    const search = (document.getElementById('search') as HTMLInputElement).value;
    console.log('search');
    console.log(search);
    this.limC = 0;
    this.limB = 0;
    this.cargarProductos(0, 1, 2, 0, search, 0, this.filprecio);
    this.cargarCategorias();
    this.cargarCupones();
  }

  cargarProductos(vid: number, vacc: number, vtipo: number, lim: number, vsearch: string, categoria: number, fprecio: number) {
    console.log('impresa: ' + this.impresa);
    const prod = { sel: '', tbl: 7, where: vid + ',' + vtipo + ',' + lim + ',"' + vsearch + '",' +
    categoria + ',"' + this.userid + '", ' + fprecio + ',' + this.impresa };
    console.log(prod);
    this.crudService.crud( prod ).subscribe( res => {
      console.log(res);
      if (vtipo == 1) {
        if (vacc == 1) {
          this.listacomidas = res[0];
        } else {
          console.log('listacomidas');
          res[0].forEach((comidas: any) => {
            console.log('comidas');
            console.log(comidas);
            this.listacomidas.push(comidas);
          });
        }
      } else {
        if (vacc == 1) {
          this.listabebidas = res[0];
        } else {
          console.log('listabebidas');
          res[0].forEach((bebidas: any) => {
            console.log('bebidas');
            console.log(bebidas);
            this.listabebidas.push(bebidas);
          });
        }
      }
    }, err => {
      console.log('error productos');
      console.log( err );
      console.log( JSON.stringify(err) );
    });
  }

  loadData(event: any) {
    const search = (document.getElementById('search') as HTMLInputElement).value;
    if ( this.tipo == 1 ) {
      this.limC = this.limC + 20;
      setTimeout(() => {
        this.cargarProductos(0, 2, this.tipo, this.limC, search, 0, this.filprecio);
        event.target.complete();
      }, 500);
    } else {
      this.limB = this.limB + 20;
      setTimeout(() => {
        this.cargarProductos(0, 2, this.tipo, this.limB, search, 0, this.filprecio);
        event.target.complete();
      }, 500);
    }
    console.log('complete');
  }

  addToOrden(vid: number) {
    const datos = { sel: '', tbl: 9, where: '1,0,' + vid + ',1,"' + this.userid + '",' + this.impresa };
    this.crudService.crud( datos ).subscribe( async res => {
      console.log( res );
      const badge = document.getElementById('badgeorders');
      const data = { sel: '', tbl: 41, where: '"' + this.userid + '",' + this.impresa };
      this.crudService.crud( data ).subscribe(succ => {
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
    }, async err => {
      console.log( err );
      this.mostrar_mensaje('No pudimos agregar este producto a tu orden, intentalo de nuevo o cierra ' +
      'la aplicación e inicia nuevamente la aplicación');
    });
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
    } else {
      console.log('web');
      document.getElementById('gridTable').classList.remove('ion-hide');
      const tag = atob('TWVzYSMxLDE=');
      const txtbarcode = tag.split(',');
      document.getElementById('nmesa').innerHTML = String(txtbarcode[0]);
      this.ntable = Number(txtbarcode[1]);
      const datamesa = { sel: '', tbl: 40, where: '1 ,' + this.ntable + ',"' + this.userid + '",' + this.impresa };
      this.crudService.crud( datamesa ).subscribe(succ => {
        console.log(succ);
      }, (err: any) => {
        console.log(err);
      });
    }
  }

  deleteTable() {
    document.getElementById('gridTable').classList.add('ion-hide');
    const datamesa = { sel: '', tbl: 40, where: '3,0,"' + this.userid + '",' + this.impresa };
    this.crudService.crud( datamesa ).subscribe(succ => {
      console.log(succ);
    }, (err: any) => {
      console.log(err);
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

  async fPopover( ev: any ) {
    // const popover = await this.popoverCtrl.create({ component: FilterComponent, event: ev, mode: 'ios' });
    const popover = await this.popoverCtrl.create({
      component: FilterComponent,
      event: ev,
      mode: 'ios'
      // translucent: true
    });
    popover.style.cssText = '--min-width: 320px; --max-width: 320px;';
    await popover.present();
    const { data } = await popover.onWillDismiss();
    if (data != undefined) {
      this.filprecio = data.item;
      const search = (document.getElementById('search') as HTMLInputElement).value;
      this.cargarProductos(0, 1, this.tipo, 0, search, this.categoria, this.filprecio );
    }
  }

  onKey( event: any ) {
    console.log( event.target.value );
  }

  cargarCupones() {
    this.currentDatetime = formatDate(new Date(), 'yyyy-MM-dd HH:mm', 'en');
    console.log('now()', this.currentDatetime);
    const cupones = { sel: '', tbl: 82, where: '"","0,10",' + this.impresa };
    this.crudService.crud( cupones ).subscribe( rsult => {
      console.log('cupones', rsult);
      this.fileslength = rsult[0].length;
      if (this.fileslength == 1) {
        console.log('UN CUPON', rsult[0][0][4]);
        if (this.currentDatetime >= rsult[0][0][5] && this.currentDatetime <= rsult[0][0][6]) {
          this.visible = 1;
          this.idcupon = rsult[0][0][0];
          this.file = rsult[0][0][4];
        } else {
          this.visible = 0;
          console.log('PLAZO DE CUPON VENCIDO');
          this.general.mostrar_error('Lo sentimos, este cupón ya no se encuentra disponible!');
        }
      } else {
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
      console.log( err );
    });
  }

  restoCant( vid: number ) {
    console.log('resta');
    let resto: any;
    // let cantidad = Number(document.getElementsByClassName('cant' + vid).item(0).innerHTML);
    const cantidad = (document.getElementById('cant' + vid )) as HTMLInputElement;
    if ( Number(cantidad.value) != 1 ) {
      resto = Number(cantidad.value) - 1;
      // this.order.doCant( 2, vid, 0 );
      cantidad.value = resto;
    } else {
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

  plusCant( vid: number ) {
    console.log('suma');
    let sumo: any;
    // this.order.doCant( 1, vid, 0 );
    const cantidad = (document.getElementById('cant' + vid )) as HTMLInputElement;
    sumo = Number(cantidad.value) + 1;
    cantidad.value = sumo;
    this.addToOrden( vid );
    console.log('cantidad');
    console.log(cantidad.value);
    console.log('sumo');
    console.log(sumo);
  }

}
