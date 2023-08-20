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
    SplashComponent
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
