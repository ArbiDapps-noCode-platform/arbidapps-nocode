import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Home() {
    return (
        <div className="h-screen flex flex-col 
        bg-gradient-to-b from-[rgba(66,55,226,1)] via-[rgba(66,55,226,1)] to-[rgba(0,0,0,0)] bg-[length:100%_100%]">
            <Header />
            <main className="flex relative flex-grow">
            </main>
            <Footer />
        </div>
    );
}
