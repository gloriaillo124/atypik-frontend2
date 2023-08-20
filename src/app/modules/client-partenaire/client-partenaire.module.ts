import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientPartenaireRoutingModule } from './client-partenaire-routing.module';
import { ReservationPartenaireComponent } from './reservation-partenaire/reservation-partenaire.component';
import { LogementPartenaireComponent } from './logement-partenaire/logement-partenaire.component';
import { DashboardPartenaireComponent } from './dashboard-partenaire/dashboard-partenaire.component';
import { CategoriePartenaireComponent } from './categorie-partenaire/categorie-partenaire.component';
import { ProfilePartenaireComponent } from './mon-profile/mon-profile.component';
import { FormsModule } from '@angular/forms';
import { PartenaireDetailLogementComponent } from './detail-logement/detail-logement.component';


@NgModule({
  declarations: [  
    ReservationPartenaireComponent,
    LogementPartenaireComponent,
    PartenaireDetailLogementComponent,
    DashboardPartenaireComponent,
    ProfilePartenaireComponent,
    CategoriePartenaireComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClientPartenaireRoutingModule
  ]
})
export class ClientPartenaireModule { }
