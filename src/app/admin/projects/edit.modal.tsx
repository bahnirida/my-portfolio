import React, { useState } from "react";
import {ProjectModel} from "@/app/model/project.model";

interface EditProjectFormProps {
    project: ProjectModel | null;
    onSave: (updatedProject: ProjectModel) => void;
    onCancel: () => void;
}

const EditProjectForm: React.FC<EditProjectFormProps> = ({ project, onSave, onCancel }) => {
    const [formData, setFormData] = useState<ProjectModel>(project || {
        id: "",
        name: "",
        description: "",
        status: "Pending",
        startDate: "",
        endDate: "",
        client: "",
        manager: "",
        team: [],
        budget: 0,
        technologies: [],
        difficulty: "Easy",
        priority: "Low"
    });

    if (!project) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
                <span className="text-gray-700">Nom du projet:</span>
                <input type="text" name="name" value={formData.name} onChange={handleChange}
                       className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"/>
            </label>

            <label className="block">
                <span className="text-gray-700">Description:</span>
                <textarea name="description" value={formData.description} onChange={handleChange}
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"/>
            </label>

            <label className="block">
                <span className="text-gray-700">Statut:</span>
                <input type="text" name="status" value={formData.status} onChange={handleChange}
                       className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"/>
            </label>

            <div className="flex justify-end space-x-2">
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
