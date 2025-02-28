import "./mywork.css";
import Image from "next/image";

function MyWork() {
    return (
        <div className={"my-28 px-20 sm:px-30"}>
            <div className={"font-bold text-4xl  "}>My Work</div>
            <nav className="flex justify-end gap-6 font-bold text-lg mb-6 mt-10 border-b pb-4">
                <div className="cursor-pointer hover:text-blue-500">All</div>
                <div className="cursor-pointer hover:text-blue-500">Web</div>
                <div className="cursor-pointer hover:text-blue-500">Mobile</div>
                <div className="cursor-pointer hover:text-blue-500">Artificial Intelligence</div>
            </nav>
            <div className={"flex flex-wrap flex-row  justify-around mt-10 "}>
                <div className={"basis-1/3 px-20"}>
                    <Image src={"/assets/images/project1.jpg"} width={"300"} height={"300"} alt={"1"}></Image>
                    <div className={"text-xl font-bold mt-3"}>Specs</div>
                </div>
                <div className={"basis-1/3 px-20"}>
                    <Image src={"/assets/images/project1.jpg"} width={"300"} height={"300"} alt={"1"}></Image>
                    <div className={"text-xl font-bold mt-3"}>Design</div>
                </div>
                <div className={"basis-1/3 px-20"}>
                    <Image src={"/assets/images/project1.jpg"} width={"300"} height={"300"} alt={"1"}></Image>
                    <div className={"text-xl font-bold mt-3"}>Development</div>
                </div>
            </div>
            <div className={"flex flex-wrap flex-row  justify-around mt-10 "}>
                <div className={"basis-1/3 px-20"}>
                    <Image src={"/assets/images/project1.jpg"} width={"300"} height={"300"} alt={"1"}></Image>
                    <div className={"text-xl font-bold mt-3"}>Specs</div>
                </div>
                <div className={"basis-1/3 px-20"}>
                    <Image src={"/assets/images/project1.jpg"} width={"300"} height={"300"} alt={"1"}></Image>
                    <div className={"text-xl font-bold mt-3"}>Design</div>
                </div>
                <div className={"basis-1/3 px-20"}>
                    <Image src={"/assets/images/project1.jpg"} width={"300"} height={"300"} alt={"1"}></Image>
                    <div className={"text-xl font-bold mt-3"}>Development</div>
                </div>
            </div>
            <div className={"flex flex-wrap flex-row  justify-around mt-10 "}>
                <div className={"basis-1/3 px-20"}>
                    <Image src={"/assets/images/project1.jpg"} width={"300"} height={"300"} alt={"1"}></Image>
                    <div className={"text-xl font-bold mt-3"}>Specs</div>
                </div>
                <div className={"basis-1/3 px-20"}>
                    <Image src={"/assets/images/project1.jpg"} width={"300"} height={"300"} alt={"1"}></Image>
                    <div className={"text-xl font-bold mt-3"}>Design</div>
                </div>
                <div className={"basis-1/3 px-20"}>
                    <Image src={"/assets/images/project1.jpg"} width={"300"} height={"300"} alt={"1"}></Image>
                    <div className={"text-xl font-bold mt-3"}>Development</div>
                </div>
            </div>
        </div>

    );
}

export default MyWork;