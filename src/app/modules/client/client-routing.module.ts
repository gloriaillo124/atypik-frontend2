import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ClientProfileComponent } from './mon-profile/mon-profile.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: DashboardComponent,
  //   // canActivate: [AuthGuard],
  //   children:[
  //     {
  //       path: 'client',
  //       component: DashboardComponent
  //     }
  //   ]
  // },
  {
    path: '',
    component: ReservationComponent,
    // canActivate: [AuthGuard],
    children:[
      {
        path: 'client',
        component: ReservationComponent
      }
    ]
  },
  {
    path: '',
    component: ClientProfileComponent,
    // canActivate: [AuthGuard],
    children:[
      {
        path: 'client/mon-profile',
        component: ClientProfileComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
