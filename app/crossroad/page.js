"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Home() {
    const [expandWidth, setExpandWidth] = useState(false); // State to control horizontal expansion
    const [expandHeight, setExpandHeight] = useState(false); // State to control vertical expansion
    const [showContent, setShowContent] = useState(true); // State to control original content visibility
    const [showNewContent, setShowNewContent] = useState(false); // State to control new content visibility

    const handleAboutClick = () => {
        setShowContent(false); // First, hide the original content
        setTimeout(() => setExpandWidth(true), 200); // Begin horizontal expansion
    };

    const handleGoBackClick = () => {
        setShowNewContent(false); // Hide the new content
        setTimeout(() => setExpandHeight(false), 200); // Reverse vertical expansion
        setTimeout(() => {
            setExpandWidth(false); // Reverse horizontal expansion
            setShowContent(true); // Show original content after collapse
        }, 600); // Delay for horizontal reversal to finish
    };

    return (
        <div
            className="h-screen flex flex-col bg-gradient-to-b from-[rgba(66,55,226,1)] 
      via-[rgba(66,55,226,1)] to-[rgba(0,0,0,0)] bg-[length:100%_100%]"
        >
            <Header />
            <main className="flex relative flex-grow items-center justify-center h-40">
                <motion.div
                    initial={{ width: "50%", height: "50%" }} // Starting dimensions
                    animate={{
                        width: expandWidth ? "80%" : "50%", // Expand or collapse horizontally
                        height: expandHeight ? "80%" : "50%", // Expand or collapse vertically
                    }}
                    transition={{
                        width: { duration: 0.4, ease: "easeInOut" }, // Smooth width transition
                        height: expandHeight
                            ? { duration: 0.4, ease: "easeInOut", delay: 0.2 } // Smooth height transition with delay
                            : { duration: 0.4, ease: "easeInOut" }, // Smooth collapse
                    }}
                    onAnimationComplete={(latest) => {
                        if (latest.width === "80%" && expandWidth) {
                            setExpandHeight(true); // Trigger vertical expansion
                        }
                        if (latest.height === "80%" && expandHeight) {
                            setShowNewContent(true); // Show new content
                        }
                    }}
                    className="bg-black text-white rounded-lg px-8 py-8 sm:px-24 sm:py-16 shadow-lg border border-white overflow-hidden"
                >
                    <AnimatePresence>
                        {showContent && (
                            <motion.div
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }} // Smooth fade-out transition
                                className="flex flex-col text-left"
                            >
                                <h1 className="font-light text-3xl sm:text-4xl self-start mb-24">
                                    ArbiDapps <br /> noCode Platform
                                </h1>

                                <div className="flex justify-between gap-4">
                                    <button
                                        className="border border-white rounded-lg py-1 px-2 sm:py-2 sm:px-4 hover:bg-[rgba(66,55,226,1)] hover:border-[rgba(66,55,226,1)] transition duration-200"
                                        onClick={handleAboutClick} // Trigger fade-out and expansion
                                    >
                                        About the Platform
                                    </button>
                                    <button
                                        className="border border-white rounded-lg py-1 px-2 sm:py-2 sm:px-4 hover:bg-[rgba(66,55,226,1)] hover:border-[rgba(66,55,226,1)] transition duration-200"
                                        onClick={() => alert("Use the Platform")}
                                    >
                                        Use the Platform
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* New Content */}
                    <AnimatePresence>
                        {showNewContent && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }} // Smooth fade-in transition
                                className="flex flex-col items-start justify-start"
                            >
                                <h2 className="font-light text-2xl sm:text-3xl text-left mb-8">
                                    ABOUT THE PLATFORM
                                </h2>
                                <hr className="border-t border-white w-full mb-8" />
                                <p className="font-light text-sm sm:text-base leading-relaxed text-justify mb-16">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                    vulputate pharetra dignissim. Curabitur imperdiet nisi a
                                    hendrerit faucibus. Vestibulum rutrum fringilla sem in
                                    vestibulum. Cras id finibus lectus, vitae hendrerit ligula...
                                </p>
                                <button
                                    className="border border-white rounded-lg py-1 px-2 sm:py-2 sm:px-4 hover:bg-white hover:text-black transition duration-200"
                                    onClick={handleGoBackClick} // Trigger reverse animations
                                >
                                    Go Back
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}
