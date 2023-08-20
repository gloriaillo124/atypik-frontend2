import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent {

  @Input() isLoader: boolean = false;
  @Input() btnName: string = "Je devient partenaire";

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
  @Input() password: string = "";

  @Input() Erroremail: string = "";
  @Input() Errorpassword: string = "";

  emailRGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  constructor(
    private notifyService : NotificationService,
    private authService: AuthService,
    private router : Router,
  ) { }

  register(){

    this.isLoader = true
          this.btnName = "Traitement en cours..."
          this.authService.inscriptionPartenaire(this.email,this.username,this.password,this.nom,this.prenom,this.dateNaissance,this.numeroRue,this.nomRue,this.adresse,this.sexe,this.telephone).subscribe(
            (response: any)=>{
              if (response.status == 1) {
                this.isLoader = false
                this.btnName = "Je devient partenaire"
                this.email = ""; 
                this.username = "";
                this.nom = ""; 
                this.prenom = "";
                this.dateNaissance = ""; 
                this.numeroRue = "";
                this.nomRue = ""; 
                this.adresse = "";
                this.telephone = ""; 
                this.sexe = "Homme";
                this.password = "";
                //console.log(response.data)
                // console.log(response.message)
                // console.log(response.data.roles)
                this.notifyService.showSuccess(response.message, "Success")
              } else {
                this.isLoader = false
                this.btnName = "Créer un compte"
                this.notifyService.showError(response.message, "Erreur")
                //console.log(response.message)
              }
              
            }
          )

  }

}

