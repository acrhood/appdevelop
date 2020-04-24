import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  // tslint:disable: triple-equals
  userid: string;
  nameusr: string;
  mailusr: string;
  userEmail: string;
  tipoUser: number;

  constructor( private crudService: CrudService,
               private navCtrl: NavController,
               public platform: Platform,
               private authService: AuthService ) {
                firebase.auth().onAuthStateChanged((user) => {
                  if (user) {
                    console.log(user.uid);
                    const data = { sel: '', tbl: 8, where: '"' + user.uid + '"' };
                    this.crudService.crud( data ).subscribe(res => {
                      console.log(res);
                      this.nameusr = res[0][0][1];
                      this.tipoUser = res[0][0][2];
                      this.mailusr = res[0][0][3];
                      const reportes = document.getElementById('reports') as HTMLInputElement;
                      console.log(res[0][0][2]);
                      if (res[0][0][2] == 1) {
                        reportes.classList.remove('ion-hide');
                      } else {
                        reportes.classList.add('ion-hide');
                      }
                    }, err => {
                      console.log(err);
                    });
                  }
                });
               }

  ngOnInit() { }

  async logout() {
    console.log('Logout');
    this.authService.signOut().then((res: any) => {
      console.log(res);
      this.navCtrl.navigateBack('/signin');
      if (this.platform.is('hybrid')) {
        console.log('storage');
      }
    });
  }

}
