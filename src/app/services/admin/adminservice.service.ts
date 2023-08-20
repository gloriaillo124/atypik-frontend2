import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { UserModel } from 'src/app/models/user.models';
import { optionAllById, pathAllAdminByRole, pathAllPartenaireByRole, pathAllclientByRole, pathCountTableaubordAdmin, pathDeleteOptionAdmin, pathDeletelogementAdminById, pathDestinationAllAdmin, pathDetaillogementAdmin, pathHergementAllAdmin, pathInspirationAllAdmin, pathLogementUpdatedAdmin, pathLogementsAllAdmin, pathOptionsAllAdmin, pathReservationAnnulerByIdSite, pathReservationClotureAdmin, pathReservationConfirmeByIdSite, pathReservationsByIdSite, pathReservationsClientByIdAdmin, pathReservationsClientOccupeByIdAdmin, pathReservationsOccupeByIdSite, pathSaveDestinationAdmin, pathSaveHergementAdmin, pathSaveInspirationAdmin, pathSaveOptionAdmin, pathSavelogementAdminAdmin, pathUpdatedDestinationByIdAdmin, pathUpdatedHergementByIdAdmin, pathUpdatedImageLogementAdmin, pathUpdatedInspirationByIdAdmin, pathUserDeleteById, pathUserOneByIdAdmin, pathUserUpdatedByIdAdmin, pathUserUpdatedImageByIdAdmin } from '../routeApi';
import { CategorieHebergementModel } from 'src/app/models/categoriehebergement.models';
import { CategorieDestinationModel } from 'src/app/models/categoriedestination.models';
import { CategorieInspirationModel } from 'src/app/models/categorieinspiration.models';
import { LogementModel } from 'src/app/models/logement.models';
import { OptionModel } from 'src/app/models/option.models';
import { ReservationModel } from 'src/app/models/reservation.models';
import { StatistiqueModel } from 'src/app/models/statistique.model';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http: HttpClient) { }

  //Route User

  getStatistiques(): Observable<StatistiqueModel>{
    return this.http.get<StatistiqueModel>(pathCountTableaubordAdmin).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getUsersAllAdmin(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(pathAllAdminByRole).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getUsersAllClients(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(pathAllclientByRole).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getUsersAllPartenaires(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(pathAllPartenaireByRole).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  //Route Categorie

  getAllHebergement(): Observable<CategorieHebergementModel[]>{
    return this.http.get<CategorieHebergementModel[]>(pathHergementAllAdmin).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getAllDestination(): Observable<CategorieDestinationModel[]>{
    return this.http.get<CategorieDestinationModel[]>(pathDestinationAllAdmin).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getAllInspiration(): Observable<CategorieInspirationModel[]>{
    return this.http.get<CategorieInspirationModel[]>(pathInspirationAllAdmin).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getOptionsAll(): Observable<OptionModel[]>{
    return this.http.get<OptionModel[]>(pathOptionsAllAdmin).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getOptionsAllById(idUser: String): Observable<OptionModel[]>{
    const id = Number(idUser);
    return this.http.get<OptionModel[]>(`${optionAllById}/${id}`).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  updatedUser(idUser: String, email: String,username: String,nom: String,prenom: String,numeroRue: String,nomRue: String,adresse: String,telephone: String): Observable<null> {
    const id = Number(idUser);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.put(`${pathUserUpdatedByIdAdmin}/${id}`,{email,username,nom,prenom,numeroRue,nomRue,adresse,telephone},httpOptions).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )

  }


  createHebergement(file: any,libelle: any, description: any): Observable<null> {
    
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    const formData = new FormData()
    formData.append('file', file)
    formData.append('libelle', libelle)
    formData.append('description', description)

    return this.http.post(`${pathSaveHergementAdmin}`,formData).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )

  }

  createOption(libelle: String,logement_id: String): Observable<null> {
    
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.post(`${pathSaveOptionAdmin}`,{libelle,logement_id},httpOptions).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )

  }

  updatedHebergement(idCategorie: string, libelle: String, description: String): Observable<null> {
    const id = Number(idCategorie);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.put(`${pathUpdatedHergementByIdAdmin}/${id}`,{libelle, description},httpOptions).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )

  }

  createDestination(libelle: String): Observable<null> {
    
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.post(`${pathSaveDestinationAdmin}`,{libelle},httpOptions).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )

  }

  updatedDestination(idCategorie: string,libelle: String): Observable<null> {
    const id = Number(idCategorie);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.put(`${pathUpdatedDestinationByIdAdmin}/${id}`,{libelle},httpOptions).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )

  }

  createInspiration(libelle: String): Observable<null> {
    
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.post(`${pathSaveInspirationAdmin}`,{libelle},httpOptions).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )

  }

  updatedInspiration(idCategorie: string,libelle: String): Observable<null> {
    const id = Number(idCategorie);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.put(`${pathUpdatedInspirationByIdAdmin}/${id}`,{libelle},httpOptions).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )

  }


  deleteUser(idUser: String): Observable<null>{
    const id = Number(idUser);
    return this.http.delete(`${pathUserDeleteById}/${id}`).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  //Route Logoment

  getLogementAllAdmin(idUser: String): Observable<LogementModel[]>{
    const id = Number(idUser);
    return this.http.get<LogementModel[]>(`${pathLogementsAllAdmin}/${id}`).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getLogementDetailAdmin(idUser: String): Observable<null>{
    const id = Number(idUser);
    return this.http.get(`${pathDetaillogementAdmin}/${id}`).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getOneUserAdmin(idUser: String): Observable<UserModel>{
    const id = Number(idUser);
    return this.http.get<UserModel>(`${pathUserOneByIdAdmin}/${id}`).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  updatedLogomentAdmin(idL: string,libelle: string,montant: string,description: string,capaciteAccueil: string,nombrePiece: string,nombreChambre: string,categorie_hebergement: string,categorie_destination: string,categorie_inspiration: string): Observable<null> {
    const id = Number(idL);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.put(`${pathLogementUpdatedAdmin}/${id}`,{libelle,montant,description,capaciteAccueil,nombrePiece,nombreChambre, categorie_hebergement,categorie_destination,categorie_inspiration},httpOptions).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )

  }

  updatedImageUser(file: any,id: any): Observable<null> {
    
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    //console.log('updatedImageUser ')
    const formData = new FormData()
    formData.append('file', file)
    formData.append('id', id)
    //console.log('createLogement '+userId)
    return this.http.post(`${pathUserUpdatedImageByIdAdmin}`,formData).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  createLogement(libelle: string,montant: string,description: string,capaciteAccueil: string,disponible: string,nombrePiece: string,nombreChambre: string,categorie_hebergement: string,categorie_destination: string,categorie_inspiration: string,userId: string,enableCodepromo: boolean,pourcentage: string): Observable<null> {
    
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    //console.log('createLogement '+userId)
    return this.http.post(`${pathSavelogementAdminAdmin}`,{libelle,montant,description,capaciteAccueil,disponible,nombrePiece,nombreChambre,categorie_hebergement,categorie_destination,categorie_inspiration,userId,enableCodepromo,pourcentage},httpOptions).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  updatedImageLogement(file: any,id: any,typeImg: any): Observable<null> {
    
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    //console.log('updatedImageUser ')
    const formData = new FormData()
    formData.append('file', file)
    formData.append('id', id)
    formData.append('typeImg', typeImg)
    //console.log('createLogement '+userId)
    return this.http.post(`${pathUpdatedImageLogementAdmin}`,formData).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  deleteLogement(idUser: String): Observable<null>{
    const id = Number(idUser);
    return this.http.delete(`${pathDeletelogementAdminById}/${id}`).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  //Option

  deleteOption(idUser: String): Observable<null>{
    const id = Number(idUser);
    return this.http.delete(`${pathDeleteOptionAdmin}/${id}`).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  //Reservation
  getAllReservationDemandeAdmin(idUser: String): Observable<ReservationModel[]>{
    const id = Number(idUser);
    return this.http.get<ReservationModel[]>(`${pathReservationsByIdSite}/${id}`).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getAllReservationOccupeAdmin(idUser: String): Observable<ReservationModel[]>{
    const id = Number(idUser);
    return this.http.get<ReservationModel[]>(`${pathReservationsOccupeByIdSite}/${id}`).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getAllReservationClientOccupeAdmin(idUser: String): Observable<ReservationModel[]>{
    const id = Number(idUser);
    return this.http.get<ReservationModel[]>(`${pathReservationsClientOccupeByIdAdmin}/${id}`).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getAllReservationClientAdmin(idUser: String): Observable<ReservationModel[]>{
    const id = Number(idUser);
    return this.http.get<ReservationModel[]>(`${pathReservationsClientByIdAdmin}/${id}`).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getReservationConfirmeAdmin(idUser: String): Observable<null>{
    const id = Number(idUser);
    const confirme = "1"
    return this.http.put(`${pathReservationConfirmeByIdSite}/${id}`,{confirme}).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getReservationAnnulerAdmin(idUser: String): Observable<null>{
    const id = Number(idUser);
    const confirme = "2"
    return this.http.put(`${pathReservationAnnulerByIdSite}/${id}`,{confirme}).pipe(
      tap((response)=>response),
      catchError((error)=> this.handleError(error, null))
    )
  }

  getReservationClotureAdmin(idUser: String): Observable<null>{
    const id = Number(idUser);
    const confirme = "1"
    return this.http.put(`${pathReservationClotureAdmin}/${id}`,{confirme}).pipe(
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
