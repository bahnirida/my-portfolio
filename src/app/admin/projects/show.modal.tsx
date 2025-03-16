"use client"
import React from "react";
import {ProjectModel} from "@/app/model/project.model";

interface ProjectDetailsProps {
    project: ProjectModel | null;
    onClose: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div>
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-700 mt-2">{project.description}</p>

            {/* Project Details */}
            <div className="mt-4 space-y-2">
                <p><strong>Status:</strong> {project.status}</p>
                <p><strong>Date de début:</strong> {project.startDate}</p>
                <p><strong>Date de fin estimée:</strong> {project.endDate}</p>
                <p><strong>Client:</strong> {project.client}</p>
                <p><strong>Manager:</strong> {project.manager}</p>
                <p><strong>Équipe:</strong> {project.team}</p>
                <p><strong>Budget:</strong> {project.budget} $</p>
                <p><strong>Technologies:</strong> {project.technologies?.join(", ")}</p>
                <p><strong>Difficulté:</strong> {project.difficulty}</p>
                <p><strong>Priorité:</strong> {project.priority}</p>
            </div>

            {/* Project Images */}
            {/*{project.images && project.images.length > 0 ? (*/}
            {/*    <div className="mt-4 grid grid-cols-2 gap-4">*/}
            {/*        {project.images.map((imageUrl, index) => (*/}
            {/*            <img key={index} src={imageUrl} alt={`Project Image ${index + 1}`} className="rounded-lg shadow-md w-full h-40 object-cover" />*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*) : (*/}
            {/*    <p className="mt-4 text-gray-500">Aucune image disponible.</p>*/}
            {/*)}*/}

            {/* Close Button */}
            <div className="flex justify-end mt-4">
                <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
                    Fermer
                </button>
            </div>
        </div>
    );
};

export default ProjectDetails;
