module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',    // Tailwind will scan all JS/TS files in the pages folder
    './components/**/*.{js,ts,jsx,tsx}', // Tailwind will scan all JS/TS files in the components folder
    './styles/**/*.css', // Tailwind will scan all CSS files in the styles folder
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],  // Adding custom font for a modern look
      },
    },
  },
  plugins: [],
};
