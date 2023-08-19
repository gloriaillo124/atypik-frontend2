export interface ReservationModel {
    id?: string;
    dateDepart: string;
    dateArrive: string;
    paiement: string;
    confirme?: string;
    fk_codePromo?: string;
    userNom?: string;
    userPrenom?: string;
    libelle?: string;
    fk_user?: string;
    fk_logement?: string;
    createdat?: string;
    userInsolite?: string;
}