export interface LogementModel {
    id?: string;
    libelle: string;
    image1?: string;
    image2?: string;
    image3?: string;
    image4?: string;
    montant: string;
    description: string;
    capaciteAccueil: string;
    disponible: string;
    nombrePiece: string;
    nombreChambre: string;
    hebergementId?: string;
    destinationId?: string;
    inspirationId?: string;
    hebergementLibelle?: string;
    hebergementDescription?: string;
    destinationLibelle?: string;
    inspirationLibelle?: string;
    userId?: string;
    codePromos?: string;
    statut?: string;
    created?: string;
}