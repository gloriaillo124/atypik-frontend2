export interface UserModel {
    id?: string;
    email: string;
    username: string;
    roles?: string;
    nom: string;
    prenom: string;
    dateNaissance: string;
    numeroRue: string;
    nomRue: string;
    adresse: string;
    telephone: string;
    sexe: string;
    photo: string;
    statut?: string;
    partenaire?: string;
    logements?: string;
}