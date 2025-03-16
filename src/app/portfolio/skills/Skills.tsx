'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

function Skills() {
    const techCategories = [
        {
            category: "Backend",
            technologies: [
                { name: "Java", logo: "/assets/logos/java.png" },
                { name: "Spring Boot", logo: "/assets/logos/springboot.png" },
                { name: "Node.js", logo: "/assets/logos/nodejs.png" },
                { name: "Jenkins", logo: "/assets/logos/jenkins.png" },
            ],
        },
        {
            category: "Frontend",
            technologies: [
                { name: "Angular", logo: "/assets/logos/angular.png" },
                { name: "React", logo: "/assets/logos/react.png" },
                { name: "TypeScript", logo: "/assets/logos/typescript.png" },
                { name: "Tailwind CSS", logo: "/assets/logos/tailwind.png" },
            ],
        },
        {
            category: "DevOps",
            technologies: [
                { name: "Docker", logo: "/assets/logos/docker.png" },
                { name: "Kubernetes", logo: "/assets/logos/kubernetes.png" },
                { name: "AWS", logo: "/assets/logos/aws.png" },
            ],
        },
        {
            category: "Database",
            technologies: [
                { name: "PostgreSQL", logo: "/assets/logos/postgresql.png" },
                { name: "MongoDB", logo: "/assets/logos/mongodb.png" },
            ],
        },
        {
            category: "Other Tools",
            technologies: [
                { name: "Git", logo: "/assets/logos/git.png" },
                { name: "GraphQL", logo: "/assets/logos/graphql.png" },
            ],
        },
    ];

    return (
        <div>
            <div className={"font-bold text-4xl my-25  px-20 sm:px-30"}>Tech Stack & Skills</div>
            <div className="py-12 px-6 sm:px-12 md:px-20 max-w-6xl mx-auto mt-10 text-center">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    navigation
                    pagination={{clickable: true}}
                    loop
                    modules={[Navigation, Pagination]} // Required for the functionality
                    className="tech-carousel"
                >
                    {techCategories.map((category, index) => (
                        <SwiperSlide key={index}>
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {category.technologies.map((tech, i) => (
                                        <div key={i} className="flex flex-col items-center space-y-2">
                                            <img
                                                src={tech.logo}
                                                alt={tech.name}
                                                className="w-12 h-12 object-contain"
                                            />
                                            <p className="text-sm text-gray-600">{tech.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    );
}

export default Skills;

