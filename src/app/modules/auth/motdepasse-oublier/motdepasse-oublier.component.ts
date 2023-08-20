import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-motdepasse-oublier',
  templateUrl: './motdepasse-oublier.component.html',
  styleUrls: ['./motdepasse-oublier.component.css']
})
export class MotdepasseOublierComponent implements OnInit {

  @Input() isLoader: boolean = false;
  @Input() btnName: string = "Reinitialiser le mot de passe";
  @Input() email: string = "";
  @Input() Erroremail: string = "";
  @Input() password: string = "";
  @Input() Errorpassword: string = "";
  @Input() passwordRepeat: string = "";
  @Input() ErrorpasswordRepeat: string = "";

  emailRGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  constructor(
    private notifyService : NotificationService,
    private authService: AuthService,
    private router : Router,
  ) { }

  ngOnInit(): void{
    //this.getOneLogement()
    //console.log(this.route.snapshot)
  }

  onChangeEmail(){
    if (this.email == "" || this.email.length == 1) {
      this.Erroremail = "L'adresse email est obligatoire!"
    }else{
      if (this.emailRGEX.test(this.email)) {
        this.Erroremail = ""
        //console.info(true)
      } else {
        this.Erroremail = "L'adresse email invalide!"
        //console.info(false)
      }
    }
  }

  onChangePassword(){
    if (this.password == "" || this.password.length == 1) {
      this.Errorpassword = "Mot de passe est obligatoire!"
    }else{
      this.Errorpassword = ""
      //console.info(this.Errorpassword.length)
    }
  }

  onChangePasswordRepeat(){
    if (this.passwordRepeat == "" || this.passwordRepeat.length == 1) {
      this.ErrorpasswordRepeat = "Mot de passe est obligatoire!"
    }else{
      if (this.passwordRepeat > this.password ) {
        this.ErrorpasswordRepeat = "Les mot de passe ne correspond pas!"
      } else {
        this.ErrorpasswordRepeat = ""
      }
    }
  }

  passwordInit(){
    if (this.email == "" && this.password == "" && this.passwordRepeat == "") {
      this.Erroremail = "L'adresse email est obligatoire!"
      this.Errorpassword = "Mot de passe est obligatoire!"
      this.ErrorpasswordRepeat = "Mot de passe est obligatoire!"
    } else {
      if (this.email == "" || this.email.length == 1) {
        this.Erroremail = "L'adresse email est obligatoire!"
      }else{
        if (this.password == "" || this.password.length == 1) {
          this.Errorpassword = "Mot de passe est obligatoire!"
        }else{
          if (this.passwordRepeat == "" || this.passwordRepeat.length == 1) {
            this.ErrorpasswordRepeat = "Mot de passe est obligatoire!"
          } else {
            //console.info('goodd')
          this.isLoader = true
          this.btnName = "Traitement en cours..."
          this.authService.passwordForget(this.email, this.password).subscribe(
            (response: any)=>{
              if (response.status == 1) {
                this.isLoader = false
                this.btnName = "Reinitialiser le mot de passe"
                this.passwordRepeat = ""
                this.password = ""
                this.email = ""
                //console.log(response.data)
                // console.log(response.message)
                // console.log(response.data.roles)
                this.notifyService.showSuccess(response.message, "Mot de passe initialiser")
              } else {
                this.isLoader = false
                this.btnName = "Reinitialiser le mot de passe"
                this.notifyService.showError(response.message, "Initialisation echoué")
                //console.log(response.message)
              }
              
            }
          )
          }
          
        }
      }
      
    }
   
  }

}

