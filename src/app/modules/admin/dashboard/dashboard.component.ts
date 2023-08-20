import { Component, OnInit } from '@angular/core';
import { StatistiqueModel } from 'src/app/models/statistique.model';
import { AdminserviceService } from 'src/app/services/admin/adminservice.service';

 @Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  statistiqueList!: StatistiqueModel;

  constructor(
    private adminService: AdminserviceService,
  ) { }

  ngOnInit(): void {
    this.getAllStatistisque();
  }

  getAllStatistisque(){
    this.adminService.getStatistiques().subscribe(
      response=> {
        this.statistiqueList = response
      }
    );
  }

}
