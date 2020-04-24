import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { CrudService } from '../../services/crud.service';
import { environment } from '../../../environments/environment';
import { GeneralComponent } from '../../components/general/general.component';
import { AppComponent } from 'src/app/app.component';

const tipon = environment.tiponegocio;

@Component({
  selector: 'app-sessionstatus',
  templateUrl: './sessionstatus.page.html',
  styleUrls: ['./sessionstatus.page.scss'],
})
export class SessionstatusPage implements OnInit {
  // tslint:disable: triple-equals
  email: string;
  pass: string;

  @ViewChild('logSectionBtn1', { read: ElementRef, static: false }) public logsectionbtn1: ElementRef;
  @ViewChild('logSectionBtn2', { read: ElementRef, static: false }) public logsectionbtn2: ElementRef;
  @ViewChild('logSectionBtn3', { read: ElementRef, static: false }) public logsectionbtn3: ElementRef;
  @ViewChild('dataLog', { read: ElementRef, static: false }) public datalog: ElementRef;
  @ViewChild('btnLoginMail', { read: ElementRef, static: false }) public btnloginmail: ElementRef;
  @ViewChild('smSocialMediaBtns', { read: ElementRef, static: false }) public smsocialmediabtns: ElementRef;

  constructor( private navCtrl: NavController, private afAuth: AngularFireAuth,
               private crudService: CrudService, private general: GeneralComponent,
               public appc: AppComponent ) { }

  ngOnInit() {
    this.afAuth.user.subscribe( res => {
      console.log('res');
      console.log(res);
      if (res != null) {
        console.log(res.uid);
        const data = { sel: 'idtipo', tbl: 5, where: 'uid = "' + res.uid + '"' };
        this.crudService.crud( data ).subscribe(tipo => {
          console.log('tipo');
          console.log(tipo);
          if (tipo[0][0][0] == 2 || tipo[0][0][0] == 1) {
            const tiposuc = { sel: 'idtiponegocio', tbl: 39, where: 'idtiponegocio = ' + tipon };
            this.crudService.crud( tiposuc ).subscribe(succ => {
              console.log('succ tiposuc');
              console.log(succ);
              if (succ[0][0][0] == 1) {
                this.appc.updateUser();
                this.navCtrl.navigateBack('/menu');
              } else if (succ[0][0][0] == 3) {
                this.navCtrl.navigateBack('/tabsrestaurant/restaurant');
              }
            }, err => {
              console.log('error');
              console.log(err);
            });
          } else {
            this.navCtrl.navigateBack('/signin');
            this.general.mostrar_error('Este usuario no existe en la aplicación');
          }
        }, err => {
          console.log(err);
        });
      } else {
        this.navCtrl.navigateBack('/signin');
      }
    });
  }

}
