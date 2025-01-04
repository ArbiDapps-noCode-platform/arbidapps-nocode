"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // Corrected import for framer-motion
import { useEffect, useState } from "react";
import { interactionOptions } from "@/public/constants/deploy";
import DropdownArow_icon from "@/public/assets/icons/DropdownArow_icon";

export default function Home() {
    const router = useRouter();

    const navigateToPage = () => {
        router.push("/");
    };

    return (
        <main className="relative top-0 left-0 w-full h-full 
        flex flex-col items-center justify-between z-10 
        px-10 sm:px-24 py-20 bg-black text-white"
        >
            {/* Background Div */}
            <div className="absolute bottom-20 h-1/3 -z-10 
            bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(66,55,226,1)] to-[rgba(66,55,226,1)] 
            w-[calc(100%_-_2.5rem)] sm:w-[calc(100%_-_6rem)]"></div>

            {/* Content */}
            <div className="w-full h-full flex flex-col gap-1.5 items-center py-28 z-0">

                <h1 className="font-light text-xl text-center sm:text-4xl sm:leading-relaxed mb-16">
                    <span className="bg-[#F5EB43] px-1 text-black ">Multisign Smart Account</span> <br />Deployment
                </h1>

                <motion.div className="w-1/2 h-full flex flex-col">
                    <div className="flex justify-between items-center">
                        <label className="text-white text-sm mb-1">signers</label>
                        <input
                            type="text"
                            className="w-96 h-12 bg-transparent border border-white text-white text-sm rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-white"
                        // placeholder="Enter token name"
                        />
                    </div>
                    <div className="flex justify-between items-center mt-6">
                        <label className="text-white text-sm mb-1">threshold</label>
                        <input
                            type="text"
                            className="w-96 h-12 bg-transparent border border-white text-white text-sm rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-white"
                        // placeholder="Enter token symbol"
                        />
                    </div>
                    <div className="w-full flex justify-center items-center mt-auto">
                        <button
                            className="w-52 py-1 px-2 sm:py-2 sm:px-4 
                                    border border-white rounded-lg
                                    hover:bg-white hover:text-black transition duration-200
                                    outline-none focus:ring-2 focus:ring-white"
                            onClick={() => alert("lol")}
                        >
                            Deploy
                        </button>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
