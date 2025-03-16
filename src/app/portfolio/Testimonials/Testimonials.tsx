import Image from "next/image";

const testimonials = [
    {
        name: "John Doe",
        role: "Software Engineer",
        image: "/assets/images/user.png",
        quote: "This service is amazing! It completely changed how I work.",
    },
    {
        name: "Jane Smith",
        role: "Product Manager",
        image: "/assets/images/user.png",
        quote: "A game-changer! I highly recommend it to everyone.",
    },
    {
        name: "Alex Johnson",
        role: "UI/UX Designer",
        image: "/assets/images/user.png",
        quote: "An incredible experience, very intuitive and efficient.",
    },
];

function Testimonials() {
    return (
        <div>
            <div className={"font-bold text-4xl my-25  px-20 sm:px-30"}>What Our Clients Say</div>
            <div className="py-16 px-6 sm:px-12 md:px-20 max-w-6xl mx-auto text-center">
                {/* Grille responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-2xl p-6">
                            <Image
                                src={testimonial.image}
                                width={80}
                                height={80}
                                alt={testimonial.name}
                                className=" mx-auto mb-4"
                            />
                            <p className="text-gray-600 italic">{testimonial.quote}</p>
                            <h3 className="font-bold text-lg mt-4">{testimonial.name}</h3>
                            <span className="text-gray-500 text-sm">{testimonial.role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Testimonials;
