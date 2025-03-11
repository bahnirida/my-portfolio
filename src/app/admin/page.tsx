'use client'
import { SetStateAction, useState} from "react";

// Sample data for each section
const initialProjects = [{id: 1, title: "Project 1"}, {id: 2, title: "Project 2"}];
const initialSkills = [{id: 1, skill: "JavaScript"}, {id: 2, skill: "React"}];
const initialTestimonials = [{id: 1, name: "John Doe", text: "Great developer!"}];
const initialContactInfo = {email: "example@example.com", phone: "123-456-7890"};

const AdminDashboard = () => {
    const [projects, setProjects] = useState(initialProjects);
    const [skills, setSkills] = useState(initialSkills);
    const [testimonials, setTestimonials] = useState(initialTestimonials);
    const [contactInfo, setContactInfo] = useState(initialContactInfo);

    // Add, Update, Delete for Projects
    const handleAddProject = (newProject: { id: number; title: string; }) => setProjects([...projects, newProject]);
    const handleUpdateProject = (id: number, updatedProject: { title: string; id: number; }) =>
        setProjects(projects.map((project) => (project.id === id ? updatedProject : project)));
    const handleDeleteProject = (id: number) => setProjects(projects.filter((project) => project.id !== id));

    // Add, Update, Delete for Skills
    const handleAddSkill = (newSkill: { id: number; skill: string; }) => setSkills([...skills, newSkill]);
    const handleUpdateSkill = (id: number, updatedSkill: { skill: string; id: number; }) =>
        setSkills(skills.map((skill) => (skill.id === id ? updatedSkill : skill)));
    const handleDeleteSkill = (id: number) => setSkills(skills.filter((skill) => skill.id !== id));

    // Add, Update, Delete for Testimonials
    const handleAddTestimonial = (newTestimonial: {
        id: number;
        name: string;
        text: string;
    }) => setTestimonials([...testimonials, newTestimonial]);
    const handleUpdateTestimonial = (id: number, updatedTestimonial: { text: string; id: number; name: string; }) =>
        setTestimonials(testimonials.map((testimonial) => (testimonial.id === id ? updatedTestimonial : testimonial)));
    const handleDeleteTestimonial = (id: number) =>
        setTestimonials(testimonials.filter((testimonial) => testimonial.id !== id));

    // Add, Update, Delete for Contact Info
    const handleUpdateContactInfo = (updatedInfo: SetStateAction<{ email: string; phone: string; }>) => setContactInfo(updatedInfo);

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white p-6">
                <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
                <nav>
                    <ul>
                        <li className="mb-4">
                            <a href="#projects" className="hover:text-gray-400">
                                Manage Projects
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="#skills" className="hover:text-gray-400">
                                Manage Skills
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="#testimonials" className="hover:text-gray-400">
                                Manage Testimonials
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="#contact" className="hover:text-gray-400">
                                Manage Contact Info
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6">
                {/* Manage Projects */}
                <div id="projects" className="mb-8">
                    <h2>Manage Projects</h2>
                    {/* Add Project */}
                    <button
                        className="bg-blue-500 text-white p-2 rounded-lg"
                        onClick={() => handleAddProject({ id: Date.now(), title: "New Project" })}
                    >
                        Add Project
                    </button>
                    <div className="mt-4">
                        {projects.map((project) => (
                            <div key={project.id} className="bg-white p-4 rounded-lg shadow-lg mb-4">
                                <h3>{project.title}</h3>
                                <button
                                    className="bg-yellow-500 text-white p-2 rounded-lg"
                                    onClick={() => handleUpdateProject(project.id, { ...project, title: "Updated Title" })}
                                >
                                    Update Project
                                </button>
                                <button
                                    className="bg-red-500 text-white p-2 rounded-lg ml-2"
                                    onClick={() => handleDeleteProject(project.id)}
                                >
                                    Delete Project
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Manage Skills */}
                <div id="skills" className="mb-8">
                    <h2>Manage Skills</h2>
                    {/* Add Skill */}
                    <button
                        className="bg-green-500 text-white p-2 rounded-lg"
                        onClick={() => handleAddSkill({ id: Date.now(), skill: "New Skill" })}
                    >
                        Add Skill
                    </button>
                    <div className="mt-4">
                        {skills.map((skill) => (
                            <div key={skill.id} className="bg-white p-4 rounded-lg shadow-lg mb-4">
                                <h3>{skill.skill}</h3>
                                <button
                                    className="bg-yellow-500 text-white p-2 rounded-lg"
                                    onClick={() => handleUpdateSkill(skill.id, { ...skill, skill: "Updated Skill" })}
                                >
                                    Update Skill
                                </button>
                                <button
                                    className="bg-red-500 text-white p-2 rounded-lg ml-2"
                                    onClick={() => handleDeleteSkill(skill.id)}
                                >
                                    Delete Skill
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Manage Testimonials */}
                <div id="testimonials" className="mb-8">
                    <h2>Manage Testimonials</h2>
                    {/* Add Testimonial */}
                    <button
                        className="bg-yellow-500 text-white p-2 rounded-lg"
                        onClick={() =>
                            handleAddTestimonial({ id: Date.now(), name: "New User", text: "Great service!" })
                        }
                    >
                        Add Testimonial
                    </button>
                    <div className="mt-4">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white p-4 rounded-lg shadow-lg mb-4">
                                <h3>{testimonial.name}</h3>
                                <p>{testimonial.text}</p>
                                <button
                                    className="bg-yellow-500 text-white p-2 rounded-lg"
                                    onClick={() =>
                                        handleUpdateTestimonial(testimonial.id, { ...testimonial, text: "Updated testimonial" })
                                    }
                                >
                                    Update Testimonial
                                </button>
                                <button
                                    className="bg-red-500 text-white p-2 rounded-lg ml-2"
                                    onClick={() => handleDeleteTestimonial(testimonial.id)}
                                >
                                    Delete Testimonial
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Manage Contact Info */}
                <div id="contact" className="mb-8">
                    <h2>Manage Contact Info</h2>
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <p>Email: {contactInfo.email}</p>
                        <p>Phone: {contactInfo.phone}</p>
                        {/* Update Contact Info */}
                        <button
                            className="bg-yellow-500 text-white p-2 rounded-lg"
                            onClick={() =>
                                handleUpdateContactInfo({ email: "newemail@example.com", phone: "987-654-3210" })
                            }
                        >
                            Update Contact Info
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
