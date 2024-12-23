"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // Corrected import for framer-motion
import { useEffect, useState } from "react";

export default function Home() {
    const router = useRouter();

    const navigateToPage = () => {
        router.push("/");
    };

    // Array to create 5 squares with initial colors and content
    const squares = [
        { color: "#21a575", border: "#19BD5DA6", miniSquaresColor: "#19BD5D"},
        { color: "#c33354", border: "#E23232A6", miniSquaresColor: "#E23232"},
        { color: "#a79a3e", border: "#BDAF19A6", miniSquaresColor: "#BDAF19" },
        { color: "#89c452", border: "#99E232A6", miniSquaresColor: "#99E232" },
        { color: "#21a5b5", border: "#19BDAAA6", miniSquaresColor: "#19BDAA" },
    ];

    const [areSquaresVisible, setAreSquaresVisible] = useState("hidden");

    const figures = [
        // First figure: 7
        [
            { initialX: -1, initialY: -1, finalX: -1, finalY: -3 },
            { initialX: 0, initialY: -1, finalX: 0, finalY: -3 },
            { initialX: 1, initialY: -1, finalX: 1, finalY: -3 },

            { initialX: -1, initialY: 0, finalX: -1, finalY: -3 },
            { initialX: 0, initialY: 0, finalX: 0, finalY: 0 },
            { initialX: 0, initialY: 0, finalX: 0, finalY: -1 },
            { initialX: 0, initialY: 0, finalX: 0, finalY: -3 },
            { initialX: 1, initialY: 0, finalX: 1, finalY: -2 },

            { initialX: -1, initialY: 1, finalX: -1, finalY: -3 },
            { initialX: 0, initialY: 1, finalX: 0, finalY: 1 },
            { initialX: 1, initialY: 1, finalX: 1, finalY: -3 },
        ],

        // Second figure: 2
        [
            { initialX: -1, initialY: -1, finalX: -1, finalY: -3 },
            { initialX: 0, initialY: -1, finalX: 0, finalY: -3 },
            { initialX: 1, initialY: -1, finalX: 1, finalY: -2 },

            { initialX: -1, initialY: 0, finalX: -1, finalY: 0 },
            { initialX: 0, initialY: 0, finalX: 0, finalY: -1 },
            { initialX: 1, initialY: 0, finalX: 1, finalY: -2 },

            { initialX: -1, initialY: 1, finalX: -1, finalY: 1 },
            { initialX: 0, initialY: 1, finalX: 0, finalY: 1 },
            { initialX: 1, initialY: 1, finalX: 1, finalY: 1 },
        ],

        // Third figure: T
        [
            { initialX: -1, initialY: -1, finalX: -1, finalY: -3 },
            { initialX: 0, initialY: -1, finalX: 0, finalY: -3 },
            { initialX: 1, initialY: -1, finalX: 1, finalY: -3 },

            { initialX: -1, initialY: 0, finalX: -1, finalY: -3 },
            { initialX: 0, initialY: 0, finalX: 0, finalY: -2 },
            { initialX: 0, initialY: 0, finalX: 0, finalY: -1 },
            { initialX: 0, initialY: 0, finalX: 0, finalY: -0 },
            { initialX: 1, initialY: 0, finalX: 1, finalY: -3 },

            { initialX: -1, initialY: 1, finalX: -1, finalY: -3 },
            { initialX: 0, initialY: 1, finalX: 0, finalY: 1 },
            { initialX: 1, initialY: 1, finalX: 1, finalY: -3 },
        ],

        // Fourth figure: S
        [
            { initialX: -1, initialY: -1, finalX: -1, finalY: -2 },
            { initialX: 0, initialY: -1, finalX: 0, finalY: -3 },
            { initialX: 1, initialY: -1, finalX: 1, finalY: -3 },

            { initialX: -1, initialY: 0, finalX: -1, finalY: 1 },
            { initialX: 0, initialY: 0, finalX: 0, finalY: -1 },
            { initialX: 1, initialY: 0, finalX: 1, finalY: -3 },

            { initialX: -1, initialY: 1, finalX: -1, finalY: 1 },
            { initialX: 0, initialY: 1, finalX: 0, finalY: 1 },
            { initialX: 1, initialY: 1, finalX: 1, finalY: 0 },
        ],

        // Fifth figure: D
        [
            { initialX: -1, initialY: -1, finalX: -1, finalY: -3 },
            { initialX: -1, initialY: -1, finalX: -1, finalY: 0 },
            { initialX: 0, initialY: -1, finalX: 0, finalY: -3 },
            { initialX: 1, initialY: -1, finalX: 1, finalY: -2 },

            // { initialX: -1, initialY: 0, finalX: -1, finalY: 0 },
            { initialX: -1, initialY: 0, finalX: -1, finalY: -1 },
            { initialX: -1, initialY: 0, finalX: -1, finalY: -2 },
            { initialX: 0, initialY: 0, finalX: 0, finalY: -3 },
            { initialX: 1, initialY: 0, finalX: 1, finalY: -1 },

            { initialX: -1, initialY: 1, finalX: -1, finalY: 1 },
            { initialX: 0, initialY: 1, finalX: 0, finalY: 1 },
            { initialX: 1, initialY: 1, finalX: 1, finalY: 0 },
        ]
    ]

    // Manage hover states for each square
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <main
            className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-between z-10 px-10 sm:px-24 bg-black text-white py-20`}
        >
            <div className="w-full h-[650px] flex gap-1.5">
                {squares.map((square, index) => (
                    <motion.div
                        key={index}
                        initial={{
                            scaleY: 0, // Start with scaleY at 0 (no height)
                            transformOrigin: "bottom", // Expand from the bottom
                        }}
                        animate={{
                            scaleY: 1, // Final scaleY (full height)
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                        onAnimationComplete={() => {
                            setTimeout(() => {
                                setAreSquaresVisible("visible")
                            }, 250);
                        }} // Change color after animation
                        className={`group flex-grow h-full justify-center bg-[#4237E2] rounded-xl relative transition-all`} // Adding hover effect to scale down on hover
                    >
                        {/* First div occupying the entire space */}
                        <div className="h-full w-full rounded-xl transition-all duration-300 group-hover:scale-90"
                            style={{
                                backgroundColor: square.border,
                                visibility: areSquaresVisible
                            }}>
                        </div>

                        {/* Second div, 18px smaller both vertically and horizontally */}
                        <div className="rounded-xl absolute top-0 left-0 z-10 flex justify-center items-center"
                            style={{
                                backgroundColor: square.color,
                                width: `calc(100% - 18px)`, // Make width 18px smaller
                                height: `calc(100% - 18px)`, // Make height 18px smaller
                                top: "9px", // Center the smaller div vertically
                                left: "9px", // Center the smaller div horizontally
                                visibility: areSquaresVisible
                            }}
                            // We'll handle mouse events here to trigger the small squares animation
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="relative w-[30%] h-[30%] flex items-center justify-center">
                                {figures[index].map((sq, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-[20px] h-[20px]"
                                        style={{backgroundColor: square.miniSquaresColor}}
                                        initial={{
                                            x: sq.initialX * 20,
                                            y: sq.initialY * 20,
                                        }}
                                        animate={
                                            hoveredIndex === index
                                                ? {
                                                    x: sq.finalX * 20,
                                                    y: sq.finalY * 20,
                                                }
                                                : {
                                                    x: sq.initialX * 20,
                                                    y: sq.initialY * 20,
                                                }
                                        }
                                        transition={{
                                            duration: 0.15,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
             
            {/* Text Carousel */}
            <div className="w-full overflow-hidden relative bg-black flex items-center">
                <div className="carousel flex whitespace-nowrap">
                    <div className="animate-scroll">
                        {Array(10)
                            .fill("select token")
                            .map((text, index) => (
                                <span
                                    key={`text-${index}`}
                                    className="mx-4 text-6xl font-bold text-white"
                                >
                                    {text}
                                </span>
                            ))}
                    </div>
                    <div className="animate-scroll">
                        {Array(10)
                            .fill("select token")
                            .map((text, index) => (
                                <span
                                    key={`text-duplicate-${index}`}
                                    className="mx-4 text-6xl font-bold text-white"
                                >
                                    {text}
                                </span>
                            ))}
                    </div>
                </div>
            </div>

            {/* Styling for the carousel */}
            <style jsx>{`
                .carousel {
                    display: flex;
                }
                .animate-scroll {
                    display: flex;
                    animation: scroll 10s linear infinite;
                }
                @keyframes scroll {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </main>
    );
}
