import React from 'react';
import Image from "next/image";
import './hero.css';
function HeroSection() {
    return (
        <div className={"bg-white h-screen "}>
            <div className={"flex flex-row "}>
                <div className={"lg:basis-1/2 w-100 ml-3"}>
                    <div className={"py-12 container mx-12"}>
                        <div className={"text-2xl font-bold"}>Web | Mobile Development</div>
                        <div className={"text-8xl font-bold mt-3"}>Full stack Developer</div>
                        <div className={"text-xl text-justify mt-3"}>Innovative software engineer specializing in web,
                            mobile, and AI development.
                            Crafting intelligent solutions that bridge technology and user experience.
                        </div>
                        <button type={"button"}
                                className={" mt-3 text-white bg-neutral-900 hover:bg-neutral-800 focus:ring-4 focus:ring-neutral-300 font-medium text-lg px-8 py-5  "}>Contact
                        </button>
                    </div>

                </div>
                <div className={"hidden lg:basis-1/2 lg:flex lg:justify-center lg:items-center"}>
                    <div className={"relative"}>
                        <div
                            className={"absolute bottom-6 -right-5 hover:animate-spin h-20 w-20 bg-orange-400 shape-pre-border animate-pulse"}></div>
                        <Image src="../assets/images/cvphoto.svg" height={300} width={300} alt={"My Image"}/>
                        <div
                            className={"absolute -bottom-3 -left-3 hover:animate-bounce h-10 w-10 bg-fuchsia-300 rounded-full animate-pulse"}></div>

                        <div
                            className={"absolute left-0 top-0 h-20 hover:animate-ping w-20 bg-emerald-500 shape-sec-border animate-pulse"}></div>
                    </div>
                </div>
            </div>
            <div className={"flex justify-around mt-10"}>
                <Image src={"/assets/images/area-icons/automation.png"} width={"50"} height={"50"} alt={"ff"}></Image>
                <Image src={"/assets/images/area-icons/coding.png"} width={"50"} height={"50"} alt={"ff"}></Image>
                <Image src={"/assets/images/area-icons/mobile-development.png"} width={"50"} height={"30"} alt={"ff"}></Image>
            </div>
        </div>
    );
}

export default HeroSection;
