import React, { useState } from "react";
import {ProjectModel} from "@/app/model/project.model";

interface EditProjectFormProps {
    project: ProjectModel;
    onSave: (updatedProject: ProjectModel) => void;
    onCancel: () => void;
}

const EditProjectForm: React.FC<EditProjectFormProps> = ({ project, onSave, onCancel }) => {
    const [formData, setFormData] = useState<ProjectModel>({ ...project });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "thumbnail" | "gallery") => {
        const files = e.target.files;
        if (files) {
            if (type === "thumbnail") {
                setFormData({ ...formData, thumbnail: URL.createObjectURL(files[0]) });
            } else if (type === "gallery") {
                setFormData({
                    ...formData,
                    galleryImages: [...formData.galleryImages, ...Array.from(files).map(file => URL.createObjectURL(file))]
                });
            }
        }
    };

    const handleListChange = (e: React.ChangeEvent<HTMLInputElement>, field: "technologies" | "links" | "tasks") => {
        const { value } = e.target;
        setFormData({ ...formData, [field]: value.split(",").map(item => item.trim()) });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Modifier le projet</h2>

            {/* Thumbnail */}
            <label className="block">
                <span className="text-gray-700 font-semibold">Image de projet (Thumbnail)</span>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "thumbnail")}
                    className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm"
                />
                {formData.thumbnail && (
                    <div className="mt-2">
                        <img src={formData.thumbnail} alt="Thumbnail" className="w-32 h-32 object-cover rounded-md"/>
                    </div>
                )}
            </label>

            {/* Galerie d'images */}
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
                    {formData.galleryImages.map((image, index) => (
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
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3"
                        />
                    </label>

                    <label className="block">
                        <span className="text-gray-700 font-semibold">Date de début</span>
                        <input
                            type="date"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleInputChange}
                            className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3"
                        />
                    </label>

                    <label className="block">
                        <span className="text-gray-700 font-semibold">Budget</span>
                        <input
                            type="number"
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3"
                        />
                    </label>

                    <label className="block">
                        <span className="text-gray-700 font-semibold">Client</span>
                        <input
                            type="text"
                            name="client"
                            value={formData.client}
                            onChange={handleInputChange}
                            className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3"
                        />
                    </label>
                </div>

                <div className="space-y-6">
                    <label className="block">
                        <span className="text-gray-700 font-semibold">Statut</span>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleInputChange}
                            className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3"
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
                            value={formData.endDate}
                            onChange={handleInputChange}
                            className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3"
                        />
                    </label>

                    <label className="block">
                        <span className="text-gray-700 font-semibold">Technologies</span>
                        <input
                            type="text"
                            name="technologies"
                            value={formData.technologies.join(", ")}
                            onChange={(e) => handleListChange(e, "technologies")}
                            className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3"
                        />
                    </label>
                </div>
            </div>

            <label className="block">
                <span className="text-gray-700 font-semibold">Description</span>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3"
                />
            </label>

            <label className="block">
                <span className="text-gray-700 font-semibold">Tâches</span>
                <textarea
                    name="tasks"
                    value={formData.tasks}
                    onChange={(e) => console.log("")}
                    className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3"
                />
            </label>

            <div className="flex justify-end space-x-2 mt-4">
                <button type="button" onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded">
                    Annuler
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Enregistrer
                </button>
            </div>
        </form>
    );
};

export default EditProjectForm;
