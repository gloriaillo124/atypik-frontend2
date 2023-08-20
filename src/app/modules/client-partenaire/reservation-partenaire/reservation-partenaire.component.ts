import { Component, OnInit } from '@angular/core';
import { ReservationModel } from 'src/app/models/reservation.models';
import { AdminserviceService } from 'src/app/services/admin/adminservice.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-reservation-partenaire',
  templateUrl: './reservation-partenaire.component.html',
  styleUrls: ['./reservation-partenaire.component.css']
})
export class ReservationPartenaireComponent implements OnInit{

  reservationDemandList!: ReservationModel[];
  reservationOccupeList!: ReservationModel[];

  constructor(
    private notifyService : NotificationService,
    private adminService: AdminserviceService
  ) { }

  ngOnInit(): void {

   this.getAllReservationDemande();
   this.getAllReservationOccupe();

  }

  getAllReservationDemande(){
    const id = localStorage.getItem('id')!;
    this.adminService.getAllReservationDemandeAdmin(id).subscribe(
      response=> {
        this.reservationDemandList = response
        //console.log('ok')
      }
    );
  }

  getAllReservationOccupe(){
    const id = localStorage.getItem('id')!;
    this.adminService.getAllReservationOccupeAdmin(id).subscribe(
      response=> {
        this.reservationOccupeList = response
      }
    );
  }

  getReservationConfirme(id: any){
    this.adminService.getReservationConfirmeAdmin(id).subscribe(
      (response: any)=> {
        if (response.status == 1){
          this.getAllReservationDemande();
          this.getAllReservationOccupe();
          this.notifyService.showSuccess(response.message, "Success")
        }else{
          this.notifyService.showError(response.message, "Erreur")
        }
      }
    );
  }

  getReservationAnnuler(id: any){
    this.adminService.getReservationAnnulerAdmin(id).subscribe(
      (response: any)=> {
        if (response.status == 1){
          this.getAllReservationDemande();
          this.notifyService.showSuccess(response.message, "Success")
        }else{
          this.notifyService.showError(response.message, "Erreur")
        }
      }
    );
  }


}

