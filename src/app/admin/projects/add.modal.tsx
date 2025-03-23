import React, { useState } from "react";
import {ProjectModel} from "@/app/model/project.model";

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
        endDate: "",
        client: "",
        budget: 0,
        technologies: [],
        thumbnail: "", // New field for thumbnail
        galleryImages: [], // New field for gallery images,
        links: [], // Liens vers des ressources associées
        tasks: [], // Liste des tâches
        notes: ""
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setNewProject({ ...newProject, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "thumbnail" | "gallery") => {
        const files = e.target.files;
        if (files) {
            if (type === "thumbnail") {
                setNewProject({ ...newProject, thumbnail: URL.createObjectURL(files[0]) });
            } else if (type === "gallery") {
                setNewProject({ ...newProject, galleryImages: Array.from(files).map(file => URL.createObjectURL(file)) });
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(newProject);  // Passing form data to the parent
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">

            <label className="block">
                <span className="text-gray-700 font-semibold">Image de projet (Thumbnail)</span>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "thumbnail")}
                    className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm"
                />
                {newProject.thumbnail && (
                    <div className="mt-2">
                        <img src={newProject.thumbnail} alt="Thumbnail" className="w-32 h-32 object-cover rounded-md"/>
                    </div>
                )}
            </label>

            <label className="block">
                <span className="text-gray-700 font-semibold">Galerie images</span>
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => handleFileChange(e, "gallery")}
                    className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm"
                />
                <div className="mt-2 flex space-x-2">
                    {newProject.galleryImages.map((image, index) => (
                        <img key={index} src={image} alt={`Gallery Image ${index}`}
                             className="w-16 h-16 object-cover rounded-md"/>
                    ))}
                </div>
            </label>
            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                    <label className="block">
                        <span className="text-gray-700 font-semibold">Nom</span>
                        <input
                            type="text"
                            name="name"
                            value={newProject.name}
                            onChange={handleInputChange}
                            className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </label>
                    <label className="block">
                        <span className="text-gray-700 font-semibold">Date de début</span>
                        <input
                            type="date"
                            name="startDate"
                            value={newProject.startDate}
                            onChange={handleInputChange}
                            className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </label>

                    <label className="block">
                        <span className="text-gray-700 font-semibold">Budget</span>
                        <input
                            type="number"
                            name="budget"
                            value={newProject.budget}
                            onChange={handleInputChange}
                            className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3"
                        />
                    </label>

                    <label className="block">
                        <span className="text-gray-700 font-semibold">Client</span>
                        <input
                            type="text"
                            name="client"
                            value={newProject.client}
                            onChange={handleInputChange}
                            className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </label>


                </div>
                <div className="space-y-6">
                    <label className="block">
                        <span className="text-gray-700 font-semibold">Statut</span>
                        <select
                            name="status"
                            value={newProject.status}
                            onChange={handleInputChange}
                            className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </label>
                    <label className="block">
                        <span className="text-gray-700 font-semibold">Date de fin</span>
                        <input
                            type="date"
                            name="endDate"
                            value={newProject.endDate}
                            onChange={handleInputChange}
                            className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </label>


                    <label className="block">
                        <span className="text-gray-700 font-semibold">Technologies</span>
                        <input
                            type="text"
                            name="technologies"
                            value={newProject.technologies}
                            onChange={handleInputChange}
                            className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3"
                        />
                    </label>

                    <label className="block">
                        <span className="text-gray-700 font-semibold">Liens</span>
                        <input
                            type="text"
                            name="links"
                            value={newProject.links}
                            onChange={handleInputChange}
                            className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3"
                        />
                    </label>


                </div>
            </div>
            <label className="block">
                <span className="text-gray-700 font-semibold">Description</span>
                <textarea
                    name="description"
                    value={newProject.description}
                    onChange={handleInputChange}
                    className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
                />
            </label>
            <label className="block">
                <span className="text-gray-700 font-semibold">Tâches</span>
                <textarea
                    name="tasks"
                    value={newProject.tasks}
                    onChange={handleInputChange}
                    className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3"
                />
            </label>
            <label className="block">
                <span className="text-gray-700 font-semibold">Notes</span>
                <textarea
                    name="notes"
                    value={newProject.notes}
                    onChange={handleInputChange}
                    className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3"
                />
            </label>
            {/* Submit and Cancel Buttons */}
            <div className="flex justify-between mt-6">
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Ajouter Projet
                </button>
                <button
                    type="button"
                    className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md shadow-md hover:bg-gray-400"
                    onClick={onCancel}  // Calling the cancel function
                >
                    Annuler
                </button>
            </div>
        </form>
    );
}
