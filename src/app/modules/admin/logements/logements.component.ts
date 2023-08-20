import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieDestinationModel } from 'src/app/models/categoriedestination.models';
import { CategorieHebergementModel } from 'src/app/models/categoriehebergement.models';
import { CategorieInspirationModel } from 'src/app/models/categorieinspiration.models';
import { LogementModel } from 'src/app/models/logement.models';
import { AdminserviceService } from 'src/app/services/admin/adminservice.service';
import { NotificationService } from 'src/app/services/notification.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-logements',
  templateUrl: './logements.component.html',
  styleUrls: ['./logements.component.css']
})
export class LogementsComponent implements OnInit{
  @ViewChild("modalHideUpdated") modalHideUpdated: any;

  logementList!: LogementModel[];

  @Input() isLoaderLogement: boolean = false;
  @Input() isErreurhebergement: boolean = false;
  @Input() isErreurdestination: boolean = false;
  @Input() isErreurinspiration: boolean = false;

  @Input() isUpdatedLoaderLogement: boolean = false;
  @Input() btnNameLogement: string = "Enregistrer";

  @Input() libelle: string = "";
  @Input() montant: string = "";
  @Input() description: string = "";
  @Input() capaciteAccueil: string = "";
  // @Input() disponible: string = "";
  @Input() nombrePiece: string = "";
  @Input() nombreChambre: string = "";
  @Input() categorie_hebergement: string = "";
  @Input() categorie_destination: string = "";
  @Input() categorie_inspiration: string = "";
  @Input() userId: string = "";
  @Input() isCodepromo: string = "Non";
  @Input() isPourcentage: string = ""

  hebergementList!: CategorieHebergementModel[];
  destinationList!: CategorieDestinationModel[];
  inspirationList!: CategorieInspirationModel[];

  @Input() updatedBtnNameLogement: string = "Enregistrer";

  @Input() updatedLibelle: string = "";
  @Input() updatedMontant: string = "";
  @Input() updatedDescription: string = "";
  @Input() updatedCapaciteAccueil: string = "";
  // @Input() disponible: string = "";
  @Input() updatedNombrePiece: string = "";
  @Input() updatedNombreChambre: string = "";
  @Input() updatedCategorie_hebergement: string = "";
  @Input() updatedCategorie_destination: string = "";
  @Input() updatedCategorie_inspiration: string = "";
  @Input() updatedUserId: string = "";
  @Input() updatedIsCodepromo: string = "Non";
  @Input() updatedIsPourcentage: string = ""
  @Input() idL: string = ""

  constructor(
    private notifyService : NotificationService,
    private adminService: AdminserviceService,
    private router : Router
  ) { }

  ngOnInit(): void {

   this.getAllLogements();

   this.getAllCategorieHebergement();

   this.getAllCategorieDestination();

   this.getAllCategorieInspiration();

   //this.getIdUser()

  }

  getAllLogements(){
    const id = localStorage.getItem('id')!;
    this.adminService.getLogementAllAdmin(id).subscribe(
      response=> {
        this.logementList = response
      }
    );
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

  getIdUser(){
    const id = localStorage.getItem('id')
    this.userId = id!;
  }

  getdetailLogement(id: string){
    this.router.navigate([`/administrateur/detail-logements/${id}`])
  }

  onChangeHebergement(){
    if (this.categorie_hebergement != "") {
      this.isErreurhebergement = false
    } 
  }

  onChangeDestination(){
    if (this.categorie_destination != "") {
      this.isErreurdestination = false
    } 
  }

  onChangeInspiration(){
    if (this.categorie_inspiration != "") {
      this.isErreurinspiration = false
    } 
  }

  onCreateLogement(){
    // console.log(this.libelleHebergement)
    // console.log(this.description)
    const disponible = "0";
    const enableCodepromo = this.isCodepromo == 'Oui' ? true : false;
    const pourcentage = this.isCodepromo == 'Oui' ? this.isPourcentage : "0";

    if (this.categorie_hebergement == "") {
      this.isErreurhebergement = true
    } else {
      if (this.categorie_destination == "") {
        // this.isErreurhebergement = false
        this.isErreurdestination = true
      } else {
        if (this.categorie_inspiration == "") {
          // this.isErreurhebergement = false
          // this.isErreurdestination = false
          this.isErreurinspiration = true
        } else {
          const userId = localStorage.getItem('id')
          this.isLoaderLogement = true
          this.btnNameLogement = "Traitement en cours..."
          this.adminService.createLogement(this.libelle,this.montant,this.description,this.capaciteAccueil,disponible,this.nombrePiece,this.nombreChambre,this.categorie_hebergement,this.categorie_destination,this.categorie_inspiration,userId!,enableCodepromo,pourcentage).subscribe(
        (response: any)=>{
          // console.log(response)
          if (response.status == 1) {
          this.isLoaderLogement = false
          this.btnNameLogement = "Enregistrer"
          this.libelle = "";
          this.montant = "";
          this.description = "";
          this.capaciteAccueil = "";
          // this.disponible = "";
          this.nombrePiece = "";
          this.nombreChambre = "";
          this.isErreurhebergement = false;
          this.isErreurdestination = false;
          this.isErreurinspiration = false;
          this.userId = "";
          this.isCodepromo = "Non";
          this.isPourcentage = ""
          this.categorie_destination = ""
          this.categorie_inspiration = ""
          this.categorie_hebergement = ""
          // this.isErreurdestination = false
          this.notifyService.showSuccess(response.message, "Success")
          this.getAllLogements();
        } else {
          this.isLoaderLogement = false
          this.btnNameLogement = "Enregistrer"
          this.notifyService.showError(response.message, "Erreur")
          //console.log(response.message)
        }
        
      }
    )
        }
      }
    }    
  }

  onClickUpdated(item: any){
    //console.log(item)
    this.idL = item.id;
    this.updatedLibelle = item.libelle;
    this.updatedMontant = item.montant;
    this.updatedDescription = item.description;
    this.updatedCapaciteAccueil = item.capaciteAccueil;
    this.updatedNombrePiece = item.nombrePiece;
    this.updatedNombreChambre = item.nombreChambre;
    this.updatedCategorie_hebergement = item.hebergementId;
    this.updatedCategorie_destination = item.destinationId;
    this.updatedCategorie_inspiration = item.inspirationId;
  }

  onUpdatedLogement(){
    // console.log(this.libelleHebergement)
    // console.log(this.description)
    // const disponible = "0";
    // const enableCodepromo = this.isCodepromo == 'Oui' ? true : false;
    // const pourcentage = this.isCodepromo == 'Oui' ? this.isPourcentage : "0";

    //const userId = localStorage.getItem('id')
          this.isUpdatedLoaderLogement = true
          this.updatedBtnNameLogement = "Traitement en cours..."

          const libelle = this.updatedLibelle;
          const montant = this.updatedMontant;
          const description = this.updatedDescription;
          const capaciteAccueil = this.updatedCapaciteAccueil;
          const nombrePiece = this.updatedNombrePiece;
          const nombreChambre = this.updatedNombreChambre;
          const categorie_hebergement = this.updatedCategorie_hebergement;
          const categorie_destination = this.updatedCategorie_destination;
          const categorie_inspiration = this.updatedCategorie_inspiration;

          this.adminService.updatedLogomentAdmin(this.idL,libelle,montant,description,capaciteAccueil,nombrePiece,nombreChambre,categorie_hebergement,categorie_destination,categorie_inspiration).subscribe(
        (response: any)=>{
          // console.log(response)
          if (response.status == 1) {
          this.isUpdatedLoaderLogement = false
          this.updatedBtnNameLogement = "Enregistrer"
          this.modalHideUpdated.nativeElement.click()
          // this.isErreurdestination = false
          this.notifyService.showSuccess(response.message, "Success")
          this.getAllLogements();
        } else {
          this.isUpdatedLoaderLogement = false
          this.updatedBtnNameLogement = "Enregistrer"
          this.notifyService.showError(response.message, "Erreur")
          //console.log(response.message)
        }
        
      }
    )

  }

  onDeleteLogementAdmin(logement: LogementModel){
    const id = logement.id!
    Swal.fire({
      title: 'Voulez-vous vraiment supprimer',
      text: `${logement.libelle}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
    }).then((result) => {
      if (result.value) {
        this.adminService.deleteLogement(id).subscribe(
          (response: any)=>{
            if (response.status=='1') {
              this.notifyService.showSuccess('Suppeimer!', 'Supprimer avec success.');
              this.getAllLogements();
            }else{
              this.notifyService.showError(response.message, 'Suppression impossible');
            }
          }
        )
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.notifyService.showError('Annuler', 'Suppression annuler');
      }
    });
  }

  getReservationCloture(id: any){
    this.adminService.getReservationClotureAdmin(id).subscribe(
      (response: any)=> {
        if (response.status == 1){
          this.getAllLogements();
          this.notifyService.showSuccess(response.message, "Success")
        }else{
          this.notifyService.showError(response.message, "Erreur")
        }
      }
    );
  }

}
