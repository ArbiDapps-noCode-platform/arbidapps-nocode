"use client"
export default function Logout() {
    return (
        <button
            className="flex justify-center items-center rounded-full hover:bg-white w-[38px] h-[38px] group"
        >
            <svg
                className="stroke-white group-hover:stroke-black transition"
                width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M8.31777 11H19.2893M15.6321 6L19.6464 10.1161C20.1224 10.6043 20.1224 11.3957 19.6464 11.8839L15.6321 16M1.00342 1V21"
                    strokeWidth="2" strokeLinecap="round"
                />
            </svg>
        </button>
    )
}