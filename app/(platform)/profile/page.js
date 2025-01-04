"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

// Import icons
import Figure1 from "@/public/assets/token_icons/Figure1_icon";
import Figure2 from "@/public/assets/token_icons/Figure2_icon";
import Figure3 from "@/public/assets/token_icons/Figure3_icon";
import Figure4 from "@/public/assets/token_icons/Figure4_icon";
import Figure5 from "@/public/assets/token_icons/Figure5_icon";
import DropdownArow_icon from "@/public/assets/icons/DropdownArow_icon";

export default function Profile() {
    const router = useRouter();

    const navigateToPage = () => {
        router.push("/");
    };

    // State to determine whether it's loading or loaded
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading for 1 second
        const timer = setTimeout(() => {
            setIsLoading(false); // Switch to loaded state
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // Define 5 colors for loaded squares
    const colors = ["#19BD5DCC", "#E23232CC", "#99E232CC", "#BDAF19CC", "#19BDAACC"];

    // Define 5 icons
    const icons = [Figure1, Figure2, Figure3, Figure4, Figure5];

    // Number of squares
    const loadingSquares = 5; // 5 squares for the loading skeleton
    const loadedSquares = 10; // 10 squares for the scrollable loaded state

    return (
        <main
            className="absolute top-0 left-0 w-full h-full 
            flex flex-col items-center
            z-10 px-10 sm:px-24 pb-20 pt-36 bg-black text-white"
        >
            {/* Greeting Section */}
            <div className="w-full">
                <h1 className="text-5xl self-start">
                    Hello, <span className="text-[#F5EB43]">{"username"}.</span>
                </h1>

                <div className="w-full flex flex-row justify-between items-center mt-4">
                    <h2 className="text">{"username"}'s Dashboard</h2>

                    <div className="flex flex-row justify-end items-center">
                        <p className="mr-2">Total deployed dApps:</p>
                        <p className="bg-[#F5EB43] px-2 py-1 text-black">{34}</p>
                    </div>
                </div>
            </div>

            {/* Loading Skeleton or Loaded Squares */}
            <div className="w-full mt-10">
                <h3 className="mb-4">Latest deployed dApps</h3>

                {/* Loading state: 5 squares filling the width */}
                {isLoading ? (
                    <div className="flex w-full">
                        {Array(loadingSquares)
                            .fill(null)
                            .map((_, index) => (
                                <div
                                    key={index}
                                    className="w-[calc(100vw/5-16px)] bg-[#4237E2] h-40 rounded-md mx-[8px]"
                                ></div>
                            ))}
                    </div>
                ) : (
                    // Loaded state: colored squares
                    <div className="flex w-full">
                        {Array(loadingSquares)
                            .fill(null)
                            .map((_, index) => {
                                const IconComponent = icons[index % icons.length]; // Cycle through icons
                                return (
                                    <div
                                        key={index}
                                        style={{
                                            backgroundColor: colors[index % colors.length], // Cycle through colors
                                        }}
                                        className="w-[calc(100vw/5-16px)] h-40 rounded-md mx-[8px] relative flex items-center justify-center"
                                    >
                                        {/* Render Icon at the center */}
                                        <IconComponent />
                                    </div>
                                );
                            })}
                    </div>
                )}
            </div>
            <div className="w-full h-full flex flex-col mt-8">
                <div className="relative w-full">
                    <select
                        className="appearance-none rounded-none bg-black pl-8 pr-2 py-2 w-[200px] text-white text-sm focus:outline-none border-white"
                        name="options"
                        id="options"
                    // value={selectOption}
                    // onChange={handleSelectChange}
                    >
                        <option value="erc20_tokens">erc20 tokens</option>
                        <option value="erc721_tokens">erc721 tokens</option>
                        <option value="token_airdrop">token airdrop</option>
                        <option value="msa">multisign smart account</option>
                        <option value="dao">dao</option>
                    </select>
                    <DropdownArow_icon />
                </div>

                {isLoading ?
                    (
                        <div className="flex w-full">
                            {Array(loadingSquares)
                                .fill(null)
                                .map((_, index) => (
                                    <div
                                        key={index}
                                        className="w-[calc(100vw/5-16px)] bg-[#4237E2] h-40 rounded-md mx-[8px]"
                                    ></div>
                                ))}
                        </div>
                    ) : (
                        <div className="w-full overflow-x-auto p-2">
                            <div className="flex w-max">
                                {Array(loadedSquares)
                                    .fill(null)
                                    .map((_, index) => {
                                        const IconComponent = icons[index % icons.length]; // Cycle through icons
                                        return (
                                            <div
                                                key={index}
                                                style={{
                                                    backgroundColor: colors[3], // Cycle through colors
                                                }}
                                                className="w-[calc(100vw/5-16px)] h-40 rounded-md mx-[8px] relative flex items-center justify-center"
                                            >
                                                {/* Render Icon at the center */}
                                                <IconComponent />
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    )}

            </div>
        </main>
    );
}
