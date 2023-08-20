import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieDestinationModel } from 'src/app/models/categoriedestination.models';
import { LogementModel } from 'src/app/models/logement.models';
import { UrlApi } from 'src/app/services/routeApi';
import { SplashScreenService } from 'src/app/services/splash-screen.service';
import { WebsiteserviceService } from 'src/app/services/websites/websiteservice.service';

@Component({
  selector: 'app-destination-logement',
  templateUrl: './destination-logement.component.html',
  styleUrls: ['./destination-logement.component.css']
})
export class DestinationLogementComponent implements OnInit{

  logementList!: LogementModel[];
  destinationList!: CategorieDestinationModel[];

  isLoaderInspiration: boolean = false;
  @Input() libelle: string = '';

  @Input() urlApi: string = UrlApi;

  constructor(
    private websiteService: WebsiteserviceService,
    private splashScreenService: SplashScreenService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.getAllLogementByIdDestination();
    this.getAllDestinationLimites();

  }

  getAllLogementByIdDestination(){
    //const id = this.route.snapshot.paramMap.get('id')
    const id =localStorage.getItem('idD');
    this.libelle = localStorage.getItem('libelleD')!;
    this.websiteService.getLogementByIdDestinationAll(id!).subscribe(
      response=> {
        //this.splashScreenService.stop()
        this.logementList = response
        //console.log(response)
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
    this.getAllLogementByIdDestination();
  }

  onClickBack(){
    this.router.navigate([`/destination`])
  }

  onClickDetail(){
    this.router.navigate([`/destination`])
  }

}
