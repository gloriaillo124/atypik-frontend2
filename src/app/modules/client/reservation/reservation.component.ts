import { Component, OnInit } from '@angular/core';
import { ReservationModel } from 'src/app/models/reservation.models';
import { AdminserviceService } from 'src/app/services/admin/adminservice.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{

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
    this.adminService.getAllReservationClientAdmin(id).subscribe(
      response=> {
        this.reservationDemandList = response
        //console.log('ok')
      }
    );
  }

  getAllReservationOccupe(){
    const id = localStorage.getItem('id')!;
    this.adminService.getAllReservationClientOccupeAdmin(id).subscribe(
      response=> {
        this.reservationOccupeList = response
      }
    );
  }

}

