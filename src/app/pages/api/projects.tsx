import { db, collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "../../lib/firebase";

export default async function handler(req:any, res:any) {
    if (req.method === "GET") {
        // 🔍 Récupérer tous les projets
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projects = querySnapshot.docs.map((doc: { id: any; data: () => any; }) => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(projects);
    }

    else if (req.method === "POST") {
        // ➕ Ajouter un projet
        const { title, description, type, tags, image, link, status } = req.body;
        const newProject = { title, description, type, tags, image, link, status, createdAt: new Date(), updatedAt: new Date() };
        const docRef = await addDoc(collection(db, "projects"), newProject);
        res.status(201).json({ id: docRef.id, ...newProject });
    }

    else if (req.method === "PUT") {
        // ✏️ Modifier un projet
        const { id, ...updates } = req.body;
        const projectRef = doc(db, "projects", id);
        await updateDoc(projectRef, { ...updates, updatedAt: new Date() });
        res.status(200).json({ message: "Projet mis à jour" });
    }

    else if (req.method === "DELETE") {
        // ❌ Supprimer un projet
        const { id } = req.body;
        await deleteDoc(doc(db, "projects", id));
        res.status(200).json({ message: "Projet supprimé" });
    }

    else {
        res.status(405).json({ message: "Méthode non autorisée" });
    }
}
