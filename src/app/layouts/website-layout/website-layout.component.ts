import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.models';
import { AdminserviceService } from 'src/app/services/admin/adminservice.service';
import { UrlApi } from 'src/app/services/routeApi';

@Component({
  selector: 'app-website-layout',
  templateUrl: './website-layout.component.html',
  styleUrls: [
    './website-layout.component.css',
    './website.min.css'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class WebsiteLayoutComponent implements OnInit {

  @Input() photo: string = "";
  @Input() username: string = "";
  @Input() isConnect: Boolean = false;
  @Input() urlApi: string = UrlApi;

  userOne!: UserModel;

  @Input('isMenu')
  isMenu = false;

  @Input('isLogout')
  isLogout = false;
    
  //Constructeur
  constructor(
    private adminService: AdminserviceService,
    private router : Router,
  ){}

  ngOnInit(){
    this.getOneUser()
  }

  getOneUser(){
    const id = localStorage.getItem('id')!
    // console.log(id)
    if (id == null) {
      this.isConnect = false
    } else {
      this.adminService.getOneUserAdmin(id).subscribe(
        response=> {
          this.username = response.username
          this.isConnect = true
          // this.photo = this.urlApi+response.photo
        }
      );
    }

  }

  logout(){
    localStorage.clear()
    this.getOneUser()
    this.router.navigate(['/'])
  }

  btnMenuMobile(){
    if (this.isMenu==true) {
      this.isMenu = false
    } else {
        this.isMenu = true
    }
  }

  menuClose(){
    this.isMenu = false
  }
}
