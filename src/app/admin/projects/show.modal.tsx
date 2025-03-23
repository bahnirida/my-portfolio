"use client"
import React from "react";
import {ProjectModel} from "@/app/model/project.model";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

interface ProjectDetailsProps {
    project: ProjectModel | null;
    onClose: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800">{project.name}</h3>
            <p className="text-gray-600 mt-2">{project.description || "Pas de description disponible."}</p>

            {/* Détails du projet */}
            <div className="mt-4 space-y-2 text-gray-700">
                <p><strong>Status:</strong> {project.status}</p>
                <p><strong>Date de début:</strong> {project.startDate}</p>
                <p><strong>Date de fin estimée:</strong> {project.endDate || "Non spécifiée"}</p>
                <p><strong>Client:</strong> {project.client || "Non spécifié"}</p>
                <p><strong>Budget:</strong> {project.budget ? `${project.budget} $` : "Non spécifié"}</p>
                <p><strong>Technologies:</strong> {project.technologies?.length ? project.technologies.join(", ") : "Aucune technologie listée"}</p>
            </div>

            {/* Swiper pour les images */}
            {project.galleryImages && project.galleryImages.length > 0 ? (
                <div className="mt-4">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={10}
                        slidesPerView={1}
                        className="rounded-lg shadow-md"
                    >
                        {project.galleryImages.map((imageUrl, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={imageUrl}
                                    alt={`Image ${index + 1}`}
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ) : (
                <p className="mt-4 text-gray-500">Aucune image disponible.</p>
            )}

            {/* Bouton Fermer */}
            <div className="flex justify-end mt-4">
                <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                    Fermer
                </button>
            </div>
        </div>
    );
};

export default ProjectDetails;

