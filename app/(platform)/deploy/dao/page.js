"use client";
import { motion } from "framer-motion"; // Corrected import for framer-motion
import { useState } from "react";

export default function Home() {
    // Hardcoded JSON object with titles
    const inputFields = [
        { id: 1, title: "DAO name" },
        { id: 2, title: "governance token address" },
        { id: 3, title: "voting delay" },
        { id: 4, title: "quorum" },
        { id: 5, title: "voting period" },
        { id: 6, title: "timelock controller address" },
        { id: 7, title: "proposal threshold" },
    ];

    // State to store input values
    const [formData, setFormData] = useState(
        inputFields.reduce((acc, field) => {
            acc[field.title] = "";
            return acc;
        }, {})
    );

    const handleInputChange = (fieldTitle, value) => {
        setFormData((prev) => ({
            ...prev,
            [fieldTitle]: value,
        }));
    };

    const handleSubmit = () => {
        console.log("Form Data:", formData);
        alert("Form submitted! Check console for data.");
    };

    return (
        <main
            className="relative top-0 left-0 w-full h-full 
            flex flex-col items-center justify-between z-10 
            py-20 bg-black text-white"
        >
            {/* Background Div */}
            <div
                className="absolute bottom-20 h-1/3 -z-10 
                bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(66,55,226,1)] to-[rgba(66,55,226,1)] 
                w-[calc(100%_-_2.5rem)] sm:w-[calc(100%_-_6rem)]"
            ></div>

            {/* Content */}
            <div className="w-full h-full flex flex-col gap-1.5 items-center py-28 z-0">
                <h1 className="font-light text-xl sm:text-4xl sm:leading-relaxed mb-16">
                    <span className="bg-[#F5EB43] px-1 text-black ">DAO</span> Deployment
                </h1>

                <motion.div className="w-3/4 h-full flex flex-wrap gap-8 justify-between">
                    {/* Dynamically Render Input Fields */}
                    {inputFields.map((field) => (
                        <div
                            key={field.id}
                            className="flex w-[calc(50%-1rem)] items-center gap-4"
                        >
                            <label
                                className="text-white text-sm w-1/3"
                            >
                                {field.title}
                            </label>
                            <input
                                type="text"
                                className="flex-grow h-12 bg-transparent border border-white text-white text-sm rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-white"
                                value={formData[field.title]}
                                onChange={(e) =>
                                    handleInputChange(field.title, e.target.value)
                                }
                            />
                        </div>
                    ))}

                    <div className="w-full flex justify-center items-center mt-10">
                        <button
                            className="w-52 py-2 px-4 
                                    border border-white rounded-lg
                                    hover:bg-white hover:text-black transition duration-200
                                    outline-none focus:ring-2 focus:ring-white"
                            onClick={handleSubmit}
                        >
                            Deploy
                        </button>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
