import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieDestinationModel } from 'src/app/models/categoriedestination.models';
import { SplashScreenService } from 'src/app/services/splash-screen.service';
import { WebsiteserviceService } from 'src/app/services/websites/websiteservice.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  destinationList!: CategorieDestinationModel[];

  isLoaderDestination: boolean = false;

  constructor(
    private websiteService: WebsiteserviceService,
    private splashScreenService: SplashScreenService,
    private router : Router
  ) { }

  ngOnInit(): void {

    // this.getAllCategorieHebergement();

    this.getAllCategorieDestination();

    // this.getAllCategorieInspiration();

  }

  getAllCategorieDestination(){
    this.websiteService.getDestinationAll().subscribe(
      response=> {
        this.splashScreenService.stop()
        this.destinationList = response
      }
    );
  }

  onClickDestinationById(item: CategorieDestinationModel){
    const {id,libelle} = item
    localStorage.setItem('idD',id!);
    localStorage.setItem('libelleD',libelle);
    this.router.navigate([`/destination-insolite/${id}`])
  }

}
