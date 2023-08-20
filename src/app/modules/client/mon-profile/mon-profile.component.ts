import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UserModel } from 'src/app/models/user.models';
import { AdminserviceService } from 'src/app/services/admin/adminservice.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UrlApi } from 'src/app/services/routeApi';

@Component({
  selector: 'app-mon-profile',
  templateUrl: './mon-profile.component.html',
  styleUrls: ['./mon-profile.component.css']
})
export class ClientProfileComponent implements OnInit{
  @ViewChild("fileInput") fileInput: any;
  @ViewChild("isCheck") isCheck: any;

  @Input() photo: string = "";
  @Input() urlApi: string = UrlApi;

  userOne!: UserModel;

  @Input() isLoader: boolean = false;
  @Input() isUpdated: boolean = false;
  @Input() isDate: boolean = false;
  @Input() btnName: string = "Modifier";

  @Input() email: string = ""; 
  @Input() username: string = "";
  @Input() nom: string = ""; 
  @Input() prenom: string = "";
  @Input() dateNaissance: string = ""; 
  @Input() numeroRue: string = "";
  @Input() nomRue: string = ""; 
  @Input() adresse: string = "";
  @Input() telephone: string = ""; 
  @Input() sexe: string = "Homme";

  file: File | undefined;

  @Input() checkUpdated: boolean = false; 
  
    //Constructeur
    constructor(
      private adminService: AdminserviceService,
      private notifyService : NotificationService,
    ){}

    ngOnInit(){
      this.getOneUser()
    }

  getOneUser(){
    const id = localStorage.getItem('id')!
    this.adminService.getOneUserAdmin(id).subscribe(
      response=> {
        this.userOne = response
        this.email = response.email
        this.username = response.username
        this.nom = response.nom
        this.prenom = response.prenom
        // this.dateNaissance = response.dateNaissance
        this.numeroRue = response.numeroRue
        this.nomRue = response.nomRue
        this.adresse = response.adresse
        this.telephone = response.telephone
        this.sexe = response.sexe

      }
    );
  }

  // updatedUser(){
  //   console.log('uop')
  // }

  onClickFile(){
    this.fileInput.nativeElement.click()
  }

  onChangeFile(event: any){
    const file = event.target.files[0]
    //console.log(file)
    const id = localStorage.getItem('id')!
    this.adminService.updatedImageUser(file,id).subscribe(
      (response: any) => {
        if (response.status == 1){
          //console.log(response)
          this.isCheck.nativeElement.click()
          this.notifyService.showSuccess(response.message, "Success")
          this.getOneUser();
        }else{          
          this.notifyService.showError(response.message, "Erreur")
        }
        

      }
    );
  }

  updatedUser(){
    // console.log('uop')
    this.isLoader = true
    this.btnName = "Traitement en cours..."
    const id = localStorage.getItem('id')!
    // const user: UserModel = {}
    this.adminService.updatedUser(id,this.email,this.username,this.nom,this.prenom,this.numeroRue,this.nomRue,this.adresse,this.telephone).subscribe(
      (response: any)=>{
        if (response.status == 1) {          
          this.isLoader = false
          this.btnName = "Enregistrer"
          this.notifyService.showSuccess(response.message, "Success")
          this.getOneUser();
        } else {
          this.isLoader = false
          this.btnName = "Enregistrer"
          this.notifyService.showError(response.message, "Erreur")
          //console.log(response.message)
        }
        
      }
    )
  }

  onCheckUpdated(){
    console.log(this.checkUpdated)
  }

}
