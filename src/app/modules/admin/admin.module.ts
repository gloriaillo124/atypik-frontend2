import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { ComptesComponent } from './comptes/comptes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogementsComponent } from './logements/logements.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { CategoriesComponent } from './categories/categories.component';
import { MonProfileComponent } from './mon-profile/mon-profile.component';
import { DetailLogementComponent } from './detail-logement/detail-logement.component';

const routesAdmin: Routes = [
  {
    path: '',
    component: DashboardComponent,
    // canActivate: [AuthGuard],
    children:[
      {
        path: 'administrateur',
        component: DashboardComponent
      }
    ]
  },
  {
    path: '',
    component: ComptesComponent,
    // canActivate: [AuthGuard],
    children:[
      {
        path: 'administrateur/comptes',
        component: ComptesComponent
      }
    ]
  },
  {
    path: '',
    component: LogementsComponent,
    // canActivate: [AuthGuard],
    children:[
      {
        path: 'administrateur/logements',
        component: LogementsComponent
      }
    ]
  },
  {
    path: '',
    component: DetailLogementComponent,
    // canActivate: [AuthGuard],
    children:[
      {
        path: 'administrateur/detail-logements/:id',
        component: DetailLogementComponent
      }
    ]
  },
  {
    path: '',
    component: ReservationsComponent,
    // canActivate: [AuthGuard],
    children:[
      {
        path: 'administrateur/reservations',
        component: ReservationsComponent
      }
    ]
  },
  {
    path: '',
    component: CategoriesComponent,
    // canActivate: [AuthGuard],
    children:[
      {
        path: 'administrateur/categories',
        component: CategoriesComponent
      }
    ]
  },
  {
    path: '',
    component: MonProfileComponent,
    // canActivate: [AuthGuard],
    children:[
      {
        path: 'administrateur/mon-profile',
        component: MonProfileComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routesAdmin)],
  exports: [RouterModule],
  declarations: [
    ComptesComponent,
    DashboardComponent,
    DetailLogementComponent,
    LogementsComponent,
    MonProfileComponent,
    ReservationsComponent
  ]
})
export class AdminRoutingModule { }
