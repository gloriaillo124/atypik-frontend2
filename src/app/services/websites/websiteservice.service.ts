import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { CategorieDestinationModel } from 'src/app/models/categoriedestination.models';
import { pathCommentairesByLogementId, pathDeleteLogementOptionSite, pathDestinationAll, pathDestinationAllLimite, pathHebergementAll, pathHebergementAllLimite, pathInspirationAll, pathInspirationAllLimite, pathLogementAllLimites, pathLogementByHebergementId, pathLogementByIdDestination, pathLogementByInspirationId, pathLogementOneByIdWeb, pathLogementRecherche, pathLogementoptionByIdSite, pathOptionsAllByISite, pathSaveCommentaire, pathSaveLogementoptionSite, pathSaveReservationSite } from '../routeApi';
import { CategorieInspirationModel } from 'src/app/models/categorieinspiration.models';
import { CategorieHebergementModel } from 'src/app/models/categoriehebergement.models';
import { LogementModel } from 'src/app/models/logement.models';
import { CommentaireModel } from 'src/app/models/commentaire.models';
import { OptionModel } from 'src/app/models/option.models';
import { LogementOptionModel } from 'src/app/models/logementoption.models';

@Injectable({
  providedIn: 'root'
})
export class WebsiteserviceService {

  constructor(private http: HttpClient) { }

  //Route website

  getLogementRechercher(destinationId: string,hebergementId: string,nbPersonne: string): Observable<null>{
    
    return this.http.post(pathLogementRecherche,{destinationId,hebergementId,nbPersonne}).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getLogementAllLimiteAll(): Observable<LogementModel[]>{
    return this.http.get<LogementModel[]>(pathLogementAllLimites).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }
  

  getDestinationAll(): Observable<CategorieDestinationModel[]>{
    return this.http.get<CategorieDestinationModel[]>(pathDestinationAll).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getDestinationAllLimiteAll(): Observable<CategorieDestinationModel[]>{
    return this.http.get<CategorieDestinationModel[]>(pathDestinationAllLimite).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getLogementByIdDestinationAll(idUser: String): Observable<LogementModel[]>{
    const id = Number(idUser);
    return this.http.get<LogementModel[]>(`${pathLogementByIdDestination}/${id}`).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getInspirationAll(): Observable<CategorieInspirationModel[]>{
    return this.http.get<CategorieInspirationModel[]>(pathInspirationAll).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getInspirationAllLimiteAll(): Observable<CategorieInspirationModel[]>{
    return this.http.get<CategorieInspirationModel[]>(pathInspirationAllLimite).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getLogementByInspirationIdAll(idUser: String): Observable<LogementModel[]>{
    const id = Number(idUser);
    console.info(id)
    return this.http.get<LogementModel[]>(`${pathLogementByInspirationId}/${id}`).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getHebergementAll(): Observable<CategorieHebergementModel[]>{
    return this.http.get<CategorieHebergementModel[]>(pathHebergementAll).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getHebergementAllLimiteAll(): Observable<CategorieHebergementModel[]>{
    return this.http.get<CategorieHebergementModel[]>(pathHebergementAllLimite).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getLogementByHebergementIdAll(idUser: String): Observable<LogementModel[]>{
    const id = Number(idUser);
    //console.info(id)
    return this.http.get<LogementModel[]>(`${pathLogementByHebergementId}/${id}`).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getLogementOneById(idUser: String): Observable<LogementModel>{
    const id = Number(idUser);
    //console.info(id)
    return this.http.get<LogementModel>(`${pathLogementOneByIdWeb}/${id}`).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  createCommentaire(message: String,idLogement: String,idUser: String): Observable<null> {
    
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.post(`${pathSaveCommentaire}`,{message,idLogement,idUser},httpOptions).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )

  }

  getCommentaireByLogementIdAll(idUser: String): Observable<CommentaireModel[]>{
    const id = Number(idUser);
    console.info(id)
    return this.http.get<CommentaireModel[]>(`${pathCommentairesByLogementId}/${id}`).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getOptionsAllById(idUser: String): Observable<OptionModel[]>{
    const id = Number(idUser);
    return this.http.get<OptionModel[]>(`${pathOptionsAllByISite}/${id}`).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getlogementOptionsAllById(idUser: String): Observable<LogementOptionModel[]>{
    const id = Number(idUser);
    return this.http.get<LogementOptionModel[]>(`${pathLogementoptionByIdSite}/${id}`).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }


  createLogementOption(optionValeur: String,idLogement: String,idOption: String,idUser: String,dateDepart: String,dateArriver: String): Observable<null> {
    
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.post(`${pathSaveLogementoptionSite}`,{optionValeur,idLogement,idOption,idUser,dateDepart,dateArriver},httpOptions).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )

  }

  createReservation(optionValeur: String,idLogement: String,idOption: String,idUser: String,dateDepart: String,dateArriver: String,codePromo: String,enableCodepromo: Boolean): Observable<null> {
    
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.post(`${pathSaveReservationSite}`,{optionValeur,idLogement,idOption,idUser,dateDepart,dateArriver,codePromo,enableCodepromo},httpOptions).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )

  }

  deleteLogementOption(idUser: String): Observable<null>{
    const id = Number(idUser);
    return this.http.delete(`${pathDeleteLogementOptionSite}/${id}`).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

    //Erreur
    private handleError(error: Error, errorValue: any){
      console.error(error)
      return of(errorValue)
    }

}
