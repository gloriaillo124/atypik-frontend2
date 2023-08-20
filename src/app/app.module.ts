import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AppPageNotFoundComponent } from './app-page-not-found/app-page-not-found.component';
import { PartenaireLayoutComponent } from './layouts/partenaire-layout/partenaire-layout.component';
import { ToggleMenu } from './layouts/website-layout/components/toggleMenu.component';
import { SplashScreenService } from './services/splash-screen.service';
import { SplashComponent } from './splash/splash.component';
import { CategoriePartenaireComponent } from './modules/client-partenaire/categorie-partenaire/categorie-partenaire.component';
import { DashboardPartenaireComponent } from './modules/client-partenaire/dashboard-partenaire/dashboard-partenaire.component';
import { DetailLogementComponent } from './modules/client-partenaire/detail-logement/detail-logement.component';
import { LogementPartenaireComponent } from './modules/client-partenaire/logement-partenaire/logement-partenaire.component';
import { MonProfileComponent } from './modules/client-partenaire/mon-profile/mon-profile.component';
import { ReservationPartenaireComponent } from './modules/client-partenaire/reservation-partenaire/reservation-partenaire.component';
import { AcceuilComponent } from './modules/website/acceuil/acceuil.component';
import { DestinationComponent } from './modules/website/destination/destination.component';
import { DestinationLogementComponent } from './modules/website/destination-logement/destination-logement.component';
import { DetailinsoliteComponent } from './modules/website/detailinsolite/detailinsolite.component';
import { HebergementComponent } from './modules/website/hebergement/hebergement.component';
import { HebergementLogementComponent } from './modules/website/hebergement-logement/hebergement-logement.component';
import { IdeesComponent } from './modules/website/idees/idees.component';
import { InsprirationLogementComponent } from './modules/website/inspriration-logement/inspriration-logement.component';
import { ReservationComponent } from './modules/website/reservation/reservation.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    WebsiteLayoutComponent,
    AuthLayoutComponent,
    ClientLayoutComponent,
    AppPageNotFoundComponent,
    PartenaireLayoutComponent,
    ToggleMenu,
    SplashComponent,
    CategoriePartenaireComponent,
    DashboardPartenaireComponent,
    DetailLogementComponent,
    LogementPartenaireComponent,
    MonProfileComponent,
    ReservationPartenaireComponent,
    AcceuilComponent,
    DestinationComponent,
    DestinationLogementComponent,
    DetailinsoliteComponent,
    HebergementComponent,
    HebergementLogementComponent,
    IdeesComponent,
    InsprirationLogementComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,   
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [SplashScreenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
