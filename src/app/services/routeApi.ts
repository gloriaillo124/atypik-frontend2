export const UrlApi = "http://127.0.0.1:8000"

export const pathLogin = `${UrlApi}/api/security/login`
export const pathRegisterClient = `${UrlApi}/api/users/save-client`
export const pathRegisterPartenaire = `${UrlApi}/api/users/save-hote`
export const pathRegisterAdmin = `${UrlApi}/api/users/save-admin`
export const pathForgetPasswordByEmail = `${UrlApi}/api/security/updatedPasswordByEmail`

//Route Admin
export const pathAllAdminByRole = `${UrlApi}/api/admins/usersAdmin`
export const pathAllclientByRole = `${UrlApi}/api/admins/usersClient`
export const pathAllPartenaireByRole = `${UrlApi}/api/admins/usersPartenaire`
export const pathCountTableaubordAdmin = `${UrlApi}/api/admins/countTableaubordAdmin`

//Route Admin User
export const pathUserOneByIdAdmin = `${UrlApi}/api/admins/secure/userOneByIdAdmin`
export const pathUserUpdatedByIdAdmin = `${UrlApi}/api/admins/secure/userUpdatedByIdAdmin`
export const pathUserStatutById = `${UrlApi}/api/admins/secure/userEnableOrDisableAdmin`
export const pathUserUpdatedImageByIdAdmin = `${UrlApi}/api/admins/secure/userUpdatedImageAdmin`
export const pathUserDeleteById = `${UrlApi}/api/admins/secure/deleteuser`

//Route Admin Catégorie
export const pathDestinationAllAdmin = `${UrlApi}/api/admins/secure/categoriedestinationAdmin`
export const pathDestinationOneByIdAdmin = `${UrlApi}/api/admins/secure/destinationOneByIdAdmin`
export const pathSaveDestinationAdmin = `${UrlApi}/api/admins/secure/save-categoriedestinationAdmin`
export const pathUpdatedDestinationByIdAdmin = `${UrlApi}/api/admins/secure/categoriedestinationUpdatedAdmin`
export const pathDestinationDeleteByIdAdmin = `${UrlApi}/api/admins/secure/delete-categoriedestinationAdmin`

export const pathHergementAllAdmin = `${UrlApi}/api/admins/secure/categoriehebergementAdmin`
export const pathHergementOneByIdAdmin = `${UrlApi}/api/admins/secure/hebergementOneByIdAdmin`
export const pathSaveHergementAdmin = `${UrlApi}/api/admins/secure/save-categoriehebergementAdmin`
export const pathUpdatedHergementByIdAdmin = `${UrlApi}/api/admins/secure/categoriehebergementUpdatedAdmin`
export const pathHergementDeleteByIdAdmin = `${UrlApi}/api/admins/secure/delete-categoriehebergementAdmin`

export const pathInspirationAllAdmin = `${UrlApi}/api/admins/secure/categorieinspirationAdmin`
export const pathInspirationOneByIdAdmin = `${UrlApi}/api/admins/secure/inspirationOneByIdAdmin`
export const pathSaveInspirationAdmin = `${UrlApi}/api/admins/secure/save-categorieinspirationAdmin`
export const pathUpdatedInspirationByIdAdmin = `${UrlApi}/api/admins/secure/categorieinspirationUpdatedAdmin`
export const pathInspirationDeleteByIdAdmin = `${UrlApi}/api/admins/secure/delete-categorieinspirationAdmin`

//Route Admin Logement

export const pathLogementsAllAdmin = `${UrlApi}/api/admins/secure/logementsAdmin`
export const pathDetaillogementAdmin = `${UrlApi}/api/admins/secure/detail-logementAdmin`
export const pathLogementOneByIdAdmin = `${UrlApi}/api/admins/secure/logementOneByIdAdmin`
export const pathSavelogementAdminAdmin = `${UrlApi}/api/admins/secure/save-logementAdmin`
export const pathLogementUpdatedAdmin = `${UrlApi}/api/admins/secure/logementUpdatedAdmin`
export const pathUpdatedImageLogementAdmin = `${UrlApi}/api/admins/secure/updatedImageLogementAdmin`
export const pathActiveLogementAdmin = `${UrlApi}/api/admins/secure/activeLogementAdmin`
export const pathDeletelogementAdminById = `${UrlApi}/api/admins/secure/delete-logementAdmin`

//Route Admin Option
export const pathOptionsAllAdmin = `${UrlApi}/api/admins/secure/optionsAllAdmin`
export const optionAllById = `${UrlApi}/api/admins/secure/optionsAllByIdAdmin`
export const pathSaveOptionAdmin = `${UrlApi}/api/admins/secure/save-optionAdmin`
export const pathOptionUpdatedAdmin = `${UrlApi}/api/admins/secure/optionUpdatedAdmin`
export const pathDeleteOptionAdmin = `${UrlApi}/api/admins/secure/delete-optionAdmin`

//Route Website
export const pathLogementAllLimites = `${UrlApi}/api/website/logementAllLimites`
export const pathInspirationAll = `${UrlApi}/api/website/categorieinspiration`
export const pathInspirationAllLimite = `${UrlApi}/api/website/categorieinspirationLimite`
export const pathHebergementAll = `${UrlApi}/api/website/categoriehebergement`
export const pathHebergementAllLimite = `${UrlApi}/api/website/categoriehebergementLimit`
export const pathDestinationAll = `${UrlApi}/api/website/categoriedestination`
export const pathDestinationAllLimite = `${UrlApi}/api/website/categoriedestinationLimite`

export const pathLogementByIdDestination = `${UrlApi}/api/website/logementByDestinationId`
export const pathLogementByHebergementId = `${UrlApi}/api/website/logementByHebergementId`
export const pathLogementByInspirationId = `${UrlApi}/api/website/logementByInspirationId`
export const pathLogementRecherche = `${UrlApi}/api/website/logementRechercheByIdCatByIdHeb`
export const pathLogementOneByIdWeb = `${UrlApi}/api/website/logementOneByIdWeb`

export const pathOptionsAllByISite = `${UrlApi}/api/website/optionsAllByISite`
export const pathSaveLogementoptionSite = `${UrlApi}/api/website/save-logementoptionSite`
export const pathLogementoptionByIdSite = `${UrlApi}/api/website/logementoptionAllSite`
export const pathDeleteLogementOptionSite = `${UrlApi}/api/website/delete-logementOptionSite`

export const pathSaveReservationSite = `${UrlApi}/api/website/save-reservationSite`
export const pathReservationsByIdSite = `${UrlApi}/api/admins/secure/reservationsByIdAdmin`
export const pathReservationsOccupeByIdSite = `${UrlApi}/api/admins/secure/reservationsOccupeByIdAdmin`
export const pathReservationConfirmeByIdSite = `${UrlApi}/api/admins/secure/reservationConfirmeAdmin`
export const pathReservationAnnulerByIdSite = `${UrlApi}/api/admins/secure/reservationAnnulerAdmin`
export const pathReservationClotureAdmin = `${UrlApi}/api/admins/secure/reservationClotureAdmin`
export const pathReservationsClientByIdAdmin = `${UrlApi}/api/admins/secure/reservationsClientByIdAdmin`
export const pathReservationsClientOccupeByIdAdmin = `${UrlApi}/api/admins/secure/reservationsClientOccupeByIdAdmin`

//Route Commentaire 
export const pathSaveCommentaire = `${UrlApi}/api/website/save-commentaire`
export const pathCommentairesByLogementId = `${UrlApi}/api/website/commentairesSite`