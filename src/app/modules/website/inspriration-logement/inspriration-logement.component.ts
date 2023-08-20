import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieHebergementModel } from 'src/app/models/categoriehebergement.models';
import { CategorieInspirationModel } from 'src/app/models/categorieinspiration.models';
import { LogementModel } from 'src/app/models/logement.models';
import { UrlApi } from 'src/app/services/routeApi';
import { SplashScreenService } from 'src/app/services/splash-screen.service';
import { WebsiteserviceService } from 'src/app/services/websites/websiteservice.service';

@Component({
  selector: 'app-inspriration-logement',
  templateUrl: './inspriration-logement.component.html',
  styleUrls: ['./inspriration-logement.component.css']
})
export class InsprirationLogementComponent implements OnInit{

  inspirationtList!: CategorieInspirationModel[];
  logementList!: LogementModel[];

  isLoaderHebergement: boolean = false;
  @Input() libelle: string = '';

  @Input() urlApi: string = UrlApi;

  constructor(
    private websiteService: WebsiteserviceService,
    private splashScreenService: SplashScreenService,
    private router : Router
  ) { }

  ngOnInit(): void {

   this.getAllInspirationLimites();

    this.getAllLogementByInspiration();

  }

  getAllLogementByInspiration(){
    const id =localStorage.getItem('idi');
    this.libelle = localStorage.getItem('libelleI')!
    this.websiteService.getLogementByInspirationIdAll(id!).subscribe(
      response=> {
        //this.splashScreenService.stop()
        this.logementList = response
        //console.log(response)
      }
    );
  }

  getAllInspirationLimites(){
    this.websiteService.getInspirationAllLimiteAll().subscribe(
      response=> {
        this.splashScreenService.stop()
        this.inspirationtList = response
      }
    );
  }

  onClickLogementById(item: LogementModel){
    const {id} = item
    localStorage.setItem('idRecherche',id!);
    localStorage.setItem('isReach',"0");
    this.router.navigate([`/detail-insolite/${id}`])
  }

  onClickInspirationById(item: CategorieInspirationModel){
    const {id,libelle} = item
    localStorage.setItem('idi',id!);
    localStorage.setItem('libelleI',libelle);
    this.router.navigate([`/inspiration-insolite/${id}`])
    this.getAllLogementByInspiration();
  }


  onClickBack(){
    this.router.navigate([`/idees`])
  }
}
