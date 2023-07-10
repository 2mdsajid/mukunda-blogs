module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5F5F5',
        secondary: '#4E342E',
        accent: '#81C784',
        dark: {
          primary: '#1F1F1F',
          secondary: '#D7CCC8',
          accent: '#4CAF50',
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};