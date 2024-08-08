/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url(/images/home/background-home-desktop.jpg)",
        'destination':"url(/images/destination/background-destination-desktop.jpg)",
        'crew':'url(/images/crew/background-crew-desktop.jpg)',
        'technology':'url(/images/technology/background-technology-desktop.jpg)'
      }
    },
    
    fontFamily: {
      'bellefair': ["Barlow Condensed", "sans-serif"]
    }
  },
  plugins: [],
}