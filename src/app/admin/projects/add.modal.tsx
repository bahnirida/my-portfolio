"use client"
// components/NewProjectForm.tsx
import { useState } from "react";
import { ProjectModel } from "@/app/model/project.model";

interface NewProjectFormProps {
    onSubmit: (newProject: ProjectModel) => void;
    onCancel: () => void;
}

export default function NewProjectForm({ onSubmit, onCancel }: NewProjectFormProps) {
    const [newProject, setNewProject] = useState<ProjectModel>({
        name: "",
        description: "",
        status: "Pending",
        startDate: "",
        client: "",
        manager: "",
        team: [],
        budget: 0,
        technologies: [],
        difficulty: "Easy",
        priority: "Low",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setNewProject({ ...newProject, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(newProject);  // Passing form data to the parent
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
                <span className="text-gray-700">Nom</span>
                <input
                    type="text"
                    name="name"
                    value={newProject.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                />
            </label>
            <label className="block">
                <span className="text-gray-700">Description</span>
                <textarea
                    name="description"
                    value={newProject.description}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                />
            </label>
            <label className="block">
                <span className="text-gray-700">Statut</span>
                <select
                    name="status"
                    value={newProject.status}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Archived">Archived</option>
                </select>
            </label>
            <label className="block">
                <span className="text-gray-700">Date de début</span>
                <input
                    type="date"
                    name="startDate"
                    value={newProject.startDate}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                />
            </label>
            <label className="block">
                <span className="text-gray-700">Date de fin</span>
                <input
                    type="date"
                    name="endDate"
                    value={newProject.endDate}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                />
            </label>
            <label className="block">
                <span className="text-gray-700">Client</span>
                <input
                    type="text"
                    name="client"
                    value={newProject.client}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                />
            </label>

            {/* Submit and Cancel Buttons */}
            <div className="flex justify-between mt-4 ">
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Ajouter Projet
                </button>
                <button
                    type="button"
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                    onClick={onCancel}  // Calling the cancel function
                >
                    Annuler
                </button>
            </div>
        </form>
    );
}
