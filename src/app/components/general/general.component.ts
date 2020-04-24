import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertPage } from '../../modals/alert/alert.page';
import { ErrorPage } from '../../modals/error/error.page';
import { ModalPage } from '../../modals/modal/modal.page';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {}

  async mostrar_error(error: string) {
    const modal = await this.modalCtrl.create({
      component: ErrorPage,
      componentProps: {
        error
      },
      cssClass: 'error-modal'
    });
    return await modal.present();
  }

  // async verify_user(getuser: string) {
  //   const modal = await this.modalCtrl.create({
  //     component: VerifypassPage,
  //     componentProps: {
  //       getuser
  //     },
  //     cssClass: 'primary-modal'
  //   });
  //   return await modal.present();
  // }

  async mostrar_alert(error: string) {
    const modal = await this.modalCtrl.create({
      component: AlertPage,
      componentProps: {
        error
      },
      cssClass: 'alert-modal'
    });
    return await modal.present();
  }

  async show_Directions() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      cssClass: 'modal-modal'
    });
    return await modal.present();
  }

}
