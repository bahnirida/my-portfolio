"use client";
import { useState } from "react";
import ContactPage from "@/app/admin/contact/page";
import TestimonialsPage from "@/app/admin/testimonials/page";
import SkillsPage from "@/app/admin/skills/page";
import ProjectsPage from "@/app/admin/projects/page";
import DashboardContent from "@/app/admin/dashboard/page";
import {FaTachometerAlt, FaProjectDiagram, FaTools, FaQuoteLeft, FaEnvelope, FaDoorOpen} from "react-icons/fa";
import { RiMenuFold3Line , RiMenuFold4Line } from "react-icons/ri";
import ProtectedRoute from "@/app/security/ProtectedRoute";
import {logout} from "@/app/lib/auth.js";

function AdminDashboard() {
    const [activeSection, setActiveSection] = useState("dashboard");
    const [isExpanded, setIsExpanded] = useState(true);

    const menuItems = [
        { id: "dashboard", label: "Dashboard", icon: <FaTachometerAlt size={25} /> },
        { id: "projects", label: "Projects", icon: <FaProjectDiagram size={25} /> },
        { id: "skills", label: "Skills", icon: <FaTools size={25} /> },
        { id: "testimonials", label: "Testimonials", icon: <FaQuoteLeft size={25} /> },
        { id: "contact", label: "Contact Info", icon: <FaEnvelope size={25} /> },
        { id: "logout", label: "Log out", icon: <FaDoorOpen size={25} /> },
    ];

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`bg-gray-800 text-white p-6 ${isExpanded ? "w-64" : "w-20"} transition-all duration-300`}>
                <button onClick={() => setIsExpanded(!isExpanded)} className="mb-6 focus:outline-none">
                    {isExpanded ? <RiMenuFold3Line size={25} /> : <RiMenuFold4Line size={25} />}
                </button>
                <nav>
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.id}
                                className={`flex items-center gap-4 p-2 mb-4 cursor-pointer hover:text-gray-400 ${activeSection === item.id ? "bg-gray-700" : ""}`}
                                onClick={() => {
                                    if (item.id === "logout") {
                                        logout();
                                    } else {
                                        setActiveSection(item.id);
                                    }
                                }}
                            >
                                {item.icon}
                                {isExpanded && <span>{item.label}</span>}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-x-auto">
                {activeSection === "dashboard" && <DashboardContent />}
                {activeSection === "projects" && <ProjectsPage />}
                {activeSection === "skills" && <SkillsPage />}
                {activeSection === "testimonials" && <TestimonialsPage />}
                {activeSection === "contact" && <ContactPage />}
            </div>
        </div>
    );
}
export default ProtectedRoute(AdminDashboard);