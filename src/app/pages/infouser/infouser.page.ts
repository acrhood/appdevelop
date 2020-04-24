import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../../../environments/environment';
import { ToastController, ModalController, LoadingController } from '@ionic/angular';
import { AlertPage } from '../../modals/alert/alert.page';
import { GeneralComponent } from '../../components/general/general.component';
const impresa = environment.impresa;

@Component({
  selector: 'app-infouser',
  templateUrl: './infouser.page.html',
  styleUrls: ['./infouser.page.scss'],
})
export class InfouserPage implements OnInit {
  // tslint:disable: triple-equals
  verified: any;
  userid: string;
  nameusr: string;
  mailusr: string;
  phoneusr: string;
  cedusr: number;
  tname: any;
  tmail: any;
  tphone: any;
  nusr: any;
  musr: any;
  pusr: any;
  cusr: any;

  constructor( private afAuth: AngularFireAuth,
               private crudService: CrudService,
               private toastCtrl: ToastController,
               private modalCtrl: ModalController,
               private general: GeneralComponent,
               private loadingCtrl: LoadingController ) { }

  async ngOnInit() {
    this.userid = this.afAuth.auth.currentUser.uid;
    const datos = { sel: '', tbl: 8, where: '"' + this.userid + '"' };
    const loading = await this.loadingCtrl.create({
      message: 'Cargando datos...'
    });
    await loading.present();
    this.crudService.crud( datos ).subscribe(res => {
      console.log(res);
      this.nameusr = res[0][0][1];
      this.mailusr = res[0][0][3];
      this.phoneusr = res[0][0][4];
      this.cedusr = res[0][0][5];
      this.verified = this.afAuth.auth.currentUser.emailVerified;
      loading.dismiss();
      if (!this.verified) {
        document.getElementById('verified').classList.remove('ion-hide');
      }
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

  actInfo() {
    console.log(this.nusr, this.pusr, this.userid);
    const datos = { sel: '', tbl: 6, where: '2,0,"' + this.nusr + '","","",' +
    impresa + ',"' + this.pusr + '","' + this.userid + '",' + this.cusr + ',0' };
    this.crudService.crud( datos ).subscribe(
      async (res: any) => {
        console.log(res[0].ERROR);
        if (res[0].ERROR != undefined) {
          this.general.mostrar_error('El teléfono y la cédula deben contener solo números');
        } else {
          const toast = await this.toastCtrl.create({
            message: 'Información guardada correctamente',
            duration: 2000
          });
          toast.present();
        }
      }, err => {
        console.log(err);
      }
    );
  }

  async sendEmailVerification() {
    const modal = await this.modalCtrl.create({
      component: AlertPage,
      componentProps: {
        error: 'Enviar correo'
      },
      cssClass: 'alert-modal'

    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(data);
    if (data != undefined) {
      this.afAuth.auth.currentUser.sendEmailVerification();
    }

  }
}
