// tailwind.config.cjs
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        // 'xs': '300px',
        // 'sm': '640px',
        // 'md': '768px',
        // 'lg': '1024px',
        // 'xl': '1280px',
      },
      colors: {
        'main': '#191923',
        'primary': '#242430',
        'secondary': '#20202a',
        'cards': '#2c2c38',
        'icons': '#8c8c8e',
      },
      fontFamily: {
        'kanit': ["Kanit"],
        'kanit_m': ["Kanit-Medium"],
      },
    },
  },
  plugins: [],
}