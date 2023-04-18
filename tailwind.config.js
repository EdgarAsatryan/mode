/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'header': "url('../photos/header-bg.png')",
      'logo': "url('../photos/templatemo-eduwell.png')",
      'first-img': "url('../photos/banner-left-dec.png')",
      'second-img': "url('../photos/banner-right-dec.png')",
      'girl-img': "url('../photos/banner-right-image.png')"
    }
  },
  plugins: [],
}

