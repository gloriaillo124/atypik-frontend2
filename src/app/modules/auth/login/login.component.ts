import { Component, Input, OnInit } from '@angular/core';
import {NotificationService} from '../../../services/notification.service';
import Swal from 'sweetalert2';
import { AuthEntity, AuthModel } from 'src/app/models/auth.models';
import { AuthService } from 'src/app/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() isLoader: boolean = false;
  @Input() btnName: string = "Se connecter";
  @Input() email: string = "";
  @Input() Erroremail: string = "";
  @Input() password: string = "";
  @Input() Errorpassword: string = "";

  emailRGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  constructor(
    private notifyService : NotificationService,
    private authService: AuthService,
    private router : Router,
    private route : ActivatedRoute,
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

  login(){
    if (this.email == "" && this.password == "") {
      this.Erroremail = "L'adresse email est obligatoire!"
      this.Errorpassword = "Mot de passe est obligatoire!"
    } else {
      if (this.email == "" || this.email.length == 1) {
        this.Erroremail = "L'adresse email est obligatoire!"
      }else{
        if (this.password == "" || this.password.length == 1) {
          this.Errorpassword = "Mot de passe est obligatoire!"
        }else{
          //console.info('goodd')
          this.isLoader = true
          this.btnName = "Connexion en cours..."
          const authentity: AuthEntity = {email: this.email,password: this.password}
          this.authService.connexion(authentity).subscribe(
            (response: any)=>{
              if (response.status == 1) {
                this.isLoader = false
                this.btnName = "Se connecter"
                localStorage.setItem('email',response.data.email);
                localStorage.setItem('id',response.data.id);
                localStorage.setItem('photo',response.data.photo);
                //console.log(response.data)
                // console.log(response.message)
                // console.log(response.data.roles)
                this.notifyService.showSuccessLogin(response.message, "Connexion reussie", response.data.roles)
              } else {
                this.isLoader = false
                this.btnName = "Se connecter"
                this.notifyService.showError(response.message, "Connexion echoué")
                //console.log(response.message)
              }
              
            }
          )
        }
      }
      
    }
   
  }

  showToasterWarning(){    
    this.notifyService.showSuccess("This is warning", "tutsmake.com")
  }

}
