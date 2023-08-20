import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ReservationComponent } from './reservation/reservation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientProfileComponent, MonProfileComponent } from './mon-profile/mon-profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReservationComponent,
    ClientProfileComponent,
    DashboardComponent,
    MonProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
