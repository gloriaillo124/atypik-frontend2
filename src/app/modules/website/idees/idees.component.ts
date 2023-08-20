import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieInspirationModel } from 'src/app/models/categorieinspiration.models';
import { SplashScreenService } from 'src/app/services/splash-screen.service';
import { WebsiteserviceService } from 'src/app/services/websites/websiteservice.service';

@Component({
  selector: 'app-idees',
  templateUrl: './idees.component.html',
  styleUrls: ['./idees.component.css']
})
export class IdeesComponent implements OnInit{

  inspirationtList!: CategorieInspirationModel[];

  isLoaderInspiration: boolean = false;

  constructor(
    private websiteService: WebsiteserviceService,
    private splashScreenService: SplashScreenService,
    private router : Router
  ) { }

  ngOnInit(): void {

    this.getAllCategorieInspiration();

  }

  getAllCategorieInspiration(){
    this.websiteService.getInspirationAll().subscribe(
      response=> {
        this.splashScreenService.stop()
        this.inspirationtList = response
      }
    );
  }

  onClickInspirationById(item: CategorieInspirationModel){
    const {id,libelle} = item
    localStorage.setItem('idi',id!);
    localStorage.setItem('libelleI',libelle);
    this.router.navigate([`/inspiration-insolite/${id}`])
  }
}
