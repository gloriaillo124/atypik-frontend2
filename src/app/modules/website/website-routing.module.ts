import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteLayoutComponent } from 'src/app/layouts/website-layout/website-layout.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DestinationComponent } from './destination/destination.component';
import { HebergementComponent } from './hebergement/hebergement.component';
import { IdeesComponent } from './idees/idees.component';
import { DetailinsoliteComponent } from './detailinsolite/detailinsolite.component';
import { ReservationComponent } from './reservation/reservation.component';
import { DestinationLogementComponent } from './destination-logement/destination-logement.component';
import { HebergementLogementComponent } from './hebergement-logement/hebergement-logement.component';
import { InsprirationLogementComponent } from './inspriration-logement/inspriration-logement.component';

const routes: Routes = [
  {
    path: '',
    component: AcceuilComponent,
    children:[
      {
        path: '',
        component: AcceuilComponent
      }
    ]
  },
  {
    path: '',
    component: DestinationComponent,
    children:[
      {
        path: 'destination',
        component: DestinationComponent
      }
    ]
  },
  {
    path: '',
    component: HebergementComponent,
    children:[
      {
        path: 'hebergement',
        component: HebergementComponent
      }
    ]
  },
  {
    path: '',
    component: IdeesComponent,
    children:[
      {
        path: 'idees',
        component: IdeesComponent
      }
    ]
  },
  {
    path: '',
    component: DetailinsoliteComponent,
    children:[
      {
        path: 'detail-insolite/:id',
        component: DetailinsoliteComponent
      }
    ]
  },
  {
    path: '',
    component: DestinationLogementComponent,
    children:[
      {
        path: 'destination-insolite/:id',
        component: DestinationLogementComponent
      }
    ]
  },
  {
    path: '',
    component: HebergementLogementComponent,
    children:[
      {
        path: 'hebergement-insolite/:id',
        component: HebergementLogementComponent
      }
    ]
  },
  {
    path: '',
    component: InsprirationLogementComponent,
    children:[
      {
        path: 'inspiration-insolite/:id',
        component: InsprirationLogementComponent
      }
    ]
  },
  {
    path: '',
    component: ReservationComponent,
    children:[
      {
        path: 'reservation-insolite',
        component: ReservationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
