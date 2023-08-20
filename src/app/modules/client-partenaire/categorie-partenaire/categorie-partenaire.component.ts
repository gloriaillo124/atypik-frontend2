import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CategorieDestinationModel } from 'src/app/models/categoriedestination.models';
import { CategorieHebergementModel } from 'src/app/models/categoriehebergement.models';
import { CategorieInspirationModel } from 'src/app/models/categorieinspiration.models';
import { AdminserviceService } from 'src/app/services/admin/adminservice.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UrlApi } from 'src/app/services/routeApi';

@Component({
  selector: 'app-categorie-partenaire',
  templateUrl: './categorie-partenaire.component.html',
  styleUrls: ['./categorie-partenaire.component.css']
})
export class CategoriePartenaireComponent implements OnInit {
  @ViewChild("closeBtnHebergement") closeBtnHebergement: any;
  @ViewChild("closeBtnDestination") closeBtnDestination: any;
  @ViewChild("closeBtnInspiration") closeBtnInspiration: any;

  isHebergement: boolean = true;
  isDestination: boolean = false;
  isInspiration: boolean = false;

  @Input() isLoaderHebergement: boolean = false;
  @Input() isLoaderDestination: boolean = false;
  @Input() isLoaderInspiration: boolean = false;

  @Input() btnNameHebergement: string = "Enregistrer";
  @Input() btnNameDestination: string = "Enregistrer";
  @Input() btnNameInspiration: string = "Enregistrer";

  @Input() libelleHebergement: string = "";
  @Input() description: string = "";

  @Input() updatedLibelleHebergement: string = "";
  @Input() idHebergement: string = "";
  @Input() updatedDescription: string = "";

  @Input() libelleDestination: string = "";
  @Input() updatedLibelleDestination: string = "";
  @Input() idDestination: string = "";

  @Input() libelleInspiration: string = "";
  @Input() updatedLibelleInspiration: string = "";
  @Input() idInspiration: string = "";

  @Input() file: any;

  @Input() urlApi: string = UrlApi;

  hebergementList!: CategorieHebergementModel[];
  destinationList!: CategorieDestinationModel[];
  inspirationList!: CategorieInspirationModel[];

  constructor(
    private notifyService : NotificationService,
    private adminService: AdminserviceService,
  ) { }

  ngOnInit(): void {

    this.getAllCategorieHebergement();

    this.getAllCategorieDestination();

    this.getAllCategorieInspiration();

  }

  onChangeTab1(){
    this.isHebergement = true
    this.isDestination = false
    this.isInspiration = false
  }

  onChangeTab2(){
    this.isHebergement = false
    this.isDestination = true
    this.isInspiration = false
  }

  onChangeTab3(){
    this.isHebergement = false
    this.isDestination = false
    this.isInspiration = true
  }

  getAllCategorieHebergement(){
    this.adminService.getAllHebergement().subscribe(
      response=> {
        this.hebergementList = response
      }
    );
  }

  getAllCategorieDestination(){
    this.adminService.getAllDestination().subscribe(
      response=> {
        this.destinationList = response
      }
    );
  }

  getAllCategorieInspiration(){
    this.adminService.getAllInspiration().subscribe(
      response=> {
        this.inspirationList = response
      }
    );
  }


  onCreateHebergement(){
    // console.log(this.libelleHebergement)
    // console.log(this.description)
    this.isLoaderHebergement = true
    this.btnNameHebergement = "Traitement en cours..."
    this.adminService.createHebergement(this.file,this.libelleHebergement, this.description).subscribe(
      (response: any)=>{
        if (response.status == 1) {
          this.isLoaderHebergement = false
          this.btnNameHebergement = "Enregistrer"
          this.libelleHebergement = ""
          this.description = ""
          this.notifyService.showSuccess(response.message, "Success")
          this.getAllCategorieHebergement();
        } else {
          this.isLoaderHebergement = false
          this.btnNameHebergement = "Enregistrer"
          this.notifyService.showError(response.message, "Erreur")
          //console.log(response.message)
        }
        
      }
    )
  }

  onLoadHebergement(item: CategorieHebergementModel){
    this.idHebergement = item.id!
    this.updatedLibelleHebergement = item.libelle
    this.updatedDescription = item.description!
  }

  onLoadDestination(item: CategorieDestinationModel){
    this.idDestination = item.id!
    this.updatedLibelleDestination = item.libelle
  }

  onLoadInspiration(item: CategorieInspirationModel){
    this.idInspiration = item.id!
    this.updatedLibelleInspiration = item.libelle
  }

  onUpdatedHebergement(){
    this.isLoaderHebergement = true
    this.btnNameHebergement = "Traitement en cours..."
    this.adminService.updatedHebergement(this.idHebergement, this.updatedLibelleHebergement,this.updatedDescription).subscribe(
      (response: any)=>{
        if (response.status == 1) {
          this.closeBtnHebergement.nativeElement.click()
          this.isLoaderHebergement = false
          this.btnNameHebergement = "Enregistrer"
          this.notifyService.showSuccess(response.message, "Success")
          this.getAllCategorieHebergement();
        } else {
          this.isLoaderHebergement = false
          this.btnNameHebergement = "Enregistrer"
          this.notifyService.showError(response.message, "Erreur")
          //console.log(response.message)
        }
        
      }
    )
  }

  onCreateDestination(){
    //console.log(this.libelleDestination)
    this.isLoaderDestination = true
    this.btnNameDestination = "Traitement en cours..."
    this.adminService.createDestination(this.libelleDestination).subscribe(
      (response: any)=>{
        if (response.status == 1) {
          this.isLoaderDestination = false
          this.btnNameDestination = "Enregistrer"
          this.libelleDestination = ""
          this.notifyService.showSuccess(response.message, "Success")
          this.getAllCategorieDestination();
        } else {
          this.isLoaderDestination = false
          this.btnNameDestination = "Enregistrer"
          this.notifyService.showError(response.message, "Erreur")
          //console.log(response.message)
        }
        
      }
    )
  }

  onUpdatedDestination(){
    //console.log(this.libelleDestination)
    this.isLoaderDestination = true
    this.btnNameDestination = "Traitement en cours..."
    this.adminService.updatedDestination(this.idDestination,this.updatedLibelleDestination).subscribe(
      (response: any)=>{
        if (response.status == 1) {
          this.closeBtnDestination.nativeElement.click()
          this.isLoaderDestination = false
          this.btnNameDestination = "Enregistrer"
          this.notifyService.showSuccess(response.message, "Success")
          this.getAllCategorieDestination();
        } else {
          this.isLoaderDestination = false
          this.btnNameDestination = "Enregistrer"
          this.notifyService.showError(response.message, "Erreur")
          //console.log(response.message)
        }
        
      }
    )
  }

  onCreateInspiration(){
    //console.log(this.libelleInspiration)
    this.isLoaderInspiration = true
    this.btnNameInspiration = "Traitement en cours..."
    this.adminService.createInspiration(this.libelleInspiration).subscribe(
      (response: any)=>{
        if (response.status == 1) {
          this.isLoaderInspiration = false
          this.btnNameInspiration = "Enregistrer"
          this.libelleInspiration = ""
          this.notifyService.showSuccess(response.message, "Success")
          this.getAllCategorieInspiration();
        } else {
          this.isLoaderInspiration = false
          this.btnNameInspiration = "Enregistrer"
          this.notifyService.showError(response.message, "Erreur")
          //console.log(response.message)
        }
        
      }
    )
  }

  onUpdatedInspiration(){
    //console.log(this.libelleInspiration)
    this.isLoaderInspiration = true
    this.btnNameInspiration = "Traitement en cours..."
    this.adminService.updatedInspiration(this.idInspiration,this.updatedLibelleInspiration).subscribe(
      (response: any)=>{
        if (response.status == 1) {
          this.closeBtnInspiration.nativeElement.click()
          this.isLoaderInspiration = false
          this.btnNameInspiration = "Enregistrer"
          this.notifyService.showSuccess(response.message, "Success")
          this.getAllCategorieInspiration();
        } else {
          this.isLoaderInspiration = false
          this.btnNameInspiration = "Enregistrer"
          this.notifyService.showError(response.message, "Erreur")
          //console.log(response.message)
        }
        
      }
    )
  }
}
