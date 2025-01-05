"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { squares, figures } from "@/public/constants/animations";

export default function Platform() {
    const router = useRouter();

    const [areSquaresVisible, setAreSquaresVisible] = useState("hidden");

    // Manage hover states for each square
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Create an object enumerating the elements from 1 to 5
    const numberEnum = {
        0: ["erc721", "/deploy/erc721"],
        1: ["erc20", "/deploy/erc20"],
        2: ["Airdrop", "/deploy/airdrop"],
        3: ["Multisign Smart Account", "/deploy/msa"],
        4: ["DAO", "/deploy/dao"],
    };

    return (
        <main
            className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-between z-10 px-10 sm:px-24 bg-black text-white py-20`}
        >
            <div className="w-full h-full flex gap-1.5">
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
                                setAreSquaresVisible("visible");
                            }, 250);
                        }}
                        className={`group flex-grow h-full justify-center bg-[#4237E2] rounded-xl relative transition-all cursor-pointer`}
                        onClick={() => router.push(numberEnum[index][1])} // Navigate to the corresponding page
                    >
                        <div
                            className="h-full w-full rounded-xl transition-all duration-300 group-hover:scale-90"
                            style={{
                                backgroundColor: square.border,
                                visibility: areSquaresVisible,
                            }}
                        ></div>

                        <div
                            className="rounded-xl absolute top-0 left-0 z-10 flex justify-center items-center"
                            style={{
                                backgroundColor: square.color,
                                width: `calc(100% - 18px)`,
                                height: `calc(100% - 18px)`,
                                top: "9px",
                                left: "9px",
                                visibility: areSquaresVisible,
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="relative w-[30%] h-[30%] flex items-center justify-center">
                                {figures[index].map((sq, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-[20px] h-[20px]"
                                        style={{
                                            backgroundColor: square.miniSquaresColor,
                                        }}
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
            <div className="w-full overflow-hidden relative bg-black flex items-center mt-6">
                <div className="carousel flex whitespace-nowrap">
                    {hoveredIndex === null ? (
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
                    ) : (
                        <div className="flex justify-center w-full">
                            <span className="text-6xl font-bold text-white">
                                {numberEnum[hoveredIndex][0]}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Styling for the carousel */}
            <style jsx>{`
                .carousel {
                    display: flex;
                    overflow: hidden;
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
