import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NavController, ToastController, Platform, ModalController } from '@ionic/angular';
import { CrudService } from '../../services/crud.service';
import * as firebase from 'firebase';
import { GeneralComponent } from '../../components/general/general.component';
import { environment } from '../../../environments/environment';
import { FtpaymentService } from '../../services/ftpayment.service';
import { StorageService } from '../../services/storage.service';
const tipon = environment.tiponegocio;
const impresa = environment.impresa;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  // tslint:disable: triple-equals
  email: string;
  pass: string;
  data = {};
  datasesion = {};
  msg: string;
  errsystem = { sel: '', tbl: 80, where: '' };
  @ViewChild('logSectionBtn1', { read: ElementRef, static: false }) private logsectionbtn1: ElementRef;
  @ViewChild('logSectionBtn2', { read: ElementRef, static: false }) private logsectionbtn2: ElementRef;
  @ViewChild('logSectionBtn3', { read: ElementRef, static: false }) private logsectionbtn3: ElementRef;
  @ViewChild('dataLog', { read: ElementRef, static: false }) private datalog: ElementRef;
  @ViewChild('btnLoginMail', { read: ElementRef, static: false }) public btnloginmail: ElementRef;
  @ViewChild('smSocialMediaBtns', { read: ElementRef, static: false }) private smsocialmediabtns: ElementRef;
  @ViewChild('logMsj', { read: ElementRef, static: false }) private logmsj: ElementRef;

  constructor( private authService: AuthService,
               private navCtrl: NavController,
               private toastCtrl: ToastController,
               public platform: Platform,
               private crudService: CrudService,
               public modalCtrl: ModalController,
               private general: GeneralComponent,
               private fts: FtpaymentService,
               private storage: StorageService ) { }

  ngOnInit() { }

  resetPass( mail: string ) {
    firebase.auth().sendPasswordResetEmail(mail);
  }

  async loginWithEmail() {
    console.log('Login Email');
    // quitar espacios en blanco
    this.authService.signInWithEmail( this.email.replace(/\s+/g, ''), this.pass + '$' )
    .then(res => {
      console.log(res);
      // Verificacion correo
      // if ( res.user.emailVerified ) {
      console.log('signin success');
      console.log(res.user.uid);
      const data = { sel: 'idtipo', tbl: 5, where: 'uid = "' + res.user.uid + '"' };
      this.crudService.crud( data ).subscribe(
        tipo => {
          console.log(tipo);
          // store password on cache
          if (this.platform.is('hybrid')) {
            this.storage.setItem('passCache', this.pass + '$').then(suc => {
              console.log('suc', suc);
            }, rej => {
              console.log('rej', rej);
            }).catch(errCatch => {
              console.log('errCatch', errCatch);
            });
            // this.nativeStorage.setItem('passCache', this.pass + '$').then(passc => {
            //   console.log('passCache');
            //   console.log(passc);
            // }, err => {
            //   console.log(err);
            // });
          }
          if ( res != null ) {
            if (tipo[0][0][0] == 2 || tipo[0][0][0] == 1) {
              const datasuc = { sel: 'idtiponegocio', tbl: 39, where: 'idtiponegocio = ' + tipon };
              this.crudService.crud( datasuc ).subscribe(
                succ => {
                  console.log('succ tiposuc');
                  console.log(succ);
                  this.crudService.crud({ sel: '', tbl: 96, where: impresa }).subscribe(sucft => {
                    this.fts.logOnUser(sucft[0][0][0], this.email, this.pass + '$').subscribe((logging: any) => {
                      console.log('logging');
                      console.log(logging);
                    }, (errlog: any) => {
                      console.log(errlog);
                    });
                  }, err => {
                    console.log('err');
                    console.log(err);
                  });
                  if (succ[0][0][0] == 1) {
                    this.navCtrl.navigateBack('/menu');
                  } else if (succ[0][0][0] == 3) {
                    this.navCtrl.navigateBack('/restaurant');
                  }
                }, err => {
                  console.log('error');
                  console.log(err);
                }
              );
            } else {
              this.general.mostrar_error('Este usuario no existe en la aplicación');
            }
          } else {
            this.navCtrl.navigateBack('/signin');
          }
        }, err => {
          console.log(err);
        }
      );
      // this.navCtrl.navigateBack('/tabs/menu');
      // } else {
      //   this.mostrar_error('Debe de verificar el correo');
      // }
    })
    .catch(async error => {
      console.log( JSON.stringify( error ) );
      if ( error.code == 'auth/wrong-password' ) {
        this.general.mostrar_error('Contraseña incorrecta');
      } else if ( error.code == 'auth/invalid-email' ) {
        this.general.mostrar_error('Correo Inválido');
      } else if ( error.code == 'auth/user-not-found' ) {
        this.general.mostrar_error('Datos ingresados inválidos. Favor verificar que la información ingresada es correcta');
      } else if ( error.code == 'auth/too-many-requests' ) {
        this.general.mostrar_error('Muchos intentos fallidos de ingreso. Favor intenta de nuevo mas tarde');
      } else {
        this.errsystem.where = '0,"' + error.code + '","' + this.email + '",' + JSON.stringify(error);
        this.crudService.crud(this.errsystem).subscribe(res => {
          console.log(res);
        }, err => {
          console.log(err);
        });
      }
    });
  }

  loginWithGoogle() {
    console.log('Login Google');
    this.authService.signInWithGoogle()
    .then(res => {
      console.log(res);

      this.crudService.crud({ sel: '', tbl: 8, where: '"' + res.user.uid + '"' }).subscribe((session: any) => {
        console.log('suc session');
        console.log(session);
        console.log();
        if (session[0].length == 0) {
          this.crudService.crud({ sel: '', tbl: 96, where: impresa }).subscribe(sucft => {
            this.fts.createUser(sucft[0][0][0], res.user.email, res.user.email, res.user.email, 'LoginGoogle$',
            res.user.email, '88888888')
            .subscribe(ftsuser => {
              console.log('ftuser');
              console.log(ftsuser);
              const data = { sel: '', tbl: 6, where: '1,0,"' + res.user.displayName + '","' + res.user.email +
              '","LoginGoogle$",' + impresa + ',"","' + res.user.uid + '",0,2' };
              this.crudService.crud( data ).subscribe(suc => {
                console.log('suc google');
                console.log(suc);
                this.navCtrl.navigateBack('/menu');
                this.storage.setItem('passCache', 'LoginGoogle$').then(store => {
                  console.log('store');
                  console.log(store);
                }, errStore => {
                  console.log('errStore');
                  console.log(errStore);
                });
              }, err => {
                console.log('err google');
                console.log(err);
              });
            }, erruser => {
              console.log('erruser');
              console.log(erruser);
            });
          }, err => {
            console.log('err');
            console.log(err);
          });
        } else {
          this.navCtrl.navigateBack('/menu');
        }
      }, errSession => {
        console.log('err session');
        console.log(errSession);
      });
      this.msg = String(res);
      this.navCtrl.navigateBack('/');
    })
    .catch(error => {
      console.log(error);
      this.msg = String(error);
    });
  }

  loginWithFacebook() {
    console.log('Login Facebook');
    if ( this.platform.is('hybrid') ) {
      console.log('Login Facebook App');
      this.authService.signInWithFacebookApp().then(res => {
        console.log('res facebook app');
        console.log( JSON.stringify(res) );
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        firebase.auth().signInWithCredential(facebookCredential).then( succ => {
          console.log('facebook success');
          console.log( succ );
          this.crudService.crud({ sel: '', tbl: 8, where: '"' + succ.user.uid + '"' }).subscribe((session: any) => {
            if (session[0].length == 0) {
              this.crudService.crud({ sel: '', tbl: 96, where: impresa }).subscribe(sucft => {
                this.fts.createUser(sucft[0][0][0], succ.user.email, succ.user.email, succ.user.email, 'LoginFacebook$',
                succ.user.email, '88888888')
                .subscribe(suc => {
                  const data = { sel: '', tbl: 6, where: '1,0, "' + succ.user.displayName + '","' + succ.user.email +
                  '","LoginFacebook$",' + impresa + ',"","' + succ.user.uid + '",0,2' };
                  this.crudService.crud( data ).subscribe(result => {
                    console.log(result);
                    this.navCtrl.navigateBack('/menu');
                  }, err => {
                    console.log( err );
                  });
                });
              }, err => {
                console.log('err');
                console.log(err);
              });
            } else {
              this.navCtrl.navigateBack('/menu');
            }
          });
        }).catch( error => {
          console.log('facebook error');
          console.log( JSON.stringify(error) );
        });
      }).catch( err => {
        console.log('err facebook app');
        console.log( JSON.stringify(err) );
      });
    } else {
      console.log('Login Facebook Web');
      this.authService.signInWithFacebookWeb().then( (res) => {
        console.log('res facebook web');
        console.log(res);
        this.crudService.crud({ sel: '', tbl: 8, where: '"' + res.user.uid + '"' }).subscribe((session: any) => {
          if (session[0].length == 0) {
            this.crudService.crud({ sel: '', tbl: 96, where: impresa }).subscribe(sucft => {
              this.fts.createUser(sucft[0][0][0], res.user.email, res.user.email, res.user.email, 'LoginFacebook$',
              res.user.email, '88888888')
              .subscribe(suc => {
                console.log('suc fts user');
                console.log(suc);
                const data = { sel: '', tbl: 6, where: '1,0,"' + res.user.displayName + '","' + res.user.email +
                  '","LoginFacebook$",' + impresa + ',"","' + res.user.uid + '",0,2' };
                this.crudService.crud( data ).subscribe(sucCrud => {
                  console.log('suc facebook');
                  console.log(sucCrud);
                  this.navCtrl.navigateBack('/menu');
                  this.storage.setItem('passCache', 'LoginFacebook$').then(store => {
                    console.log('store');
                    console.log(store);
                  }, errStore => {
                    console.log('errStore');
                    console.log(errStore);
                  });
                }, err => {
                  console.log('err google');
                  console.log(err);
                });
              }, errFacebook => {
                console.log('errFacebook');
                console.log(errFacebook);
              });
            }, err => {
              console.log('err');
              console.log(err);
            });
          } else {
            this.navCtrl.navigateBack('/menu');
          }
        });
      })
      .catch((error: any) => {
        console.log('error facebook web');
        console.log(error);
        if (error.code == 'auth/account-exists-with-different-credential') {
          this.general.mostrar_error('Esta cuenta ya ha sido registrada');
        }
      });
    }
  }

  emailLogin() {
    // this.logsectionbtn1.nativeElement.classList.add('ion-hide');
    // this.logsectionbtn2.nativeElement.classList.add('ion-hide');
    // this.logsectionbtn3.nativeElement.classList.add('ion-hide');
    // this.datalog.nativeElement.classList.remove('ion-hide');
    // this.smsocialmediabtns.nativeElement.classList.remove('ion-hide');
    // this.logmsj.nativeElement.classList.add('ion-hide');
    this.email = '';
    this.pass = '';
  }

  showMediaBtns() {
    // this.logsectionbtn1.nativeElement.classList.remove('ion-hide');
    // this.logsectionbtn2.nativeElement.classList.remove('ion-hide');
    // this.logsectionbtn3.nativeElement.classList.remove('ion-hide');
    // this.datalog.nativeElement.classList.add('ion-hide');
    // this.smsocialmediabtns.nativeElement.classList.add('ion-hide');
    // this.logmsj.nativeElement.classList.remove('ion-hide');
  }

  onEnter() {
    this.loginWithEmail();
  }

}
