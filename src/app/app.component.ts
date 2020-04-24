import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as shuffleArray from 'shuffle-array';
import { environment } from '../environments/environment';
import { CrudService } from './services/crud.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  email: string;
  name: string;
  uid: string;
  ntable: number;
  impresa = environment.impresa;
  listMessages = [
    'Te extrañamos ' + this.name + ', regresa pronto!',
    'Vuelve a utilizar esta asombrosa app!',
    this.name + ', vuelve pronto!',
    'Necesitas algo, ' + this.name + '? Ven aquí!' ];

  constructor( private platform: Platform, private statusBar: StatusBar,
               public afAuth: AngularFireAuth, private crudService: CrudService ) {
                 this.initializeApp();
               }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      SplashScreen.hide();
      // shuffleArray(this.listMessages).forEach((message: any, index: any) => {
      //   LocalNotifications.schedule({
      //     notifications: [
      //       {
      //         id: index,
      //         body: message,
      //         trigger: {
      //           in: 3, /*Envía notificaciones cada 3 días*/
      //           unit: ELocalNotificationTriggerUnit.DAY
      //         }
      //       }
      //     ]
      //   });
      // });
    });
  }

  updateOrders() {
    this.uid = this.afAuth.auth.currentUser.uid;
    const data = { sel: '', tbl: 41, where: '"' + this.uid + '",' + this.impresa };
    this.crudService.crud( data ).subscribe(res => {
      console.log('res count');
      console.log(JSON.stringify(res));
      console.log(res);
      const badge = document.getElementById('badgepedidos');
      badge.innerHTML = res[0][0][0];
    }, err => {
      console.log(err);
    });
  }

  updateUser() {
    const auth = this.afAuth.auth.currentUser;
    this.name = auth.displayName.substr(0, auth.displayName.indexOf(' '));
    this.email = auth.email;
  }

  ngOnInit() { }

}
