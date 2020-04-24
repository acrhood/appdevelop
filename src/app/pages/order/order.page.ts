import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CrudService } from '../../services/crud.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { StorageService } from '../../services/storage.service';
import { ModalController, NavController, LoadingController } from '@ionic/angular';
// import { OptionsPage } from '../../pages/options/options.page';
import { AppComponent } from '../../app.component';
// tslint:disable: no-conditional-assignment
// tslint:disable: no-shadowed-variable
// tslint:disable: max-line-length
// tslint:disable: triple-equals
@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  totalOrder: number;
  userid: string;
  listaOrdenes: any;
  subsTotal: Subscription;
  cantidad: number;
  routerLink: any;
  impresa: any;
  // @ViewChild('more', { read: ElementRef, static: false }) private more: ElementRef;

  constructor( private crudService: CrudService, private afAuth: AngularFireAuth,
               private modalCtrl: ModalController, private navCtrl: NavController,
               private appc: AppComponent, private loadingCtrl: LoadingController,
               private storage: StorageService ) { }

  ngOnInit() {
    this.userid = this.afAuth.auth.currentUser.uid;
    console.log( this.userid );
  }

  async ionViewWillEnter() {
    this.impresa = (await this.storage.getItem('impresa')).value;
    this.getOrdenes( this.userid );
    this.countordenes();
  }

  ordenar() {
    this.navCtrl.navigateBack('payment');
  }

  vaciarCarrito() {
    const data = { sel: '', tbl: 56, where: '"' + this.userid + '",' + this.impresa };
    this.crudService.crud( data ).subscribe(res => {
      console.log(res);
      this.getOrdenes(this.userid);
      this.countordenes();
      this.appc.updateOrders();
    }, err => {
      console.log(err);
    });
  }

  countordenes() {
    const data = { sel: '', tbl: 41, where: '"' + this.userid + '",' + this.impresa };
    this.crudService.crud( data ).subscribe(succ => {
      console.log('count ordenes');
      console.log(succ);
      console.log(succ[0][0][0]);
      const badge = document.getElementById('badgeorders');
      console.log('badge');
      console.log(badge);
      if (badge != null) {
        badge.innerHTML = String(succ[0][0][0]);
      }
      const element = document.getElementById('ordenar') as HTMLInputElement;
      console.log(element);
      if (element != null) {
        if (succ[0][0][0] == 0) {
          element.disabled = true;
          this.routerLink = 'null';
        } else {
          element.disabled = false;
          this.routerLink = '/payment';
        }
      }
    }, err => {
      console.log(err);
    });
  }

  changeCant(vid: number) {
    console.log(vid);
    // let cant = 0;
    const cantidad = (document.getElementById('cant' + vid )) as HTMLInputElement;
    console.log(cantidad.value);
    if ( cantidad.value != '' ) {
      this.doCant( 3, vid, Number(cantidad.value) );
    }

  }

  getOrdenes( userid: string ) {
    const datos = { sel: '', tbl: 10, where: '"' + userid + '",' + this.impresa };
    this.crudService.crud( datos ).subscribe(data  => {
      console.log('data');
      console.log(data);
      if (data[0].length == 0) {
        document.getElementById('lordenes').innerHTML = String('<section padding align="center"><br><br><br><br><br><br><label align="center" style="color: #929292; font-size: 16px">No existen productos agregados,<br>presione <b>Appexpress</b> para volver al menu</label><br><br><br><br><img src="../../../assets/images/btnadd.svg" style="margin: 0 auto !important; width: 80%"></section>');
      } else {
        this.listaOrdenes = data[0];
      }
    }, error  => {
      console.log(error);
    });
    const arr = { sel: '', tbl: 14, where: '"' + userid + '",' + this.impresa };
    this.crudService.crud( arr ).subscribe(data  => {
      console.log('data total');
      console.log(data);
      this.totalOrder = data[0][0][0];
      document.getElementById('tot').innerHTML = String(this.totalOrder);
    }, error  => {
      console.log(error);
    });
  }

  menuLink() {
    console.log('CLICK');
    this.navCtrl.navigateBack('/menu');
  }

  async eliminarOrden( vid: any ) {
    console.log(vid);
    const loading = await this.loadingCtrl.create({
      message: 'Por favor espere mientras eliminamos este producto'
    });
    await loading.present();
    const datos = { sel: '', tbl: 9, where: '3,' + vid + ',0,0,"",0' };
    this.crudService.crud( datos ).subscribe(res => {
      console.log( 'Eliminado' );
      console.log( res );
      this.getOrdenes( this.userid );
      this.countordenes();
      this.appc.updateOrders();
      loading.dismiss();
      return true;
    }, err => {
      console.log( err );
      console.log( 'Error al eliminar' );
      loading.dismiss();
      return false;
    });
  }

  async showMore( vid: number, vcomm: string) {
    // console.log(Number(document.getElementsByClassName('cant' + vid).item(0).innerHTML));
    // const modal = await this.modalCtrl.create({
    //   component: OptionsPage,
    //   cssClass: 'options-modal',
    //   componentProps: {
    //     unidades: Number(document.getElementsByClassName('cant' + vid).item(0).innerHTML),
    //     vidprod: vid,
    //     vcomment: vcomm
    //   }
    // });
    // await modal.present();
    // const { data } = await modal.onWillDismiss();
    // console.log('data');
    // console.log(data);
    // this.ionViewWillEnter();
    // if (data != undefined) {
    //   this.ionViewWillEnter();
    // }
  }

  doCant( acc: number, vid: number, vcantidad: number ) {
    console.log(vid, acc, vcantidad);
    const data = { sel: '', tbl: 13, where: acc + ',' + vid + ',' + vcantidad };
    const tot = { sel: '', tbl: 14, where: '"' + this.userid + '",' + this.impresa };
    this.crudService.crud( data ).subscribe(res => {
      console.log(res);
      this.crudService.crud( tot ).subscribe(result => {
        console.log('get total');
        console.log(result);
        this.totalOrder = result[0][0][0];
        document.getElementById('tot').innerHTML = String(this.totalOrder);
      }, error => {
        console.log(error);
      });
    }, err => {
      console.log(err);
    });
  }

  restoCant( vid: number ) {
    console.log('resta');
    let resto: any;
    // let cantidad = Number(document.getElementsByClassName('cant' + vid).item(0).innerHTML);
    const cantidad = (document.getElementById('cant' + vid )) as HTMLInputElement;
    if ( Number(cantidad.value) != 1 ) {
      resto = Number(cantidad.value) - 1;
      this.doCant( 2, vid, 0 );
      cantidad.value = resto;
    }
    console.log('cantidad');
    console.log(cantidad.value);
    console.log('resto');
    console.log(resto);
  }

  plusCant( vid: number ) {
    console.log('suma');
    let sumo: any;
    this.doCant( 1, vid, 0 );
    const cantidad = (document.getElementById('cant' + vid )) as HTMLInputElement;
    sumo = Number(cantidad.value) + 1;
    cantidad.value = sumo;
    console.log('cantidad');
    console.log(cantidad.value);
    console.log('sumo');
    console.log(sumo);
  }

}
