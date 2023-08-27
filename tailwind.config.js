module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#F5F5F5',
        secondary: '#4E342E',
        accent: '#355c7d',
        dark: {
          primary: '#1F1F1F',
          secondary: '#D7CCC8',
          accent: '#355c7d',
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};