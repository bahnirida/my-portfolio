export interface ProjectModel {
    id?: string; // Optionnel pour les nouveaux projets
    name: string;
    description: string;
    status: 'Pending' | 'In Progress' | 'Completed'; // Enum possible
    startDate: string; // Format YYYY-MM-DD
    endDate?: string; // Optionnel
    client: string;
    budget: number;
    technologies: string[];
    thumbnail: string; // URL de l'image du projet
    galleryImages: string[]; // Liste des URLs des images de la galerie
    links?: string[]; // Liens vers des ressources associées
    tasks?: string[]; // Liste des tâches
    notes?: string; // Notes supplémentaires
}
