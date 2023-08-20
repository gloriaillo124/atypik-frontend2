import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieDestinationModel } from 'src/app/models/categoriedestination.models';
import { CategorieHebergementModel } from 'src/app/models/categoriehebergement.models';
import { CategorieInspirationModel } from 'src/app/models/categorieinspiration.models';
import { LogementModel } from 'src/app/models/logement.models';
import { NotificationService } from 'src/app/services/notification.service';
import { UrlApi } from 'src/app/services/routeApi';
import { SplashScreenService } from 'src/app/services/splash-screen.service';
import { WebsiteserviceService } from 'src/app/services/websites/websiteservice.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit{

  logementList!: LogementModel[];
  destinationList!: CategorieDestinationModel[];
  hebergementList!: CategorieHebergementModel[];

  destinationListAll!: CategorieDestinationModel[];
  hebergementListAll!: CategorieHebergementModel[];

  isLoaderInspiration: boolean = false;

  @Input() isLoader: boolean = false;
  @Input() btnName: string = "RECHERCHER";

  @Input() destinationId: string = ""; 
  @Input() hebergementId: string = "";
  @Input() nbPersonne: string = ""; 
  @Input() dateArrivee: string = "";
  @Input() dateDepart: string = ""; 

  @Input() ErrorDestinationId: string = "";
  @Input() ErrorHebergementId: string = "";
  @Input() ErrorNbPersonne: string = "";
  @Input() ErrorDateArrivee: string = "";
  @Input() ErrorDateDepart: string = "";

  @Input() urlApi: string = UrlApi;

  constructor(
    private websiteService: WebsiteserviceService,
    private splashScreenService: SplashScreenService,
    private notifyService : NotificationService,
    private router : Router
  ) { }

  ngOnInit(): void {

    this.getAllCategorieDestination();
    this.getAllCategorieHebergement();
    this.getAllLogementsLimites();
    this.getAllDestinationLimites();
    this.getAllHebergementLimites();

  }

  getAllCategorieDestination(){
    this.websiteService.getDestinationAll().subscribe(
      response=> {
        this.splashScreenService.stop()
        this.destinationListAll = response
      }
    );
  }

  getAllCategorieHebergement(){
    this.websiteService.getHebergementAll().subscribe(
      response=> {
        //this.splashScreenService.stop()
        this.hebergementListAll = response
      }
    );
  }

  getAllLogementsLimites(){
    this.websiteService.getLogementAllLimiteAll().subscribe(
      response=> {
        this.splashScreenService.stop()
        this.logementList = response
      }
    );
  }

  getAllDestinationLimites(){
    this.websiteService.getDestinationAllLimiteAll().subscribe(
      response=> {
        this.splashScreenService.stop()
        this.destinationList = response
      }
    );
  }

  getAllHebergementLimites(){
    this.websiteService.getHebergementAllLimiteAll().subscribe(
      response=> {
        this.splashScreenService.stop()
        this.hebergementList = response
      }
    );
  }

  onSubmitRecherche(){
    // console.log('test')
    if (this.destinationId=="") {
      this.ErrorDestinationId = "error"
    } else {
      if (this.hebergementId=="") {
        this.ErrorHebergementId = "error"
        this.ErrorDestinationId = ""
      } else {
        if (this.nbPersonne=="") {
          this.ErrorNbPersonne = "error"
          this.ErrorHebergementId = ""
          this.ErrorDestinationId = ""
        } else {
          if (this.dateArrivee=="") {
            this.ErrorDateArrivee = "error"
            this.ErrorNbPersonne = ""
            this.ErrorHebergementId = ""
            this.ErrorDestinationId = ""
          } else {
            if (this.dateDepart=="") {
              this.ErrorDateDepart = "error"
              this.ErrorDateArrivee = ""
              this.ErrorNbPersonne = ""
              this.ErrorHebergementId = ""
              this.ErrorDestinationId = ""
            } else {
              this.ErrorDateDepart = ""
              this.ErrorDateArrivee = ""
              this.ErrorNbPersonne = ""
              this.ErrorHebergementId = ""
              this.ErrorDestinationId = ""
              this.isLoader = true
              this.btnName = "Recherche en cours..."
              //const authentity: AuthEntity = {email: this.email,password: this.password}
              this.websiteService.getLogementRechercher(this.destinationId,this.hebergementId,this.nbPersonne).subscribe(
                (response: any)=>{
                  // console.log(response)
                  //console.log(response.data.length)
                  // this.isLoader = false
                  if (response.data == null) {
                    this.isLoader = false
                    this.btnName = "RECHERCHER"
                    this.notifyService.showError('Nous avons pas pu trouvé un insolite selon votre recherche', "Aucun insolite")
                    //console.log(response)
                  } else {
                    this.isLoader = false
                    this.btnName = "RECHERCHER"
                    localStorage.setItem('idRecherche',response.data.id);
                    localStorage.setItem('dateArrivee',this.dateArrivee);
                    localStorage.setItem('dateDepart',this.dateDepart);
                    localStorage.setItem('isReach',"1");
                    this.router.navigate([`/detail-insolite/${response.data.id}`])
                    this.destinationId = ""
                    this.hebergementId = ""
                    this.nbPersonne = ""
                    this.dateArrivee = ""
                    this.dateDepart = ""
                    // console.log(response.data.id)
                    // console.log(this.dateArrivee)
                    // console.log(this.dateDepart)
                  }
                  
                }
              )
             
            }
          }
        }
      }
    }
  }

  onClickLogementById(item: LogementModel){
    const {id} = item
    localStorage.setItem('idRecherche',id!);
    localStorage.setItem('isReach',"0");
    this.router.navigate([`/detail-insolite/${id}`])
  }

  onClickDestinationById(item: CategorieDestinationModel){
    const {id,libelle} = item
    localStorage.setItem('idD',id!);
    localStorage.setItem('libelleD',libelle);
    this.router.navigate([`/destination-insolite/${id}`])
  }

  onClickHebergementById(item: CategorieHebergementModel){
    const {id,libelle} = item
    localStorage.setItem('idh',id!);
    localStorage.setItem('libelleH',libelle);
    this.router.navigate([`hebergement-insolite`,id])
  }

  onClickInspirationtById(item: CategorieInspirationModel){
    const {id,libelle} = item
    localStorage.setItem('idi',id!);
    localStorage.setItem('libelleI',libelle);
    this.router.navigate([`/inspirationt-insolite/${id}`])
  }

}

