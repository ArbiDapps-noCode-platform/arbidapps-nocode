// Array to create 5 rectangles with initial colors and content
export const squares = [
    { color: "#21a575", border: "#19BD5DA6", miniSquaresColor: "#19BD5D" },
    { color: "#c33354", border: "#E23232A6", miniSquaresColor: "#E23232" },
    { color: "#a79a3e", border: "#BDAF19A6", miniSquaresColor: "#BDAF19" },
    { color: "#89c452", border: "#99E232A6", miniSquaresColor: "#99E232" },
    { color: "#21a5b5", border: "#19BDAAA6", miniSquaresColor: "#19BDAA" },
];

export const figures = [
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