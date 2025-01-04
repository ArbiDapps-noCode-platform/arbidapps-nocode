"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        signers: [""], // Array to store signers inputs
        threshold: "" // Field for the threshold input
    });

    const addSignerInput = () => {
        if (formData.signers.length < 3) {
            setFormData((prev) => ({
                ...prev,
                signers: [...prev.signers, ""]
            }));
        }
    };

    const handleSignerChange = (index, value) => {
        const updatedSigners = [...formData.signers];
        updatedSigners[index] = value;
        setFormData((prev) => ({
            ...prev,
            signers: updatedSigners
        }));
    };

    const handleThresholdChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            threshold: value
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
            px-10 sm:px-24 py-20 bg-black text-white"
        >
            {/* Background Div */}
            <div className="absolute bottom-20 h-1/3 -z-10 
                bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(66,55,226,1)] to-[rgba(66,55,226,1)] 
                w-[calc(100%_-_2.5rem)] sm:w-[calc(100%_-_6rem)]"
            ></div>

            {/* Content */}
            <div className="w-full h-full flex flex-col gap-1.5 items-center py-28 z-0">
                <h1 className="font-light text-xl text-center sm:text-4xl sm:leading-relaxed mb-16">
                    <span className="bg-[#F5EB43] px-1 text-black ">
                        Multisign Smart Account
                    </span>{" "}
                    <br />
                    Deployment
                </h1>

                <motion.div className="w-1/2 h-full flex flex-col">
                    {/* First Input and Label */}
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-white text-sm">signers</label>
                        <div className="flex w-96">
                            <input
                                type="text"
                                className="flex-grow h-12 bg-transparent px-4 py-2
                                border-2 border-white rounded-md text-white text-sm
                                outline-none focus:ring-2 focus:ring-white"
                                value={formData.signers[0]}
                                onChange={(e) =>
                                    handleSignerChange(0, e.target.value)
                                }
                            />
                            <button
                                className="h-12 w-12 ml-4 border-2 border-white rounded-md flex justify-center items-center hover:bg-white group"
                                onClick={addSignerInput}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="30" height="30" viewBox="0 0 100 100"
                                    className="group-hover:fill-black fill-white"
                                >
                                    <rect x="45" y="10" width="10" height="80" />
                                    <rect x="10" y="45" width="80" height="10" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Dynamically Render Extra Inputs */}
                    {formData.signers.slice(1).map((inputValue, index) => (
                        <div
                            key={index + 1}
                            className="flex w-full justify-end items-center mt-2"
                        >
                            <input
                                type="text"
                                className="self-end w-96 h-12 bg-transparent px-4 py-2 border-2 border-white rounded-md text-white text-sm outline-none focus:ring-2 focus:ring-white"
                                value={inputValue}
                                onChange={(e) =>
                                    handleSignerChange(index + 1, e.target.value)
                                }
                            />
                        </div>
                    ))}

                    {/* Threshold Input */}
                    <div className="flex justify-between items-center mt-6">
                        <label className="text-white text-sm mb-1">
                            threshold
                        </label>
                        <input
                            type="text"
                            className="w-96 h-12 bg-transparent border-2 border-white text-white text-sm rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-white"
                            value={formData.threshold}
                            onChange={(e) => handleThresholdChange(e.target.value)}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="w-full flex justify-center items-center mt-auto">
                        <button
                            className="w-52 py-1 px-2 sm:py-2 sm:px-4 
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
