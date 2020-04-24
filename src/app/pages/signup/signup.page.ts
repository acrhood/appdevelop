import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../../../environments/environment';
import { GeneralComponent } from '../../components/general/general.component';
import { FtpaymentService } from '../../services/ftpayment.service';
const impresa = environment.impresa;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  // tslint:disable: triple-equals
  name: string;
  pass: string;
  email: string;
  phone: string;
  cedula: number;
  userid: string;
  isChecked = false;
  errsystem = { sel: '', tbl: 80, where: '' };
  @ViewChild('xname', {static: false}) xname: any;
  @ViewChild('xemail', {static: false}) xemail: any;
  @ViewChild('xpass', {static: false}) xpass: any;
  @ViewChild('xphone', {static: false}) xphone: any;
  @ViewChild('xcedula', {static: false}) xcedula: any;

  constructor( private loadingCtrl: LoadingController,
               private navCtrl: NavController,
               private authService: AuthService,
               private afAuth: AngularFireAuth,
               private crudService: CrudService,
               private general: GeneralComponent,
               private fts: FtpaymentService ) { }

  ngOnInit() { }

  async registerUser() {
    console.log(this.name, this.email, this.pass, this.phone, this.cedula);
    console.log('validando');
    const valCreateUSer = this.validateRegister();
    console.log(valCreateUSer);
    const loading = await this.loadingCtrl.create({
      message: 'Creando usuario..',
      duration: 2000
    });
    await loading.present();
    if ( valCreateUSer == false ) {
      console.log('creando usuario');
      this.crudService.crud({ sel: '', tbl: 96, where: impresa }).subscribe(sucft => {
        this.fts.createUser(sucft[0][0][0], this.email, this.email, this.email, this.pass + '$',
        this.email.replace(/\s+/g, ''), this.phone)
        .subscribe(async (succ: any) => {
          console.log('succ api');
          console.log(JSON.stringify(succ));
          console.log(succ);
          if (succ != null) {
            switch (succ.apiStatus) {
              case 'DuplicateUserName':
                loading.dismiss();
                this.general.mostrar_error('Este usuario ya había sido creado anteriormente');
                break;
              case 'Invalid Mail Format':
                loading.dismiss();
                this.general.mostrar_error('Formato del correo introducido es inválido. (Ej: nombre@gmail.com)');
                break;
              case 'InvalidPassword':
                loading.dismiss();
                this.general.mostrar_error('La contraseña debe tener mínimo 8 caracteres. Obligatorio debe' +
                'contener letras, números y caracteres especiales como $, &, @, /, _, ., (, ), ‘, -');
                break;
              case 'Invalid Phone Format':
                loading.dismiss();
                this.general.mostrar_error('Formato de teléfono inválido');
                break;
              case 'Success':
                this.authService.signUpWithEmail(this.email.replace(/\s+/g, ''), this.pass + '$').then(res => {
                  console.log(res);
                  loading.dismiss();
                  this.phone = this.phone == undefined ? '' : this.phone;
                  this.cedula = this.cedula == undefined ? 0 : this.cedula;
                  this.userid = res.user.uid;
                  const data = { sel: '', tbl: 6, where: '1,0,"' + this.name + '","' + this.email + '","' + this.pass +
                  '$",' + impresa + ',"' + this.phone + '","' + this.userid + '",' + this.cedula + ',2' };
                  this.crudService.crud( data ).subscribe(result => {
                    console.log('result database');
                    console.log(result);
                    this.afAuth.auth.currentUser.updateProfile({
                      displayName: this.name
                    }).then(ready => {
                      console.log('ready');
                      console.log(ready);
                      console.log(res.additionalUserInfo.isNewUser);
                      loading.dismiss();
                      if (res.additionalUserInfo.isNewUser == true) {
                        console.log('go session');
                        this.navCtrl.navigateBack('/sessionstatus');
                      }
                    }).catch( noready => {
                      console.log('noready');
                      console.log(noready);
                    });
                  }, error => {
                    console.log(error);
                  });
                }).catch(async error => {
                  console.log(error);
                  console.log(error.code);
                  if ( error.code == 'auth/invalid-email' ) {
                    loading.dismiss();
                    this.general.mostrar_error('Correo inválido');
                  } else if (error.code == 'auth/weak-password') {
                    loading.dismiss();
                    this.general.mostrar_error('Contraseña inválida');
                  } else if (error.code == 'auth/email-already-in-use') {
                    loading.dismiss();
                    this.general.mostrar_error('Este usuario ya ha sido registrado');
                  } else {
                    this.errsystem.where = '0,"' + error.code + '","' + this.email + '",' + JSON.stringify(error);
                    this.crudService.crud(this.errsystem).subscribe(res => {
                      loading.dismiss();
                      console.log(res);
                    }, err => {
                      loading.dismiss();
                      console.log(err);
                    });
                  }
                });
                break;
              default:
                this.errsystem.where = '0,"' + succ.apiStatus + '","' + this.email + '",' + JSON.stringify(succ);
                this.crudService.crud(this.errsystem).subscribe(res => {
                  loading.dismiss();
                  console.log(res);
                }, err => {
                  loading.dismiss();
                  console.log(err);
                });
                break;
            }
          } else {
            loading.dismiss();
            this.general.mostrar_error('Tuvimos un inconveniente para registrar este usuario, por favor intentelo de nuevo');
          }
        }, (err: any) => {
          console.log(err);
          if (err.status == 0) {
            loading.dismiss();
            this.general.mostrar_error('No hay internet');
          } else {
            loading.dismiss();
            this.general.mostrar_error('');
          }
        });
      }, err => {
        console.log('err');
        console.log(err);
      });
    } else {
      loading.dismiss();
      this.general.mostrar_error(String(valCreateUSer));
    }
  }

  validateRegister() {
    if (this.name == undefined || this.name == '') {
      this.xname.setFocus();
      return 'Nombre requerido';
    }

    if (this.email == undefined || this.email == '') {
      this.xemail.setFocus();
      return 'Correo requerido';
    }

    if (this.pass == undefined || this.pass == '') {
      this.xpass.setFocus();
      return 'Contraseña requerido';
    }

    if (this.phone == undefined || this.phone == '') {
      this.xphone.setFocus();
      return 'Teléfono requerido';
    }

    // if (this.cedula == undefined) {
    //   this.xphone.setFocus();
    //   return 'Cédula requerida';
    // }

    if (String(this.cedula).length > 0 && String(this.cedula).length < 9) {
      this.xcedula.setFocus();
      return 'La cédula debe contener mínimo 9 dígitos';
    }

    if (this.isChecked == true) {
      return 'Debe aceptar los Términos & Condiciones y Políticas de Privacidad';
    }

    return false;
  }

  addValue( e: any ) {
    this.isChecked = e.currentTarget.checked;
    console.log('isChecked', this.isChecked);
  }

}
