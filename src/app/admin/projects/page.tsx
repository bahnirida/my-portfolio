"use client"
import {FaRegEdit, FaRegEye, FaTrashAlt} from "react-icons/fa";
import {IoIosAddCircle} from "react-icons/io";
import {useEffect, useState} from "react";
import Modal from "@/app/shared/model";
import { DocumentData} from "firebase/firestore";
import {
    addProject,
    deleteProject,
    fetchPaginatedProjects,
    updateProject
} from "@/app/services/projectService";
import {ProjectModel} from "@/app/model/project.model";
import NewProjectForm from "@/app/admin/projects/add.modal";
import {showErrorToast, showSuccessToast} from "@/app/services/toastUtils";
import Table, {Column} from "@/app/shared/table";
import ProjectDetails from "@/app/admin/projects/show.modal";
import EditProjectForm from "@/app/admin/projects/edit.modal";
import PaginationControls from "@/app/shared/PaginationControls";


export default function ProjectsPage() {
    const [projects, setProjects] = useState<DocumentData[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<ProjectModel | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedProjectEdit, setselectedProjectEdit] = useState<ProjectModel | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [lastVisible, setLastVisible] = useState<null | any>(null);
    const [searchKeyword, setSearchKeyword] = useState("");
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(e.target.value);
        fetchProjectsData(currentPage);
        setCurrentPage(1); // Reset to first page on new search
    };

    // Handlers for project actions
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
            await updateProject(updatedProject);
            showSuccessToast("Projet mis à jour avec succès !");
            setIsEditModalOpen(false);
            // Refresh projects with current page
            fetchProjectsData(currentPage);
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
            // Refresh projects with current page
            fetchProjectsData(currentPage);
        } catch (error) {
            showErrorToast("Une erreur est survenue lors de l'ajout du projet.");
        }
    };

    const confirmDeleteProject = async () => {
        if (!selectedProjectId) return;

        try {
            await deleteProject(selectedProjectId);
            showSuccessToast("Projet supprimé avec succès !");
            // Refresh projects with current page
            fetchProjectsData(currentPage);
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

    // Function to fetch paginated projects
    const fetchProjectsData = async (page: number) => {
        try {
            setLoading(true);
            const data = await fetchPaginatedProjects(page, 10, lastVisible, searchKeyword);
            setProjects(data.projects);
            setLastVisible(data.lastVisible);
            setTotalPages(data.totalPages); // Ensure total pages are updated
        } catch (error) {
            console.error("Error fetching projects:", error);
        } finally {
            setLoading(false);
        }
    };
    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };
    useEffect(() => {
        fetchProjectsData(currentPage);
    }, [currentPage]); // Trigger data fetch whenever the page changes

    // Table columns definitions
    const columns: Column<any>[] = [
        { key: "id", label: "ID" },
        { key: "name", label: "Project Name" },
        { key: "description", label: "Description" },
        { key: "status", label: "Status" },
        { key: "startDate", label: "Start Date" },
        { key: "endDate", label: "Estimated End Date" },
        {
            key: "actions",
            label: "Actions",
            render: (_, row) => (
                <div className="flex gap-2">
                    <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={() => handleViewProject(row)}><FaRegEye /></button>
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
                            value={searchKeyword}
                            onChange={handleSearchChange}
                            placeholder="Search projects..."
                            className="px-4 py-2 border rounded w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <Table columns={columns} data={projects} loading={loading}/>
                <div className="bg-gray-200 p-4 text-right border-t">
                    <PaginationControls
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>

            {/* Modals */}
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
