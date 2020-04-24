import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { CrudService } from 'src/app/services/crud.service';
import { FtpaymentService } from '../../services/ftpayment.service';
import { VerifypassPage } from '../../modals/verifypass/verifypass.page';
import { ModalController, LoadingController } from '@ionic/angular';
import { GeneralComponent } from '../../components/general/general.component';
import { environment } from '../../../environments/environment';

const impresa = environment.impresa;

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {
  // tslint:disable: triple-equals
  userid = firebase.auth().currentUser.uid;
  listaCards: any;
  username: string;

  constructor( private afAuth: AngularFireAuth,
               private crudService: CrudService,
               private fts: FtpaymentService,
               private modalCtrl: ModalController,
               private loadingCtrl: LoadingController,
               private general: GeneralComponent ) { }

  ngOnInit() {
    this.username = this.afAuth.auth.currentUser.email;
  }

  ionViewDidEnter() {
    this.getCardsByUser();
  }

  setDefecto( cardid: any ) {
    console.log('cardid');
    console.log(cardid);
    const data = { sel: '', tbl: 55, where: cardid + ',"' + this.userid + '"' };
    this.crudService.crud( data ).subscribe(res => {
      console.log(res);
      this.getCardsByUser();
    }, err => {
      console.log(err);
    });
  }

  getCardsByUser() {
    console.log('getCardsByUser');
    this.userid = this.afAuth.auth.currentUser.uid;
    console.log(this.userid);

    const data = { sel: '', tbl: 49, where: '"' + this.userid + '"' };

    this.crudService.crud( data ).subscribe(
      res => {
        console.log('res');
        console.log( JSON.stringify(res) );
        this.listaCards = res[0];
      },
      err => {
        console.log('error: crud err');
        console.log( err );
      }
    );
  }

crud( data: any ) {
  this.crudService.crud( data ).subscribe(
    async res => {
      console.log('Información de tarjeta eliminada');
      console.log( res );
      console.log( JSON.stringify(res) );
      this.modalCtrl.dismiss({
        dismissed: true
      });
      this.getCardsByUser();
      return true;
    },
    err => {
      console.log( err );
    }
  );
}

async cardDelete( idcard: number, cardTokenId: string ) {
  console.log(this.username);
  const modal = await this.modalCtrl.create({
    component: VerifypassPage,
    cssClass: 'modal-modal',
    componentProps: {
      getuser: this.username
    }
  });
  await modal.present();
  const { data } = await modal.onWillDismiss();
  console.log(JSON.stringify(data));
  console.log(data);
  const loading = await this.loadingCtrl.create({
    message: 'Eliminando tarjeta',
  });
  await loading.present();
  if (data != undefined) {
    console.log('data 1');
    console.log('data');
    this.crudService.crud({ sel: '', tbl: 96, where: impresa }).subscribe(sucft => {
      this.fts.userDeleteCard(sucft[0][0][0], this.username, data.pass + '$', cardTokenId)
        .subscribe( (succ: any) => {
        console.log(JSON.stringify(succ));
        if (succ != null) {
          if (succ.apiStatus == 'Successful') {
            const info = {
              sel: '',
              tbl: 46,
              where: '3,' + idcard + ',"","","","",""'
            };
            this.crud( info );
            loading.dismiss();
          } else {
            loading.dismiss();
          }
        } else {
          this.general.mostrar_error('Tuvimos un inconveniente eliminando la tarjeta, por favor intente de nuevo');
          loading.dismiss();
        }
      }, err => {
        console.log('err api');
        console.log(JSON.stringify(err));
        loading.dismiss();
      });
    }, err => {
      console.log('err');
      console.log(err);
    });
    console.log('fin');
  } else {
    console.log('data 2');
    loading.dismiss();
  }
}

}
