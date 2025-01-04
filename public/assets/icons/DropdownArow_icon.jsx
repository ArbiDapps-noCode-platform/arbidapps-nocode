export default function DropDownArrow() {
    return (
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pointer-events-none border border-white">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 10l6 6 6-6" />
            </svg>
        </div>
    )
}