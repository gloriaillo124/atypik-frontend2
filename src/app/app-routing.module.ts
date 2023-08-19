import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPageNotFoundComponent } from './app-page-not-found/app-page-not-found.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { ComptesComponent } from './modules/admin/comptes/comptes.component';
import { LogementsComponent } from './modules/admin/logements/logements.component';
import { ReservationsComponent } from './modules/admin/reservations/reservations.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { DestinationComponent } from './modules/website/destination/destination.component';
import { CategoriesComponent } from './modules/admin/categories/categories.component';
import { PartenaireComponent } from './modules/auth/partenaire/partenaire.component';
import { ReservationComponent } from './modules/client/reservation/reservation.component';
import { PartenaireLayoutComponent } from './layouts/partenaire-layout/partenaire-layout.component';
import { ReservationPartenaireComponent } from './modules/client-partenaire/reservation-partenaire/reservation-partenaire.component';
import { LogementPartenaireComponent } from './modules/client-partenaire/logement-partenaire/logement-partenaire.component';
import { CategoriePartenaireComponent } from './modules/client-partenaire/categorie-partenaire/categorie-partenaire.component';
import { MotdepasseOublierComponent } from './modules/auth/motdepasse-oublier/motdepasse-oublier.component';
import { MonProfileComponent } from './modules/admin/mon-profile/mon-profile.component';
import { DetailLogementComponent } from './modules/admin/detail-logement/detail-logement.component';
import { DetailinsoliteComponent } from './modules/website/detailinsolite/detailinsolite.component';
import { ProfilePartenaireComponent } from './modules/client-partenaire/mon-profile/mon-profile.component';
import { PartenaireDetailLogementComponent } from './modules/client-partenaire/detail-logement/detail-logement.component';
import { ClientProfileComponent } from './modules/client/mon-profile/mon-profile.component';

const routes: Routes = [
  //Route Website layout
  {
    path: '',
    component: WebsiteLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: ()=> import('./modules/website/website.module').then(m=>m.WebsiteModule)
      }
    ]
  },
  {
    path: '',
    component: WebsiteLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/destination',
        pathMatch: 'full'
      },
      {
        path: 'destination',
        loadChildren: ()=> import('./modules/website/website.module').then(m=>m.WebsiteModule)
      }
    ]
  },
  {
    path: '',
    component: WebsiteLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/detailinsolite/:id',
        pathMatch: 'full'
      },
      {
        path: 'detailinsolite/:id',
        component: DetailinsoliteComponent,
        loadChildren: ()=> import('./modules/website/website.module').then(m=>m.WebsiteModule)
      }
    ]
  },
  {
    path: '',
    component: WebsiteLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/inspiration-insolite/:id',
        pathMatch: 'full'
      },
      {
        path: 'inspiration-insolite/:id',
        loadChildren: ()=> import('./modules/website/website.module').then(m=>m.WebsiteModule)
      }
    ]
  },
  {
    path: '',
    component: WebsiteLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/hebergement-insolite/:id',
        pathMatch: 'full'
      },
      {
        path: 'hebergement-insolite/:id',
        loadChildren: ()=> import('./modules/website/website.module').then(m=>m.WebsiteModule)
      }
    ]
  },
  {
    path: '',
    component: WebsiteLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/destination-insolite/:id',
        pathMatch: 'full'
      },
      {
        path: 'destination-insolite/:id',
        loadChildren: ()=> import('./modules/website/website.module').then(m=>m.WebsiteModule)
      }
    ]
  },
  {
    path: '',
    component: WebsiteLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/reservation-insolite',
        pathMatch: 'full'
      },
      {
        path: 'reservation-insolite',
        loadChildren: ()=> import('./modules/website/website.module').then(m=>m.WebsiteModule)
      }
    ]
  },
  {
    path: '',
    component: WebsiteLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/hebergement',
        pathMatch: 'full'
      },
      {
        path: 'hebergement',
        loadChildren: ()=> import('./modules/website/website.module').then(m=>m.WebsiteModule)
      }
    ]
  },
  {
    path: '',
    component: WebsiteLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/idees',
        pathMatch: 'full'
      },
      {
        path: 'idees',
        loadChildren: ()=> import('./modules/website/website.module').then(m=>m.WebsiteModule)
      }
    ]
  },
  //Route Administrateur layout
  {
    path: '',
    component: AdminLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/administrateur',
        pathMatch: 'full'
      },
      {
        path: 'administrateur',
        loadChildren: ()=> import('./modules/admin/admin.module').then(m=>m.AdminModule)
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/administrateur/comptes',
        pathMatch: 'full'
      },
      {
        path: 'administrateur/comptes',
        component: ComptesComponent,
        loadChildren: ()=> import('./modules/admin/admin.module').then(m=>m.AdminModule)
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/administrateur/logements',
        pathMatch: 'full'
      },
      {
        path: 'administrateur/logements',
        component: LogementsComponent,
        loadChildren: ()=> import('./modules/admin/admin.module').then(m=>m.AdminModule)
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/administrateur/detail-logements/:id',
        pathMatch: 'full'
      },
      {
        path: 'administrateur/detail-logements/:id',
        component: DetailLogementComponent,
        loadChildren: ()=> import('./modules/admin/admin.module').then(m=>m.AdminModule)
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/administrateur/reservations',
        pathMatch: 'full'
      },
      {
        path: 'administrateur/reservations',
        component: ReservationsComponent,
        loadChildren: ()=> import('./modules/admin/admin.module').then(m=>m.AdminModule)
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/administrateur/categories',
        pathMatch: 'full'
      },
      {
        path: 'administrateur/categories',
        component: CategoriesComponent,
        loadChildren: ()=> import('./modules/admin/admin.module').then(m=>m.AdminModule)
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/administrateur/mon-profile',
        pathMatch: 'full'
      },
      {
        path: 'administrateur/mon-profile',
        component: MonProfileComponent,
        loadChildren: ()=> import('./modules/admin/admin.module').then(m=>m.AdminModule)
      }
    ]
  },
  //Route Client layout
  {
    path: '',
    component: ClientLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/client',
        pathMatch: 'full'
      },
      {
        path: 'client',
        loadChildren: ()=> import('./modules/client/client.module').then(m=>m.ClientModule)
      }
    ]
  },
  {
    path: '',
    component: ClientLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/client/reservations',
        pathMatch: 'full'
      },
      {
        path: 'client/reservations',
        component: ReservationComponent,
        loadChildren: ()=> import('./modules/client/client.module').then(m=>m.ClientModule)
      }
    ]
  },
  {
    path: '',
    component: ClientLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/client/mon-profile',
        pathMatch: 'full'
      },
      {
        path: 'client/mon-profile',
        component: ClientProfileComponent,
        loadChildren: ()=> import('./modules/client/client.module').then(m=>m.ClientModule)
      }
    ]
  },

  //Route Client Partenaire layout
  {
    path: '',
    component: PartenaireLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/client-partenaire',
        pathMatch: 'full'
      },
      {
        path: 'client-partenaire',
        loadChildren: ()=> import('./modules/client-partenaire/client-partenaire.module').then(m=>m.ClientPartenaireModule)
      }
    ]
  },
  {
    path: '',
    component: PartenaireLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/client-partenaire/reservations',
        pathMatch: 'full'
      },
      {
        path: 'client-partenaire/reservations',
        component: ReservationPartenaireComponent,
        loadChildren: ()=> import('./modules/client-partenaire/client-partenaire.module').then(m=>m.ClientPartenaireModule)
      }
    ]
  },
  {
    path: '',
    component: PartenaireLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/client-partenaire/logements',
        pathMatch: 'full'
      },
      {
        path: 'client-partenaire/logements',
        component: LogementPartenaireComponent,
        loadChildren: ()=> import('./modules/client-partenaire/client-partenaire.module').then(m=>m.ClientPartenaireModule)
      }
    ]
  },
  {
    path: '',
    component: PartenaireLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/client-partenaire/detail-logements/:id',
        pathMatch: 'full'
      },
      {
        path: 'client-partenaire/detail-logements/:id',
        component: PartenaireDetailLogementComponent,
        loadChildren: ()=> import('./modules/client-partenaire/client-partenaire.module').then(m=>m.ClientPartenaireModule)
      }
    ]
  },
  {
    path: '',
    component: PartenaireLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/client-partenaire/categories',
        pathMatch: 'full'
      },
      {
        path: 'client-partenaire/categories',
        component: CategoriePartenaireComponent,
        loadChildren: ()=> import('./modules/client-partenaire/client-partenaire.module').then(m=>m.ClientPartenaireModule)
      }
    ]
  },
  {
    path: '',
    component: PartenaireLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/client-partenaire/mon-profile',
        pathMatch: 'full'
      },
      {
        path: 'client-partenaire/mon-profile',
        component: ProfilePartenaireComponent,
        loadChildren: ()=> import('./modules/client-partenaire/client-partenaire.module').then(m=>m.ClientPartenaireModule)
      }
    ]
  },

  //Route Auth layout
  {
    path: '',
    component: AuthLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/connexion',
        pathMatch: 'full'
      },
      {
        path: 'connexion',
        loadChildren: ()=> import('./modules/auth/auth.module').then(m=>m.AuthModule)
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/inscription',
        pathMatch: 'full'
      },
      {
        path: 'inscription',
        component: RegisterComponent,
        loadChildren: ()=> import('./modules/auth/auth.module').then(m=>m.AuthModule)
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/mot-de-passe-oublier',
        pathMatch: 'full'
      },
      {
        path: 'mot-de-passe-oublier',
        component: MotdepasseOublierComponent,
        loadChildren: ()=> import('./modules/auth/auth.module').then(m=>m.AuthModule)
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/partenaire',
        pathMatch: 'full'
      },
      {
        path: 'partenaire',
        component: PartenaireComponent,
        loadChildren: ()=> import('./modules/auth/auth.module').then(m=>m.AuthModule)
      }
    ]
  },

  //Route Page not found
  { path: '**', component: AppPageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
