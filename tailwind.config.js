/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'tablet': { 'raw': '(max-width: 768px) and (orientation: portrait)' },
      // puedes agregar otros si necesitas
    }
  },
  plugins: [],
}
