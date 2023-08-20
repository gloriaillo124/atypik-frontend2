import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieHebergementModel } from 'src/app/models/categoriehebergement.models';
import { CommentaireModel } from 'src/app/models/commentaire.models';
import { LogementModel } from 'src/app/models/logement.models';
import { LogementOptionModel } from 'src/app/models/logementoption.models';
import { OptionModel } from 'src/app/models/option.models';
import { NotificationService } from 'src/app/services/notification.service';
import { UrlApi } from 'src/app/services/routeApi';
import { SplashScreenService } from 'src/app/services/splash-screen.service';
import { WebsiteserviceService } from 'src/app/services/websites/websiteservice.service';

@Component({
  selector: 'app-detailinsolite',
  templateUrl: './detailinsolite.component.html',
  styleUrls: ['./detailinsolite.component.css']
})
export class DetailinsoliteComponent implements OnInit{
  @ViewChild("closeModal") closeModal: any;

  hebergementList!: CategorieHebergementModel[];
  logementList!: CategorieHebergementModel[];
  commentaireList!: CommentaireModel[];

  isLoaderHebergement: boolean = false;

  logementItem!: LogementModel;

  @Input() isLoaderCommentaire: boolean = false;

  @Input() btnNameCommentaire: string = "Envoyer";

  @Input() libelleCommentaire: string = "";

  @Input() dateArrivee: string = "";
  @Input() dateDepart: string = ""; 
  @Input() libelleOption: string = "";
  @Input() optionValeur: string = "";
  @Input() codePromo: string = "";

  @Input() isLoaderReservation: boolean = false;

  @Input() btnNameReseravtion: string = "Je réserve cet insolite";

  @Input() urlApi: string = UrlApi;

  @Input() isReservation: boolean = false;
  @Input() isCheckAddOption: boolean = false; 
  @Input() isLoaderLogR : boolean = false; 
  @Input() btnNameLogR: string = "Enregistrer";

  @Input() enableCodepromo: boolean = false; 

  optionList!: OptionModel[];

  logementOptionList!: LogementOptionModel[];

  @Input() ErrorReservation: string = "";
  @Input() ErrorOptionValeur: string = "";

  @Input() ErrorDateArrivee: string = "";
  @Input() ErrorDateDepart: string = "";

  constructor(
    private websiteService: WebsiteserviceService,
    private notifyService : NotificationService,
    // private splashScreenService: SplashScreenService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {

   this.getOneLogementById();
   this.getAllCommentaireById();
   this.getAllOptions();
   this.onGetRechercheDate();

  }

  scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      //document.getElementById("navbar").style.top = "0";
      // console.log("0")
    } else {
      //document.getElementById("navbar").style.top = "-50px";
      // console.log("100px")
    }
  }

  onGetRechercheDate(){
    const isReach = localStorage.getItem('isReach');
    if (isReach == '1') {
      this.isReservation = true;
      this.dateArrivee = localStorage.getItem('dateArrivee')!;
      this.dateDepart = localStorage.getItem('dateDepart')!;
      // console.log(dateArrivee)
      // console.log(dateDepart)
    }else{
      this.isReservation = false;
    }
  }

  getOneLogementById(){
    const idRecherche = localStorage.getItem('idRecherche')!;
    this.websiteService.getLogementOneById(idRecherche).subscribe(
      response=> {
        //this.splashScreenService.stop()destinationLibelle
        this.logementItem = response
       // console.log(response)
      }
    );
  }

  getAllCommentaireById(){
    const idRecherche = localStorage.getItem('idRecherche')!;
    this.websiteService.getCommentaireByLogementIdAll(idRecherche).subscribe(
      response=> {
        //this.splashScreenService.stop()destinationLibelle
        this.commentaireList = response
       //console.log(response)
      }
    );
  }

  onCreateCommentaire(){
    // console.log(this.libelleHebergement)
    // console.log(this.description)
    const idLogement = localStorage.getItem('idRecherche')!;
    const id = localStorage.getItem('id')!;

    if (id == null) {
      this.notifyService.showWarning("Desoler vous ne pouvez pas laisser un commentaire, connectez-vous svp.!", "Erreur")
    }else{
      this.isLoaderCommentaire = true
      this.btnNameCommentaire = "Traitement en cours..."
      this.websiteService.createCommentaire(this.libelleCommentaire,idLogement, id).subscribe(
        (response: any)=>{
          if (response.status == 1) {
            this.isLoaderCommentaire = false
            this.btnNameCommentaire = "Envoyer"
            this.libelleCommentaire = ""
            this.notifyService.showSuccess(response.message, "Success")
            this.getAllCommentaireById();
          } else {
            this.isLoaderCommentaire = false
            this.btnNameCommentaire = "Envoyer"
            this.notifyService.showError(response.message, "Erreur")
            //console.log(response.message)
          }
          
        }
      )
    } 


  }

  getAllOptions(){
    const id = localStorage.getItem('idRecherche')!;
    this.websiteService.getOptionsAllById(id).subscribe(
      response=> {
        this.optionList = response
      }
    );
  }

  getAllLogementOptions(){
    const id = localStorage.getItem('idRecherche')!;
    this.websiteService.getlogementOptionsAllById(id).subscribe(
      response=> {
        this.logementOptionList = response
      }
    );
  }

  onCheckAddOption(){
    //console.log(this.checkUpdated)
    const id = localStorage.getItem('id')!;
    if (id == null) {
      this.notifyService.showWarning("Desoler vous ne pouvez pas faire une reservation, connectez-vous svp.!", "Erreur")
    } else {
      if (this.isCheckAddOption == true) {
        this.isCheckAddOption = false
        this.ErrorReservation = ''
      } else {
        this.isCheckAddOption = true
        this.ErrorReservation = ''
      }
    }

  }

  onCreateReservation(){
    // console.log(this.libelleHebergement)
    // console.log(this.description)
    const idLogement = localStorage.getItem('idRecherche')!;
    const id = localStorage.getItem('id')!;

    if (id == null) {
      this.notifyService.showWarning("Desoler vous ne pouvez pas faire une reservation, connectez-vous svp.!", "Erreur");
    }else{
      if (this.dateDepart == "") {
        this.ErrorDateDepart = "Error"
      } else {
        if (this.dateArrivee == "") {
          this.ErrorDateDepart = ""
          this.ErrorDateArrivee = "Error"
        } else {
          this.ErrorDateDepart = ""
          this.ErrorDateArrivee = ""
          this.isLoaderReservation = true
          this.btnNameReseravtion = "Traitement en cours..."
          this.websiteService.createReservation(this.optionValeur,idLogement, this.libelleOption,id,this.dateDepart,this.dateArrivee,this.codePromo,this.enableCodepromo).subscribe(
            (response: any)=>{
              if (response.status == 1) {
                this.isLoaderReservation = false
                this.btnNameReseravtion = "Je réserve cet insolite"
                this.libelleOption = ""
                this.optionValeur = ""
                this.codePromo = ""
                this.enableCodepromo = false
                this.closeModal.nativeElement.click()
                this.notifyService.showSuccess(response.message, "Success")
                //this.getAllLogementOptions();
                this.logementOptionList = []
                this.isCheckAddOption = false
              } else {
                this.isLoaderReservation = false
                this.btnNameReseravtion = "Je réserve cet insolite"
                this.notifyService.showError(response.message, "Erreur")
                //console.log(response.message)
              }
              
            }
          )
        }
      }

    } 


  }

  onSubmitOption(){
    if (this.libelleOption == "") {
      this.ErrorReservation = 'Error'
    } else {
      if (this.optionValeur == "") {
        this.ErrorReservation = ''
        this.ErrorOptionValeur = 'Error'
      } else {
        this.ErrorReservation = ''
        this.ErrorOptionValeur = ''

        const idLogement = localStorage.getItem('idRecherche')!;
        const id = localStorage.getItem('id')!;
        this.isLoaderLogR = true
        this.btnNameLogR = "Traitement en cours..."
        this.websiteService.createLogementOption(this.optionValeur,idLogement, this.libelleOption,id,this.dateDepart,this.dateArrivee).subscribe(
          (response: any)=>{
            if (response.status == 1) {
              this.isLoaderLogR = false
              this.btnNameLogR = "Enregistrer"
              this.libelleOption = ""
              this.optionValeur = ""
              this.notifyService.showSuccess(response.message, "Success")
              this.getAllLogementOptions();
            } else {
              this.isLoaderLogR = false
              this.btnNameLogR = "Enregistrer"
              this.notifyService.showError(response.message, "Erreur")
              //console.log(response.message)
            }
            
          }
        )
      }
      // this.ErrorReservation = ''

    }
  }

  onDeleteLogementOption(option: LogementOptionModel){
    const id = option.id!
    this.websiteService.deleteLogementOption(id).subscribe(
      (response: any)=>{
        this.libelleOption = ""
        this.optionValeur = ""
        this.getAllLogementOptions();
      }
    )
  }


}

