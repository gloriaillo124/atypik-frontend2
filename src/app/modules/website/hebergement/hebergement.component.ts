import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieHebergementModel } from 'src/app/models/categoriehebergement.models';
import { UrlApi } from 'src/app/services/routeApi';
import { SplashScreenService } from 'src/app/services/splash-screen.service';
import { WebsiteserviceService } from 'src/app/services/websites/websiteservice.service';

@Component({
  selector: 'app-hebergement',
  templateUrl: './hebergement.component.html',
  styleUrls: ['./hebergement.component.css']
})
export class HebergementComponent implements OnInit{

  hebergementList!: CategorieHebergementModel[];

  isLoaderHebergement: boolean = false;

  @Input() urlApi: string = UrlApi;

  constructor(
    private websiteService: WebsiteserviceService,
    private splashScreenService: SplashScreenService,
    private router : Router
  ) { }

  ngOnInit(): void {

    this.getAllCategorieHebergement();

    // this.getAllCategorieInspiration();

  }

  getAllCategorieHebergement(){
    this.websiteService.getHebergementAll().subscribe(
      response=> {
        //this.splashScreenService.stop()
        this.hebergementList = response
      }
    );
  }

  onClickHebergementById(item: CategorieHebergementModel){
    const {id,libelle} = item
    localStorage.setItem('idh',id!);
    localStorage.setItem('libelleH',libelle);
    this.router.navigate([`/hebergement-insolite/${id}`])
  }

}

