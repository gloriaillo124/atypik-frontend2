import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{

  constructor(
    // private notifyService : NotificationService,
    // private authService: AuthService,
    // private router : Router,
    private route : ActivatedRoute,
  ) { }

  ngOnInit(): void{
    //this.getOneLogement()
    //console.log(this.route.snapshot)
  }

}
