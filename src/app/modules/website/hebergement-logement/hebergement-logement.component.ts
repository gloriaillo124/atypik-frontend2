import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CategorieHebergementModel } from 'src/app/models/categoriehebergement.models';
import { LogementModel } from 'src/app/models/logement.models';
import { UrlApi } from 'src/app/services/routeApi';
import { SplashScreenService } from 'src/app/services/splash-screen.service';
import { WebsiteserviceService } from 'src/app/services/websites/websiteservice.service';

@Component({
  selector: 'app-hebergement-logement',
  templateUrl: './hebergement-logement.component.html',
  styleUrls: ['./hebergement-logement.component.css']
})
export class HebergementLogementComponent implements OnInit{

  hebergementList!: CategorieHebergementModel[];
  logementList!: LogementModel[];

  isLoaderHebergement: boolean = false;
  @Input() libelle: string = '';

  @Input() urlApi: string = UrlApi;

  constructor(
    private websiteService: WebsiteserviceService,
    private splashScreenService: SplashScreenService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {

   this.getAllHebergementLimites();

    this.getAllLogementByHebergement();
    // const id = this.route.snapshot.paramMap.get('id')
    // console.log(id)

  }

  getAllLogementByHebergement(){
    // const id = this.route.snapshot.paramMap.get('id')
    // console.log(id)
    const id =localStorage.getItem('idh');
    this.libelle = localStorage.getItem('libelleH')!
    //console.log(id)
    this.websiteService.getLogementByHebergementIdAll(id!).subscribe(
      response=> {
        //this.splashScreenService.stop()
        this.logementList = response
        //console.log(response)
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

  onClickLogementById(item: LogementModel){
    const {id} = item
    localStorage.setItem('idRecherche',id!);
    localStorage.setItem('isReach',"0");
    this.router.navigate([`/detail-insolite/${id}`])
  }

  onClickHebergementById(item: CategorieHebergementModel){
    const {id,libelle} = item
    localStorage.setItem('idh',id!);
    localStorage.setItem('libelleH',libelle);
    this.router.navigate([`/hebergement-insolite/${id}`])
    this.getAllLogementByHebergement();
  }


  onClickBack(){
    //localStorage.clear()
    this.router.navigate([`/hebergement`])
  }


}

