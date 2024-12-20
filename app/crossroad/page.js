"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Home() {
    const [menuState, setMenuState] = useState({
        view: "menu", // Possible values: 'menu', 'about', 'platform'
        showContent: true, // Remove content during animations
        dimensions: { // Size of the main content
            width: "50%",
            height: "50%",
        },
        fullWidth: false, fullHeight: false, // To activate certain animation effects
        expanded: false, // Indicates if content is expanded
    });

    // Function to
    const updateMenuState = (updates) =>
        setMenuState((prevState) => ({ ...prevState, ...updates }));

    const handleAboutClick = () => {
        updateMenuState({ view: "about", showContent: false, dimensions: { width: "80%", height: "80%" }, expanded: true });
        setTimeout(() => updateMenuState({ showContent: true }), 1_000)
    };

    const handleGoBackClick = () => {
        updateMenuState({ view: "menu", showContent: false, dimensions: { width: "50%", height: "50%" }, expanded: false });
        setTimeout(() => updateMenuState({ showContent: true }), 1_000)
    };
    const handleUsePlatformClick = () => {
        updateMenuState({ view: "platform", showContent: false, dimensions: { width: "100%", height: "100%" }, expanded: true });
        setTimeout(() => updateMenuState({ showContent: true }), 1_000)
    };

    return (
        <div
            className={`relative h-screen flex flex-col bg-gradient-to-b from-[rgba(66,55,226,1)] 
                via-[rgba(66,55,226,1)] to-[rgba(0,0,0,0)] bg-[length:100%_100%]`}
        >
            <Header />
            <main
                className={`absolute top-0 left-0 w-full h-full flex items-center justify-center z-10`}
            >
                <motion.div
                    initial={{ width: "50%", height: "50%" }}
                    animate={{
                        width: menuState.dimensions.width,
                        height: menuState.dimensions.height,
                    }}
                    transition={{
                        // When expanding, first expand the width, then height
                        // When rectracting, first retract height, then width
                        width: menuState.expanded
                            ? { duration: 0.4, ease: "easeInOut" }
                            : { duration: 0.4, ease: "easeInOut", delay: 0.4 },
                        height: menuState.expanded
                            ? { duration: 0.4, ease: "easeInOut", delay: 0.4 }
                            : { duration: 0.4, ease: "easeInOut" },
                    }}
                    onUpdate={(latest) => {
                        // Check if width or height reaches 100% and update the state, 
                        // this is to activate a css class for the animation
                        if (!menuState.fullWidth && parseFloat(latest.width) === 100) {
                            updateMenuState({ fullWidth: true });
                        }
                        if (!menuState.fullHeight && parseFloat(latest.height) === 100) {
                            updateMenuState({ fullHeight: true });
                        }
                    }}
                    className={` bg-black text-white shadow-lg border border-white flex flex-col rounded-lg
                    justify-center items-center px-8 py-8 sm:px-24 sm:py-16
                    ${menuState.fullWidth ? "border-x-0 rounded-none" : ""} 
                    ${menuState.fullHeight ? "border-0" : ""}
                    `}
                >
                    <AnimatePresence>

                        <motion.div
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }} // Smooth fade-out transition
                            className="flex flex-col items-start justify-start"
                        >
                            {menuState.view == "menu" && menuState.showContent && (
                                <>
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
                                            onClick={handleUsePlatformClick}
                                        >
                                            Use the Platform
                                        </button>
                                    </div>
                                </>
                            )}
                            {menuState.view == "about" && menuState.showContent && (
                                <>
                                    <h1 className="font-light text-2xl sm:text-3xl text-left mb-8">
                                        ABOUT THE PLATFORM
                                    </h1>
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
                                </>
                            )}
                            {menuState.view == "platform" && menuState.showContent && (
                                <>
                                    <h2 className="font-light text-2xl sm:text-3xl text-left mb-8">
                                        USE THE PLATFORM
                                    </h2>
                                    <hr className="border-t border-white w-full mb-8" />
                                    <p className="font-light text-sm sm:text-base leading-relaxed text-justify mb-16">
                                        Placeholder for the content
                                    </p>
                                    <button
                                        className="border border-white rounded-lg py-1 px-2 sm:py-2 sm:px-4 hover:bg-white hover:text-black transition duration-200"
                                        onClick={handleGoBackClick} // Trigger reverse animations
                                    >
                                        Go Back
                                    </button>
                                </>
                            )}

                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}
