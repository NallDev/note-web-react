/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            filter: ['dark'],
      invert: ['dark'],
        },
    },
    darkMode: 'selector',
    plugins: [],
}
