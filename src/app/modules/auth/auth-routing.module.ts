import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { MotdepasseOublierComponent } from './motdepasse-oublier/motdepasse-oublier.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children:[
      {
        path: 'connexion',
        component: LoginComponent
      }
    ]
  },
  {
    path: '',
    component: RegisterComponent,
    children:[
      {
        path: 'inscription',
        component: RegisterComponent
      }
    ]
  },
  {
    path: '',
    component: PartenaireComponent,
    children:[
      {
        path: 'partenaire',
        component: PartenaireComponent
      }
    ]
  },
  {
    path: '',
    component: MotdepasseOublierComponent,
    children:[
      {
        path: 'mot-de-passe-oublier',
        component: MotdepasseOublierComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
