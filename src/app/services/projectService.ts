import { db } from "@/app/lib/firebase";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    DocumentData,
    QueryDocumentSnapshot,
    QuerySnapshot,
    getDocs,
    limit,
    orderBy,
    updateDoc,
    query as firebaseQuery,
    startAfter, getCountFromServer, where // Import from firebase/firestore instead
} from "firebase/firestore"; // All Firestore imports should come from here
import {ProjectModel} from "@/app/model/project.model";


const projectsCollection = collection(db, "projects");
/**
 * Fetch all projects from Firestore.
 * Converts Firestore Timestamps to readable Date strings.
 */

export const fetchPaginatedProjects = async (page: number, pageSize: number, lastVisible: any, searchKeyword: string) => {
    try {
        const projectsRef = collection(db, "projects");

        // Fetch total document count to calculate total pages
        const countQuery = searchKeyword
            ? firebaseQuery(projectsRef, where("name", ">=", searchKeyword), where("name", "<=", searchKeyword + '\uf8ff'))
            : projectsRef;

        const countSnapshot = await getCountFromServer(countQuery);
        const totalDocs = countSnapshot.data().count;
        const totalPages = Math.ceil(totalDocs / pageSize);

        // Create query with pagination and search
        let projectQuery = firebaseQuery(
            projectsRef,
            orderBy("name"),
            limit(pageSize)
        );

        if (searchKeyword) {
            projectQuery = firebaseQuery(
                projectsRef,
                where("name", ">=", searchKeyword),
                where("name", "<=", searchKeyword + '\uf8ff'),
                orderBy("name"),
                limit(pageSize)
            );
        }

        if (lastVisible && page > 1) {
            projectQuery = firebaseQuery(
                projectsRef,
                where("name", ">=", searchKeyword),
                where("name", "<=", searchKeyword + '\uf8ff'),
                orderBy("name"),
                startAfter(lastVisible),
                limit(pageSize)
            );
        }

        const querySnapshot = await getDocs(projectQuery);
        const projectList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            startDate: doc.data().startDate?.toDate().toLocaleDateString() || "N/A",
            endDate: doc.data().endDate?.toDate().toLocaleDateString() || "N/A",
        }));

        return {
            projects: projectList,
            lastVisible: querySnapshot.docs[querySnapshot.docs.length - 1] || null,
            totalPages
        };
    } catch (error) {
        console.error("Error fetching paginated projects:", error);
        return { projects: [], lastVisible: null, totalPages: 1 };
    }
};
export const fetchProjects = async () => {
    const querySnapshot = await getDocs(projectsCollection);
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
        const docRef = await addDoc(projectsCollection, {
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
    const projectRef = doc(projectsCollection, projectId);
    await deleteDoc(projectRef);
};
export const updateProject = async (project: ProjectModel): Promise<void> => {
    if (!project.id) throw new Error("Project ID is required");

    const projectRef = doc(projectsCollection, project.id.toString());

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