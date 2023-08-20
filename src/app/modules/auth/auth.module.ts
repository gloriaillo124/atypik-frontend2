import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { MotdepasseOublierComponent } from './motdepasse-oublier/motdepasse-oublier.component';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    PartenaireComponent,
    MotdepasseOublierComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
    // FormsModule,
    // HttpClientModule
  ]
})
export class AuthModule { }
