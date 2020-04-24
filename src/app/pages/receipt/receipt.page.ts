import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController, NavController } from '@ionic/angular';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.page.html',
  styleUrls: ['./receipt.page.scss'],
})
export class ReceiptPage implements OnInit {
  nrecibo: string;
  fecha: string;
  total: number;
  flete = 0;
  subtotal = 0;
  cliente: string;
  listaordenes: any;
  userid: string;
  @Input() idpago: string;
  @Input() tipo: string;
  datos = { sel: '', tbl: 19, where: '' };

  constructor( private crudService: CrudService,
               private afAuth: AngularFireAuth,
               public modalCtrl: ModalController,
               public navCtrl: NavController ) { }

  ngOnInit() {
    console.log('recibo');
    this.userid = this.afAuth.auth.currentUser.uid;
    console.log(this.userid);
    const usuario = { sel: '', tbl: 8, where: '"' + this.userid + '"' };
    this.crudService.crud( usuario ).subscribe(res => {
      this.cliente = res[0][0][1];
    }, err => {
      console.log(err);
    });
    console.log('idpago receipt');
    console.log(this.idpago);
    this.datos.where = '"' + this.idpago + '",' + environment.impresa;
    this.crudService.crud( this.datos ).subscribe(result => {
      console.log('receipt');
      console.log( JSON.stringify(result));
      this.listaordenes = result[0];
      this.nrecibo = result[0][0][5];
      this.fecha = result[0][0][3];
      this.total = result[0][0][4];
      this.flete = result[0][0][6];
      this.subtotal = result[0][0][7];
    }, err => {
      console.log(err);
    });
  }

  goBack() {
    this.modalCtrl.dismiss({ tipo: this.tipo });
    // this.navCtrl.navigateBack('menu');
  }

}
