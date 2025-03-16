import { db } from "@/app/lib/firebase";
import {addDoc, collection, deleteDoc, doc, getDocs, updateDoc} from "firebase/firestore";
import {ProjectModel} from "@/app/model/project.model";

/**
 * Fetch all projects from Firestore.
 * Converts Firestore Timestamps to readable Date strings.
 */
export const fetchProjects = async () => {
    const querySnapshot = await getDocs(collection(db, 'projects'));
    return querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id, // Always store the document ID
            ...data,
            startDate: data.startDate?.toDate().toLocaleDateString() || "N/A",
            endDate: data.endDate?.toDate().toLocaleDateString() || "N/A",
        };
    });
};
/**
 * Add a new project to Firestore.
 */
export const addProject = async (newProject: ProjectModel) => {
    try {
        const docRef = await addDoc(collection(db, 'projects'), {
            ...newProject,
            startDate: new Date(newProject.startDate),
            endDate: new Date(newProject.endDate || 0),
        });
        return docRef.id; // Return the new project's document ID
    } catch (error) {
        console.error("Error adding project:", error);
        throw new Error("Error adding project to Firestore");
    }
};
export const deleteProject = async (projectId: string) => {
    const projectRef = doc(collection(db, "projects"), projectId);
    await deleteDoc(projectRef);
};
export const updateProject = async (project: ProjectModel): Promise<void> => {
    if (!project.id) throw new Error("Project ID is required");

    const projectRef = doc(collection(db, "projects"), project.id.toString());

    try {
        await updateDoc(projectRef, {
            name: project.name,
            description: project.description,
            status: project.status,
            startDate: new Date(project.startDate),
            endDate: new Date(project.endDate || 0),
            client: project.client,
            manager: project.manager,
            team: project.team,
            budget: project.budget,
            technologies: project.technologies,
            difficulty: project.difficulty,
            priority: project.priority
        });
        console.log("Project updated successfully!");
    } catch (error) {
        console.error("Error updating project:", error);
        throw error;
    }
};