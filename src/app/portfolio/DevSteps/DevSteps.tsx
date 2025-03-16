

import "./devsteps.css";

function DevSteps() {
    return (
        <div className={"my-5 px-20 sm:px-30"}>
            <div className={"container font-bold text-4xl  "}>How do I work ?</div>
            <div className={"flex flex-row justify-around mt-20"}>
                <div className={"w-1/4 flex flex-col justify-center items-center"}>
                    <div className={"w-20 h-20 bg-amber-500 hover:animate-spin border-ft"}></div>
                    <div className={"text-xl font-bold mt-3"}>Specs</div>
                    <div className={"text-sm mt-3 text-center"}>
                        Clearly define project goals, requirements, and constraints.
                    </div>
                </div>
                <div className={"w-1/4 flex flex-col justify-center items-center"}>
                    <div className={"w-20 h-20 bg-blue-500 hover:animate-ping border-sec"}></div>
                    <div className={"text-xl font-bold mt-3"}>Design</div>
                    <div className={"text-sm mt-3 text-center"}>
                        Develop detailed blueprints <br/> and system architecture.
                    </div>
                </div>
                <div className={"w-1/4 flex flex-col justify-center items-center"}>
                    <div className={"w-20 h-20 bg-green-500 hover:animate-pulse border-td"}></div>
                    <div className={"text-xl font-bold mt-3"}>Development</div>
                    <div className={"text-sm mt-3 text-center"}>
                        Build and code the system <br/> based on the design.
                    </div>
                </div>
                <div className={"w-1/4 flex flex-col justify-center items-center"}>
                    <div className={"w-20 h-20 bg-orange-500 hover:animate-bounce border-lt"}></div>
                    <div className={"text-xl font-bold text-nowrap mt-3"}>Test & Feedback</div>
                    <div className={"text-sm mt-3 text-center"}>
                        Validate functionality, gather input, and refine the product.
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DevSteps;