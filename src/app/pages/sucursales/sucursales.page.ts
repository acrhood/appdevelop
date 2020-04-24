import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { environment } from '../../../environments/environment';
import { StorageService } from '../../services/storage.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.page.html',
  styleUrls: ['./sucursales.page.scss'],
})
export class SucursalesPage implements OnInit {
  listSucursales: any;
  madresucursal = environment.madreSucursal;
  constructor( private crudService: CrudService, private storage: StorageService,
               private afAuth: AngularFireAuth ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    const data = { sel: '*', tbl: 39, where: 'id > 0 and madre_sucursales = ' + this.madresucursal };
    this.crudService.crud( data ).subscribe(suc => {
      console.log(suc);
      this.listSucursales = suc[0];
    }, err => {
      console.log(err);
    });
  }

  selectSucursal(idsucursal: number) {
    console.log(idsucursal);
    this.storage.setItem('impresa', String(idsucursal));
  }

}
