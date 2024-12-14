// import stars from "@/public/assets/stars.png"
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";



export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex relative flex-grow bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(66,55,226,1)]">
        {/* Background Image */}
        <img
          src="/assets/stars.png"
          alt="Background Stars"
          className="absolute inset-0 w-full h-full object-cover opacity-50 select-none"
        />
        <div className="relative z-10 px-16 py-14 sm:px-40 sm:py-28">
          <h1 className="font-light text-3xl sm:text-6xl sm:leading-relaxed  mb-16">
            ArbiDapps <br />
            <span className="bg-yellow-300 px-1 text-black ">noCode</span> Platform
          </h1>
          {/* Here, we must allow the connection for the wallet */}
          <button className="border border-1 border-white rounded-lg py-2 px-4
            hover:bg-white hover:text-black hover:cursor-pointer
            transition duration-200 ease-in-out
            active:scale-95 active:bg-gray-200 select-none"
          >
            Connect wallet
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
