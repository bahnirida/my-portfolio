

import "./mywork.css";
import Image from "next/image";

function MyWork() {
    return (
        <div className={"my-28"}>
            <div className={"text-center font-bold text-4xl  "}>My Work</div>
            <div className={"flex flex-wrap flex-row  justify-around mt-10 "}>
                <div className={"w-1/3 px-20"}>
                    <Image src={"/assets/images/project1.jpg"} width={"300"} height={"300"} alt={"1"}></Image>
                    <div className={"text-xl font-bold mt-3"}>Specs</div>
                    <div className={"text-sm mt-3 "}>
                        Clearly define project goals, requirements, and constraints.
                    </div>
                </div>
                <div className={"w-1/3 px-20"}>
                    <Image src={"/assets/images/project1.jpg"} width={"300"} height={"300"} alt={"1"}></Image>
                    <div className={"text-xl font-bold mt-3"}>Design</div>
                    <div className={"text-sm mt-3 "}>
                        Develop detailed blueprints <br/> and system architecture.
                    </div>
                </div>
                <div className={"w-1/3 px-20"}>
                    <Image src={"/assets/images/project1.jpg"} width={"300"} height={"300"} alt={"1"}></Image>
                    <div className={"text-xl font-bold mt-3"}>Development</div>
                    <div className={"text-sm mt-3 "}>
                        Build and code the system <br/> based on the design.
                    </div>
                </div>
            </div>
            <div className={"flex flex-wrap flex-row  justify-around mt-10 "}>
                <div className={"w-1/3 px-20"}>
                    <Image src={"/assets/images/project1.jpg"} width={"300"} height={"300"} alt={"1"}></Image>
                    <div className={"text-xl font-bold mt-3"}>Specs</div>
                    <div className={"text-sm mt-3 "}>
                        Clearly define project goals, requirements, and constraints.
                    </div>
                </div>
                <div className={"w-1/3 px-20"}>
                    <Image src={"/assets/images/project1.jpg"} width={"300"} height={"300"} alt={"1"}></Image>
                    <div className={"text-xl font-bold mt-3"}>Design</div>
                    <div className={"text-sm mt-3 "}>
                        Develop detailed blueprints <br/> and system architecture.
                    </div>
                </div>
                <div className={"w-1/3 px-20"}>
                    <Image src={"/assets/images/project1.jpg"} width={"300"} height={"300"} alt={"1"}></Image>
                    <div className={"text-xl font-bold mt-3"}>Development</div>
                    <div className={"text-sm mt-3 "}>
                        Build and code the system <br/> based on the design.
                    </div>
                </div>
            </div>
            <div className={"flex flex-wrap flex-row  justify-around mt-10 "}>
                <div className={"w-1/3 px-20"}>
                    <Image src={"/assets/images/project1.jpg"} width={"300"} height={"300"} alt={"1"}></Image>
                    <div className={"text-xl font-bold mt-3"}>Specs</div>
                    <div className={"text-sm mt-3 "}>
                        Clearly define project goals, requirements, and constraints.
                    </div>
                </div>
                <div className={"w-1/3 px-20"}>
                    <Image src={"/assets/images/project1.jpg"} width={"300"} height={"300"} alt={"1"}></Image>
                    <div className={"text-xl font-bold mt-3"}>Design</div>
                    <div className={"text-sm mt-3 "}>
                        Develop detailed blueprints <br/> and system architecture.
                    </div>
                </div>
                <div className={"w-1/3 px-20"}>
                    <Image src={"/assets/images/project1.jpg"} width={"300"} height={"300"} alt={"1"}></Image>
                    <div className={"text-xl font-bold mt-3"}>Development</div>
                    <div className={"text-sm mt-3 "}>
                        Build and code the system <br/> based on the design.
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MyWork;