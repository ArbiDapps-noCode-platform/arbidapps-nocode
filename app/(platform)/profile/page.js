"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; 
import { useEffect, useState } from "react";
import { squares, figures } from "@/public/constants/animations";

export default function Profile() {
    const router = useRouter();

    const navigateToPage = () => {
        router.push("/");
    };

    const [areSquaresVisible, setAreSquaresVisible] = useState("hidden");

    // Manage hover states for each square
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <main className="absolute top-0 left-0 w-full h-full 
        flex flex-col items-center justify-between 
        z-10 px-10 sm:px-24 py-20 bg-black text-white"
        >
            <div className="w-full h-full flex gap-1.5">
                asd
            </div>
        </main>
    );
}
