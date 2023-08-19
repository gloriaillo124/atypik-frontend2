import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, Observable, of, tap } from 'rxjs';
import { AuthEntity, AuthModel } from './models/auth.models';
import { pathForgetPasswordByEmail, pathLogin, pathRegisterClient, pathRegisterPartenaire } from './services/routeApi';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string | undefined;

  constructor(private http: HttpClient) { }

  connexion(authentity: AuthEntity): Observable<AuthModel> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.post<AuthModel>(pathLogin,authentity,httpOptions).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  inscription(email: string,username: string,password: string,nom: string,prenom: string,date_naissance: string,numero_rue: string,nom_rue: string,adresse: string,sexe: string,telephone: string): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.post(pathRegisterClient,{email,username,password,nom,prenom,date_naissance,numero_rue,nom_rue,adresse,sexe,telephone},httpOptions).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }


  inscriptionPartenaire(email: string,username: string,password: string,nom: string,prenom: string,date_naissance: string,numero_rue: string,nom_rue: string,adresse: string,sexe: string,telephone: string): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.post(pathRegisterPartenaire,{email,username,password,nom,prenom,date_naissance,numero_rue,nom_rue,adresse,sexe,telephone},httpOptions).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  passwordForget(email: string,password: string): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.put(`${pathForgetPasswordByEmail}/${email}`,{password},httpOptions).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  logout() {
    this.isLoggedIn = false;
  }

  private handleError(error: Error, errorValue: any){
    console.error(error)
    return of(errorValue)
  }
}
