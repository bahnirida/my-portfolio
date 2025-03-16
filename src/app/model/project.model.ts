export interface ProjectModel {
    id?: string; // Optionnel pour les nouveaux projets
    name: string;
    description: string;
    status: 'Pending' | 'In Progress' | 'Completed' | 'Archived'; // Enum possible
    startDate: string; // Format YYYY-MM-DD
    endDate?: string; // Optionnel
    client: string;
    manager: string;
    team: string[];
    budget: number;
    technologies: string[];
    difficulty: 'Easy' | 'Medium' | 'Hard'; // Enum possible
    priority: 'Low' | 'Medium' | 'High';
    links?: string[]; // Liens vers des ressources associées
    tasks?: string[]; // Liste des tâches
    notes?: string; // Notes supplémentaires
}
