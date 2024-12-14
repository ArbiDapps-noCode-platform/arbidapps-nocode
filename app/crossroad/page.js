"use client"
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Home() {
    return (
        <div className="h-screen flex flex-col 
        bg-gradient-to-b from-[rgba(66,55,226,1)] via-[rgba(66,55,226,1)] to-[rgba(0,0,0,0)] bg-[length:100%_100%]">
            <Header />
            <main className="flex relative flex-grow items-center justify-center">
                <div className="bg-black text-white rounded-lg px-8 py-8 sm:px-24 sm:py-16 w-11/12 sm:w-2/3 max-w-2xl shadow-lg border border-white">
                    <h1 className="font-light text-3xl sm:text-4xl text-left mb-24">
                        ArbiDapps <br /> noCode Platform
                    </h1>

                    <div className="flex justify-between gap-4">
                        <button
                            className="border border-white rounded-lg py-1 px-2 sm:py-2 sm:px-4 hover:bg-white hover:text-black transition duration-200"
                            onClick={() => alert("About the Platform")}
                        >
                            About the Platform
                        </button>
                        <button
                            className="border border-white rounded-lg py-1 px-2 sm:py-2 sm:px-4 hover:bg-white hover:text-black transition duration-200"
                            onClick={() => alert("Use the Platform")}
                        >
                            Use the Platform
                        </button>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
