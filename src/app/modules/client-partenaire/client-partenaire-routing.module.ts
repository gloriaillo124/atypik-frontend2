import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPartenaireComponent } from './dashboard-partenaire/dashboard-partenaire.component';
import { ReservationPartenaireComponent } from './reservation-partenaire/reservation-partenaire.component';
import { LogementPartenaireComponent } from './logement-partenaire/logement-partenaire.component';
import { CategoriePartenaireComponent } from './categorie-partenaire/categorie-partenaire.component';
import { ProfilePartenaireComponent } from './mon-profile/mon-profile.component';
import { PartenaireDetailLogementComponent } from './detail-logement/detail-logement.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: DashboardPartenaireComponent,
  //   // canActivate: [AuthGuard],
  //   children:[
  //     {
  //       path: 'client-partenaire',
  //       component: DashboardPartenaireComponent
  //     }
  //   ]
  // },
  {
    path: '',
    component: LogementPartenaireComponent,
    // canActivate: [AuthGuard],
    children:[
      {
        path: 'client-partenaire',
        component: LogementPartenaireComponent
      }
    ]
  },
  {
    path: '',
    component: PartenaireDetailLogementComponent,
    // canActivate: [AuthGuard],
    children:[
      {
        path: 'client-partenaire/detail-logements/:id',
        component: PartenaireDetailLogementComponent
      }
    ]
  },
  {
    path: '',
    component: ReservationPartenaireComponent,
    // canActivate: [AuthGuard],
    children:[
      {
        path: 'client-partenaire/reservations',
        component: ReservationPartenaireComponent
      }
    ]
  },

  {
    path: '',
    component: CategoriePartenaireComponent,
    // canActivate: [AuthGuard],
    children:[
      {
        path: 'client-partenaire/categories',
        component: CategoriePartenaireComponent
      }
    ]
  },
  {
    path: '',
    component: ProfilePartenaireComponent,
    // canActivate: [AuthGuard],
    children:[
      {
        path: 'client-partenaire/mon-profile',
        component: ProfilePartenaireComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPartenaireRoutingModule { }
