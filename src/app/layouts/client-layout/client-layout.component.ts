import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.models';
import { AdminserviceService } from 'src/app/services/admin/adminservice.service';
import { UrlApi } from 'src/app/services/routeApi';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: [
    './client-layout.component.css',
    './app.min.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ClientLayoutComponent implements OnInit{

  @Input() photo: string = "";
  @Input() urlApi: string = UrlApi;

  userOne!: UserModel;
  
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
      this.adminService.getOneUserAdmin(id).subscribe(
        response=> {
          this.userOne = response
          // this.photo = this.urlApi+response.photo
        }
      );
    }

    logout(){
      localStorage.clear()
      this.router.navigate(['/connexion'])
    }
}
