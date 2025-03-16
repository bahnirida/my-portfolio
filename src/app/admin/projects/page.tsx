"use client"
import {FaRegEdit, FaRegEye, FaTrashAlt} from "react-icons/fa";
import {IoIosAddCircle} from "react-icons/io";
import {useEffect, useState} from "react";
import Modal from "@/app/shared/model";
import { DocumentData} from "firebase/firestore";
import {addProject, deleteProject, fetchProjects, updateProject} from "@/app/services/projectService";
import {ProjectModel} from "@/app/model/project.model";
import NewProjectForm from "@/app/admin/projects/add.modal";
import {showErrorToast, showSuccessToast} from "@/app/services/toastUtils";
import Table, {Column} from "@/app/shared/table";
import ProjectDetails from "@/app/admin/projects/show.modal";
import EditProjectForm from "@/app/admin/projects/edit.modal";


export default function ProjectsPage() {
    const [projects, setProjects] = useState<DocumentData[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true); // Loading state
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<ProjectModel | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedProjectEdit, setselectedProjectEdit] = useState<ProjectModel | null>(null);

    const handleEditProject = (project: ProjectModel) => {
        setselectedProjectEdit(project);
        setIsEditModalOpen(true);
    };

    const handleViewProject = (project: ProjectModel) => {
        setSelectedProject(project);
        setIsInfoModalOpen(true);
    };

    const handleDeleteClick = (projectId: string) => {
        setSelectedProjectId(projectId);
        setIsDeleteModalOpen(true);
    };
    const handleSaveProject = async (updatedProject: ProjectModel) => {
        try {
            await updateProject(updatedProject); // Call API to update project
            showSuccessToast("Projet mis à jour avec succès !");
            setIsEditModalOpen(false);
            // Refresh projects list
            const updatedProjects = await fetchProjects();
            setProjects(updatedProjects);
        } catch (error) {
            console.log(error)
            showErrorToast("Erreur lors de la mise à jour du projet.");
        }
    };
    const handleAddProject = async (newProject: ProjectModel) => {
        try {
            const newProjectId = await addProject(newProject);
            showSuccessToast("Projet ajouté avec succès !");
            setIsModalOpen(false);
            const updatedProjects = await fetchProjects();
            setProjects(updatedProjects);
        } catch (error) {
            showErrorToast("Une erreur est survenue lors de l'ajout du projet.");
        }
    };
    const confirmDeleteProject = async () => {
        if (!selectedProjectId) return;

        try {
            await deleteProject(selectedProjectId);
            showSuccessToast("Projet supprimé avec succès !");
            const updatedProjects = await fetchProjects();
            setProjects(updatedProjects);
        } catch (error) {
            console.error("Error deleting project:", error);
            showErrorToast("Une erreur est survenue lors de la suppression du projet.");
        } finally {
            setIsDeleteModalOpen(false);
            setSelectedProjectId(null);
        }
    };


    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const getProjects = async () => {
            try {
                setLoading(true); // Set loading to true when starting fetch
                const projectsData = await fetchProjects();
                setProjects(projectsData);
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false); // Set loading to false once data is fetched
            }
        };

        getProjects();
    }, []);
    const columns: Column<any>[] = [
        { key: "id", label: "ID" },
        { key: "name", label: "Project Name" },
        { key: "description", label: "Description" },
        { key: "status", label: "Status" },
        { key: "startDate", label: "Start Date" },
        { key: "endDate", label: "Estimated End Date" },
        { key: "client", label: "Client" },
        { key: "manager", label: "Project Manager" },
        { key: "team", label: "Team" },
        { key: "budget", label: "Budget" },
        { key: "technologies", label: "Technologies" },
        { key: "difficulty", label: "Difficulty" },
        { key: "priority", label: "Priority" },
        {
            key: "actions",
            label: "Actions",
            render: (_, row) => (
                <div className="flex gap-2">
                    <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={() => handleViewProject(row)} ><FaRegEye /></button>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={() => handleEditProject(row)}><FaRegEdit /></button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDeleteClick(row.id)}><FaTrashAlt /></button>
                </div>
            ),
        },
    ];

    return (
        <div className="p-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex justify-between items-center bg-gray-200 p-4 border-b">
                    <h2 className="text-xl font-bold">Manage Projects</h2>
                    <div className={"flex gap-2"}>
                        <button onClick={() => setIsModalOpen(true)}
                                className="bg-green-500 text-white px-6 py-3 rounded flex items-center justify-center gap-2">
                            <IoIosAddCircle/>
                        </button>
                        <input
                            type="text"
                            placeholder="Search projects..."
                            className="px-4 py-2 border rounded w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <Table columns={columns} data={projects} loading={loading}/>
                <div className="bg-gray-200 p-4 text-right border-t">

                </div>
            </div>

            {/* Modal with the form inside */}
            <Modal isOpen={isModalOpen} title="Ajouter un projet">
                <NewProjectForm onSubmit={handleAddProject} onCancel={handleCancel} />
            </Modal>
            <Modal isOpen={isDeleteModalOpen} title="Confirmer la suppression">
                <p>Êtes-vous sûr de vouloir supprimer ce projet ? Cette action est irréversible.</p>
                <div className="flex justify-end gap-4 mt-4">
                    <button onClick={() => setIsDeleteModalOpen(false)} className="bg-gray-500 text-white px-4 py-2 rounded">
                        Annuler
                    </button>
                    <button onClick={confirmDeleteProject} className="bg-red-500 text-white px-4 py-2 rounded">
                        Supprimer
                    </button>
                </div>
            </Modal>
            <Modal isOpen={isInfoModalOpen} title="Détails du Projet">
                <ProjectDetails project={selectedProject} onClose={() => setIsInfoModalOpen(false)} />
            </Modal>
            <Modal isOpen={isEditModalOpen} title="Modifier le projet">
                <EditProjectForm
                    project={selectedProjectEdit}
                    onSave={handleSaveProject}
                    onCancel={() => setIsEditModalOpen(false)}
                />
            </Modal>


        </div>
    );
}
