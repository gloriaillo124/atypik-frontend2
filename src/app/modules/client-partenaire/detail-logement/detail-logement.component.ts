import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentaireModel } from 'src/app/models/commentaire.models';
import { LogementModel } from 'src/app/models/logement.models';
import { OptionModel } from 'src/app/models/option.models';
import { AdminserviceService } from 'src/app/services/admin/adminservice.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UrlApi } from 'src/app/services/routeApi';
import { WebsiteserviceService } from 'src/app/services/websites/websiteservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-logement',
  templateUrl: './detail-logement.component.html',
  styleUrls: ['./detail-logement.component.css']
})
export class PartenaireDetailLogementComponent implements OnInit{
  @ViewChild("fileInputImage1") fileInputImage1: any;
  @ViewChild("fileInputImage2") fileInputImage2: any;
  @ViewChild("fileInputImage3") fileInputImage3: any;
  @ViewChild("fileInputImage4") fileInputImage4: any;

  @Input() urlApi: string = UrlApi;

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

  @Input() image1: string = "";
  @Input() image2: string = "";
  @Input() image3: string = "";
  @Input() image4: string = "";

  @Input() btnNameOption: string = "Enregistrer";
  @Input() libelleOption: string = "";
  @Input() isLoaderOption: boolean = false;

  isSizeFile: Number = 1048576;

  @Input() btnName1: string = "Ajouter l'image 1";
  @Input() btnName2: string = "Ajouter l'image 2";
  @Input() btnName3: string = "Ajouter l'image 3";
  @Input() btnName4: string = "Ajouter l'image 4";

  @Input() isLoaderImg1: boolean = false;
  @Input() isLoaderImg2: boolean = false;
  @Input() isLoaderImg3: boolean = false;
  @Input() isLoaderImg4: boolean = false;

  optionList!: OptionModel[];
  commentaireList!: CommentaireModel[];

  constructor(
    private notifyService : NotificationService,
    private adminService: AdminserviceService,
    private websiteService: WebsiteserviceService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void{
    this.getOneLogement()
    this.getAllOptions()
    this.getAllCommentaireById()
  }

  getOneLogement(){
    const id = this.route.snapshot.paramMap.get('id')
    //console.log(this.route.snapshot)
    this.adminService.getLogementDetailAdmin(id!).subscribe(
      (response:any)=> {
        const logement: LogementModel = response.logement
        this.libelle = logement.libelle
        this.montant = logement.montant
        this.description = logement.description
        this.capaciteAccueil = logement.capaciteAccueil
        this.nombrePiece = logement.nombrePiece
        this.nombreChambre = logement.nombreChambre
        this.categorie_hebergement = response.hebergement.libelle
        this.categorie_destination = response.destination.libelle
        this.categorie_inspiration = response.inspiration.libelle
        this.image1 = logement.image1!
        this.image2 = logement.image2!
        this.image3 = logement.image3!
        this.image4 = logement.image4!
        //console.log(response.logement)
      }
    );
  }

  getAllOptions(){
    const id = this.route.snapshot.paramMap.get('id')!;
    this.adminService.getOptionsAllById(id).subscribe(
      response=> {
        this.optionList = response
      }
    );
  }

  getAllCommentaireById(){
    const id = this.route.snapshot.paramMap.get('id')!;
    this.websiteService.getCommentaireByLogementIdAll(id).subscribe(
      response=> {
        //this.splashScreenService.stop()destinationLibelle
        this.commentaireList = response
       //console.log(response)
      }
    );
  }

  onSubmitOption(){
    const logement_id = this.route.snapshot.paramMap.get('id')!
    this.isLoaderOption = true
    this.btnNameOption = "Traitement en cours..."

    this.adminService.createOption(this.libelleOption, logement_id).subscribe(
      (response: any)=>{
        // console.log(response)
        if (response.status == 1) {
        this.isLoaderOption = false
        this.btnNameOption = "Enregistrer"
        this.libelleOption = "";
        this.notifyService.showSuccess(response.message, "Success")
        this.getAllOptions();
      } else {
        this.isLoaderOption = false
        this.btnNameOption = "Enregistrer"
        this.notifyService.showError(response.message, "Erreur")
        //console.log(response.message)
      }
    });
  }

  onDeleteOption(option: OptionModel){
    const id = option.id!
    Swal.fire({
      title: 'Voulez-vous vraiment supprimer',
      text: `${option.libelle}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
    }).then((result) => {
      if (result.value) {
        this.adminService.deleteOption(id).subscribe(
          (response: any)=>{
            if (response.status=='1') {
              this.notifyService.showSuccess('Suppeimer!', 'Supprimer avec success.');
              this.getAllOptions();
            }else{
              this.notifyService.showError('Annuler', 'Vous ne pouvez pas');
            }
          }
        )
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.notifyService.showError('Annuler', 'Suppression annuler');
      }
    });
  }

  onClickFile1(){
    this.fileInputImage1.nativeElement.click()
  }

  onClickFile2(){
    this.fileInputImage2.nativeElement.click()
  }

  onClickFile3(){
    this.fileInputImage3.nativeElement.click()
  }

  onClickFile4(){
    this.fileInputImage4.nativeElement.click()
  }

  onChangeFile1(event: any){
    const file = event.target.files[0]
    const id = this.route.snapshot.paramMap.get('id')
    const typeImg = "image1"
    
    if (file.size > this.isSizeFile) {
      //console.log(file.size)
      this.notifyService.showError('Votre image est trop lourd, le poid minimun est de 1MB','Erreur d\'image');
    } else {
      //console.log('size is ok')
      this.isLoaderImg1 = true
      this.adminService.updatedImageLogement(file,id, typeImg).subscribe(
        (response: any) => {
          if (response.status == 1){
            //console.log(response)
            this.isLoaderImg1 = false
            this.notifyService.showSuccess(response.message, "Success")
            this.getOneLogement();
          }else{   
            this.isLoaderImg1 = false       
            this.notifyService.showError(response.message, "Erreur")
          }
        }
      );
    }
  }

  onChangeFile2(event: any){
    const file = event.target.files[0]
    const id = this.route.snapshot.paramMap.get('id')
    const typeImg = "image2"

    if (file.size > this.isSizeFile) {
      //console.log(file.size)
      this.notifyService.showError('Votre image est trop lourd, le poid minimun est de 1MB','Erreur d\'image');
    } else {
      //console.log('size is ok')
      this.isLoaderImg2 = true
      this.adminService.updatedImageLogement(file,id, typeImg).subscribe(
        (response: any) => {
          if (response.status == 1){
            //console.log(response)
            this.isLoaderImg2 = false
            this.notifyService.showSuccess(response.message, "Success")
            this.getOneLogement();
          }else{   
            this.isLoaderImg2 = false       
            this.notifyService.showError(response.message, "Erreur")
          }
        }
      );
    }

  }

  onChangeFile3(event: any){
    const file = event.target.files[0]
    const id = this.route.snapshot.paramMap.get('id')
    const typeImg = "image3"

    if (file.size > this.isSizeFile) {
      //console.log(file.size)
      this.notifyService.showError('Votre image est trop lourd, le poid minimun est de 1MB','Erreur d\'image');
    } else {
      //console.log('size is ok')
      this.isLoaderImg3 = true
      this.adminService.updatedImageLogement(file,id, typeImg).subscribe(
        (response: any) => {
          if (response.status == 1){
            //console.log(response)
            this.isLoaderImg3 = false
            this.notifyService.showSuccess(response.message, "Success")
            this.getOneLogement();
          }else{   
            this.isLoaderImg3 = false       
            this.notifyService.showError(response.message, "Erreur")
          }
        }
      );
    }

  }

  onChangeFile4(event: any){
    const file = event.target.files[0]
    const id = this.route.snapshot.paramMap.get('id')
    const typeImg = "image4"

    if (file.size > this.isSizeFile) {
      //console.log(file.size)
      this.notifyService.showError('Votre image est trop lourd, le poid minimun est de 1MB','Erreur d\'image');
    } else {
      //console.log('size is ok')
      this.isLoaderImg4 = true
      this.adminService.updatedImageLogement(file,id, typeImg).subscribe(
        (response: any) => {
          if (response.status == 1){
            //console.log(response)
            this.isLoaderImg4 = false
            this.notifyService.showSuccess(response.message, "Success")
            this.getOneLogement();
          }else{   
            this.isLoaderImg4 = false       
            this.notifyService.showError(response.message, "Erreur")
          }
        }
      );
    }

  }

}

