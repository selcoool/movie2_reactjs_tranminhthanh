/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode:"class",
  theme: {
    extend: {
      backgroundImage: {
        'background_login': "url('/public/assets/login.jpg')",
        'background_register':"url('/public/assets/register.jpeg')",
        'background_logout':"url('/public/assets/logout.jpeg')",
        'background_logout':"url('/public/assets/logout.jpeg')",
        'background_detail':"url('/public/assets/detailbg.jpeg')"
        
      }

    },
  },
  plugins: [],
}
