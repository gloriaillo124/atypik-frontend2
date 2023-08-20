import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WebsiteRoutingModule } from './website-routing.module';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DestinationComponent } from './destination/destination.component';
import { HebergementComponent } from './hebergement/hebergement.component';
import { IdeesComponent } from './idees/idees.component';
import { ReservationComponent } from './reservation/reservation.component';
import { DetailinsoliteComponent } from './detailinsolite/detailinsolite.component';
import { DestinationLogementComponent } from './destination-logement/destination-logement.component';
import { HebergementLogementComponent } from './hebergement-logement/hebergement-logement.component';
import { InsprirationLogementComponent } from './inspriration-logement/inspriration-logement.component';


@NgModule({
  declarations: [
    AcceuilComponent,
    DestinationComponent,
    HebergementComponent,
    IdeesComponent,
    ReservationComponent,
    DetailinsoliteComponent,
    DestinationLogementComponent,
    HebergementLogementComponent,
    InsprirationLogementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
