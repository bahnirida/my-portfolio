import Image from "next/image";
import Link from "next/link";
import React from "react";

function Contact() {
    return (
        <div className={""}>

            <div className={"bg-white flex flex-row justify-around my-7"}>
                <div className={"w-1/3"}>
                   <div className={"text-3xl font-bold  "}>Lets work together !</div>
                    <div className={"text-justify mt-3"}>
                        I m available to discuss your project needs. Feel free to reach out via:
                    </div>
                    <div className={"flex flex-row justify-around mt-2"}>
                        <Link href={"/"}>
                            <Image src={"/assets/images/social-media/instagram.png"} width={"30"} height={"30"} alt={"src"}></Image>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/rida-bahni/"}>
                            <Image src={"/assets/images/social-media/linkedin.png"} width={"30"} height={"30"} alt={"src"}></Image>
                        </Link>
                        <Link href={"https://www.upwork.com/freelancers/~01580a67694dfcb957?mp_source=share"}>
                            <Image src={"/assets/images/social-media/upwork.png"} width={"30"} height={"30"} alt={"src"}></Image>
                        </Link>
                        <Link href={"https://wa.me/+212702753974"}>
                            <Image src={"/assets/images/social-media/whatsapp.png"} width={"30"} height={"30"} alt={"src"}></Image>
                        </Link>
                    </div>
                    <div className={"text-justify mt-2"}>
                        I look forward to exploring how we can work together to bring your ideas to life.
                    </div>
                </div>
                <div className={"w-1/2"}>
                    <div className={"basis-1/3"}>
                        <label htmlFor="price" className="text-sm font-medium leading-6 text-gray-900">Name
                            :</label>
                        <input type="text" name="price" id="price"
                               className="bg-gray-100 w-full border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className={"basis-1/3"}>
                        <label htmlFor="price"
                               className=" text-sm font-medium leading-6 text-gray-900">Email :</label>
                        <input type="text" name="price" id="price"
                               className="bg-gray-100 w-full border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className={"basis-1/3"}>
                        <label htmlFor="price"
                               className="block text-sm font-medium leading-6 text-gray-900">Message :</label>
                        <textarea name="price" id="price"
                                  className="bg-gray-100 w-full border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <button type={"submit"}
                            className={" mt-3 text-white bg-neutral-900 hover:bg-neutral-800 focus:ring-4 focus:ring-neutral-300 font-medium text-lg px-8 py-5  "}>Submit
                    </button>

                </div>

            </div>
            <div className={"bg-neutral-100 text-center py-3"}>
                Copyright @ 2024
            </div>
        </div>
    );
}

export default Contact;