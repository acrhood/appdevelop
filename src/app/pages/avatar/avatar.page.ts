import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  constructor( private crudService: CrudService) { }

  ngOnInit() {
  }

  selectAvatar( idavatar ) {
    const data = { sel: '', tbl: 56, where: '"' + idavatar };
    this.crudService.crud( data ).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

}
