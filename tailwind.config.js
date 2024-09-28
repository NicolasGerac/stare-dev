/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./layout/*.liquid",
        "./sections/*.liquid",
        "./snippets/*.liquid",
        "./templates/customers/*.liquid",
        "./templates/*.liquid",
    ],
    theme: {
        extend: {
            width: {
                "one-third": "calc(100% / 3)",
            },
            height: {
                "hero-video": "calc(100vh - 120px)",
            },
        },
    },
    plugins: [],
};
