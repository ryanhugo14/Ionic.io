/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            'md': '750px',
            'lg': '1280px',
            // => @media (min-width: 1280px) { ... }
        },
        extend: {},
    },
    plugins: [],
}