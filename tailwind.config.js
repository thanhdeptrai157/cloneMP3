/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'zingchart': 'linear-gradient(151deg, #ff8000, #8000ff)',
        'zingchartmain': 'linear-gradient(135deg, #270644, #6D1C9A)',
      },
      backgroundColor: {
       
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '1px white',
        },
        '.order-top1':{
          '-webkit-text-stroke': '1px #4B8BDA'
        },
        '.order-top2':{
          '-webkit-text-stroke': '1px #4BA5A1'
        },
        '.order-top3':{
          '-webkit-text-stroke': '1px #D44B51'
        }
      })
    }
  ],
}
