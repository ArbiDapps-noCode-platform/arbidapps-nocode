"use client";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";


export default function Home() {
    const router = useRouter();

    const navigateToPage = () => {
        router.push("/platform");
    };

    const [menuState, setMenuState] = useState(null); // Initial state is null to indicate loading

    useEffect(() => {

        const isMobile = window.innerWidth <= 768;
        setMenuState({
            view: "menu", // Possible values: 'menu', 'about', 'platform'
            showContent: true, // Remove content during animations
            isMobile: isMobile,
            dimensions: isMobile
                ? { width: "80%", height: "50%" } // Mobile dimensions
                : { width: "50%", height: "50%" }, // Desktop dimensions
            fullWidth: false,
            fullHeight: false, // To activate certain animation effects
            expanded: false, // Indicates if content is expanded
        });
    }, []); // Run only once when the component mounts

    // Abstraction to update the menu state
    const updateMenuState = (updates) =>
        setMenuState((prevState) => ({ ...prevState, ...updates }));

    // To display the about menu
    const handleAboutClick = () => {
        updateMenuState({ view: "about", showContent: false, dimensions: { width: "80%", height: "80%" }, expanded: true });
        setTimeout(() => updateMenuState({ showContent: true }), 1_000)
    };

    // To return to the initial menu
    const handleGoBackClick = () => {
        updateMenuState({ view: "menu", showContent: false, dimensions: { width: (menuState.isMobile ? "80%" : "50%"), height: "50%" }, expanded: false });
        setTimeout(() => updateMenuState({ showContent: true }), 1_000)
    };

    // To display the use platform action
    const handleUsePlatformClick = () => {
        updateMenuState({ view: "platform", showContent: false, dimensions: { width: "100%", height: "100%" }, expanded: true });
        setTimeout(() => updateMenuState({ showContent: true }), 1_000)
    };

    if (!menuState) {
        // Render nothing or a loading indicator until menuState is defined
        return null;
    }

    return (
        <>

            <Header />
            <main
                className={`absolute top-0 left-0 w-full h-full flex items-center justify-center z-10
                    bg-gradient-to-b from-[rgba(66,55,226,1)] via-[rgba(66,55,226,1)] to-[rgba(0,0,0,0)]
                    bg-[length:100%_100%]`}>
                <motion.div
                    initial={{ width: menuState.dimensions.width, height: menuState.dimensions.height }}
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
                        if (parseFloat(latest.width) === 100) {
                            updateMenuState({ fullWidth: true });
                        }
                        if (parseFloat(latest.height) === 100) {
                            updateMenuState({ fullHeight: true });
                        }
                        if (parseFloat(latest.height) === 100 && !menuState.isMobile) {
                            navigateToPage();
                        }
                    }}
                    className={` bg-black text-white shadow-lg border border-white flex flex-col rounded-lg
                    justify-center items-center px-6 py-8 sm:px-24 sm:py-16
                    ${menuState.fullWidth ? "border-x-0 rounded-none" : ""} 
                    ${menuState.fullHeight ? "border-0" : ""}
                    `}
                >
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            // transition={{ duration: 0.4 }} // Smooth fade-out transition
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
                            {menuState.view == "platform" && menuState.showContent && menuState.isMobile && (
                                <>
                                    <p className="font-light text-sm sm:text-base leading-relaxed text-justify mb-16">
                                        Please use a Desktop device to access the platform
                                    </p>
                                    <button onClick={navigateToPage}>lol</button>
                                </>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </main>
            <Footer />
        </>
    );
}
