'use client';
import "./mywork.css";
import Image from "next/image";
import { useEffect, useState } from "react";

function MyWork() {
    const [isVisible, setIsVisible] = useState(false);

    // Fade-in effect on component load
    useEffect(() => {
        const timeout = setTimeout(() => setIsVisible(true), 200);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className={"font-bold text-4xl my-24 px-20 sm:px-30"}>
                My Work
            </div>
            <div className={"my-20 px-20 sm:px-30 max-w-5xl mx-auto text-center"}>
                <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 font-bold text-base sm:text-lg mb-6 mt-10 border-b pb-4">
                    <div className="cursor-pointer hover:text-blue-500">All</div>
                    <div className="cursor-pointer hover:text-blue-500">Web</div>
                    <div className="cursor-pointer hover:text-blue-500">Mobile</div>
                    <div className="cursor-pointer hover:text-blue-500">Artificial Intelligence</div>
                </nav>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 justify-center">
                    {Array(9).fill("").map((_, index) => (
                        <div
                            key={index}
                            className="transition-transform transform hover:scale-105 hover:shadow-xl hover:opacity-90"
                        >
                            <Image
                                src={"/assets/images/project.jpg"}
                                width={300}
                                height={300}
                                alt={`Image ${index + 1}`}
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyWork;
